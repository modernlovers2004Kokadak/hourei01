const app=document.getElementById('app');
const headerBack=document.getElementById('headerBack');
const headerHome=document.getElementById('headerHome');
const APP_VERSION='4.0.62';
const PROG_KEY='riyo_v05_prog';
const BOOKMARK_KEY='riyoshi_lawbook_bookmarks_v1';
const TODAY_KEY='riyoshi_lawbook_today10_v1';
const TEXT_KEY='riyoshi_lawbook_text_enlarged_v1';
const ROUND_HISTORY_KEY='riyoshi_lawbook_round_history_v1';
const MOCK_PROGRESS_KEY='riyo_v05_mockProgress';
const MATERIAL_DONE_KEY='riyoushi_9laws_final_done_v3';
const MATERIAL_WEAK_KEY='riyoushi_9laws_final_weak_v2';
const DISINFECTION_LAW_REFS=[
  '理容師法 第9条',
  '理容師法施行規則 第24条',
  '理容師法施行規則 第25条 第1号',
  '理容師法施行規則 第25条 第2号',
  '理容師法施行規則 第26条'
];
const LAW_DEFS=[
  {id:'barber_related',name:'理容師法関係',color:'#e97824',group:'law',categories:['barber_act','order','rules','visit']},
  {id:'disinfection_law',name:'消毒に関する法令',color:'#287c96',group:'law',categories:[],articleRefs:DISINFECTION_LAW_REFS,relatedLawId:'disinfection',relatedLabel:'関連学習：消毒法'},
  {id:'infection',name:'感染症法',color:'#c94b64',group:'law',categories:['infection']},
  {id:'community',name:'地域保健法',color:'#23836f',group:'law',categories:['community']},
  {id:'health_promotion_act',name:'健康増進法',color:'#3478b8',group:'law',categories:['health_promotion_act']},
  {id:'consumer',name:'消費者基本法',color:'#7059a6',group:'law',categories:['consumer']},
  {id:'specified_commercial',name:'特定商取引法',color:'#a56a22',group:'law',categories:['specified_commercial'],staticArticles:COMMERCIAL_LAW_ARTICLES},
  {id:'disinfection',name:'消毒法',color:'#287c96',group:'non_law',categories:['disinfection'],relatedLawId:'disinfection_law',relatedLabel:'関連法令：消毒に関する法令'},
  {id:'public_health',name:'公衆衛生',color:'#4778a8',group:'non_law',categories:['public_health']},
  {id:'human_body',name:'人体の構造及び機能',color:'#9a6578',group:'non_law',categories:['human_body']},
  {id:'skin',name:'皮膚',color:'#9a6578',group:'non_law',categories:['skin']},
  {id:'cosmetics',name:'香粧品',color:'#8a6b35',group:'non_law',categories:['cosmetics']},
  {id:'history',name:'文化論',color:'#6a709b',group:'non_law',categories:['history']},
  {id:'shop',name:'運営管理',color:'#3f806d',group:'non_law',categories:['shop']},
  {id:'cut',name:'カッティング',color:'#a45d4d',group:'non_law',categories:['cut','barbering_theory_general']},
  {id:'hair_care',name:'シャンプー・整髪',color:'#a45d4d',group:'non_law',categories:['hair_care']},
  {id:'chemical_technique',name:'パーマ・ヘアカラー',color:'#a45d4d',group:'non_law',categories:['chemical_technique']},
  {id:'esthetic_nail',name:'理容エステティック・ネイル',color:'#a45d4d',group:'non_law',categories:['esthetic_nail']},
  {id:'design_color',name:'ヘアデザイン・色彩',color:'#a45d4d',group:'non_law',categories:['design_color']},
  {id:'shaving',name:'シェービング',color:'#56768c',group:'non_law',categories:['shaving']}
];
const SUBJECT_DEFS=[
  {id:'regulations',name:'関係法規・制度',description:'理容業に関する法律・資格制度の知識',color:'#e97824',lawIds:['barber_related','consumer','specified_commercial']},
  {id:'hygiene',name:'衛生管理',description:'公衆衛生・環境衛生など、感染症予防の知識',color:'#287c96',lawIds:['disinfection_law','infection','community','health_promotion_act','disinfection','public_health']},
  {id:'health',name:'保健',description:'人体・皮膚の医学的基礎知識',color:'#9a6578',lawIds:['human_body','skin']},
  {id:'cosmetic_chemistry',name:'香粧品化学',description:'化粧品・薬剤の成分知識',color:'#8a6b35',lawIds:['cosmetics']},
  {id:'culture',name:'文化論',description:'歴史や文化的背景の知識',color:'#6a709b',lawIds:['history']},
  {id:'barbering_theory',name:'理容技術理論',description:'カットやパーマなど技術の理論',color:'#a45d4d',lawIds:['cut','hair_care','chemical_technique','esthetic_nail','design_color','shaving']},
  {id:'management',name:'運営管理',description:'経営・運営していく上で必要な知識',color:'#3f806d',lawIds:['shop']}
];
const LAW_CATEGORY_IDS=new Set(LAW_DEFS.flatMap(l=>l.categories));
const officialQuestions=Array.isArray(OFFICIAL_QUESTIONS)?OFFICIAL_QUESTIONS.filter(q=>q&&LAW_CATEGORY_IDS.has(q.category)):[];
const LAW_QUESTIONS=[...QUESTIONS.filter(q=>LAW_CATEGORY_IDS.has(q.category)),...officialQuestions];
const officialById=new Map(LAW_QUESTIONS.map(q=>[q.id,q]));
const qById=new Map(officialById);
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const normaliseLegalSource=text=>String(text||'')
  .replace(/\r\n?/g,'\n')
  .replace(/\n[ \t]+(?!(?:[0-9０-９]+|[一二三四五六七八九十]+|[（(][0-9０-９一二三四五六七八九十]+[）)]|[イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス])[ 　])/g,'')
  .replace(/[ \t]+\n/g,'\n')
  .replace(/\n{3,}/g,'\n\n')
  .trim();
const readJson=(key,fallback)=>{try{const v=JSON.parse(localStorage.getItem(key));return v??fallback}catch(_){return fallback}};
const writeJson=(key,value)=>{try{localStorage.setItem(key,JSON.stringify(value));return true}catch(_){return false}};
const today=()=>{const d=new Date(),z=n=>String(n).padStart(2,'0');return `${d.getFullYear()}-${z(d.getMonth()+1)}-${z(d.getDate())}`};
const shuffle=a=>{const out=[...a];for(let i=out.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[out[i],out[j]]=[out[j],out[i]]}return out};
const baseProg=()=>({done:{},answerStats:{},history:[],mistakes:{},themeStats:{},catStats:{},daily:{},dailyStems:{},recentIds:[],recentThemes:[],mockStats:{pass:0,fail:0,history:[]},scoreResetBase:{ok:0,ng:0},materialOk:{},roundProgress:{total:0},settings:{todayCount:21,recentBlock:30,masterNeed:2,correctCooldown:14,masterCooldown:30,easyCooldown:60,maxKnownToday:2}});
function normaliseProgress(raw){
  const base=baseProg(),source=raw&&typeof raw==='object'&&!Array.isArray(raw)?raw:{},out={...base,...source};
  for(const key of ['done','answerStats','mistakes','themeStats','catStats','daily','dailyStems','scoreResetBase','materialOk'])if(!out[key]||typeof out[key]!=='object'||Array.isArray(out[key]))out[key]=base[key];
  for(const key of ['history','recentIds','recentThemes'])if(!Array.isArray(out[key]))out[key]=[];
  out.settings={...base.settings,...(source.settings&&typeof source.settings==='object'&&!Array.isArray(source.settings)?source.settings:{})};
  out.mockStats={...base.mockStats,...(source.mockStats&&typeof source.mockStats==='object'&&!Array.isArray(source.mockStats)?source.mockStats:{})};
  if(!Array.isArray(out.mockStats.history))out.mockStats.history=[];
  out.roundProgress={total:Math.max(0,Number(source.roundProgress?.total)||out.history.length)};
  const latestById=new Map();
  for(const row of out.history)if(row&&Number.isFinite(Number(row.id))&&typeof row.ok==='boolean')latestById.set(Number(row.id),row.ok);
  for(const [id,value] of Object.entries(out.answerStats)){
    if(!value||typeof value!=='object'||Array.isArray(value)){delete out.answerStats[id];continue}
    value.id=Number(value.id??id);
    value.try=Math.max(0,Number(value.try)||0);
    value.ok=Math.max(0,Number(value.ok)||0);
    value.streak=Math.max(0,Number(value.streak)||0);
    if(latestById.has(Number(id))){
      value.lastResult=latestById.get(Number(id));
      if(value.lastResult===false){value.streak=0;value.mastered=false}
    }
    else if(typeof value.lastResult!=='boolean'&&value.try)value.lastResult=value.lastNg&&(!value.lastOk||value.lastNg>value.lastOk)?false:true;
    if(value.streak>=2)value.mastered=true;
    if(value.ok>=5)value.conquered=true;
  }
  return out;
}
let prog=normaliseProgress(readJson(PROG_KEY,{}));
let bookmarks=new Set((readJson(BOOKMARK_KEY,[])||[]).map(Number).filter(id=>officialById.has(id)));
let textEnlarged=localStorage.getItem(TEXT_KEY)==='1';
function normaliseRoundHistory(raw){
  const total=Math.max(0,roundMeta().total),size=Math.max(1,LAW_QUESTIONS.length);
  const source=raw&&typeof raw==='object'&&!Array.isArray(raw)?raw:{};
  const laps=Array.isArray(source.laps)?source.laps.filter(row=>row&&Number(row.lap)>0).map(row=>({
    lap:Math.trunc(Number(row.lap)),
    correct:Math.max(0,Math.trunc(Number(row.correct)||0)),
    wrong:Math.max(0,Math.trunc(Number(row.wrong)||0)),
    unanswered:Math.max(0,Math.trunc(Number(row.unanswered)||0)),
    completedAt:String(row.completedAt||'')
  })):[];
  let current=null;
  if(source.current&&typeof source.current==='object'&&!Array.isArray(source.current)){
    const answered=Math.max(0,Math.trunc(Number(source.current.answered)||0));
    if(answered<size)current={
      lap:Math.max(1,Math.trunc(Number(source.current.lap)||1)),
      correct:Math.max(0,Math.trunc(Number(source.current.correct)||0)),
      wrong:Math.max(0,Math.trunc(Number(source.current.wrong)||0)),
      answered
    };
  }
  if(!current&&total%size===0)current={lap:Math.floor(total/size)+1,correct:0,wrong:0,answered:0};
  return{laps,current};
}
let roundHistory=normaliseRoundHistory(readJson(ROUND_HISTORY_KEY,{}));
let screen='home',subjectIndex=0,lawIndex=0,articleIndex=0,session=[],sessionIndex=0,sessionAnswers={},sessionSource='today',returnScreen='home',answerNoticeId=null,searchQuery='';
let navigationReady=false,restoringNavigation=false,internalDepth=0;

