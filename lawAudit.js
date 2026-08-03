/* 法令集専用の自動整合性検査。
   画面や保存データは変更せず、結果を window.LawBookAudit に保持する。 */
(()=>{
'use strict';

const normaliseReference=value=>String(value??'')
  .normalize('NFKC')
  .replace(/[　\s]+/g,'')
  .replace(/[、，]/g,'、')
  .replace(/[・･]/g,'・')
  .replace(/[（(]/g,'(')
  .replace(/[）)]/g,')')
  .trim();
const text=value=>String(value??'').replace(/\s+/g,'').trim();
const arrays=value=>Array.isArray(value)?value:[value];
const unique=values=>[...new Set(values)];

function run(){
  const questions=[
    ...(Array.isArray(QUESTIONS)?QUESTIONS:[]),
    ...(Array.isArray(OFFICIAL_QUESTIONS)?OFFICIAL_QUESTIONS:[])
  ];
  const master=typeof LAW_MASTER_ARTICLES==='object'&&LAW_MASTER_ARTICLES?LAW_MASTER_ARTICLES:{};
  const links=typeof LAW_QUESTION_ARTICLE_LINKS==='object'&&LAW_QUESTION_ARTICLE_LINKS?LAW_QUESTION_ARTICLE_LINKS:{};
  const articleData=typeof LAW_ARTICLE_DATA==='object'&&LAW_ARTICLE_DATA?LAW_ARTICLE_DATA:{};
  const commercial=Array.isArray(COMMERCIAL_LAW_ARTICLES)?COMMERCIAL_LAW_ARTICLES:[];
  const commercialByRef=new Map(commercial.map(article=>[article.reference,article]));
  const masterRows=Object.entries(master).flatMap(([lawId,references])=>
    arrays(references).map(reference=>({lawId,reference}))
  );
  const masterReferenceSet=new Set(masterRows.map(row=>row.reference));
  const questionIds=new Set(questions.map(question=>String(question.id)));
  const errors=[];
  const warnings=[];
  const reviews=[];
  const add=(target,code,message,details={})=>target.push({code,message,...details});

  const idCounts=new Map();
  questions.forEach(question=>{
    const id=String(question?.id??'');
    idCounts.set(id,(idCounts.get(id)||0)+1);
    if(!id)add(errors,'QUESTION_ID_MISSING','問題番号がありません');
    if(!Array.isArray(question?.choices)||question.choices.length<2){
      add(errors,'CHOICES_INVALID',`問題${id||'（番号なし）'}の選択肢が不足しています`,{questionId:id});
    }else if(!Number.isInteger(question.answer)||question.answer<0||question.answer>=question.choices.length){
      add(errors,'ANSWER_OUT_OF_RANGE',`問題${id}の正答番号が選択肢の範囲外です`,{
        questionId:id,answer:question.answer,choiceCount:question.choices.length
      });
    }
    const subject=String(question?.subjectId||question?.subject||'').trim();
    const category=String(question?.category||'').trim();
    if(!subject)add(errors,'SUBJECT_MISSING',`問題${id}の科目が未設定です`,{questionId:id});
    if(!category)add(errors,'CATEGORY_MISSING',`問題${id}のカテゴリが未設定です`,{questionId:id});
  });
  for(const [id,count] of idCounts){
    if(id&&count>1)add(errors,'QUESTION_ID_DUPLICATE',`問題番号${id}が${count}件重複しています`,{questionId:id,count});
  }

  for(const question of questions){
    const id=String(question?.id??'');
    const references=arrays(links[id]).filter(reference=>typeof reference==='string'&&reference);
    if(!references.length){
      add(errors,'ARTICLE_LINK_MISSING',`問題${id}に条文・項目の参照先がありません`,{questionId:id});
    }else{
      for(const reference of references){
        if(!masterReferenceSet.has(reference)){
          add(errors,'ARTICLE_LINK_BROKEN',`問題${id}の参照先「${reference}」が法令マスターにありません`,{
            questionId:id,reference
          });
        }
      }
    }
  }
  for(const id of Object.keys(links)){
    if(!questionIds.has(String(id))){
      add(warnings,'LINKED_QUESTION_MISSING',`対応表の問題${id}が問題データにありません`,{questionId:String(id)});
    }
  }

  const linkedReferences=new Set(Object.values(links).flatMap(arrays));
  for(const {lawId,reference} of masterRows){
    const article=articleData[reference]||commercialByRef.get(reference)||{};
    const source=text(article.sourceText);
    const explanations=arrays(article.explanation||article.explanations).map(text).filter(Boolean);
    const points=arrays(article.points).map(text).filter(Boolean);
    if(!source){
      add(warnings,'ARTICLE_TEXT_MISSING',`「${reference}」に条文全文・資料本文がありません`,{lawId,reference});
    }
    if(!linkedReferences.has(reference)){
      add(warnings,'RELATED_QUESTION_MISSING',`「${reference}」に関連問題がありません`,{lawId,reference});
    }
    if(source&&(explanations.length||points.length)){
      const statements=[...explanations,...points].filter(statement=>statement.length>=4);
      const hasLiteralSupport=statements.some(statement=>{
        const length=Math.min(12,Math.max(4,Math.floor(statement.length/3)));
        for(let index=0;index+length<=statement.length;index+=Math.max(1,Math.floor(length/2))){
          if(source.includes(statement.slice(index,index+length)))return true;
        }
        return false;
      });
      if(statements.length&&!hasLiteralSupport){
        add(reviews,'CONTENT_ALIGNMENT_REVIEW',
          `「${reference}」は本文と解説・ポイントの直接一致が少ないため目視確認が必要です`,
          {lawId,reference}
        );
      }
    }
  }

  const canonicalGroups=new Map();
  for(const {reference} of masterRows){
    const key=normaliseReference(reference);
    if(!canonicalGroups.has(key))canonicalGroups.set(key,new Set());
    canonicalGroups.get(key).add(reference);
  }
  for(const references of canonicalGroups.values()){
    if(references.size>1){
      const variants=[...references];
      add(warnings,'ARTICLE_REFERENCE_VARIANT',
        `同一条文とみられる表記が複数あります：${variants.join(' ／ ')}`,
        {references:variants}
      );
    }
  }
  for(const [id,value] of Object.entries(links)){
    for(const reference of arrays(value)){
      const canonical=normaliseReference(reference);
      const exact=masterReferenceSet.has(reference);
      const canonicalMatches=masterRows.filter(row=>normaliseReference(row.reference)===canonical);
      if(!exact&&canonicalMatches.length){
        add(warnings,'LINK_REFERENCE_VARIANT',
          `問題${id}の参照表記を「${canonicalMatches[0].reference}」へ統一できます`,
          {questionId:String(id),reference,suggested:canonicalMatches[0].reference}
        );
      }
    }
  }

  const report={
    generatedAt:new Date().toISOString(),
    summary:{
      questions:questions.length,
      masterArticles:masterRows.length,
      errors:errors.length,
      warnings:warnings.length,
      reviews:reviews.length
    },
    errors,warnings,reviews
  };
  return Object.freeze(report);
}

const api={run,report:null};
try{
  api.report=run();
  const summary=api.report.summary;
  const method=summary.errors?'error':summary.warnings||summary.reviews?'warn':'info';
  console[method](
    `[法令集監査] 問題${summary.questions}問・項目${summary.masterArticles}件：`+
    `エラー${summary.errors}件、警告${summary.warnings}件、要確認${summary.reviews}件`,
    api.report
  );
}catch(error){
  api.report={generatedAt:new Date().toISOString(),summary:{errors:1,warnings:0,reviews:0},errors:[{
    code:'AUDIT_EXECUTION_FAILED',message:error?.message||String(error)
  }],warnings:[],reviews:[]};
  console.error('[法令集監査] 検査処理を実行できませんでした',error);
}
window.LawBookAudit=Object.freeze(api);
})();