function articleGroups(){
  return LAW_DEFS.map(law=>{
    const staticByReference=new Map((law.staticArticles||[]).map(article=>[article.reference,article]));
    const references=Array.isArray(LAW_MASTER_ARTICLES?.[law.id])?LAW_MASTER_ARTICLES[law.id]:[];
    const articles=references.map(reference=>{
      const sourceArticle=typeof LAW_ARTICLE_DATA==='object'?LAW_ARTICLE_DATA[reference]:null;
      const article=sourceArticle||staticByReference.get(reference)||{};
      const source=normaliseLegalSource(article.sourceText);
      const questionIds=LAW_QUESTIONS.filter(question=>articleReferencesForQuestion(question.id).includes(reference)).map(question=>question.id);
      return{reference,sources:source?[source]:[],points:[...(article.points||[])],explanations:[...(article.explanation||article.explanations||[])],displayType:article.displayType||'article',questionIds};
    });
    return {...law,articles};
  });
}
function articleReferencesForQuestion(id){
  const value=LAW_QUESTION_ARTICLE_LINKS?.[id];
  return(Array.isArray(value)?value:[value]).filter(reference=>typeof reference==='string'&&reference);
}
const laws=articleGroups();
function latest(q){const s=prog.answerStats?.[q.id];if(!s||!s.try)return'unanswered';return s.lastResult===false?'wrong':'correct'}
function questionsForLaw(law){
  if(law.articleRefs){const ids=new Set(law.articles.flatMap(article=>article.questionIds));return LAW_QUESTIONS.filter(q=>ids.has(q.id))}
  const questions=LAW_QUESTIONS.filter(q=>law.categories.includes(q.category));
  if(law.id!=='barber_related')return questions;
  const disinfectionRefs=new Set(DISINFECTION_LAW_REFS);
  return questions.filter(q=>!articleReferencesForQuestion(q.id).some(reference=>disinfectionRefs.has(reference)));
}
function statsForLaw(law){const qs=questionsForLaw(law),correct=qs.filter(q=>latest(q)==='correct').length,wrong=qs.filter(q=>latest(q)==='wrong').length;return{total:qs.length,correct,wrong,unanswered:qs.length-correct-wrong}}
function lawsForSubject(subject){const ids=new Set(subject.lawIds);return laws.map((law,index)=>({law,index})).filter(row=>ids.has(row.law.id))}
function statsForSubject(subject){const ids=new Set(lawsForSubject(subject).flatMap(row=>questionsForLaw(row.law).map(q=>q.id))),qs=LAW_QUESTIONS.filter(q=>ids.has(q.id)),correct=qs.filter(q=>latest(q)==='correct').length,wrong=qs.filter(q=>latest(q)==='wrong').length;return{total:qs.length,correct,wrong,unanswered:qs.length-correct-wrong}}
function totalStats(){const correct=LAW_QUESTIONS.filter(q=>latest(q)==='correct').length,wrong=LAW_QUESTIONS.filter(q=>latest(q)==='wrong').length,total=LAW_QUESTIONS.length;return{correct,wrong,unanswered:total-correct-wrong,total}}
function roundMeta(){const raw=prog.roundProgress;if(raw&&typeof raw==='object'&&!Array.isArray(raw)){raw.total=Math.max(0,Number(raw.total)||0);return raw}return prog.roundProgress={total:Array.isArray(prog.history)?prog.history.length:0}}
function roundNumber(){return Math.floor(Math.max(0,roundMeta().total-1)/Math.max(1,LAW_QUESTIONS.length))+1}
function roundNumberForLaw(law){const qs=questionsForLaw(law),total=qs.length;if(!total)return 1;const ids=new Set(qs.map(q=>q.id)),count=(prog.history||[]).filter(row=>ids.has(Number(row.id))).length;return Math.floor(Math.max(0,count-1)/total)+1}
function resetIconHtml(){return `<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M25.5 12A10.5 10.5 0 0 0 7.8 7.7L5 10.5M5 10.5V5.8M5 10.5h4.7"/><path d="M6.5 20A10.5 10.5 0 0 0 24.2 24.3l2.8-2.8M27 21.5v4.7M27 21.5h-4.7"/></svg>`}
function lapLabel(value){
  const lap=Math.max(1,Math.trunc(Number(value)||1));
  const mod100=lap%100;
  const suffix=mod100>=11&&mod100<=13?'th':lap%10===1?'st':lap%10===2?'nd':lap%10===3?'rd':'th';
  return `${lap}${suffix} lap`;
}
function saveProg(){prog=normaliseProgress(prog);writeJson(PROG_KEY,prog)}
function navigationSnapshot(){return{screen,subjectIndex,lawIndex,articleIndex,sessionIds:session.map(q=>q.id),sessionIndex,sessionAnswers,sessionSource,returnScreen,searchQuery,scrollY:window.scrollY}}
function commitNavigation(replace=false){
  if(!navigationReady||restoringNavigation)return;
  const nextDepth=replace?internalDepth:internalDepth+1;
  const row={lawBook:true,depth:nextDepth,state:navigationSnapshot()};
  try{history[replace?'replaceState':'pushState'](row,'',location.pathname+location.search);internalDepth=nextDepth}catch(_){}
}
function setScreen(name,preserveScroll=false){
  const changed=screen!==name;screen=name;
  const hidden=name==='home';headerBack.hidden=hidden;headerHome.hidden=hidden;
  if(!preserveScroll)window.scrollTo(0,0);
  commitNavigation(!changed);
}
function restoreNavigationState(saved){
  if(!saved||typeof saved!=='object')return renderHome();
  restoringNavigation=true;
  subjectIndex=Math.max(0,Math.min(SUBJECT_DEFS.length-1,Number(saved.subjectIndex)||0));
  lawIndex=Math.max(0,Math.min(laws.length-1,Number(saved.lawIndex)||0));
  articleIndex=Math.max(0,Math.min(laws[lawIndex].articles.length-1,Number(saved.articleIndex)||0));
  session=Array.isArray(saved.sessionIds)?saved.sessionIds.map(Number).map(id=>qById.get(id)).filter(Boolean):[];
  sessionIndex=Math.max(0,Math.min(session.length-1,Number(saved.sessionIndex)||0));
  sessionAnswers=saved.sessionAnswers&&typeof saved.sessionAnswers==='object'?saved.sessionAnswers:{};
  sessionSource=saved.sessionSource||'today';returnScreen=saved.returnScreen||'home';searchQuery=String(saved.searchQuery||'');
  if(saved.screen==='subject')openSubject(subjectIndex);
  else if(saved.screen==='law')openLaw(lawIndex);
  else if(saved.screen==='article')openArticle(articleIndex,returnScreen);
  else if(saved.screen==='question'&&session.length)renderQuestion();
  else if(saved.screen==='result'&&session.length)renderResult();
  else if(saved.screen==='bookmarks')openBookmarks();
  else if(saved.screen==='lapHistory')openLapHistory();
  else renderHome();
  restoringNavigation=false;
  requestAnimationFrame(()=>window.scrollTo(0,Math.max(0,Number(saved.scrollY)||0)));
}
function head(title){return `<div class="view-head"><span></span><h2>${esc(title)}</h2><span></span></div>`}
function normaliseSearchText(value){
  return toArabicNumerals(String(value||'')
    .replace(/[０-９]/g,char=>String.fromCharCode(char.charCodeAt(0)-0xfee0))
    .replace(/\u3000/g,' ')
    .replace(/\s+/g,' ')
    .trim())
    .replace(/\s*(第|条|項|号|の)\s*/g,'$1')
    .toLowerCase();
}
function questionNumberFromQuery(value){
  const match=normaliseSearchText(value).match(/^(?:問題)?\s*(\d+)$/);
  return match?Number(match[1]):null;
}
function articleSearchText(article){return normaliseSearchText([article.reference,...(article.sources||[])].join('\n'))}
function resultExcerpt(article,query){
  const text=String((article.sources||[]).join('\n')).replace(/\s+/g,' ').trim();
  if(!text)return'条文全文を収録';
  const raw=String(query||'').trim(),rawIndex=raw?text.indexOf(raw):-1;
  if(rawIndex>=0){
    const start=Math.max(0,rawIndex-32),end=Math.min(text.length,rawIndex+raw.length+52);
    return `${start?'…':''}${text.slice(start,end)}${end<text.length?'…':''}`;
  }
  const normalized=normaliseSearchText(query);
  const normalizedText=normaliseSearchText(text);
  const index=normalizedText.indexOf(normalized);
  if(index>=0){
    const start=Math.max(0,index-32),end=Math.min(text.length,index+normalized.length+52);
    return `${start?'…':''}${text.slice(start,end)}${end<text.length?'…':''}`;
  }
  return `${text.slice(0,84)}${text.length>84?'…':''}`;
}
function subjectNameForQuestion(question){
  const law=laws.find(item=>questionsForLaw(item).some(candidate=>candidate.id===question.id));
  const subject=law&&SUBJECT_DEFS.find(item=>item.lawIds.includes(law.id));
  return subject?.name||law?.name||'';
}
function searchResults(query){
  const normalized=normaliseSearchText(query);
  if(!normalized)return{legal:[],questions:[]};
  const legal=[],seen=new Set(),numberQuery=questionNumberFromQuery(query);
  laws.forEach((law,li)=>{
    if(normaliseSearchText(law.name).includes(normalized))legal.push({type:'law',li,law});
    if(numberQuery!==null)return;
    law.articles.forEach((article,ai)=>{
      if(!articleSearchText(article).includes(normalized))return;
      const key=`${li}:${ai}`;
      if(seen.has(key))return;
      seen.add(key);legal.push({type:'article',li,ai,law,article});
    });
  });
  const questions=numberQuery!==null
    ?(qById.has(numberQuery)?[qById.get(numberQuery)]:[])
    :LAW_QUESTIONS.filter(question=>normaliseSearchText(question.q).includes(normalized));
  return{legal,questions};
}
function searchResultsHtml(query){
  if(!String(query||'').trim())return'';
  const results=searchResults(query);
  if(!results.legal.length&&!results.questions.length)return'<p class="search-empty">該当する法令・条文・問題はありません。</p>';
  const legalItems=results.legal.map(result=>result.type==='law'
    ?`<button class="search-result-item legal" type="button" style="--result-color:${result.law.color}" onclick="LawBook.openSearchLaw(${result.li})"><span class="search-result-label">法令・項目</span><strong>${esc(result.law.name)}</strong><small>収録条文 ${result.law.articles.length}件</small></button>`
    :`<button class="search-result-item legal" type="button" style="--result-color:${result.law.color}" onclick="LawBook.openSearchArticle(${result.li},${result.ai})"><span class="search-result-label">法令・条文</span><strong>${esc(result.law.name)}　${esc(result.article.reference)}</strong><small>${esc(resultExcerpt(result.article,query))}</small></button>`
  ).join('');
  const questionItems=results.questions.map(question=>`<button class="search-result-item question" type="button" onclick="LawBook.openSearchQuestion(${question.id})"><span class="search-result-label">問題</span><strong>問題 ${question.id}</strong><small>${esc(question.q)}</small><span class="search-result-subject">${esc(subjectNameForQuestion(question))}</span></button>`).join('');
  return `${results.legal.length?`<section class="search-result-group"><h3>法令・条文 ${results.legal.length}件</h3>${legalItems}</section>`:''}${results.questions.length?`<section class="search-result-group"><h3>問題 ${results.questions.length}件</h3>${questionItems}</section>`:''}`;
}
function renderSearchResults(){
  const results=document.getElementById('lawSearchResults');
  if(results)results.innerHTML=searchResultsHtml(searchQuery);
}
function updateSearch(value){
  searchQuery=String(value||'');
  renderSearchResults();
  if(navigationReady&&!restoringNavigation)commitNavigation(true);
}
function openSearchLaw(index){lawIndex=index;openLaw(index)}
function openSearchArticle(li,ai){lawIndex=li;articleIndex=ai;openArticle(ai,'home')}
function openSearchQuestion(id){startSession([id],'search','home')}
function renderHome(){
  setScreen('home');const all=totalStats(),rate=all.total?Math.round(all.correct/all.total*100):0,correctRate=all.total?all.correct/all.total*100:0,wrongRate=all.total?all.wrong/all.total*100:0,unansweredRate=all.total?all.unanswered/all.total*100:100,daily=todaySessionState(),todayTitle=daily.completed?'本日完了':'今日の10問',todayCaption=daily.completed?`本日 ${daily.completedTotal}問 解答済み`:daily.total?`${daily.answered}／${daily.total}問 解答済み`:'毎日の法令確認';
  app.innerHTML=`<section class="home-card progress-card">
    <button class="lap-count" type="button" onclick="LawBook.openLapHistory()" aria-label="周回履歴を開く">${lapLabel(roundNumber())}</button>
    <div class="progress-ring" style="--rate:${rate}%"><span>${rate}%</span></div>
    <div class="progress-summary"><h2>学習状況</h2>
      <p>正答 ${all.correct}／${all.total}問</p>
      <div class="home-result-bar" role="img" aria-label="正答 ${all.correct}問、誤答 ${all.wrong}問、未回答 ${all.unanswered}問"><i class="correct" style="width:${correctRate}%"></i><i class="wrong" style="width:${wrongRate}%"></i><i class="unanswered" style="width:${unansweredRate}%"></i></div>
      <div class="home-result-legend"><span class="correct">正答 ${all.correct}</span><span class="wrong">誤答 ${all.wrong}</span><span class="unanswered">未回答 ${all.unanswered}</span></div>
    </div></section>
    <div class="today-wrap"><button class="today-start" onclick="LawBook.startToday()"><span class="check">✓</span><span><strong>${todayTitle}</strong><small>${todayCaption}</small></span></button><button class="today-bookmarks" onclick="LawBook.openBookmarks()"><span>🔖</span><span class="count">${bookmarks.size}</span></button></div>
    <div class="section-title-row"><h2 class="section-title">筆記試験科目</h2><a class="exam-guide-link" href="./preview.html?v=4.0.62">新制度による筆記試験実施要領</a></div>
    <section class="subject-list">${SUBJECT_DEFS.map(subjectEntryHtml).join('')}</section>
    <section class="home-law-search">
      <label for="lawSearchInput">法令・条文・問題検索</label>
      <input id="lawSearchInput" type="search" autocomplete="off" aria-label="法令・条文・問題検索" placeholder="法令名、条番号、語句、問題番号を入力" value="${esc(searchQuery)}" oninput="LawBook.updateSearch(this.value)">
      <div id="lawSearchResults" class="law-search-results" aria-live="polite">${searchResultsHtml(searchQuery)}</div>
    </section>
    <section class="utility-actions"><button onclick="LawBook.exportBackup()">バックアップを書き出す</button><button onclick="document.getElementById('backupInput').click()">バックアップを読み込む</button><input id="backupInput" type="file" accept="application/json,.json" hidden onchange="LawBook.importBackup(this.files[0]);this.value=''"></section>
    <div class="reset-row"><button onclick="LawBook.resetAll()">リセット</button></div>
    <section class="setting-card"><span>文字を拡大</span><button class="toggle${textEnlarged?' is-on':''}" type="button" role="switch" aria-checked="${textEnlarged}" onclick="LawBook.toggleText()"><span class="toggle-state">${textEnlarged?'ON':'OFF'}</span><span class="toggle-knob" aria-hidden="true"></span></button></section>
    <div class="version">Version ${APP_VERSION}</div>`;
}
function openLapHistory(){
  setScreen('lapHistory');
  const rows=roundHistory.laps;
  app.innerHTML=`${head('周回履歴')}<section class="lap-history-card">${rows.length?`<div class="lap-history-list">${rows.map(row=>{
    const total=Math.max(1,row.correct+row.wrong+row.unanswered);
    const correctRate=row.correct/total*100,wrongRate=row.wrong/total*100,unansweredRate=row.unanswered/total*100;
    return `<div class="lap-history-row"><div class="lap-history-head"><span>${lapLabel(row.lap)}</span><span>${row.correct+row.wrong+row.unanswered}問</span></div><div class="home-result-bar" role="img" aria-label="${lapLabel(row.lap)}、正答 ${row.correct}問、誤答 ${row.wrong}問、未回答 ${row.unanswered}問"><i class="correct" style="width:${correctRate}%"></i><i class="wrong" style="width:${wrongRate}%"></i><i class="unanswered" style="width:${unansweredRate}%"></i></div><div class="home-result-legend"><span class="correct">正答 ${row.correct}</span><span class="wrong">誤答 ${row.wrong}</span><span class="unanswered">未回答 ${row.unanswered}</span></div></div>`;
  }).join('')}</div>`:'<div class="empty">過去の周回履歴はありません</div>'}<button class="secondary-button" onclick="LawBook.back()">戻る</button></section>`;
}
function progressBarHtml(label,stats){const cp=stats.total?stats.correct/stats.total*100:0,wp=stats.total?stats.wrong/stats.total*100:0;return `<div class="overall-stat"><div class="law-stat-head"><span>${label}</span><span>${stats.correct}／${stats.total}</span></div><div class="stacked-bar"><i class="correct" style="width:${cp}%"></i><i class="wrong" style="width:${wp}%"></i></div><div class="bar-legend"><span class="legend-correct">正答 ${stats.correct}</span><span class="legend-wrong">誤答 ${stats.wrong}</span><span class="legend-unanswered">未解答 ${stats.unanswered}</span></div></div>`}
function subjectEntryHtml(subject,index){const s=statsForSubject(subject),cp=s.total?s.correct/s.total*100:0,wp=s.total?s.wrong/s.total*100:0;return `<div class="subject-entry" style="--subject-color:${subject.color}"><div class="subject-button"><button class="subject-main" onclick="LawBook.openSubject(${index})"><span><strong>${esc(subject.name)}</strong><small>${subject.lawIds.length}項目・関連問題 ${s.total}問</small><small class="subject-description">${esc(subject.description)}</small></span></button><button class="subject-question" onclick="LawBook.startSubjectQuestions(${index})">問題</button><button class="subject-arrow" aria-label="${esc(subject.name)}を開く" onclick="LawBook.openSubject(${index})"><span class="arrow">›</span></button></div><div class="subject-progress"><div class="law-stat-head"><span>最新解答結果</span><span>${s.correct}／${s.total}</span></div><div class="stacked-bar"><i class="correct" style="width:${cp}%"></i><i class="wrong" style="width:${wp}%"></i></div><button type="button" class="individual-reset-button" onclick="LawBook.resetSubject(${index},event)" aria-label="${esc(subject.name)}の成績をリセット">${resetIconHtml()}</button></div></div>`}
function lawEntryHtml(l,i){const s=statsForLaw(l),cp=s.total?s.correct/s.total*100:0,wp=s.total?s.wrong/s.total*100:0,label=l.group==='law'?'条文':'項目';return `<div class="law-entry" style="--law-color:${l.color}"><button class="law-button" onclick="LawBook.openLaw(${i})"><span><strong>${esc(l.name)}</strong><small>${l.articles.length}${label}・関連問題 ${s.total}問</small></span><span class="law-lap">${lapLabel(roundNumberForLaw(l))}</span></button><div class="law-progress"><div class="law-stat-head"><span>最新解答結果</span><span>${s.correct}／${s.total}</span></div><div class="stacked-bar"><i class="correct" style="width:${cp}%"></i><i class="wrong" style="width:${wp}%"></i></div><button type="button" class="individual-reset-button" onclick="LawBook.resetLaw(${i},event)" aria-label="${esc(l.name)}の成績をリセット">${resetIconHtml()}</button></div></div>`}
function openSubject(index){subjectIndex=index;setScreen('subject');const subject=SUBJECT_DEFS[index];app.innerHTML=`${head(subject.name)}<section class="law-list">${lawsForSubject(subject).map(({law,index:lawPosition})=>lawEntryHtml(law,lawPosition)).join('')}</section>`}
function openLaw(index){lawIndex=index;setScreen('law');const law=laws[index];app.innerHTML=`${head(law.name)}${law.relatedLawId?`<button class="secondary-button law-related-link" onclick="LawBook.openRelatedLaw('${law.relatedLawId}')">${esc(law.relatedLabel)}</button>`:''}<section class="law-list" style="--law-color:${law.color}">${law.articles.map((a,i)=>`<button class="article-button" onclick="LawBook.openArticle(${i})"><span><strong>${esc(a.reference)}</strong><small>関連問題 ${a.questionIds.length}問</small></span><span class="arrow">›</span></button>`).join('')}</section>`}
function openRelatedLaw(id){const index=laws.findIndex(law=>law.id===id);if(index>=0)openLaw(index)}
function removeFinalPeriod(text){return String(text||'').replace(/[。．](?=\s*(?:\n|$))/g,'')}
function cleanExplanation(text){return removeFinalPeriod(String(text||'').replace(/^・判断基準：/,'').replace(/\n・根拠：[\s\S]*$/,'').trim())}
function stripLeadingListNumber(text){return String(text||'').replace(/^(?:[一二三四五六七八九十百千〇零]+|\d+)[ \u3000]+/,'')}
function completeExplanationFromSource(text,sources){
  let value=String(text||'').trim();
  const trailingHeading=value.match(/（[^）]+）$/)?.[0];
  if(trailingHeading&&(sources||[]).some(source=>String(source).includes(`\n${trailingHeading}`)))value=value.slice(0,-trailingHeading.length).trim();
  const balance=(value.match(/（/g)||[]).length-(value.match(/）/g)||[]).length;
  if(balance<=0||/^[）」』】]/.test(value))return value;
  const compactSource=(sources||[]).join('\n').replace(/\s+/g,'');
  const compactValue=value.replace(/\s+/g,'');
  const anchor=compactValue.slice(0,Math.min(24,compactValue.length));
  const start=compactSource.indexOf(anchor);
  if(start<0)return value;
  let round=0;
  for(let i=start;i<compactSource.length;i++){
    if(compactSource[i]==='（')round++;
    else if(compactSource[i]==='）')round--;
    else if(compactSource[i]==='。'&&round===0)return compactSource.slice(start,i);
  }
  return value;
}
function splitExplanationItems(text){
  const parts=String(text||'')
    .replace(/([。])(?=\S)/g,'$1\n')
    .replace(/(?=ただし、)/g,'\n')
    .replace(/(?<![一二三四五六七八九十百千〇零])(?=[一二三四五六七八九十百千〇零]+[ \u3000]+)/g,'\n')
    .split('\n')
    .map(x=>stripLeadingListNumber(x.trim()))
    .filter(x=>x&&!/^（[^）]+）$/.test(x));
  return parts;
}
function explanationParagraphs(items,sources=[]){
  const paragraphs=[];
  for(const source of items.map(x=>completeExplanationFromSource(cleanExplanation(x),sources)).filter(Boolean)){
    for(const item of splitExplanationItems(source)){
      const previous=paragraphs.at(-1);
      const openCount=previous?(previous.match(/（/g)||[]).length-(previous.match(/）/g)||[]).length:0;
      if(/^）/.test(item)&&previous&&openCount<=0)continue;
      if(previous&&openCount>0)paragraphs[paragraphs.length-1]+=item;
      else paragraphs.push(item);
    }
  }
  return paragraphs;
}
function japaneseNumberToArabic(value){
  const digits={〇:0,零:0,一:1,二:2,三:3,四:4,五:5,六:6,七:7,八:8,九:9};
  const small={十:10,百:100,千:1000};
  let total=0,section=0,current=0;
  for(const char of value){
    if(char in digits)current=digits[char];
    else if(char in small){section+=(current||1)*small[char];current=0}
    else if(char==='万'){total+=(section+current||1)*10000;section=0;current=0}
  }
  return total+section+current;
}
function toArabicNumerals(text){
  const kanji='〇零一二三四五六七八九十百千万';
  let value=String(text||'');
  value=value.replace(new RegExp(`([${kanji}]+)・([〇零一二三四五六七八九]+)(?=パーセント|センチメートル|メートル|ミリメートル)`,'g'),(_,whole,fraction)=>{
    const digitMap={〇:0,零:0,一:1,二:2,三:3,四:4,五:5,六:6,七:7,八:8,九:9};
    return `${japaneseNumberToArabic(whole)}.${[...fraction].map(x=>digitMap[x]).join('')}`;
  });
  value=value.replace(new RegExp(`([${kanji}]+)(?=円)`,'g'),x=>japaneseNumberToArabic(x).toLocaleString('ja-JP'));
  value=value.replace(new RegExp(`(第|条の|項の)([${kanji}]+)`,'g'),(_,prefix,number)=>prefix+japaneseNumberToArabic(number));
  value=value.replace(new RegExp(`([${kanji}]+)(?=条|項|号|章|節|款|目|類|種|人|年|か月|箇月|ヶ月|日|時間|分|秒|回|つ|以上|以下|未満|以内|パーセント|センチメートル|メートル|ミリメートル|ルクス|マイクロワット)`,'g'),x=>japaneseNumberToArabic(x));
  value=value.replace(new RegExp(`^([${kanji}]+)(?=[ \u3000])`),x=>japaneseNumberToArabic(x));
  return value;
}
function formatNumberedParagraph(text){
  const match=String(text||'').match(/^([一二三四五六七八九十百千〇零]+|\d+)[ \u3000]+(.+)$/);
  return match?`${esc(match[1])}<br>${esc(match[2])}`:esc(text);
}
function trimBulletPeriod(text){return String(text||'').trim().replace(/[。．]\s*$/,'')}
function explanationField(source,label){
  const labels='判断基準|根拠|注意点';
  const match=source.match(new RegExp(`(?:^|\\n)(?:■${label}■|[・●]?\\s*${label}[：:])\\s*([\\s\\S]*?)(?=\\n(?:■(?:${labels})■|[・●]?\\s*(?:${labels})[：:])|$)`));
  return match?match[1].trim():'';
}
function formatAnswerExplanation(q){
  const source=String(q?.exp||q?.explanation||'').replace(/\r\n?/g,'\n').trim();
  const judgment=explanationField(source,'判断基準')||source;
  const grounds=trimBulletPeriod(explanationField(source,'根拠')||q?.evidenceSource||q?.currentLegalSource||q?.point||q?.sourceName||'収録問題の出典資料');
  const cautions=trimBulletPeriod(explanationField(source,'注意点')||q?.structuredReview?.注意||'対象、条件、作用又は手順を取り違えないように整理する');
  return `<section class="answer-explanation-part"><h4>■判断基準■</h4><p>${esc(judgment)}</p></section>
    <section class="answer-explanation-part"><h4>■根拠■</h4><p>${esc(grounds)}</p></section>
    <section class="answer-explanation-part"><h4>■注意点■</h4><p>${esc(cautions)}</p></section>`;
}
function articleSourceParagraphs(text){
  const raw=String(text||'').replace(/\r\n?/g,'\n').trim();
  const lines=raw.split('\n').map(x=>x.trim()).filter((x,i,a)=>x||a[i-1]);
  const paragraphs=[];
  for(const line of lines){
    if(!line){if(paragraphs.at(-1)!=='')paragraphs.push('');continue}
    const startsBlock=/^(?:第[一二三四五六七八九十百千〇零]+条(?:の[一二三四五六七八九十百千〇零]+)?(?:\s|$)|[一二三四五六七八九十百千〇零]+(?:\s|　)|\d+\s)/.test(line);
    const previous=paragraphs.at(-1);
    if(previous&&previous!==''&&!/[。！？]$/.test(previous)&&!startsBlock)paragraphs[paragraphs.length-1]+=line;
    else paragraphs.push(line);
  }
  return paragraphs.filter(Boolean).flatMap(paragraph=>{
    const match=paragraph.match(/^((?:第)?[一二三四五六七八九十百千〇零]+条(?:の[一二三四五六七八九十百千〇零]+)?)\s+(.+)$/);
    return match?[match[1],match[2]]:[paragraph];
  }).map(removeFinalPeriod);
}
function formatArticleSource(text){return articleSourceParagraphs(text).map(x=>`<p class="article-source${/^第[一二三四五六七八九十百千〇零]+条(?:の[一二三四五六七八九十百千〇零]+)?$/.test(x)?' article-number':''}">${formatNumberedParagraph(x)}</p>`).join('')}
function openArticle(index,from='law'){articleIndex=index;returnScreen=from;setScreen('article');const law=laws[lawIndex],a=law.articles[index],sourceHeading=a.displayType==='reference'?'■参照資料■':a.displayType==='summary'?'■条文概要■':'■条文全文■';app.innerHTML=`${head(a.reference)}<details class="article-card" open><summary><h2>${esc(a.reference)}</h2><span class="article-toggle" aria-hidden="true">⌃</span></summary><div class="article-content">
  <section class="article-block"><h3>■解説■</h3>${explanationParagraphs(a.explanations.length?a.explanations:['解説は関連問題で確認できます。'],a.sources).map(x=>`<p>${formatNumberedParagraph(toArabicNumerals(x))}</p>`).join('')}</section>
  <section class="article-block"><h3>■試験のポイント■</h3>${a.points.length?`<div class="article-points">${a.points.map(x=>`<p>${esc(toArabicNumerals(stripLeadingListNumber(removeFinalPeriod(String(x).replace(/^[・●]\s*/,'')))))}</p>`).join('')}</div>`:'<p>関連問題の解説で確認できます</p>'}</section>
  <section class="article-block"><h3>${sourceHeading}</h3>${a.sources.length?a.sources.map(formatArticleSource).join(''):'<p>収録データに本文はありません</p>'}</section>
  ${a.questionIds.length?'':`<p class="no-related">この条文の関連問題は未収録です</p>`}
  </div></details>
  <nav class="article-navigation" aria-label="条文の移動"><button onclick="LawBook.moveArticle(-1)" ${index===0?'disabled':''}>＜前へ</button><button class="article-question-button" onclick="LawBook.startRelated()" ${a.questionIds.length?'':'disabled'}>問題へ</button><button onclick="LawBook.moveArticle(1)" ${index===law.articles.length-1?'disabled':''}>次へ＞</button></nav>`}
function moveArticle(step){const next=articleIndex+step;if(next>=0&&next<laws[lawIndex].articles.length)openArticle(next,returnScreen)}
let articleSwipeStart=null;
app.addEventListener('touchstart',event=>{
  if(screen!=='article'||event.touches.length!==1||event.target.closest('button,a,input,select,textarea,summary')){articleSwipeStart=null;return}
  const touch=event.touches[0];
  articleSwipeStart={x:touch.clientX,y:touch.clientY};
},{passive:true});
app.addEventListener('touchend',event=>{
  if(screen!=='article'||!articleSwipeStart||event.changedTouches.length!==1){articleSwipeStart=null;return}
  const touch=event.changedTouches[0],dx=touch.clientX-articleSwipeStart.x,dy=touch.clientY-articleSwipeStart.y;
  articleSwipeStart=null;
  if(Math.abs(dx)<60||Math.abs(dx)<=Math.abs(dy)*1.5)return;
  moveArticle(dx<0?1:-1);
},{passive:true});
app.addEventListener('touchcancel',()=>{articleSwipeStart=null},{passive:true});
function statusOf(q){const s=prog.answerStats?.[q.id];if(!s||!s.try)return'unlearned';return latest(q)==='wrong'?'review':'safe'}
function todaySessionState(){
  const raw=readJson(TODAY_KEY,{}),validDate=raw.date===today(),ids=validDate&&Array.isArray(raw.ids)?raw.ids.map(Number).filter(id=>qById.has(id)).slice(0,10):[],completedIds=validDate&&Array.isArray(raw.completedIds)?Array.from(new Set(raw.completedIds.map(Number).filter(id=>qById.has(id)&&!ids.includes(id)))):[],answers={};
  ids.forEach(id=>{const answer=raw.answers?.[id];if(answer&&Number.isInteger(answer.choice)&&typeof answer.ok==='boolean')answers[id]={choice:answer.choice,ok:answer.ok}});
  const answered=ids.filter(id=>answers[id]).length;
  return{date:raw.date,ids,completedIds,answers,index:Math.max(0,Math.min(ids.length-1,Number(raw.index)||0)),answered,total:ids.length,completed:ids.length>0&&answered===ids.length,completedTotal:completedIds.length+answered};
}
function saveTodaySession(){
  if(sessionSource!=='today')return;
  const current=todaySessionState(),ids=session.map(q=>q.id),answers={};
  ids.forEach(id=>{const answer=sessionAnswers[id];if(answer&&Number.isInteger(answer.choice)&&typeof answer.ok==='boolean')answers[id]={choice:answer.choice,ok:answer.ok}});
  const answered=ids.filter(id=>answers[id]).length;
  writeJson(TODAY_KEY,{date:today(),ids,completedIds:current.completedIds,answers,index:sessionIndex,completed:ids.length>0&&answered===ids.length});
}
function pickToday(){
  const old=readJson(TODAY_KEY,{});if(old.date===today()&&Array.isArray(old.ids)&&old.ids.some(id=>qById.has(Number(id))))return old.ids.map(Number).filter(id=>qById.has(id)).slice(0,10);
  const previous=new Set(Array.isArray(old.ids)?old.ids.map(Number):[]),picked=[],used=new Set(),add=q=>{if(q&&picked.length<10&&!used.has(q.id)){picked.push(q.id);used.add(q.id)}};
  shuffle(LAW_QUESTIONS.filter(q=>statusOf(q)==='unlearned')).forEach(add);
  shuffle(LAW_QUESTIONS.filter(q=>!previous.has(q.id)&&statusOf(q)==='review')).forEach(add);
  shuffle(LAW_QUESTIONS.filter(q=>!previous.has(q.id)&&statusOf(q)==='safe')).slice(0,2).forEach(add);
  shuffle(LAW_QUESTIONS.filter(q=>!used.has(q.id))).forEach(add);
  writeJson(TODAY_KEY,{date:today(),ids:picked,completedIds:[],answers:{},index:0,completed:false});return picked;
}
function startToday(){
  const ids=pickToday(),saved=todaySessionState();
  session=ids.map(Number).map(id=>qById.get(id)).filter(Boolean);if(!session.length){alert('対象の問題はありません。');return}
  sessionAnswers={...saved.answers};sessionSource='today';returnScreen='home';answerNoticeId=null;
  const firstUnanswered=session.findIndex(q=>!sessionAnswers[q.id]);
  sessionIndex=firstUnanswered>=0?firstUnanswered:Math.max(0,Math.min(session.length-1,saved.index));
  if(firstUnanswered<0)renderResult();else renderQuestion();
}
function startNextToday(){
  const current=todaySessionState(),completedIds=Array.from(new Set([...current.completedIds,...current.ids])),excluded=new Set(completedIds),picked=[],used=new Set(completedIds),add=q=>{if(q&&picked.length<10&&!used.has(q.id)){picked.push(q.id);used.add(q.id)}};
  shuffle(LAW_QUESTIONS.filter(q=>!excluded.has(q.id)&&statusOf(q)==='unlearned')).forEach(add);
  shuffle(LAW_QUESTIONS.filter(q=>!excluded.has(q.id)&&statusOf(q)==='review')).forEach(add);
  shuffle(LAW_QUESTIONS.filter(q=>!excluded.has(q.id)&&statusOf(q)==='safe')).forEach(add);
  if(!picked.length){alert('本日の対象問題はすべて完了しました。');return}
  writeJson(TODAY_KEY,{date:today(),ids:picked,completedIds,answers:{},index:0,completed:false});
  startToday();
}
function hasNextTodaySet(){const current=todaySessionState(),excluded=new Set([...current.completedIds,...current.ids]);return LAW_QUESTIONS.some(q=>!excluded.has(q.id))}
function startRelated(){const ids=laws[lawIndex].articles[articleIndex].questionIds;startSession(ids,'related','article')}
function startSubjectQuestions(index){
  const subject=SUBJECT_DEFS[index];if(!subject)return;
  subjectIndex=index;
  const ids=new Set(lawsForSubject(subject).flatMap(({law})=>questionsForLaw(law).map(q=>q.id)));
  startSession(LAW_QUESTIONS.filter(q=>ids.has(q.id)).map(q=>q.id),'subject','home');
}
function startSession(ids,source='today',backTo='home'){
  session=ids.map(Number).map(id=>qById.get(id)).filter(Boolean);if(!session.length){alert('対象の問題はありません。');return}
  sessionIndex=0;sessionAnswers={};sessionSource=source;returnScreen=backTo;answerNoticeId=null;renderQuestion();
}
function renderQuestion({preserveScroll=false}={}){
  const savedScroll=preserveScroll?window.scrollY:0;
  setScreen('question',preserveScroll);const q=session[sessionIndex],answer=sessionAnswers[q.id],progress=Math.round(sessionIndex/session.length*100),showNotice=answer&&answerNoticeId===q.id;
  const heading=sessionSource==='today'?'今日の10問':sessionSource==='retry'?'誤答の解き直し':sessionSource==='search'?'検索した問題':'関連問題';
  app.innerHTML=`${showNotice?`<div class="answer-notice ${answer.ok?'is-correct':'is-wrong'}" role="status">${answer.ok?'正解！':'残念！'}</div>`:''}${head(heading)}<div class="study-progress"><i style="width:${progress}%"></i></div>
  <article class="question-card"><button class="question-bookmark${bookmarks.has(q.id)?' is-on':''}" onclick="LawBook.toggleBookmark(${q.id})">🔖</button><span class="question-number">問題 ${q.id}</span><h2>${esc(q.q)}</h2>
  <div class="choices">${q.choices.map((choice,i)=>`<button class="choice${answer?(i===q.answer?' correct':i===answer.choice?' wrong':''):''}" ${answer?'disabled':''} onclick="LawBook.answer(${i})">${i+1}．${esc(choice)}</button>`).join('')}</div>
  ${answer?`<section class="answer-box"><h3>${answer.ok?'正解':'不正解'}・解説</h3><div class="answer-explanation">${formatAnswerExplanation(q)}</div>${sourceArticleButtons(q.id,'根拠条文を確認する')}</section>`:''}</article>
  <nav class="question-nav"><span class="question-nav-progress">${sessionIndex+1}／${session.length}問</span><button onclick="LawBook.previousQuestion()" ${sessionIndex===0?'disabled':''}>＜前へ</button><button onclick="LawBook.nextQuestion()">${sessionIndex===session.length-1?'結果を見る＞':'次へ＞'}</button></nav>`;
  if(preserveScroll)requestAnimationFrame(()=>window.scrollTo(0,savedScroll));
}
function updateProgressStat(target,key,ok){target[key]=target[key]||{try:0,ok:0};target[key].try++;if(ok)target[key].ok++}
function record(q,ok,choiceIndex){
  const day=today(),round=roundMeta(),theme=q.themeId||q.category,tag=q.themeId||q.category,stem=q.stemId||String(q.q||'').replace(/\s+/g,'').trim();
  prog.done[q.id]=true;
  const s=prog.answerStats[q.id]||{id:q.id,try:0,ok:0,streak:0,mastered:false,lastTry:null,lastOk:null,lastNg:null};
  s.try++;s.lastTry=day;s.lastResult=ok;
  if(ok){s.ok++;s.streak=(s.streak||0)+1;s.lastOk=day;if(s.streak>=2)s.mastered=true;if(s.ok>=5)s.conquered=true}
  else{s.streak=0;s.mastered=false;s.lastNg=day}
  prog.answerStats[q.id]=s;
  prog.history.push({id:q.id,ok,day,cat:q.category,theme,tag});
  prog.recentIds=[...prog.recentIds,q.id].slice(-100);
  prog.recentThemes=[...prog.recentThemes,theme].slice(-100);
  prog.dailyStems[day]=Array.from(new Set([...(prog.dailyStems[day]||[]),stem])).slice(-300);
  prog.daily[day]=prog.daily[day]||{try:0,ok:0};prog.daily[day].try++;if(ok)prog.daily[day].ok++;
  updateProgressStat(prog.catStats,q.category,ok);
  updateProgressStat(prog.themeStats,theme,ok);
  if(!ok){
    const m=prog.mistakes[q.id]||{id:q.id,wrongCount:0,correctCount:0,streak:0,firstMiss:day,mastered:false,history:[]};
    m.wrongCount++;m.streak=0;m.mastered=false;m.lastMiss=day;m.nextReview=day;m.lastAnswer=q.choices[choiceIndex]||'';m.correct=q.choices[q.answer]||'';m.history=Array.isArray(m.history)?m.history:[];m.history.push({day,ok:false});prog.mistakes[q.id]=m;
  }else if(prog.mistakes[q.id])delete prog.mistakes[q.id];
  round.total++;recordRoundResult(ok);saveProg();
}
function recordRoundResult(ok){
  const size=Math.max(1,LAW_QUESTIONS.length),total=Math.max(0,roundMeta().total);
  if(!roundHistory.current){
    if(total%size===0){
      roundHistory.current={lap:Math.floor(total/size)+1,correct:0,wrong:0,answered:0};
      writeJson(ROUND_HISTORY_KEY,roundHistory);
    }
    return;
  }
  const current=roundHistory.current;
  current.answered++;
  if(ok)current.correct++;else current.wrong++;
  if(current.answered>=size){
    roundHistory.laps.push({lap:current.lap,correct:current.correct,wrong:current.wrong,unanswered:0,completedAt:new Date().toISOString()});
    roundHistory.current={lap:current.lap+1,correct:0,wrong:0,answered:0};
  }
  writeJson(ROUND_HISTORY_KEY,roundHistory);
}
function answer(index){const q=session[sessionIndex];if(sessionAnswers[q.id])return;const ok=index===q.answer;sessionAnswers[q.id]={choice:index,ok};answerNoticeId=q.id;record(q,ok,index);saveTodaySession();renderQuestion({preserveScroll:true})}
function previousQuestion(){if(sessionIndex>0){answerNoticeId=null;sessionIndex--;saveTodaySession();renderQuestion()}}
function nextQuestion(){answerNoticeId=null;if(sessionIndex<session.length-1){sessionIndex++;saveTodaySession();renderQuestion()}else renderResult()}
function renderResult(){answerNoticeId=null;saveTodaySession();setScreen('result');const rows=session.map(q=>({q,a:sessionAnswers[q.id]})),ok=rows.filter(x=>x.a?.ok).length,wrong=rows.filter(x=>x.a&&!x.a.ok),unanswered=rows.filter(x=>!x.a).length;app.innerHTML=`${head('結果')}<section class="result-card"><div class="result-totals"><div><strong>${ok}</strong>正答</div><div><strong>${wrong.length}</strong>誤答</div>${unanswered?`<div><strong>${unanswered}</strong>未回答</div>`:''}</div><div class="result-list">${rows.map(x=>`<div class="result-row"><span class="${x.a?(x.a.ok?'ok':'ng'):''}">${x.a?(x.a.ok?'○':'×'):'－'}</span><span>問題 ${x.q.id}　${esc(x.q.q.replace(/\s+/g,' ').slice(0,48))}</span></div>`).join('')}</div>${wrong.length?`<button class="primary-button" onclick="LawBook.retryWrong()">誤答だけ解き直す</button>`:''}${sessionSource==='today'&&hasNextTodaySet()?'<button class="primary-button" onclick="LawBook.startNextToday()">次の10問へ</button>':''}<button class="secondary-button" onclick="LawBook.openBookmarks()">ブックマークした問題を確認する</button><button class="secondary-button" onclick="LawBook.home()">ホームに戻る</button></section>`}
function retryWrong(){const ids=session.filter(q=>sessionAnswers[q.id]&&!sessionAnswers[q.id].ok).map(q=>q.id);startSession(ids,'retry','result')}
function toggleBookmark(id){id=Number(id);bookmarks.has(id)?bookmarks.delete(id):bookmarks.add(id);writeJson(BOOKMARK_KEY,[...bookmarks]);if(screen==='question')renderQuestion();else if(screen==='bookmarks')openBookmarks();else renderHome()}
function articlesForQuestion(id){
  const references=articleReferencesForQuestion(id),hits=[];
  for(const reference of references)for(let li=0;li<laws.length;li++){
    const ai=laws[li].articles.findIndex(article=>article.reference===reference);
    if(ai>=0&&!hits.some(hit=>hit.li===li&&hit.ai===ai)){hits.push({li,ai,reference});break}
  }
  return hits;
}
function sourceArticleButtons(id,label){
  const hits=articlesForQuestion(id);
  return hits.map((hit,index)=>`<button class="secondary-button" onclick="LawBook.openSourceArticle(${Number(id)},${index})">${esc(hits.length>1?`${label}（${index+1}）`:label)}</button>`).join('');
}
function openSourceArticle(id,index=0){const hit=articlesForQuestion(id)[Number(index)||0];if(!hit)return;const source=screen==='bookmarks'?'bookmarks':'question';lawIndex=hit.li;articleIndex=hit.ai;openArticle(hit.ai,source)}
function openBookmarks(){setScreen('bookmarks');app.innerHTML=`${head('ブックマーク問題')}<section class="bookmark-list">${bookmarks.size?[...bookmarks].map(id=>qById.get(id)).filter(Boolean).map(q=>{const law=LAW_DEFS.find(l=>l.categories.includes(q.category));return `<details class="bookmark-item"><summary><span>${esc(q.q.replace(/\s+/g,' ').slice(0,58))}</span><small>問題 ${q.id}</small></summary><div class="bookmark-body"><h3>選択肢</h3><ol>${q.choices.map(x=>`<li>${esc(x)}</li>`).join('')}</ol><h3>正答</h3><p>${esc(q.choices[q.answer])}</p><h3>解説</h3><div class="answer-explanation">${formatAnswerExplanation(q)}</div><h3>関連法令</h3><p>${esc(law?.name||'')}　${esc(q.point||'')}</p><div class="bookmark-actions"><button class="remove" onclick="LawBook.toggleBookmark(${q.id})">解除</button>${sourceArticleButtons(q.id,"この条文を開く")}</div></div></details>`}).join(''):'<div class="empty">登録した問題はありません。</div>'}</section>`}
function exportBackup(){saveProg();const payload={format:'riyoshi-lawbook-backup',version:5,exportedAt:new Date().toISOString(),progress:prog,bookmarks:[...bookmarks],today:readJson(TODAY_KEY,{}),roundHistory,textEnlarged,legacy:{mockProgress:readJson(MOCK_PROGRESS_KEY,null),materialDone:readJson(MATERIAL_DONE_KEY,[]),materialWeak:readJson(MATERIAL_WEAK_KEY,[])}};const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=`法令集バックアップ-${today()}.json`;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)}
async function importBackup(file){if(!file)return;try{const p=JSON.parse(await file.text());if(!p||p.format!=='riyoshi-lawbook-backup'||![1,2,3,4,5].includes(p.version)||!p.progress||!Array.isArray(p.bookmarks))throw new Error('形式が一致しません');if(!confirm('現在の学習記録を、選択したバックアップ内容で置き換えます。よろしいですか？'))return;prog=normaliseProgress(p.progress);bookmarks=new Set(p.bookmarks.map(Number).filter(id=>officialById.has(id)));roundHistory=normaliseRoundHistory(p.version>=3?p.roundHistory:{});textEnlarged=typeof p.textEnlarged==='boolean'?p.textEnlarged:textEnlarged;saveProg();writeJson(BOOKMARK_KEY,[...bookmarks]);writeJson(TODAY_KEY,p.today||{});writeJson(ROUND_HISTORY_KEY,roundHistory);if(p.version>=2&&p.legacy){p.legacy.mockProgress?writeJson(MOCK_PROGRESS_KEY,p.legacy.mockProgress):localStorage.removeItem(MOCK_PROGRESS_KEY);writeJson(MATERIAL_DONE_KEY,Array.isArray(p.legacy.materialDone)?p.legacy.materialDone:[]);writeJson(MATERIAL_WEAK_KEY,Array.isArray(p.legacy.materialWeak)?p.legacy.materialWeak:[])}localStorage.setItem(TEXT_KEY,textEnlarged?'1':'0');document.body.classList.toggle('text-enlarged',textEnlarged);renderHome();alert('バックアップを読み込みました。')}catch(e){alert(`バックアップを読み込めませんでした。${e.message?' '+e.message:''}`)}}
function rebuildDerivedProgress(){
  const history=(prog.history||[]).filter(row=>row&&qById.has(Number(row.id))&&typeof row.ok==='boolean');
  prog.history=history;prog.done={};prog.answerStats={};prog.catStats={};prog.themeStats={};prog.daily={};prog.dailyStems={};
  for(const row of history){
    const q=qById.get(Number(row.id)),day=String(row.day||''),theme=q.themeId||q.category,stem=q.stemId||String(q.q||'').replace(/\s+/g,'').trim();
    prog.done[q.id]=true;
    const stat=prog.answerStats[q.id]||{id:q.id,try:0,ok:0,streak:0,mastered:false,lastTry:null,lastOk:null,lastNg:null};
    stat.try++;stat.lastTry=day;stat.lastResult=row.ok;
    if(row.ok){stat.ok++;stat.streak++;stat.lastOk=day;if(stat.streak>=2)stat.mastered=true;if(stat.ok>=5)stat.conquered=true}
    else{stat.streak=0;stat.mastered=false;stat.lastNg=day}
    prog.answerStats[q.id]=stat;
    updateProgressStat(prog.catStats,q.category,row.ok);updateProgressStat(prog.themeStats,theme,row.ok);
    if(day){prog.daily[day]=prog.daily[day]||{try:0,ok:0};prog.daily[day].try++;if(row.ok)prog.daily[day].ok++;prog.dailyStems[day]=Array.from(new Set([...(prog.dailyStems[day]||[]),stem])).slice(-300)}
  }
  prog.recentIds=history.slice(-100).map(row=>Number(row.id));
  prog.recentThemes=history.slice(-100).map(row=>{const q=qById.get(Number(row.id));return q.themeId||q.category});
  prog.roundProgress={total:history.length};
}
function rebuildRoundHistory(){
  const size=Math.max(1,LAW_QUESTIONS.length),laps=[];
  for(let offset=0;offset+size<=prog.history.length;offset+=size){
    const rows=prog.history.slice(offset,offset+size),correct=rows.filter(row=>row.ok).length;
    laps.push({lap:laps.length+1,correct,wrong:size-correct,unanswered:0,completedAt:''});
  }
  const rows=prog.history.slice(laps.length*size),correct=rows.filter(row=>row.ok).length;
  roundHistory={laps,current:{lap:laps.length+1,correct,wrong:rows.length-correct,answered:rows.length}};
}
function resetTodayForIds(ids){
  const raw=readJson(TODAY_KEY,{});if(!raw||raw.date!==today())return;
  const answers=raw.answers&&typeof raw.answers==='object'?{...raw.answers}:{};
  ids.forEach(id=>{delete answers[id];delete answers[String(id)]});
  raw.answers=answers;
  if(Array.isArray(raw.completedIds))raw.completedIds=raw.completedIds.map(Number).filter(id=>!ids.has(id));
  writeJson(TODAY_KEY,raw);
  if(sessionSource==='today')ids.forEach(id=>delete sessionAnswers[id]);
}
function resetLearningForIds(ids){
  prog.history=(prog.history||[]).filter(row=>!ids.has(Number(row.id)));
  for(const id of ids)delete prog.mistakes[id];
  rebuildDerivedProgress();rebuildRoundHistory();resetTodayForIds(ids);
  saveProg();writeJson(ROUND_HISTORY_KEY,roundHistory);
}
function resetSubject(index,event){
  event?.preventDefault();event?.stopPropagation();const subject=SUBJECT_DEFS[index];if(!subject)return;
  const ids=new Set(lawsForSubject(subject).flatMap(({law})=>questionsForLaw(law).map(q=>q.id)));
  if(!confirm(`「${subject.name}」の成績と周回履歴をリセットします。この操作は元に戻せません。`))return;
  resetLearningForIds(ids);renderHome();
}
function resetLaw(index,event){
  event?.preventDefault();event?.stopPropagation();const law=laws[index];if(!law)return;
  const ids=new Set(questionsForLaw(law).map(q=>q.id));
  if(!confirm(`「${law.name}」の成績と周回履歴をリセットします。この操作は元に戻せません。`))return;
  resetLearningForIds(ids);openSubject(subjectIndex);
}
function resetAll(){if(!confirm('解答履歴・成績・学習状況・ブックマーク・その他の学習記録をすべて削除します。この操作は元に戻せません。よろしいですか？'))return;prog=baseProg();bookmarks.clear();roundHistory=normaliseRoundHistory({});saveProg();localStorage.removeItem(BOOKMARK_KEY);localStorage.removeItem(TODAY_KEY);localStorage.removeItem(ROUND_HISTORY_KEY);localStorage.removeItem(MOCK_PROGRESS_KEY);localStorage.removeItem(MATERIAL_DONE_KEY);localStorage.removeItem(MATERIAL_WEAK_KEY);renderHome()}
function toggleText(){textEnlarged=!textEnlarged;localStorage.setItem(TEXT_KEY,textEnlarged?'1':'0');document.body.classList.toggle('text-enlarged',textEnlarged);renderHome()}
function home(){searchQuery='';if(screen!=='home')renderHome();else{renderHome();window.scrollTo(0,0)}}
function back(){
  if(internalDepth>0){history.back();return}
  if(screen!=='home')renderHome();
}
function openLegacyRoute(){
  const hash=decodeURIComponent(location.hash||'');
  const question=hash.match(/question=(\d+)/);
  if(question&&qById.has(Number(question[1]))){startSession([Number(question[1])],'related','home');return}
  const category=hash.match(/cat=([^&]+)/);
  if(category){const index=laws.findIndex(law=>law.categories.includes(category[1]));if(index>=0){openLaw(index);return}}
  const legacyLaw=hash.match(/law=(\d+)/);
  if(legacyLaw){
    const id={3:'barber_related',4:'barber_related',5:'barber_related',6:'barber_related',7:'infection',8:'community',10:'consumer',11:'specified_commercial',12:'disinfection'}[Number(legacyLaw[1])];
    const index=laws.findIndex(law=>law.id===id);if(index>=0){openLaw(index);return}
  }
}
const LawBook={home,back,openSubject,openLaw,openRelatedLaw,openArticle,moveArticle,startToday,startNextToday,startRelated,startSubjectQuestions,startSession,answer,previousQuestion,nextQuestion,retryWrong,toggleBookmark,openBookmarks,openLapHistory,openSourceArticle,openSearchLaw,openSearchArticle,openSearchQuestion,updateSearch,exportBackup,importBackup,resetSubject,resetLaw,resetAll,toggleText};
window.LawBook=LawBook;
document.body.classList.toggle('text-enlarged',textEnlarged);
renderHome();
navigationReady=true;
history.replaceState({lawBook:true,depth:0,state:navigationSnapshot()},'',location.pathname+location.search+location.hash);
openLegacyRoute();
window.addEventListener('popstate',event=>{if(event.state?.lawBook){internalDepth=Math.max(0,Number(event.state.depth)||0);restoreNavigationState(event.state.state)}else if(screen!=='home'){internalDepth=0;renderHome()}});
async function registerCurrentServiceWorker(){
  if(!('serviceWorker'in navigator))return;
  try{
    let hasSeenController=Boolean(navigator.serviceWorker.controller);
    let reloading=false;
    navigator.serviceWorker.addEventListener('controllerchange',()=>{
      if(!hasSeenController){
        hasSeenController=true;
        return;
      }
      if(reloading)return;
      reloading=true;
      location.reload();
    });
    const rootScope=new URL('./',location.href).href;
    const legacyScopes=[new URL('./分野別問題/',rootScope).href];
    if(typeof navigator.serviceWorker.getRegistrations==='function'){
      const registrations=await navigator.serviceWorker.getRegistrations();
      await Promise.all(registrations
        .filter(registration=>legacyScopes.includes(registration.scope))
        .map(registration=>registration.unregister()));
    }
    const registration=await navigator.serviceWorker.register('./sw.js?v=4.0.62',{updateViaCache:'none'});
    const activateWaitingWorker=()=>{
      if(registration.waiting)registration.waiting.postMessage({type:'SKIP_WAITING'});
    };
    registration.addEventListener('updatefound',()=>{
      const worker=registration.installing;
      if(!worker)return;
      worker.addEventListener('statechange',()=>{
        if(worker.state==='installed'&&navigator.serviceWorker.controller)activateWaitingWorker();
      });
    });
    activateWaitingWorker();
    const checkForUpdate=()=>{
      if(document.visibilityState==='visible')registration.update().catch(()=>{});
    };
    window.addEventListener('pageshow',checkForUpdate);
    window.addEventListener('focus',checkForUpdate);
    window.addEventListener('online',checkForUpdate);
    document.addEventListener('visibilitychange',checkForUpdate);
    await registration.update();
  }catch(_){}
}
window.addEventListener('load',registerCurrentServiceWorker);
