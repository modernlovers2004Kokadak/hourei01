(()=>{
'use strict';
const data=globalThis.GLOSSARY_DATA,quizData=globalThis.GLOSSARY_QUIZ_DATA,app=document.getElementById('app'),q=quizData?.questions;
if(!data||!quizData||!app)return;
// Version 3.0.36: トップの用語名検索を用語カード枠の外側へ移設。
{
const publicHealthCategories=new Set(['公衆衛生','地域保健法','健康増進法','消費者基本法']);
const publicHealthQuestions=new Map(data.terms.filter(term=>publicHealthCategories.has(term.category)&&q[term.id]).map(term=>[Number(term.id),JSON.parse(JSON.stringify(q[term.id]))]));
const set=(id,question,correct,distractors)=>{if(q[id])Object.assign(q[id],{question,correct,distractors})};
set(119,'薬剤耐性菌としての特徴はどれか。','メチシリンに耐性を示す黄色ブドウ球菌。',['バンコマイシンに耐性を示す腸球菌。','バンコマイシンに耐性を示す黄色ブドウ球菌。','メチシリンに感受性を示す黄色ブドウ球菌。']);
set(120,'国際保健における主な役割はどれか。','各国の保健活動を調整し、国際的な公衆衛生を推進する。',['地域住民の健康相談を行い、市町村の保健活動を支える。','衛生に関する試験検査を行い、地域の行政判断を支える。','消費生活の相談を受け、事業者とのトラブル解決を支援する。']);
set(121,'この概念が重視する内容はどれか。','身体状態だけでなく、生活の満足度や社会生活も含めて捉える。',['食事や移動など、日常生活動作の自立度だけを捉える。','病気なく生活できる期間を、平均寿命との差から捉える。','身長と体重の関係から、体格の程度だけを数値で捉える。']);
set(122,'体格を判定する計算方法はどれか。','体重kgを身長mの2乗で除して求める。',['身長cmから一定値を差し引いて求める。','体重kgを身長cmで除して100を乗じる。','胸囲cmを身長cmで除して100を乗じる。']);
set(123,'主な予防対象となる感染症はどれか。','結核',['麻しん','ジフテリア','インフルエンザ']);
set(124,'遺伝情報に関する主な役割はどれか。','遺伝情報を長期的に保存し、複製して受け渡す。',['遺伝情報を写し取り、タンパク質合成へ伝える。','細胞膜の主成分となり、物質の出入りを調節する。','化学反応を促進し、細胞内の代謝を調節する。']);
set(125,'遺伝情報に関する主な役割はどれか。','遺伝情報を写し取り、タンパク質合成へ伝える。',['遺伝情報を長期的に保存し、複製して受け渡す。','細胞膜の主成分となり、物質の出入りを調節する。','化学反応を促進し、細胞内の代謝を調節する。']);
set(126,'感染との関連が深い病態はどれか。','尖圭コンジローマや子宮頸がん。',['B型肝炎や肝硬変。','C型肝炎や肝細胞がん。','後天性免疫不全症候群。']);
set(127,'使用する場面として最も適切なものはどれか。','血液や体液の飛散・接触から従事者を守る場面。',['流水と石けんで手指の汚れを除去する場面。','器具を消毒薬へ浸し、微生物を減らす場面。','作業区域を清掃し、環境表面を整える場面。']);
set(129,'健康管理上、特に注意する負担はどれか。','画面注視による眼の疲れや、同一姿勢による筋骨格系の負担。',['長時間の立位による下肢の疲れや、静脈系への負担。','重量物の反復運搬による腰部や上肢への負担。','薬剤の吸入や皮膚接触による呼吸器・皮膚への負担。']);
set(132,'乳幼児で起こしやすい主な病態はどれか。','細気管支炎などの呼吸器感染症。',['感染性胃腸炎などの消化器感染症。','流行性角結膜炎などの眼感染症。','手足口病などの発疹性疾患。']);
set(134,'人体への作用として正しいものはどれか。','過度の曝露により紅斑や皮膚障害を起こす。',['熱作用により皮膚温を上昇させる。','網膜を刺激して明暗や色として知覚される。','透過性を利用して骨などの画像検査に用いられる。']);
set(186,'人と動物の間で成立する感染症の説明はどれか。','人と動物の双方に感染する病原体によって起こる。',['動物だけに感染する病原体によって起こる。','人だけに感染する病原体によって起こる。','昆虫だけを宿主とする病原体によって起こる。']);
set(190,'感染の有無にかかわらず行う基本対策はどれか。','すべての血液・体液などを感染性があるものとして扱う。',['感染症と診断された人の血液だけを感染性として扱う。','目に見える汚れがある器具だけを感染性として扱う。','症状がある従事者の分泌物だけを感染性として扱う。']);
set(207,'空気中での性質として正しいものはどれか。','飛沫の水分が蒸発した微小粒子で、長く浮遊しやすい。',['水分を多く含む大きな粒子で、短距離で落下しやすい。','皮膚表面に付着する粒子で、空気中には浮遊しない。','飲食物中で増殖する粒子で、吸入による感染は起こさない。']);
set(283,'器具の処理方法を選ぶ基準はどれか。','接触する部位の感染リスクに応じて処理水準を選ぶ。',['器具の購入価格に応じて処理水準を選ぶ。','器具の使用回数に応じて処理水準を選ぶ。','器具の保管期間に応じて処理水準を選ぶ。']);
set(297,'健康について示された基本的な考え方はどれか。','身体的・精神的・社会的に良好な状態を健康と捉える。',['疾病や病弱が認められない状態だけを健康と捉える。','身体機能が正常に保たれた状態だけを健康と捉える。','医療サービスを受けられる状態だけを健康と捉える。']);
set(334,'値が100を超える場合の解釈として正しいものはどれか。','基準集団より死亡が多いことを示す。',['基準集団より死亡が少ないことを示す。','基準集団と死亡の程度が同じことを示す。','対象集団の平均寿命が100歳を超えることを示す。']);
set(461,'原因となる微生物はどれか。','カンジダ属の真菌。',['白癬菌などの真菌。','黄色ブドウ球菌などの細菌。','単純ヘルペスウイルスなどのウイルス。']);
set(501,'毛髪に生じる状態として正しいものはどれか。','毛髪の先端や毛幹が縦に裂けた状態。',['毛髪の途中に結び目ができた状態。','毛髪が横方向に折れて切れた状態。','毛髪表面に皮脂が多く付着した状態。']);
set(532,'表示の内容として正しいものはどれか。','配合した成分名を容器や外箱などに表示する。',['製造工程の作業時間を容器や外箱などに表示する。','使用者の健康状態を容器や外箱などに表示する。','販売店の在庫数量を容器や外箱などに表示する。']);
set(543,'香粧品に配合する主な目的はどれか。','保湿、溶剤、湿潤性の調整に用いる。',['油分を補い、皮膚表面を閉塞して保護する。','酸化反応を起こし、毛髪中の色素を分解する。','界面張力を下げ、洗浄や乳化を助ける。']);
set(544,'香粧品に配合する主な目的はどれか。','保湿、溶剤、使用感の調整に用いる。',['油分を補い、皮膚表面を閉塞して保護する。','酸化反応を起こし、毛髪中の色素を分解する。','界面張力を下げ、洗浄や乳化を助ける。']);
const surf={556:['陰イオンとなり、洗浄・起泡に用いられる。','陽イオンとなり、柔軟・帯電防止に用いられる。','イオン化せず、乳化・可溶化に用いられる。','液性により電荷が変わり、低刺激洗浄に用いられる。'],557:['陽イオンとなり、柔軟・帯電防止に用いられる。','陰イオンとなり、洗浄・起泡に用いられる。','イオン化せず、乳化・可溶化に用いられる。','液性により電荷が変わり、低刺激洗浄に用いられる。'],558:['イオン化せず、乳化・可溶化に用いられる。','陰イオンとなり、洗浄・起泡に用いられる。','陽イオンとなり、柔軟・帯電防止に用いられる。','液性により電荷が変わり、低刺激洗浄に用いられる。'],559:['液性により電荷が変わり、低刺激洗浄に用いられる。','陰イオンとなり、洗浄・起泡に用いられる。','陽イオンとなり、柔軟・帯電防止に用いられる。','イオン化せず、乳化・可溶化に用いられる。']};
Object.entries(surf).forEach(([id,a])=>set(id,'水中での性質と主な用途の組合せはどれか。',a[0],a.slice(1)));
set(565,'実施する目的として正しいものはどれか。','薬剤を少量つけ、皮膚反応の有無を事前に確認する。',['薬剤を全量つけ、染まり上がりの色調を事前に確認する。','薬剤を毛髪につけ、ウェーブの形成状態を事前に確認する。','薬剤を器具につけ、材質の変化の有無を事前に確認する。']);
set(577,'パーマ第1剤での主な働きはどれか。','シスチン結合を切断し、毛髪を変形しやすくする。',['切断した結合を再形成し、毛髪の形を固定する。','毛髪表面を被膜で覆い、摩擦や乾燥を抑える。','染料中間体を発色させ、毛髪内部を染色する。']);
set(578,'パーマ第2剤での主な働きはどれか。','切断した結合を再形成し、毛髪の形を固定する。',['シスチン結合を切断し、毛髪を変形しやすくする。','毛髪表面を被膜で覆い、摩擦や乾燥を抑える。','界面張力を下げ、薬剤を均一に分散させる。']);
set(627,'この技術の説明として正しいものはどれか。','染毛剤などを用いて、毛髪の色を変化させる技術。',['酸化剤で毛髪中の色素を分解し、明るくする技術。','還元と酸化を利用し、毛髪に持続性のウェーブをつける技術。','熱とブラシ操作を利用し、毛髪を一時的に整える技術。']);
set(628,'この技術の説明として正しいものはどれか。','酸化剤で毛髪中の色素を分解し、明るくする技術。',['染毛剤などを用いて、毛髪へ色素を補う技術。','還元と酸化を利用し、毛髪に持続性のウェーブをつける技術。','熱とブラシ操作を利用し、毛髪を一時的に整える技術。']);
set(680,'適した滅菌対象と条件の組合せはどれか。','熱や湿気に弱い器材を、低温のガスで処理する。',['耐熱性の器材を、高温高圧の飽和蒸気で処理する。','ガラス器材などを、乾燥した高温空気で処理する。','耐熱性の器材を、煮沸水中で一定時間処理する。']);
set(693,'毛髪を染める性質として正しいものはどれか。','陽性の電荷をもち、毛髪表面付近へ吸着して染める。',['酸性の水溶液中で、毛髪の表層部へ吸着して染める。','酸化反応で発色し、毛髪内部へ浸透して染める。','毛髪中の色素を酸化分解し、色を明るくする。']);
set(694,'毛髪を染める性質として正しいものはどれか。','低分子の染料が、毛髪の表層部へ浸透して染める。',['陽性の電荷をもつ染料が、毛髪表面へ吸着して染める。','酸化反応で発色する染料が、毛髪内部へ浸透して染める。','毛髪中の色素を酸化分解し、色を明るくする。']);
const balanceIds=[117,143,192,205,210,218,232,236,242,243,293,300,313,314,323,345,346,348,368,391,429,479,576,600,635,637,643,656];
const chars=text=>new Set(String(text).replace(/[\s、。・（）()]/g,''));
const similarity=(a,b)=>{const aa=chars(a),bb=chars(b);let n=0;for(const c of aa)if(bb.has(c))n++;return n/Math.max(1,new Set([...aa,...bb]).size)};
for(const id of balanceIds){const item=q[id],term=data.terms.find(x=>Number(x.id)===id);if(!item||!term)continue;const pool=data.terms.filter(x=>x.category===term.category&&Number(x.id)!==id&&q[x.id]?.correct).map(x=>q[x.id].correct).filter((v,i,a)=>v!==item.correct&&a.indexOf(v)===i);item.distractors=pool.map(v=>({v,score:Math.abs(v.length-item.correct.length)/Math.max(8,item.correct.length)-similarity(item.correct,v)*.65})).sort((a,b)=>a.score-b.score).slice(0,3).map(x=>x.v)}
const birdFluTerm=data.terms.find(term=>Number(term.id)===44);
if(birdFluTerm)birdFluTerm.name='鳥インフルエンザ\n（H5N1・H7N9を除く）';
const highRiskIds=[115,116,118,136,143,145,146,155,165,167,173,175,176,187,191,196,199,200,202,203,205,215,226,233,237,240,248,249,252,254,256,261,262,263,269,272,274,281,283,284,287,292,297,299,301,302,305,308,310,312,313,316,329,331,332,337,338,340,343,349,350,353,355,362,363,365,367,373,374,377,388,389,391,392,395,401,403,404,408,414,417,421,439,440,451,461,478,482,489,490,496,508,509,510,515,518,520,522,523,527,529,531,532,542,547,553,559,562,568,569,571,583,587,588,593,596,600,601,602,603,605,622,630,638,643,648,649,665,666,670,671,672,673,676,677,678,679,681,682,684,687,688,695,698];
const lengthRiskIds=[123,126,135,142,156,158,168,209,211,213,217,219,222,229,230,235,241,247,259,265,268,277,278,279,293,294,311,327,347,352,356,358,361,376,390,427,434,437,445,448,449,450,462,474,476,477,483,485,487,491,493,499,519,525,554,580,599,611,616,617,618,620,625,629,631,634,642,651,652,662,696,700];
const cleanPoint=value=>String(value||'').replace(/^・\s*/,'').trim();
const cleanDefinition=(term,value)=>{let text=cleanPoint(value);for(const lead of [`${term.name}は、`,`${term.name}は`,`${term.name}とは、`,`${term.name}とは`])if(text.startsWith(lead)){text=text.slice(lead.length);break}return text};
const chooseThree=(pool,correct)=>pool.filter((v,i,a)=>v&&v!==correct&&a.indexOf(v)===i).map(v=>{const related=similarity(correct,v);return{v,score:Math.abs(v.length-correct.length)/Math.max(8,correct.length)*2+Math.abs(related-.22)*.8+(related>.45?2:0)}}).sort((a,b)=>a.score-b.score).slice(0,3).map(x=>x.v);
for(const id of highRiskIds){
 const term=data.terms.find(x=>Number(x.id)===id),item=q[id];if(!term||!item)continue;
 const correct=cleanDefinition(term,term.definition);
 const pool=data.terms.filter(x=>x.category===term.category&&Number(x.id)!==id).map(x=>cleanDefinition(x,x.definition)).filter(v=>v.length>=5);
 const distractors=chooseThree(pool,correct);if(distractors.length===3)Object.assign(item,{question:'この用語の説明として正しいものはどれか。',correct,distractors});
}
for(const id of lengthRiskIds){
 const term=data.terms.find(x=>Number(x.id)===id),item=q[id];if(!term||!item)continue;
 const pool=data.terms.filter(x=>x.category===term.category&&Number(x.id)!==id&&q[x.id]?.correct).map(x=>q[x.id].correct);
 const distractors=chooseThree(pool,item.correct);if(distractors.length===3)item.distractors=distractors;
}
set(395,'消費者基本法で消費者の権利として位置づけられる組合せはどれか。','安全の確保・選択の機会・必要な情報・教育・意見反映・被害救済。',['契約の自由・納税・勤労・財産形成・営業許可・価格決定。','衛生管理・資格取得・行政届出・広告審査・料金設定・店舗登録。','診療給付・介護給付・年金給付・雇用保障・住宅扶助・生活扶助。']);
set(531,'化粧品基準が定める事項はどれか。','配合禁止成分と配合制限成分などを定める。',['全成分表示の記載順序と文字サイズだけを定める。','製造販売業許可の申請手続と審査期間を定める。','広告に表示できる効能効果と料金表示を定める。']);
set(123,'主な予防対象となる感染症はどれか。','結核',['麻しん','風しん','破傷風']);
const genericDefinitionPattern=/(?:について正しい説明はどれか|の説明として正しいものはどれか)/;
const sameCategoryNames=(term)=>data.terms
 .filter(candidate=>candidate.category===term.category&&candidate.id!==term.id)
 .map(candidate=>candidate.name)
 .filter((name,index,names)=>name&&name!==term.name&&names.indexOf(name)===index)
 .map(name=>({name,score:Math.abs(name.length-term.name.length)}))
 .sort((a,b)=>a.score-b.score||a.name.localeCompare(b.name,'ja'))
 .slice(0,3)
 .map(row=>row.name);
for(const term of data.terms){
 const item=q[term.id];
 if(!item||!genericDefinitionPattern.test(item.question))continue;
 let description=String(item.correct||'').trim();
 description=description.replaceAll(term.name,'この用語').replace(/。+$/,'');
 const distractors=sameCategoryNames(term);
 if(distractors.length!==3)continue;
 Object.assign(item,{question:`${description}。この説明に該当する用語はどれか。`,correct:term.name,distractors,reverseLookup:true});
}
set(123,'BCGワクチンの主な予防対象はどれか。','結核',['麻しん','風しん','破傷風']);
set(580,'パーマ第1剤の作用として正しいものはどれか。','毛髪内のシスチン結合を還元して切断する。',['切断したシスチン結合を酸化して再結合させる。','毛髪表面を被膜で覆って水分蒸発を抑える。','酸化染料を発色させて毛髪内部を染色する。']);
set(665,'感染症の発生状況、原因、感染経路、接触者などを調べるものはどれか。','積極的疫学調査',['健康監視','病原体等管理']);
set(666,'病原体の漏えいを防ぐため、安全な保管・取扱い・廃棄を行うものはどれか。','病原体等管理',['積極的疫学調査','健康監視']);
set(667,'感染の可能性がある人について、一定期間、体温などの健康状態を確認するものはどれか。','健康監視',['積極的疫学調査','病原体等管理']);
set(668,'感染拡大を防ぐため、対象となる患者に医療機関への入院を勧める措置はどれか。','入院勧告',['就業制限','健康診断の勧告']);
set(669,'感染拡大を防ぐため、対象者が一定の業務に従事することを制限する措置はどれか。','就業制限',['入院勧告','健康診断の勧告']);
set(670,'感染症の病原体に汚染された場所について、消毒するよう命じる措置はどれか。','消毒命令',['物件の廃棄命令','交通の制限']);
set(671,'感染症の症状を呈しているものの、診断がまだ確定していない者はどれか。','疑似症患者',['患者','無症状病原体保有者']);
set(672,'感染症の病原体を保有しているが、その感染症の症状を呈していない者はどれか。','無症状病原体保有者',['患者','疑似症患者']);
set(674,'医師が感染症患者などを診断した際、感染症法に基づいて行う届出はどれか。','発生届',['入院届','退院届']);
set(675,'感染症患者などを診断した者に、対象となる感染症の届出を求める義務はどれか。','医師の届出義務',['感染症指定医療機関の報告義務','都道府県知事の通知義務']);
// Version 3.0.77: 消毒法82問を、同じ論点の用語から選ぶ3択へ全面改稿。
// 正答前に用語名を示さず、定義・作用・対象から判断する形式とする。
const preventionGroups=[
 [115,116,117,126,132],
 [128,130,131,133,206],
 [135,168,169,170,171],
 [136,137,143,144,145],
 [138,139,140,141,142],
 [146,147,148,149,150],
 [151,152,187,188,189],
 [153,154,155,156,157,158,159,160],
 [163,164,165,166,167],
 [172,173,174,175,176,177,178,179,180,181,182],
 [183,184,185,186,673],
 [190,191,192,193],
 [194,195,196,197],
 [198,199,200,201,202,203,204],
 [207,208]
];
const preventionPromptOverrides={
 115:'血液や体液を介して感染し、B型肝炎を起こすウイルスはどれか。',
 116:'主に血液を介して感染し、C型肝炎を起こすウイルスはどれか。',
 117:'免疫機能を低下させ、後天性免疫不全症候群の原因となるウイルスはどれか。',
 118:'HIV感染が進行し、免疫不全を起こした状態はどれか。',
 119:'メチシリンに耐性を示す黄色ブドウ球菌はどれか。',
 120:'国際的な保健活動を調整する国連の専門機関はどれか。',
 121:'身体状態だけでなく、生活の満足度や社会生活も含めて捉える概念はどれか。',
 122:'体重kgを身長mの2乗で除して求める体格指数はどれか。',
 123:'結核の予防に用いられる弱毒生ワクチンはどれか。',
 124:'遺伝情報を長期的に保存し、複製して受け渡す核酸はどれか。',
 125:'遺伝情報の伝達や、ウイルスの遺伝物質として重要な核酸はどれか。',
 126:'尖圭コンジローマや子宮頸がんとの関連が深いウイルスはどれか。',
 127:'手袋・マスク・ガウン・フェイスシールドなどの防護具をまとめた呼び方はどれか。',
 128:'体内で免疫反応を起こす、病原体の成分などの物質はどれか。',
 129:'画面注視による眼の疲れや、同一姿勢による負担と関係する画像表示端末はどれか。',
 130:'抗原に反応して作られ、病原体や毒素の働きを抑えるたんぱく質はどれか。',
 131:'生まれつき備わり、病原体や異物へすばやく反応する免疫はどれか。',
 132:'乳幼児に細気管支炎などの呼吸器感染症を起こすウイルスはどれか。',
 133:'感染やワクチン接種をきっかけに成立し、特定の抗原へ反応する免疫はどれか。',
 134:'殺菌灯に利用され、過度の曝露で紅斑や皮膚障害を起こす光線はどれか。',
 135:'病原体や毒素の一部などを用いて、免疫をつけるための製剤はどれか。',
 161:'病原体を体内に保有し、感染源となり得る人を表す日本語はどれか。',
 162:'病原体を体内に保有し、他者へ伝播させる可能性がある人を表す語はどれか。',
 186:'人と動物の双方に感染する病原体によって起こる感染症はどれか。',
 200:'血液が手指、器具、衣類、環境表面などに付着した状態はどれか。',
 201:'咳やくしゃみの際に口と鼻を覆い、飛沫の拡散を防ぐ行動はどれか。',
 202:'室内の空気を入れ替え、空気中の病原体濃度を下げる対策はどれか。',
 203:'清潔な器具や材料を汚染させないように取り扱う操作はどれか。',
 204:'血液や体液で汚染された物を、安全に回収・洗浄・消毒または廃棄する対応はどれか。',
 205:'感染症の予防と患者に対する医療に必要な措置を定める法律はどれか。',
 673:'病原体を運び、人へ伝える動物や昆虫はどれか。'
};
const preventionSpecialOptions={
 118:['AIDS','不顕性感染','日和見感染','院内感染'],
 119:['MRSA','MSSA','VRE','VRSA'],
 120:['WHO','保健所','地方衛生研究所','消費生活センター'],
 121:['QOL','ADL','健康寿命','平均寿命'],
 122:['BMI','ローレル指数','体脂肪率','標準体重'],
 123:['BCG','MRワクチン','日本脳炎ワクチン','インフルエンザワクチン'],
 124:['DNA','RNA','たんぱく質','脂質'],
 125:['RNA','DNA','たんぱく質','脂質'],
 127:['個人防護具（PPE）','手指衛生','標準予防策','感染経路別予防策'],
 129:['VDT','紫外線照射装置','高圧蒸気滅菌器','換気設備'],
 134:['UV','赤外線','可視光線','X線'],
 161:['保菌者','感染源','感受性宿主','患者'],
 162:['キャリア','ベクター','リザーバー','ホスト'],
 186:['人獣共通感染症','動物由来感染','虫媒介感染','食品媒介感染'],
 200:['血液汚染','体液汚染','器具汚染','環境汚染'],
 201:['咳エチケット','手指衛生','個人防護具','換気による感染対策'],
 202:['換気による感染対策','咳エチケット','手指衛生','個人防護具'],
 203:['清潔操作','汚染物処理','手指衛生','器具の消毒'],
 204:['汚染物処理','清潔操作','手指衛生','換気による感染対策'],
 205:['感染症法','地域保健法','健康増進法','予防接種法'],
 207:['飛沫核','飛沫','エアロゾル','粉じん'],
 208:['エアロゾル','飛沫核','飛沫','粉じん'],
 673:['媒介動物','保有動物','宿主動物','感染動物']
};
const preventionTerms=new Map(data.terms.filter(term=>term.category==='感染症予防').map(term=>[Number(term.id),term]));
const preventionCleanDefinition=term=>{
 let description=String(term.definition||'').trim();
 for(const lead of [`${term.name}は、`,`${term.name}は`,`${term.name}とは、`,`${term.name}とは`]){
  if(description.startsWith(lead)){description=description.slice(lead.length);break}
 }
 return description.replace(/。+$/,'');
};
for(const ids of preventionGroups){
 for(let index=0;index<ids.length;index++){
  const id=ids[index],term=preventionTerms.get(id),item=q[id];
  if(!term||!item)continue;
  const peers=ids.filter(peerId=>peerId!==id).map(peerId=>preventionTerms.get(peerId)?.name).filter(Boolean);
  const distractors=[];
  for(let offset=0;offset<peers.length&&distractors.length<3;offset++)distractors.push(peers[(index+offset)%peers.length]);
  const question=preventionPromptOverrides[id]||`${preventionCleanDefinition(term)}。この説明に該当する用語はどれか。`;
  Object.assign(item,{question,correct:term.name,distractors,reverseLookup:true,source:'厚生労働省・国立健康危機管理研究機構・WHO公開資料'});
 }
}
for(const [idText,options] of Object.entries(preventionSpecialOptions)){
 const id=Number(idText),item=q[id];
 if(!item)continue;
 Object.assign(item,{question:preventionPromptOverrides[id]||item.question,correct:options[0],distractors:options.slice(1),reverseLookup:true,source:'厚生労働省・国立健康危機管理研究機構・WHO公開資料'});
}
for(const id of [128,130,131,133,135,168,169,170,171,206]){
 const term=preventionTerms.get(id),item=q[id];if(!term||!item)continue;
 item.question=preventionPromptOverrides[id]||`${preventionCleanDefinition(term)}。この説明に該当する用語はどれか。`;
}
for(const id of [665,666,667,668,669,670,671,672,674,675])q[id].reverseLookup=true;
for(const term of data.terms)if(term.category==='消毒法'&&q[term.id])q[term.id].reverseLookup=true;
for(const [id,item] of publicHealthQuestions){q[id]=item;q[id].reverseLookup=true}
// Version 3.0.85: 最終内容監査で、論点・単位が不揃いだった消毒法の誤答を修正。
set(211,'別名を2-プロパノールといい、消毒に用いられるアルコールはどれか。','イソプロパノール',['エタノール','メタノール']);
set(213,'塩素系消毒薬の水溶液中で、殺菌作用の中心となる成分はどれか。','次亜塩素酸',['次亜塩素酸イオン','塩化物イオン']);
set(215,'ヨウ素をアルコールに溶かした消毒薬はどれか。','ヨードチンキ',['ポビドンヨード','次亜塩素酸ナトリウム']);
set(217,'血液が付着していない器具をグルコン酸クロルヘキシジンで消毒する条件はどれか。','0.05％液に10分間以上浸す',['0.01％液に10分間以上浸す','0.5％液に5分間以上浸す']);
set(219,'第四級アンモニウム塩系で、逆性石けんに分類される消毒薬はどれか。','塩化ベンゼトニウム',['塩化ベンザルコニウム','グルコン酸クロルヘキシジン']);
set(226,'器具の消毒前に、汚れや有機物を落とすために用いる洗浄剤はどれか。','中性洗剤',['酵素洗浄剤','塩化ベンザルコニウム']);
set(227,'タンパク質や脂質などの汚れを分解しやすくする洗浄剤はどれか。','酵素洗浄剤',['中性洗剤','塩化ベンザルコニウム']);
set(233,'水や洗剤を用いて、汚れや有機物を物理的に取り除く操作はどれか。','洗浄',['清掃','消毒']);
set(235,'煮沸による器具消毒の条件はどれか。','沸騰後2分間以上煮沸する',['80℃を超える湯に10分間以上浸す','沸騰前から1分間以上加熱する']);
set(237,'熱湯を利用して微生物を減らす方法はどれか。','熱湯消毒',['煮沸消毒','蒸気消毒']);
set(240,'高圧下の飽和蒸気を用いる滅菌方法はどれか。','高圧蒸気滅菌',['乾熱滅菌','EOG滅菌']);
set(241,'高圧蒸気滅菌を行う装置はどれか。','オートクレーブ',['乾熱滅菌器','紫外線殺菌灯']);
set(242,'紫外線による器具消毒の条件はどれか。','1平方センチメートル当たり85マイクロワット以上で20分間以上照射する',['1平方センチメートル当たり85マイクロワット以上で10分間以上照射する','1平方センチメートル当たり50マイクロワット以上で20分間以上照射する']);
set(247,'一般細菌などには有効だが、芽胞や結核菌には弱い消毒水準はどれか。','低水準消毒',['中水準消毒','高水準消毒']);
set(248,'一部の細菌がつくる、消毒薬や熱への抵抗性が高い構造はどれか。','芽胞',['栄養型細菌','バイオフィルム']);
set(249,'環境条件が悪化すると、耐久性の高い構造をつくる細菌はどれか。','芽胞形成菌',['一般細菌','栄養型細菌']);
set(252,'実際に器具などの処理へ用いる時点の薬液濃度はどれか。','使用濃度',['原液濃度','希釈倍率']);
set(254,'施設・器具・従業者・作業環境を清潔で安全に保つ管理はどれか。','衛生管理',['健康管理','作業管理']);
set(256,'手指に消毒薬を用いて微生物を減らす方法はどれか。','手指消毒',['手洗い','衛生的手洗い']);
set(259,'衣服や皮膚を血液・体液などの汚染から守る防護具はどれか。','ガウン',['手袋','フェイスシールド']);
set(261,'消毒済み器具や清潔な物品を扱う区域はどれか。','清潔区域',['汚染区域','準清潔区域']);
set(262,'使用済み器具や汚染物を扱う区域はどれか。','汚染区域',['清潔区域','準清潔区域']);
set(263,'理容作業を行う場所の衛生・安全・設備条件を表す用語はどれか。','作業環境',['作業管理','衛生管理']);
set(265,'窓などから自然光を取り入れることはどれか。','採光',['照明','換気']);
set(268,'室内の水蒸気量を適切に保つ管理はどれか。','湿度管理',['温度管理','換気管理']);
set(269,'廃棄物を種類や危険性に応じて分けて捨てることはどれか。','分別廃棄',['一括廃棄','再使用']);
set(272,'血液が皮膚・粘膜・傷口などに接触することはどれか。','血液暴露',['血液汚染','飛沫暴露']);
set(274,'人に感染症を起こす微生物の総称はどれか。','病原微生物',['常在微生物','非病原微生物']);
set(277,'単細胞性の真菌はどれか。','酵母',['糸状菌','細菌']);
set(278,'脂質性の膜をもつウイルスはどれか。','エンベロープウイルス',['ノンエンベロープウイルス','芽胞形成菌']);
set(279,'脂質性の膜をもたないウイルスはどれか。','ノンエンベロープウイルス',['エンベロープウイルス','芽胞形成菌']);
set(281,'抗菌薬などの薬剤が効きにくくなった細菌はどれか。','耐性菌',['一般細菌','栄養型細菌']);
set(283,'器具が接触する部位の感染リスクに応じて、必要な処理水準を選ぶ分類はどれか。','スポルディング分類',['感染経路別分類','病原体別分類']);
set(284,'消毒薬・熱・紫外線などが対象物へ実際に作用する時間はどれか。','接触時間',['消毒時間','保管時間']);
// 混同注意を利用した誤答候補の精度向上。
// 感染症法・感染症予防は現状を維持し、用語名を選ぶ問題だけを対象とする。
const distractorExcludedCategories=new Set(['感染症法','感染症予防']);
const quizTermsByName=new Map(data.terms.filter(term=>Number(term.id)>0).map(term=>[term.name,term]));
const uniqueValues=values=>values.filter((value,index,array)=>value&&array.indexOf(value)===index);
const mixupPeerNames=term=>uniqueValues((term.mixup||[]).flatMap(group=>(group.terms||[]).map(row=>row.name)).filter(name=>name!==term.name&&quizTermsByName.has(name)));
const sameCategoryCandidateNames=term=>data.terms
 .filter(candidate=>Number(candidate.id)>0&&candidate.category===term.category&&candidate.id!==term.id&&q[candidate.id])
 .map(candidate=>candidate.name);
const distractorTrialIds=new Set([229,231,232,233,417,418,419,426,427,434,436,476,477,478,479,480,506,507,529,530,551,555,567,570,571,572,583,589,623,624,625,688]);
for(const term of data.terms){
 const item=q[term.id];
 if(!item||!distractorTrialIds.has(Number(term.id))||distractorExcludedCategories.has(term.category)||item.correct!==term.name)continue;
 const preferred=mixupPeerNames(term);
 if(!preferred.length)continue;
 const existing=(item.distractors||[]).filter(name=>quizTermsByName.get(name)?.category===term.category);
 const fallback=sameCategoryCandidateNames(term);
 const candidates=uniqueValues([...preferred,...existing,...fallback]).filter(name=>name!==term.name);
 if(candidates.length>=2)item.distractors=candidates.slice(0,2);
}
// 今日の10語：誤答候補の品質を構造的に改善する。
// 感染症法・感染症予防は対象外。明確な混同群または同種語が2件以上ある場合だけ置き換える。
const explicitChoiceGroups=[
 ['健康寿命','平均寿命','平均余命'],
 ['保湿剤','湿潤剤','エモリエント剤','防湿剤'],
 ['紫外線吸収剤','紫外線散乱剤','酸化防止剤'],
 ['シェービングブラシ','ラザー','シェービングフォーム'],
 ['バックブラシ','テンション','オーバーダイレクション'],
 ['健康相談','健康診査','保健指導','健康教育'],
 ['グラデーション','レイヤー','ワンレングス'],
 ['アップステム','ダウンステム','オーバーダイレクション'],
 ['トラベリングガイド','ステーショナリーガイド','ガイド'],
 ['シザーズ','セニングシザーズ','クリッパー'],
 ['パーマネントウェーブ','ヘアカラー技術','ブリーチ技術'],
 ['PG','BG','グリセリン'],
 ['還元剤','酸化剤','脱色剤'],
 ['陰イオン界面活性剤','陽イオン界面活性剤','非イオン界面活性剤','両性界面活性剤']
];
const explicitChoicePeers=new Map();
for(const group of explicitChoiceGroups)for(const name of group)explicitChoicePeers.set(name,group.filter(peer=>peer!==name&&quizTermsByName.has(peer)));
const choiceSuffixes=['ブラシ','寿命','余命','技術','事業','相談','診査','教育','指導','剤','薬','法','率','指数','対策','感染','消毒','滅菌','洗浄','区域','管理','細胞','組織','層','腺','筋','期','波','光線','器','装置','方法','分類','濃度','時間','温度','湿度','反応','結合','成分','色素','染料','ウェーブ','カット','ガイド'];
const choiceType=name=>choiceSuffixes.find(suffix=>String(name).endsWith(suffix))||'';
for(const term of data.terms){
 const item=q[term.id];
 if(!item||distractorExcludedCategories.has(term.category)||item.correct!==term.name)continue;
 const explicit=explicitChoicePeers.get(term.name)||[];
 const mixed=mixupPeerNames(term);
 const type=choiceType(term.name);
 const typed=type?sameCategoryCandidateNames(term).filter(name=>choiceType(name)===type):[];
 const strong=uniqueValues([...explicit,...mixed,...typed]).filter(name=>name!==term.name);
 if(strong.length<2)continue;
 const existing=(item.distractors||[]).filter(name=>quizTermsByName.has(name));
 item.distractors=uniqueValues([...strong,...existing]).slice(0,2);
}
// 個別監査で、問題文と正答語の重複・上位概念と下位概念の混在が確認できた問題を修正。
if(q[600])Object.assign(q[600],{
 question:'特定の光エネルギーを取り込み、熱などへ変換して皮膚や製品を保護する成分。この説明に当てはまる用語はどれか。',
 correct:'紫外線吸収剤',distractors:['紫外線散乱剤','酸化防止剤'],reverseLookup:true
});
if(q[541])Object.assign(q[541],{
 question:'水分を引き寄せて保持し、乾燥を防ぐために配合する成分。この説明に当てはまる用語はどれか。',
 correct:'湿潤剤',distractors:['保湿剤','エモリエント剤'],reverseLookup:true
});
if(q[643])Object.assign(q[643],{
 question:'せっけんを泡立て、その泡を皮膚へ塗布するために用いる道具はどれか。',
 correct:'シェービングブラシ',distractors:['ラザー','シェービングフォーム'],reverseLookup:true
});
if(q[650])Object.assign(q[650],{
 question:'毛髪を生え方と反対方向へとかし、根元にボリュームや支えをつくる操作はどれか。',
 correct:'バックブラシ',distractors:['テンション','オーバーダイレクション'],reverseLookup:true
});
if(q[303])Object.assign(q[303],{
 question:'保健事業について正しい説明はどれか。',
 correct:'住民の健康を守るため、健康相談、保健指導、健康診査、健康教育などを行う事業',
 distractors:['個人の相談内容に応じて、生活習慣や健康管理の方法を助言する活動','健康状態を把握するため、診察や検査などを行う活動'],
 reverseLookup:false
});
// Version 3.0.83: 実表示も全問3択とし、選択肢末尾の句点を除去する。
for(const item of Object.values(q)){
 if(!item)continue;
 item.correct=String(item.correct||'').replace(/[。．]+$/u,'');
 item.distractors=(item.distractors||[]).slice(0,2).map(value=>String(value||'').replace(/[。．]+$/u,''));
}
data.version='3.0.108';
quizData.version='3.0.108';
}
const APP_VERSION='3.0.191',STORAGE_KEY='riyoshi_glossary_learning_v1',TODAY_BOOKMARK_KEY='riyoshi_glossary_today_bookmarks_v1',TEXT_SCALE_KEY='riyoshi_glossary_text_enlarged_v1',TODAY_META_KEY='__today10',ROUND_META_KEY='__roundProgress',CATEGORY_ROUND_KEY='__categoryRounds',REVIEW_DATE='2026-07-17';
{const s=document.createElement('style');s.textContent='.mixup-comparison{text-align:left}.mixup-comparison-term{margin:0 0 16px!important}.mixup-term-name{margin:0 0 5px;font-weight:400}.mixup-comparison ul{margin:0;padding:0;list-style:none}.mixup-comparison li{display:flex;align-items:flex-start;text-align:left}.mixup-comparison li>span:first-child{flex:0 0 1em}.mixup-comparison li>span:last-child{flex:1;min-width:0}.mixup-memory{margin:20px 0 0!important}.mixup-memory>div{margin-bottom:5px}.mixup-memory p{display:flex;align-items:flex-start;margin:0;text-align:left;font-size:var(--font-lv4)}.mixup-memory p>span:first-child{flex:0 0 1em}.mixup-memory p>span:last-child{flex:1;min-width:0;font-size:var(--font-lv4)}.mixup-memory>div{font-size:var(--font-lv4)}.mixup-field>.term-value{padding-left:0}#dictionaryContent section > div[data-multiline]{text-align:left}#dictionaryContent section > ul[data-multiline]{text-align:left}.dictionary-sheet .exam-list{margin:0;padding-left:0;list-style:none}.dictionary-sheet .exam-list .exam-bullet{display:flex;align-items:flex-start;text-align:left}.dictionary-sheet .exam-list .exam-bullet>span[aria-hidden="true"]{flex:0 0 1em}.exam-bullet>.exam-line-text,.exam-bullet-line>.exam-line-text{flex:1 1 auto;min-width:0}.dictionary-sheet .exam-list .exam-plain{text-align:left}#dictionaryContent section>div{text-align:left}';document.head.append(s)}
const flashcardTerms=data.terms;
if(!(data.comparisonTerms||[]).some(term=>term.name==='非病原微生物')){
 data.comparisonTerms=[...(data.comparisonTerms||[]),{id:-49,name:'非病原微生物',reading:'',category:'混同注意',definition:'通常は人に感染症を起こさない微生物',aliases:[],exam:[],mixup:[],related:[],sources:[],status:'',sourceText:'',dictionary:{comparisonOnly:true}}];
}
if(!(data.comparisonTerms||[]).some(term=>term.name==='常在微生物')){
 data.comparisonTerms=[...(data.comparisonTerms||[]),{id:-50,name:'常在微生物',reading:'',category:'混同注意',definition:'皮膚や粘膜などに通常存在する微生物',aliases:['常在菌'],exam:[],mixup:[],related:[],sources:[],status:'',sourceText:'',dictionary:{comparisonOnly:true}}];
}
const dictionaryTerms=[...data.terms,...(data.comparisonTerms||[])];
const termById=new Map(dictionaryTerms.map(term=>[term.id,term]));
const countLines=text=>String(text||'').split('<br>').length;
const multilineAttr=text=>countLines(text)>1?' data-multiline':'';
for(const term of dictionaryTerms)term.dictionary={...(term.dictionary||{}),linkTarget:true,cardId:term.id,quizIds:q?.[term.id]?[term.id]:[]};
const dictionaryMatches=dictionaryTerms.flatMap(term=>[term.name,...(term.aliases||[])].filter(Boolean).map(text=>({text:String(text),term}))).sort((a,b)=>b.text.length-a.text.length);
const normalizeChoiceDictionaryText=value=>String(value||'').normalize('NFKC').replace(/[。．]+$/u,'').replace(/^[①②③1-3１-３][\.．、:：\s]*/u,'').replace(/\s+/g,'').toLocaleLowerCase('ja');
const choiceDictionaryTerms=new Map();
for(const term of dictionaryTerms){
 for(const value of [term.name,...(term.aliases||[])]){const key=normalizeChoiceDictionaryText(value);if(key&&!choiceDictionaryTerms.has(key))choiceDictionaryTerms.set(key,term)}
}
function choiceDictionaryTerm(value,fallbackTerm=null){
 const normalized=normalizeChoiceDictionaryText(value);
 const exact=choiceDictionaryTerms.get(normalized);
 return exact||fallbackTerm||null;
}
const pointDefinitionOverrides=new Map([
 [normalizeChoiceDictionaryText('使用濃度'),'消毒薬を実際に使用するときの濃度'],
 [normalizeChoiceDictionaryText('消毒時間'),'消毒処理の開始から終了までに要する時間を表す一般的な用語'],
 [normalizeChoiceDictionaryText('次亜塩素酸イオン'),'次亜塩素酸が水素イオンを放出して生じる陰イオン'],
 [normalizeChoiceDictionaryText('塩化物イオン'),'塩化物が水中で電離して生じる陰イオン'],
 [normalizeChoiceDictionaryText('乾熱滅菌器'),'高温の乾燥空気を用いて器具を滅菌する装置'],
 [normalizeChoiceDictionaryText('作業管理'),'作業方法や作業時間などを適切に管理し、健康障害を防ぐこと'],
 [normalizeChoiceDictionaryText('準清潔区域'),'洗浄後の器具などを扱い、清潔区域と汚染区域の間に位置する区域'],
 [normalizeChoiceDictionaryText('温度管理'),'室温を作業や衛生に適した範囲へ保つこと'],
 [normalizeChoiceDictionaryText('湿度管理'),'室内の湿度を作業や衛生に適した範囲へ保つこと'],
 [normalizeChoiceDictionaryText('一括廃棄'),'廃棄物を種類や危険性で分けずにまとめて廃棄すること'],
 [normalizeChoiceDictionaryText('再使用'),'一度使用した物を、必要な処理を行って再び使用すること'],
 [normalizeChoiceDictionaryText('飛沫暴露'),'血液や体液などの飛沫が皮膚や粘膜へ接触すること'],
 [normalizeChoiceDictionaryText('糸状菌'),'菌糸を形成して増殖する真菌'],
 [normalizeChoiceDictionaryText('感染経路別分類'),'病原体が伝わる経路に基づいて分類する方法'],
 [normalizeChoiceDictionaryText('病原体別分類'),'細菌・ウイルス・真菌など病原体の種類に基づいて分類する方法'],
 [normalizeChoiceDictionaryText('保管時間'),'器具や物品を保管している時間'],
 [normalizeChoiceDictionaryText('健康診断の勧告'),'健康診断を受けるよう勧めること'],
 [normalizeChoiceDictionaryText('物件の廃棄命令'),'感染症の病原体に汚染された物件の廃棄を命じる措置'],
 [normalizeChoiceDictionaryText('交通の制限'),'感染症のまん延防止のため人や物の移動を制限する措置'],
 [normalizeChoiceDictionaryText('患者'),'感染症にかかり、症状または所見が認められる人'],
 [normalizeChoiceDictionaryText('入院届'),'入院した事実を所定の機関へ届け出ること'],
 [normalizeChoiceDictionaryText('退院届'),'退院した事実を所定の機関へ届け出ること'],
 [normalizeChoiceDictionaryText('感染症指定医療機関の報告義務'),'指定医療機関が所定の事項を関係機関へ報告する義務'],
 [normalizeChoiceDictionaryText('都道府県知事の通知義務'),'都道府県知事が所定の事項を関係機関へ通知する義務']
]);
let dictionaryReturn=null,dictionaryHistory=[],dictionaryHistoryIndex=-1,dictionaryOriginScrollY=0;
function dictionaryText(value,currentId=0){
 const template=document.createElement('template');
 template.innerHTML=String(value||'');
 const used=new Set(),walker=document.createTreeWalker(template.content,NodeFilter.SHOW_TEXT);
 const textNodes=[];
 while(walker.nextNode())textNodes.push(walker.currentNode);
 for(const textNode of textNodes){
  if(textNode.parentElement?.closest('button,a,script,style'))continue;
  const text=textNode.nodeValue||'',hits=[];
  for(let cursor=0;cursor<text.length;){
   let best=null;
   for(const match of dictionaryMatches){
    if(match.term.id===Number(currentId)||used.has(match.term.id))continue;
    const index=text.indexOf(match.text,cursor);
    if(index<0)continue;
    if(!best||index<best.index||(index===best.index&&match.text.length>best.match.text.length))best={index,match};
   }
   if(!best)break;
   hits.push(best);used.add(best.match.term.id);cursor=best.index+best.match.text.length;
  }
  if(!hits.length)continue;
  const fragment=document.createDocumentFragment();
  let cursor=0;
  for(const hit of hits){
   if(hit.index>cursor)fragment.append(document.createTextNode(text.slice(cursor,hit.index)));
   const button=document.createElement('button');
   button.type='button';button.className='dictionary-link';button.textContent=displayText(hit.match.text);
   button.dataset.dictionaryId=hit.match.term.id;
   fragment.append(button);cursor=hit.index+hit.match.text.length;
  }
  if(cursor<text.length)fragment.append(document.createTextNode(text.slice(cursor)));
  textNode.replaceWith(fragment);
 }
 const displayWalker=document.createTreeWalker(template.content,NodeFilter.SHOW_TEXT);
 while(displayWalker.nextNode())displayWalker.currentNode.nodeValue=displayText(displayWalker.currentNode.nodeValue);
 return template.innerHTML;
}
function mixupComparisonHtml(term,linkable=true){
 const group=term.mixup?.find?.(item=>item&&typeof item==='object'&&Array.isArray(item.terms));
 if(!group)return '';
 const render=value=>linkable?dictionaryText(value,term.id):esc(value);
 return `<div class="mixup-comparison" data-multiline>${group.terms.map(item=>`<section class="mixup-comparison-term"><div class="mixup-term-name">${render(item.name)}</div><ul>${(item.points||[]).map(point=>`<li><span aria-hidden="true">・</span><span>${render(String(point).replace(/^・/u,''))}</span></li>`).join('')}</ul></section>`).join('')}<section class="mixup-memory"><div>${sectionHeading('memory')}</div>${(group.memory||[]).map(value=>`<p><span aria-hidden="true">・</span><span>${esc(String(value).replace(/^・/u,''))}</span></p>`).join('')}</section></div>`;
}
function mixupFieldHtml(term,heading='div',linkable=true){
 const body=mixupComparisonHtml(term,linkable);
 if(!body)return '';
 return `<div class="term-field mixup-field"><${heading} class="term-label mixup">${heading==='h2'?sectionHeading('mixup'):esc(sectionHeading('mixup'))}</${heading}><div class="term-value" data-multiline>${body}</div></div>`;
}
function dictionaryReferences(values,term){
 const seen=new Set();
 return (values||[]).map(value=>typeof value==='number'?termById.get(value):data.terms.find(item=>item.name===String(value).split('：')[0]||item.aliases?.includes(String(value)))).filter(item=>item&&item.id!==term.id&&!seen.has(item.id)&&seen.add(item.id));
}
function dictionaryFieldHtml(term){
 const id=term.id;
 const definition=term.definition||term.meaning||'';
 const symptoms=termSymptoms(term);
 const exam=term.exam||[];
 const mixup=term.mixup||[];
 const related=dictionaryReferences(term.relatedIds||term.relatedTerms||term.related||[],term);
 return `${definition?`<section><h3>${sectionHeading('definition')}</h3><div${multilineAttr(definition)}>${dictionaryText(definition,id)}</div></section>`:''}${symptoms.length?`<section><h3>${sectionHeading('symptoms')}</h3>${symptomListHtml(symptoms,id,true)}</section>`:''}${exam.length?`<section><h3>${sectionHeading('exam')}</h3><div${exam.length>1?' data-multiline':''}>${exam.map(value=>{const bullet=value.startsWith('・'),text=bullet?value.slice(1).trimStart():value;return `<div class="${bullet?'exam-bullet-line':'exam-plain-line'}">${bullet?'<span aria-hidden="true">・</span>':''}<span class="exam-line-text">${dictionaryText(text,id)}</span></div>`}).join('')}</div></section>`:''}${mixup.length?`<section><h3>${sectionHeading('mixup')}</h3>${mixupComparisonHtml(term,true)}</section>`:''}${related.length?`<section><h3>関連語</h3><div class="dictionary-related">${related.map(item=>`<button type="button" onclick="Glossary.openDictionary(${item.id},event)">${esc(item.name)}</button>`).join('')}</div></section>`:''}`;
}
function dictionarySourceHtml(term){
 const links=(term.sources||[]).map(source=>source.url?`<a href="${esc(source.url)}" target="_blank" rel="noopener">${esc(source.label)}</a>`:esc(source.label)).join('<br>');
 if(!term.sourceText&&!links&&!term.status)return '';
 return `<section><h3>出典・監修状態</h3><div class="dictionary-source">${term.sourceText?esc(term.sourceText):''}${links?`${term.sourceText?'<br>':''}${links}`:''}${term.status?`<br><span class="review-pill">${esc(term.status)}</span>　基準日：${REVIEW_DATE}`:''}</div></section>`;
}
function ensureDictionaryModal(){
 let modal=document.getElementById('dictionaryModal');
 if(modal)return modal;
 modal=document.createElement('div');modal.id='dictionaryModal';modal.className='dictionary-modal';modal.hidden=true;
 modal.innerHTML='<div class="dictionary-backdrop" data-dictionary-close></div><section class="dictionary-sheet" role="dialog" aria-modal="true" aria-labelledby="dictionaryTitle"><div class="dictionary-toolbar"><button type="button" class="dictionary-back" onclick="Glossary.dictionaryBack()" aria-label="1つ前の用語へ戻る">‹ 戻る</button><button type="button" class="dictionary-close" data-dictionary-close aria-label="閉じる">×</button></div><div class="dictionary-sheet-scroll" id="dictionaryContent"></div></section>';
 modal.addEventListener('click',event=>{if(event.target.closest('[data-dictionary-close]'))closeDictionary()});
 const sheet=modal.querySelector('.dictionary-sheet'),scroll=modal.querySelector('.dictionary-sheet-scroll');
 let startX=0,startY=0,startedAtTop=false,tracking=false,locked=false;
 sheet.addEventListener('touchstart',event=>{if(event.touches.length!==1||locked)return;const touch=event.touches[0];startX=touch.clientX;startY=touch.clientY;startedAtTop=scroll.scrollTop<=1;tracking=true},{passive:true});
 sheet.addEventListener('touchcancel',()=>{tracking=false},{passive:true});
 sheet.addEventListener('touchend',event=>{if(!tracking||locked)return;tracking=false;const touch=event.changedTouches[0];if(!touch||!startedAtTop)return;const dx=touch.clientX-startX,dy=touch.clientY-startY;if(dy<90||dy<=Math.abs(dx)*1.25)return;locked=true;closeDictionary();setTimeout(()=>{locked=false},400)},{passive:true});
 document.body.appendChild(modal);return modal;
}
function renderDictionaryTerm(term){
 const modal=ensureDictionaryModal(),back=modal.querySelector('.dictionary-back'),content=modal.querySelector('#dictionaryContent');
 back.disabled=dictionaryHistoryIndex<=0;back.hidden=dictionaryHistoryIndex<=0;
 content.innerHTML=`<div class="dictionary-category">${esc(term.category)}</div><h2 id="dictionaryTitle">${esc(term.name)}</h2>${term.reading?`<div class="dictionary-reading">${esc(term.reading)}</div>`:''}${dictionaryFieldHtml(term)}${dictionarySourceHtml(term)}`;
 content.scrollTop=0;
}
function openDictionary(id,event){
 event?.preventDefault();event?.stopPropagation();
 const term=termById.get(Number(id));if(!term)return;
 const modal=ensureDictionaryModal();
 if(modal.hidden){dictionaryHistory=[];dictionaryHistoryIndex=-1;dictionaryOriginScrollY=window.scrollY;}
 dictionaryHistory.splice(dictionaryHistoryIndex+1);dictionaryHistory.push(term.id);dictionaryHistoryIndex=dictionaryHistory.length-1;
 renderDictionaryTerm(term);modal.hidden=false;document.body.classList.add('dictionary-open');
}
function dictionaryBack(){
 if(dictionaryHistoryIndex<=0)return;
 dictionaryHistoryIndex--;
 const term=termById.get(dictionaryHistory[dictionaryHistoryIndex]);if(term)renderDictionaryTerm(term);
}
function closeDictionary(){
 const modal=document.getElementById('dictionaryModal');if(modal)modal.hidden=true;
 document.body.classList.remove('dictionary-open');dictionaryHistory=[];dictionaryHistoryIndex=-1;
 requestAnimationFrame(()=>scrollTo(0,dictionaryOriginScrollY));
}
function saveDictionaryReturn(){dictionaryReturn={html:app.innerHTML,screen,scrollY:window.scrollY,flashcardMode,reverseMode};closeDictionary()}
function dictionaryToCard(id){saveDictionaryReturn();startFlashcards(Number(id))}
function dictionaryToQuiz(id){const term=termById.get(Number(id));if(!term||!q?.[term.id])return;saveDictionaryReturn();reverseMode=false;startSession([term],'3択で確認',true,'','dictionaryCheck')}
function restoreDictionaryReturn(){
 if(!dictionaryReturn)return false;
 const saved=dictionaryReturn;dictionaryReturn=null;setAppScreen(saved.screen,{preserveReturn:true});flashcardMode=saved.flashcardMode;reverseMode=saved.reverseMode;app.innerHTML=saved.html;syncFloatingNav();
 if(flashcardMode&&document.querySelector('.learning-card'))bindLearningCardFlick();
 requestAnimationFrame(()=>scrollTo(0,saved.scrollY));return true;
}
const states={safe:'安心',caution:'勘',danger:'無理'};
const VIEW_STATE_KEY='riyoshi_glossary_view_v1';
let learning=loadLearning(),saveTimer=0,screen='home',listTerms=[],session=[],sessionIndex=0,revealed=false,hintVisible=false,flashStage=0,assessedCurrent=false,sessionStats=null,todayQuizMode=false,isTodaySession=false,statusSessionMode=false,sessionModeKey='',todayAnswers=new Map(),sessionId='',evaluatedIds=new Set(),flashcardMode=false,reverseMode=false,reverseRevealed=false,flashSwipeLocked=false,flashSuppressClickUntil=0;

const APP_SCREEN=Object.freeze({HOME:'home',SESSION:'session',RESULT:'result',BOOKMARK:'bookmark',TODAY_BOOKMARKS:'today-bookmarks',ROUND_MISTAKES:'round-mistakes',STATUS_LIST:'status-list'});
const appSessionContext={currentScreen:APP_SCREEN.HOME,previousScreen:null,returnScreen:APP_SCREEN.HOME,returnScrollY:0,returnData:{}};
function setAppScreen(next,{returnScreen,returnScrollY,returnData,preserveReturn=false}={}){
 const previous=appSessionContext.currentScreen;
 appSessionContext.previousScreen=previous;
 appSessionContext.currentScreen=next;
 if(!preserveReturn){
  appSessionContext.returnScreen=returnScreen??(next===APP_SCREEN.HOME?APP_SCREEN.HOME:previous||APP_SCREEN.HOME);
  appSessionContext.returnScrollY=Math.max(0,Number(returnScrollY??window.scrollY)||0);
  appSessionContext.returnData={...(returnData||{})};
 }
 screen=next;
}
function resetAppSessionContext(){
 appSessionContext.currentScreen=APP_SCREEN.HOME;
 appSessionContext.previousScreen=null;
 appSessionContext.returnScreen=APP_SCREEN.HOME;
 appSessionContext.returnScrollY=0;
 appSessionContext.returnData={};
}
function goHome(){
 const modal=document.getElementById('dictionaryModal');
 if(modal)modal.hidden=true;
 document.body.classList.remove('dictionary-open');
 dictionaryHistory=[];dictionaryHistoryIndex=-1;dictionaryReturn=null;sessionContext=null;
 if(isTodaySession){todayMeta().activeSession=null;saveTodayMeta()}
 flashcardMode=false;reverseMode=false;isTodaySession=false;todayQuizMode=false;sessionModeKey='';
 resetAppSessionContext();renderHome();scrollTo(0,0);
}
function goBack(){
 if(restoreDictionaryReturn())return;
 if(screen!==APP_SCREEN.HOME)exitCurrent();
}
function displayText(value){return String(value??'').replace(/[Ａ-Ｚａ-ｚ０-９]/g,ch=>String.fromCharCode(ch.charCodeAt(0)-0xFEE0))}
const SECTION_HEADINGS=Object.freeze({definition:'★定義★',symptoms:'★代表症状★',exam:'★試験の要点★',mixup:'★混同注意★',memory:'★覚え方★'});function sectionHeading(key){return SECTION_HEADINGS[key]||''}
const DISEASE_PROFILE_HEADINGS=Object.freeze({officialName:'■正式名称■',alias:'■別名・通称■',classification:'■感染症法上の分類■',route:'■主な感染経路■',symptoms:'■主な症状■'});function diseaseProfileHeading(key){return DISEASE_PROFILE_HEADINGS[key]||''}
function esc(value){return displayText(value).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]))}
function loadLearning(){try{const value=JSON.parse(localStorage.getItem(STORAGE_KEY)||'{}');return value&&typeof value==='object'&&!Array.isArray(value)?value:{}}catch(_){return{}}}
function loadTextEnlarged(){try{return localStorage.getItem(TEXT_SCALE_KEY)==='1'}catch(_){return false}}
let textEnlarged=loadTextEnlarged();
function applyTextEnlarged(){document.documentElement.classList.toggle('text-enlarged',textEnlarged)}
function toggleTextEnlarged(){textEnlarged=!textEnlarged;try{localStorage.setItem(TEXT_SCALE_KEY,textEnlarged?'1':'0')}catch(_){}applyTextEnlarged();const control=document.getElementById('textEnlargeToggle');if(control){control.setAttribute('aria-checked',String(textEnlarged));control.classList.toggle('is-on',textEnlarged);const state=control.querySelector('.text-enlarge-state');if(state)state.textContent=textEnlarged?'ON':'OFF'}}
applyTextEnlarged();
function loadTodayBookmarks(){try{const value=JSON.parse(localStorage.getItem(TODAY_BOOKMARK_KEY)||'[]');return new Set(Array.isArray(value)?value.map(Number).filter(id=>Number.isInteger(id)&&q[id]):[])}catch(_){return new Set()}}
let todayBookmarks=loadTodayBookmarks();
function saveTodayBookmarks(){try{localStorage.setItem(TODAY_BOOKMARK_KEY,JSON.stringify([...todayBookmarks]))}catch(_){}}
function isTodayBookmarked(id){return todayBookmarks.has(Number(id))}
function toggleTodayBookmark(id,event){event?.preventDefault();event?.stopPropagation();id=Number(id);if(!q[id])return;if(todayBookmarks.has(id))todayBookmarks.delete(id);else todayBookmarks.add(id);saveTodayBookmarks();if(screen==='today-bookmarks')renderTodayBookmarks();else if(screen==='session'&&(isTodaySession||sessionModeKey==='roundMistakes'))renderSession();else renderHome()}
function flushLearning(){if(saveTimer){clearTimeout(saveTimer);saveTimer=0}try{localStorage.setItem(STORAGE_KEY,JSON.stringify(learning));return true}catch(_){return false}}
function saveLearning(){if(saveTimer)return;saveTimer=setTimeout(flushLearning,40)}
addEventListener('pagehide',flushLearning);document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden')flushLearning()});
function stateKey(term){return `v136-${term.id}`}
function normalizeState(value={}){return{...value,status:value.status==='unable'?'danger':value.status,history:Array.isArray(value.history)?value.history:[],recentAnswers:Array.isArray(value.recentAnswers)?value.recentAnswers.slice(-5):[],quizCorrect:Number(value.quizCorrect)||0,quizWrong:Number(value.quizWrong)||0,studyCount:Number(value.studyCount)||0}}
const normalizedKeys=new Set();
function termState(term){const key=stateKey(term);if(learning[key]){if(!normalizedKeys.has(key)){learning[key]=normalizeState(learning[key]);normalizedKeys.add(key)}return learning[key]}const old=learning[`v135-${term.id}`]||(term.legacyNumbers||[]).map(number=>learning[number]).find(Boolean);if(old){learning[key]=normalizeState(old);normalizedKeys.add(key);saveLearning();return learning[key]}return null}
function resultType(row){return row?.finalResult||row?.result||''}
function performanceFor(term){const rows=(termState(term)?.recentAnswers||[]).slice(-5),types=rows.map(resultType),first=types.filter(x=>x==='first_correct').length,rate=rows.length?Math.round(first/rows.length*100):null,lastTwo=types.slice(-2),twoBad=lastTwo.length===2&&lastTwo.every(x=>x==='wrong'||x==='unable');let level='none';if(twoBad)level='danger';else if(rows.length===0)level='none';else if(rows.length<5){if(types.some(x=>x==='wrong'||x==='unable'))level='caution';else if(types.every(x=>x==='first_correct'))level='safe';else level='caution'}else level=rate>=80?'safe':'caution';return{level,rows,rate,types}}
function finalPriority(term){const s=termState(term),self=s?.status==='unable'?'danger':s?.status||'',ability=performanceFor(term).level;if(!self&&ability==='none')return'unlearned';if(self==='danger'||ability==='danger')return'danger';if(self==='caution'||ability==='caution')return'caution';return'safe'}
let cachedToday='',cachedTodayAt=0;
function today(){const now=Date.now();if(cachedToday&&now-cachedTodayAt<60000)return cachedToday;const parts=new Intl.DateTimeFormat('en',{timeZone:'Asia/Tokyo',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date(now)),get=type=>parts.find(part=>part.type===type).value;cachedToday=`${get('year')}-${get('month')}-${get('day')}`;cachedTodayAt=now;return cachedToday}
function dateTime(){return new Date().toISOString()}
function emptyTodayMeta(){return{date:today(),dailyCounts:{},dailyTermIds:[],lastSession:{ids:[],results:{}},lastShown:{},countedSessionTerms:{},activeSession:null}}
function todayMeta(){const raw=learning[TODAY_META_KEY],base=emptyTodayMeta(),meta=raw&&typeof raw==='object'&&!Array.isArray(raw)?{...base,...raw}:base;if(meta.date!==today()){meta.date=today();meta.dailyCounts={};meta.dailyTermIds=[];meta.countedSessionTerms={}}meta.dailyCounts=meta.dailyCounts&&typeof meta.dailyCounts==='object'?meta.dailyCounts:{};meta.dailyTermIds=Array.isArray(meta.dailyTermIds)?meta.dailyTermIds:[];meta.countedSessionTerms=meta.countedSessionTerms&&typeof meta.countedSessionTerms==='object'?meta.countedSessionTerms:{};meta.lastSession=meta.lastSession&&typeof meta.lastSession==='object'?{ids:Array.isArray(meta.lastSession.ids)?meta.lastSession.ids:[],results:meta.lastSession.results&&typeof meta.lastSession.results==='object'?meta.lastSession.results:{}}:{ids:[],results:{}};meta.lastShown=meta.lastShown&&typeof meta.lastShown==='object'?meta.lastShown:{};learning[TODAY_META_KEY]=meta;return meta}
function saveTodayMeta(){todayMeta();saveLearning()}
function roundMeta(){const raw=learning[ROUND_META_KEY];if(raw&&typeof raw==='object'&&!Array.isArray(raw)){let changed=false;raw.history=Array.isArray(raw.history)?raw.history:[];raw.current=raw.current&&typeof raw.current==='object'&&!Array.isArray(raw.current)?raw.current:{answers:{},correctAnswers:{},wrongAnswers:{}};raw.current.answers=raw.current.answers&&typeof raw.current.answers==='object'&&!Array.isArray(raw.current.answers)?raw.current.answers:{};raw.current.correctAnswers=raw.current.correctAnswers&&typeof raw.current.correctAnswers==='object'&&!Array.isArray(raw.current.correctAnswers)?raw.current.correctAnswers:{};raw.current.wrongAnswers=raw.current.wrongAnswers&&typeof raw.current.wrongAnswers==='object'&&!Array.isArray(raw.current.wrongAnswers)?raw.current.wrongAnswers:{};if(Number(raw.schema)<4){const current=stats();if(current.total===data.terms.length&&current.unlearned===0){const corrected={round:1,at:'',safe:current.safe,caution:current.caution,danger:current.danger,unlearned:0,total:current.total};const firstIndex=raw.history.findIndex(item=>Number(item.round)===1);if(firstIndex<0)raw.history.unshift(corrected);else if(raw.history[firstIndex].partial||raw.history[firstIndex].recovered||Number(raw.history[firstIndex].unlearned)>0)raw.history[firstIndex]={...raw.history[firstIndex],...corrected,partial:false,recovered:false};changed=true}}raw.completed=raw.history.reduce((maximum,item)=>Math.max(maximum,Number(item.round)||0),0);if(Number(raw.schema)<5){const latest=[...raw.history].sort((a,b)=>(Number(b.round)||0)-(Number(a.round)||0))[0],currentAnswerCount=data.terms.reduce((count,term)=>count+(states[raw.current.answers[term.id]]?1:0),0),current=stats(),latestIsComplete=latest&&Number(latest.total)===data.terms.length&&Number(latest.unlearned)===0&&Number(latest.safe)+Number(latest.caution)+Number(latest.danger)===data.terms.length,currentMatchesLatest=latestIsComplete&&current.total===data.terms.length&&current.unlearned===0&&current.safe===Number(latest.safe)&&current.caution===Number(latest.caution)&&current.danger===Number(latest.danger);if(raw.completed>0&&currentAnswerCount===0&&currentMatchesLatest){resetCurrentRoundStatuses();changed=true}raw.schema=5;changed=true}if(Number(raw.schema)<6){const latest=[...raw.history].sort((a,b)=>(Number(b.round)||0)-(Number(a.round)||0))[0],cutoff=latest?.at||'',canMigrate=raw.completed===0||Boolean(cutoff);if(canMigrate)for(const term of data.terms){if(!states[raw.current.answers[term.id]])continue;const rows=termState(term)?.recentAnswers||[],answer=[...rows].reverse().find(row=>!cutoff||String(row.answeredAt||'')>cutoff),result=resultType(answer);if(result==='first_correct'||result==='second_correct')raw.current.correctAnswers[term.id]=true}raw.schema=6;changed=true}if(Number(raw.schema)<7){const latest=[...raw.history].sort((a,b)=>(Number(b.round)||0)-(Number(a.round)||0))[0],cutoff=latest?.at||'',canMigrateRows=raw.completed===0||Boolean(cutoff),active=todayMeta().activeSession?.answers||{};for(const term of data.terms){const id=term.id,rows=termState(term)?.recentAnswers||[],hasCurrent=states[raw.current.answers[id]]||Object.prototype.hasOwnProperty.call(raw.current.correctAnswers,id),wrongInRows=canMigrateRows&&hasCurrent&&rows.some(row=>(!cutoff||String(row.answeredAt||'')>cutoff)&&['second_correct','wrong','unable'].includes(resultType(row))),response=active[id],wrongInActive=Array.isArray(response?.attempts)&&Array.isArray(response?.options)&&response.attempts.some(index=>response.options[index]?.correct===false);if(raw.current.correctAnswers[id]===false||wrongInRows||wrongInActive)raw.current.wrongAnswers[id]=true}raw.schema=7;changed=true}if(changed)saveLearning();return raw}return learning[ROUND_META_KEY]={schema:7,completed:0,history:[],current:{answers:{},correctAnswers:{},wrongAnswers:{}}}}
function roundNumber(){return roundMeta().completed+1}
function lapLabel(value){const number=Math.max(1,Math.trunc(Number(value)||1)),mod100=number%100,mod10=number%10,suffix=mod100>=11&&mod100<=13?'th':mod10===1?'st':mod10===2?'nd':mod10===3?'rd':'th';return `${number}${suffix} lap`}
function globalCurrentBreakdown(){const answers=roundMeta().current.answers,counts={safe:0,caution:0,danger:0,unlearned:0};for(const term of data.terms){const status=answers[term.id];if(states[status])counts[status]++;else counts.unlearned++}return{...counts,total:data.terms.length}}
function resetCurrentRoundStatuses(){for(const term of data.terms){const key=stateKey(term),state=termState(term);if(!state||!states[state.status])continue;learning[key]={...state};delete learning[key].status;delete learning[key].performanceLevel}}
function recordGlobalRoundEvaluation(term,status){if(!term||!states[status]||isRoundMistakeReview())return;const meta=roundMeta(),answers=meta.current.answers;answers[term.id]=status;const breakdown=globalCurrentBreakdown();if(breakdown.unlearned===0){const completedRound=meta.completed+1,record={round:completedRound,at:dateTime(),safe:breakdown.safe,caution:breakdown.caution,danger:breakdown.danger,unlearned:0,total:breakdown.total};meta.history.push(record);if(!flushLearning()){meta.history.pop();saveLearning();return}let saved=false;try{const persisted=JSON.parse(localStorage.getItem(STORAGE_KEY)||'{}')?.[ROUND_META_KEY]?.history||[],item=persisted.find(value=>Number(value.round)===completedRound);saved=Boolean(item&&Number(item.safe)===record.safe&&Number(item.caution)===record.caution&&Number(item.danger)===record.danger&&Number(item.unlearned)===0&&Number(item.total)===record.total)}catch(_){}if(!saved){meta.history.pop();saveLearning();return}meta.completed=completedRound;meta.current={answers:{},correctAnswers:{},wrongAnswers:{}};resetCurrentRoundStatuses();flushLearning()}else saveLearning()}
function isRoundMistakeReview(){return screen===APP_SCREEN.SESSION&&sessionModeKey==='roundMistakes'}
function recordCurrentRoundMistake(term){if(!term||isRoundMistakeReview())return;const current=roundMeta().current;current.wrongAnswers[term.id]=true;saveLearning()}
function recordCurrentRoundQuizResult(term,result){if(!term||!result||isRoundMistakeReview())return;const correct=result==='first_correct'||result==='second_correct',current=roundMeta().current;if(['second_correct','wrong','unable'].includes(result))current.wrongAnswers[term.id]=true;if(correct)current.correctAnswers[term.id]=true;else if(current.correctAnswers[term.id]!==true)current.correctAnswers[term.id]=false;saveLearning()}
function countRoundProgress(response){if(response)response.roundCounted=true}
function categoryRoundMeta(){const raw=learning[CATEGORY_ROUND_KEY];if(raw&&typeof raw==='object'&&!Array.isArray(raw))return raw;return learning[CATEGORY_ROUND_KEY]={}}
function categoryRoundData(category){const meta=categoryRoundMeta(),raw=meta[category];if(raw&&typeof raw==='object'&&!Array.isArray(raw)){raw.completed=Math.max(0,Number(raw.completed)||0);raw.history=Array.isArray(raw.history)?raw.history:[];raw.current=raw.current&&typeof raw.current==='object'&&!Array.isArray(raw.current)?raw.current:{answers:{}};raw.current.answers=raw.current.answers&&typeof raw.current.answers==='object'&&!Array.isArray(raw.current.answers)?raw.current.answers:{};if(!raw.current.migrated){if(raw.completed===0){for(const term of data.terms.filter(item=>item.category===category)){const status=statusBucket(term);if(states[status])raw.current.answers[term.id]=status}}raw.current.migrated=true;saveLearning()}return raw}return meta[category]={completed:0,history:[],current:{answers:{},migrated:true}}}
function categoryBreakdown(terms){const counts={safe:0,caution:0,danger:0,unlearned:0};for(const term of terms)counts[statusBucket(term)]++;const total=terms.length||1;return{...counts,total:terms.length,safePct:Math.round(counts.safe/total*100),cautionPct:Math.round(counts.caution/total*100),dangerPct:Math.round(counts.danger/total*100),unlearnedPct:Math.round(counts.unlearned/total*100)}}
function categoryCurrentBreakdown(category,terms){const answers=categoryRoundData(category).current.answers,counts={safe:0,caution:0,danger:0,unlearned:0};for(const term of terms){const status=answers[term.id];if(states[status])counts[status]++;else counts.unlearned++}return{...counts,total:terms.length}}
function recordCategoryRoundEvaluation(term,status){if(!term||!states[status]||!q[term.id]||isRoundMistakeReview())return;const terms=data.terms.filter(item=>item.category===term.category&&q[item.id]),round=categoryRoundData(term.category),answers=round.current.answers;answers[term.id]=status;if(Object.keys(answers).filter(id=>terms.some(item=>item.id===Number(id))&&states[answers[id]]).length===terms.length){const breakdown=categoryCurrentBreakdown(term.category,terms);round.completed++;round.history.push({round:round.completed,at:dateTime(),safe:breakdown.safe,caution:breakdown.caution,danger:breakdown.danger,unlearned:0,total:breakdown.total});round.current={answers:{},migrated:true}}saveLearning();flushLearning()}
function latestAnswer(term){const rows=termState(term)?.recentAnswers||[];return rows.length?rows[rows.length-1]:null}
function statusBucket(term){const status=termState(term)?.status;return status==='unable'?'danger':states[status]?status:'unlearned'}
const EXAM_FIELDS=Object.freeze([
 {name:'関係法規・制度',description:'法律・資格制度の知識',categories:['消費者基本法','関係法規']},
 {name:'衛生管理',description:'衛生・感染症予防の知識',categories:['感染症法','感染症予防','消毒法','公衆衛生','環境衛生','地域保健法','健康増進法']},
 {name:'保健',description:'人体・皮膚の医学的基礎知識',categories:['人体','皮膚','毛髪'],sharedTermIds:[482]},
 {name:'香粧品化学',description:'化粧品・薬剤の成分知識',categories:['香粧品成分']},
 {name:'文化論',description:'歴史や文化的背景の知識',categories:['文化論']},
 {name:'運営管理',description:'経営・運営していく上で必要な知識',categories:['運営管理'],sharedTermIds:[287,365,370,390]},
 {name:'理容技術理論',description:'カットやパーマなど技術の理論',categories:['カッティング','理容技術','色彩']}
]);
function categoryStats(){const categoryOrder=EXAM_FIELDS.flatMap(field=>field.categories),byCategory=new Map();data.terms.forEach(term=>{if(!byCategory.has(term.category))byCategory.set(term.category,[]);byCategory.get(term.category).push(term)});const rows=[...byCategory.entries()].map(([category,terms])=>({category,terms,...categoryCurrentBreakdown(category,terms),round:categoryRoundData(category)}));rows.sort((a,b)=>categoryOrder.indexOf(a.category)-categoryOrder.indexOf(b.category));return rows}
function startCategoryWeak(category){const categoryTerms=data.terms.filter(term=>term.category===category&&q[term.id]);if(!categoryTerms.length){showStatusMessage(`「${category}」に該当する問題はありません`);return}categoryHomeScrollY=window.scrollY;startSession(shuffle([...categoryTerms]),`${category}の全問題`,true,'','categoryAll')}
function learningTermsForCategories(categories){const allowed=new Set(categories);return data.terms.filter(term=>allowed.has(term.category))}
function learningTermsForField(field){const shared=new Set(field?.sharedTermIds||[]);return data.terms.filter(term=>field?.categories.includes(term.category)||shared.has(Number(term.id)))}
function startGroupedQuiz(categories,label){const terms=learningTermsForCategories(categories).filter(term=>q[term.id]);if(!terms.length){showStatusMessage(`「${label}」に該当する問題はありません`);return}categoryHomeScrollY=window.scrollY;startSession(shuffle([...terms]),`${label}・3択`,true,'','categoryAll')}
function startGroupedLearning(categories,label,isReverse=false){const terms=learningTermsForCategories(categories);if(!terms.length){showStatusMessage(`「${label}」に該当する用語はありません`);return}categoryHomeScrollY=window.scrollY;beginLearningSession({entryType:LEARNING_ENTRY.DEFAULT,targetTerms:isReverse?randomizedLearningTerms(terms):shuffle([...terms]),startIndex:0,displayMode:isReverse?'reverse':'normal',returnScreen:LEARNING_RETURN.HOME,returnScrollY:categoryHomeScrollY,returnData:{}},{idPrefix:'group',modeKey:'groupLearning',label:`${label}・${isReverse?'逆引':'用語'}`,clearCategory:true})}
let fieldReturnIndex=-1;
function startFieldQuiz(index,event){event?.preventDefault();event?.stopPropagation();const field=EXAM_FIELDS[Number(index)];if(!field)return;const terms=learningTermsForField(field).filter(term=>q[term.id]);if(!terms.length){showStatusMessage(`「${field.name}」に該当する問題はありません`);return}fieldReturnIndex=event?.target?.closest('.field-row')?.open?Number(index):-1;categoryHomeScrollY=window.scrollY;startSession(shuffle([...terms]),`${field.name}・3択`,true,'','categoryAll')}
function startCategoryQuiz(category){if(!EXAM_FIELDS.some(field=>field.categories.includes(category)))return;startGroupedQuiz([category],category)}
function startFieldLearning(index,isReverse=false){const field=EXAM_FIELDS[Number(index)],terms=learningTermsForField(field);if(!field||!terms.length){if(field)showStatusMessage(`「${field.name}」に該当する用語はありません`);return}categoryHomeScrollY=window.scrollY;beginLearningSession({entryType:LEARNING_ENTRY.DEFAULT,targetTerms:isReverse?randomizedLearningTerms(terms):shuffle([...terms]),startIndex:0,displayMode:isReverse?'reverse':'normal',returnScreen:LEARNING_RETURN.HOME,returnScrollY:categoryHomeScrollY,returnData:{}},{idPrefix:'group',modeKey:'groupLearning',label:`${field.name}・${isReverse?'逆引':'用語'}`,clearCategory:true})}
function startCategoryLearning(category,isReverse=false){if(!EXAM_FIELDS.some(field=>field.categories.includes(category)))return;startGroupedLearning([category],category,isReverse)}
function resetCategoryLearning(category,event){event?.preventDefault();event?.stopPropagation();const terms=data.terms.filter(term=>term.category===category);if(!terms.length)return;if(!confirm(`「${category}」の評価履歴と周回履歴をリセットします。この操作は元に戻せません。`))return;for(const term of terms){delete learning[stateKey(term)];delete learning[`v135-${term.id}`];for(const number of term.legacyNumbers||[])delete learning[number];normalizedKeys.delete(stateKey(term))}const rounds=categoryRoundMeta();delete rounds[category];const current=roundMeta().current;for(const term of terms)delete current.wrongAnswers[term.id];saveLearning();flushLearning();renderHome()}
function percentSegment(cls,count,total){const width=Math.max(0,Number(count)||0)/total*100,label=Math.round(width);return width?`<span class="category-segment ${cls}" style="width:${width}%">${label>=9?`${label}%`:''}</span>`:''}
function categoryBarHtml(values){const total=Number(values.total)||1;return `<span class="category-row-bar">${percentSegment('safe',values.safe,total)}${percentSegment('caution',values.caution,total)}${percentSegment('danger',values.danger,total)}${percentSegment('unlearned',values.unlearned,total)}</span>`}
function resetIconHtml(){return `<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M25.5 12A10.5 10.5 0 0 0 7.8 7.7L5 10.5M5 10.5V5.8M5 10.5h4.7"/><path d="M6.5 20A10.5 10.5 0 0 0 24.2 24.3l2.8-2.8M27 21.5v4.7M27 21.5h-4.7"/></svg>`}
function categoryRowHtml(row){const currentRound=row.round.completed+1,history=[...row.round.history].reverse();return `<div class="category-row"><div class="category-row-main"><div class="category-row-study"><span class="category-row-heading"><span class="category-row-name">${esc(row.category)}：${row.total}語</span><span class="category-row-round">${lapLabel(currentRound)}</span></span>${categoryBarHtml(row)}</div><button type="button" class="category-reset-button" onclick="Glossary.resetCategoryLearning('${esc(row.category)}',event)" aria-label="${esc(row.category)}の成績をリセット">${resetIconHtml()}</button></div>${history.length?`<details class="category-history"><summary>過去の周回成績</summary>${history.map(item=>`<div class="category-history-row"><span>${lapLabel(item.round)}</span>${categoryBarHtml(item)}</div>`).join('')}</details>`:''}</div>`}
function sharedFieldRowHtml(field){const terms=data.terms.filter(term=>(field.sharedTermIds||[]).includes(Number(term.id)));if(!terms.length)return'';const values=categoryBreakdown(terms);return `<div class="category-row"><div class="category-row-main"><div class="category-row-study"><span class="category-row-heading"><span class="category-row-name">既存共有語：${terms.length}語</span></span>${categoryBarHtml(values)}</div><span aria-hidden="true"></span></div></div>`}
function categoryStatsHtml(){const rows=categoryStats(),total=rows.reduce((sum,row)=>sum+row.total,0),rowMap=new Map(rows.map(row=>[row.category,row]));return `<section class="category-stats"><h2 class="category-stats-title">科目別成績：計${total}語</h2>${EXAM_FIELDS.map((field,index)=>{const fieldRows=field.categories.map(category=>rowMap.get(category)).filter(Boolean),terms=learningTermsForField(field),breakdown=categoryBreakdown(terms),hasTerms=terms.length>0;return `<details class="field-row${hasTerms?'':' field-row-empty'}"${hasTerms?'':' aria-disabled="true"'} data-field-index="${index}"><summary><span class="field-row-heading"><span class="field-row-title"><span class="field-row-name">${esc(field.name)}</span><span class="field-row-description">${esc(field.description)}</span></span>${hasTerms?categoryBarHtml(breakdown):''}</span><button type="button" class="field-row-meta field-row-count" onclick="Glossary.startFieldQuiz(${index},event)" aria-label="${esc(field.name)}の${terms.length}語を3択で学習">${terms.length}語${hasTerms?'<span class="field-row-arrow" aria-hidden="true">›</span>':''}</button></summary>${hasTerms?`<div class="field-row-content">${fieldRows.map(categoryRowHtml).join('')}${sharedFieldRowHtml(field)}</div>`:''}</details>`}).join('')}</section>`}
function stats(terms=data.terms){let safe=0,caution=0,danger=0,correct=0,wrong=0,last='';for(const term of terms){const s=termState(term),bucket=statusBucket(term);if(bucket==='safe')safe++;else if(bucket==='caution')caution++;else if(bucket==='danger')danger++;correct+=Number(s?.quizCorrect)||0;wrong+=Number(s?.quizWrong)||0;if(s?.lastStudyAt&&s.lastStudyAt>last)last=s.lastStudyAt}const learned=safe+caution+danger,unlearned=terms.length-learned;return{total:terms.length,learned,unlearned,safe,caution,danger,correct,wrong,rate:correct+wrong?Math.round(correct/(correct+wrong)*100):0,last}}
function statusSummary(terms){const s=stats(terms),pct=s.total?Math.round(s.learned/s.total*100):0,action=status=>`Glossary.startStatus('${status}')`;return `<section class="summary-card"><div class="ring" style="--progress:${pct}%"><span>${pct}%</span></div><div><div class="summary-label">学習進捗</div><div class="summary-main">${s.learned} / ${s.total}語</div><div class="summary-sub">学習済み ${s.learned}語　未学習 ${s.unlearned}語<br>累計正答率 ${s.correct+s.wrong?s.rate+'％':'未解答'}</div></div></section><section class="status-grid"><button type="button" class="status-box safe" onclick="${action('safe')}" aria-label="安心 ${s.safe}語の一覧"><span class="status-dot"></span>安心<em>${s.safe}語</em></button><button type="button" class="status-box caution" onclick="${action('caution')}" aria-label="勘 ${s.caution}語の一覧"><span class="status-dot"></span>勘<em>${s.caution}語</em></button><button type="button" class="status-box danger" onclick="${action('danger')}" aria-label="無理 ${s.danger}語の一覧"><span class="status-dot"></span>無理<em>${s.danger}語</em></button></section><div class="progress-line"><i style="width:${pct}%"></i></div>`}
function summaryTerms(){return screen==='bookmark'?listTerms:data.terms}
function statusSort(){return(a,b)=>(termState(a)?.lastStudyAt||'').localeCompare(termState(b)?.lastStudyAt||'')||a.id-b.id}
function categoryRoundRobin(terms){const groups=data.categories.map(category=>terms.filter(term=>term.category===category)),result=[];let added=true;while(added){added=false;for(const group of groups){if(group.length){result.push(group.shift());added=true}}}return result}
function showStatusMessage(message){document.querySelector('.status-message')?.remove();const box=document.createElement('div');box.className='status-message';box.setAttribute('role','status');box.innerHTML=`<span>${esc(message)}</span><button type="button" aria-label="閉じる">×</button>`;box.querySelector('button').addEventListener('click',()=>box.remove());app.appendChild(box);box.querySelector('button').focus()}
function startStatusFrom(source,status){const seen=new Set(),matching=source.filter(term=>{if(seen.has(term.id))return false;seen.add(term.id);return statusBucket(term)===status}),ordered=matching.sort(statusSort(status)),labels={safe:'安心',caution:'勘',danger:'無理'};renderStatusList(status,ordered,labels[status])}
function startStatus(status){startStatusFrom(summaryTerms(),status)}
function saveViewState(value){try{sessionStorage.setItem(VIEW_STATE_KEY,JSON.stringify(value))}catch(_){}}
function clearViewState(){try{sessionStorage.removeItem(VIEW_STATE_KEY)}catch(_){}}
let activeStatusListKey='',activeStatusListLabel='';
function statusLearningListHtml(terms){return terms.length?terms.map(term=>`<button type="button" class="status-learning-list-item" onclick="Glossary.openStatusLearning(${term.id})"><span>${esc(term.name)}</span><small><span>問題 ${term.id}</span><span>${esc(term.category)}</span></small><span aria-hidden="true">›</span></button>`).join(''):'<div class="empty">対象の用語はありません。</div>'}
function renderStatusList(status,terms,label=states[status],restoreScroll=false){setAppScreen(APP_SCREEN.STATUS_LIST,{returnScreen:APP_SCREEN.HOME,preserveReturn:restoreScroll});flashcardMode=false;activeStatusListKey=status;activeStatusListLabel=label;listTerms=[...terms];app.innerHTML=`<section class="view-head"><span></span><h1>${esc(label)}の用語一覧</h1><span></span></section><div class="status-list-count">${terms.length}語</div><div id="list-container" class="status-learning-list">${statusLearningListHtml(terms)}</div>`;syncFloatingNav();requestAnimationFrame(()=>scrollTo(0,restoreScroll?statusListScrollY:0))}
function startStatusLearningSession(preferredId=0){if(!listTerms.length){renderStatusList(activeStatusListKey,[],activeStatusListLabel);return}statusListScrollY=window.scrollY;beginLearningSession({entryType:LEARNING_ENTRY.STATUS,targetTerms:listTerms,startIndex:indexForTerm(listTerms,preferredId),displayMode:'normal',returnScreen:LEARNING_RETURN.STATUS_LIST,returnScrollY:statusListScrollY,returnData:{status:activeStatusListKey,label:activeStatusListLabel}},{idPrefix:'sl',label:`${activeStatusListLabel}の用語`,sourceStatus:activeStatusListKey,statusSession:true})}
function restoreSavedView(){try{const value=JSON.parse(sessionStorage.getItem(VIEW_STATE_KEY)||'null');clearViewState();if(value?.reason!=='linked-page')return false;if(value.screen==='status-list'&&states[value.status]){const terms=data.terms.filter(term=>statusBucket(term)===value.status).sort(statusSort(value.status));renderStatusList(value.status,terms,states[value.status])}else if(value.screen==='bookmark')renderBookmark();else if(value.screen==='home')renderHome();else if(value.screen==='session'&&restoreActiveToday()){}else return false;requestAnimationFrame(()=>scrollTo(0,Number(value.scrollY)||0));return true}catch(_){clearViewState()}return false}
function modeTerms(){return todayTerms()}
function diversifyToday(ordered,limit=Infinity){const result=[],left=[...ordered];while(left.length&&result.length<limit){const recent=result.slice(-2).map(row=>row.category),index=left.findIndex(term=>!recent.includes(term.category));result.push(left.splice(index<0?0:index,1)[0])}return result}
const TODAY_NEW_TERM_FIRST_ID=700,TODAY_NEW_TERM_LAST_ID=818;
function prioritizedTodayCandidates(all,previous,round){const result=[],ids=new Set(),add=term=>{if(!ids.has(term.id)){result.push(term);ids.add(term.id)}};shuffle(all.filter(term=>(termState(term)?.recentAnswers||[]).length===0)).forEach(add);shuffle(all.filter(term=>states[round.answers[term.id]]&&!previous.has(term.id)&&['caution','danger'].includes(statusBucket(term)))).forEach(add);shuffle(all.filter(term=>!states[round.answers[term.id]]&&!previous.has(term.id))).forEach(add);shuffle(all.filter(term=>states[round.answers[term.id]]&&!previous.has(term.id))).forEach(add);shuffle(all.filter(term=>!ids.has(term.id))).forEach(add);return result}
function spreadTodayGroups(items){let result=shuffle([...items]);const isNew=term=>term.id>=TODAY_NEW_TERM_FIRST_ID&&term.id<=TODAY_NEW_TERM_LAST_ID,clustered=list=>list.some((term,index)=>index>=2&&isNew(term)===isNew(list[index-1])&&isNew(term)===isNew(list[index-2]));for(let attempt=0;attempt<40&&clustered(result);attempt++)result=shuffle([...items]);if(clustered(result)){const newer=shuffle(result.filter(isNew)),existing=shuffle(result.filter(term=>!isNew(term)));result=[];while(newer.length||existing.length){const source=(result.length?isNew(result[result.length-1]):Math.random()<.5)?existing:newer;if(source.length)result.push(source.pop());else result.push((newer.length?newer:existing).pop())}}return result}
function todayTerms(){const meta=todayMeta(),previous=new Set(meta.lastSession.ids),round=roundMeta().current,all=[...new Map(data.terms.filter(term=>q[term.id]&&round.correctAnswers[term.id]!==true).map(term=>[term.id,term])).values()],isNew=term=>term.id>=TODAY_NEW_TERM_FIRST_ID&&term.id<=TODAY_NEW_TERM_LAST_ID,newer=prioritizedTodayCandidates(all.filter(isNew),previous,round),existing=prioritizedTodayCandidates(all.filter(term=>!isNew(term)),previous,round),picked=[];picked.push(...newer.splice(0,Math.min(5,newer.length)),...existing.splice(0,Math.min(5,existing.length)));const remainder=shuffle([...newer,...existing]);while(picked.length<10&&remainder.length)picked.push(remainder.pop());return spreadTodayGroups(picked)}
function shuffle(items){for(let i=items.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[items[i],items[j]]=[items[j],items[i]]}return items}

function syncFloatingNav(){const hidden=screen==='home',back=document.getElementById('glossaryBack'),home=document.getElementById('glossaryHome');if(back)back.hidden=hidden;if(home)home.hidden=hidden}

function quizHomeStats(){let first=0,second=0,wrong=0,unable=0,correct=0,totalAnswers=0;const learned=Object.values(roundMeta().current.answers).filter(status=>states[status]).length;for(const term of data.terms){const s=termState(term),rows=s?.recentAnswers||[],latest=rows.at(-1),type=resultType(latest);if(type){if(type==='first_correct')first++;else if(type==='second_correct')second++;else if(type==='wrong')wrong++;else if(type==='unable')unable++}correct+=Number(s?.quizCorrect)||0;totalAnswers+=(Number(s?.quizCorrect)||0)+(Number(s?.quizWrong)||0)}return{total:data.terms.length,learned,unlearned:data.terms.length-learned,first,second,wrong,unable,rate:totalAnswers?Math.round(correct/totalAnswers*100):0,answered:totalAnswers>0}}
function quizProgressSummary(){const s=quizHomeStats(),status=stats(),pct=s.total?Math.round(s.learned/s.total*100):0,progressBar=pct===100?`<span class="category-row-bar quiz-progress-bar is-complete"><span class="quiz-progress-barber"></span></span>`:`<span class="category-row-bar quiz-progress-bar">${percentSegment('safe',status.safe,status.total||1)}${percentSegment('caution',status.caution,status.total||1)}${percentSegment('danger',status.danger,status.total||1)}${percentSegment('unlearned',status.unlearned,status.total||1)}</span>`;return `<section class="summary-card quiz-progress-card"><button type="button" class="quiz-round-count" onclick="Glossary.openRoundHistory()" aria-label="${lapLabel(roundNumber())}、過去の周回成績を表示">${lapLabel(roundNumber())}</button><div class="ring" style="--progress:${pct}%"><span>${pct}%</span></div><div><div class="summary-label">学習進捗</div><div class="summary-main">${s.learned} / ${s.total}語</div><div class="summary-sub">学習済み ${s.learned}語　未学習 ${s.unlearned}語<br>累計正答率 ${s.answered?s.rate+'％':'未解答'}</div></div>${progressBar}</section>`}
function renderRoundHistory(){setAppScreen('round-history',{returnScreen:APP_SCREEN.HOME});flashcardMode=false;const history=[...roundMeta().history].reverse();app.innerHTML=`<section class="view-head"><span></span><h1>過去の周回成績</h1><span></span></section>${history.length?`<section class="round-history-list">${history.map(item=>`<div class="round-history-row"><span>${lapLabel(item.round)}</span>${categoryBarHtml(item)}<div class="round-history-counts"><span class="safe">安心 <strong>${Number(item.safe)||0}語</strong></span><span class="caution">勘 <strong>${Number(item.caution)||0}語</strong></span><span class="danger">無理 <strong>${Number(item.danger)||0}語</strong></span></div></div>`).join('')}</section>`:'<div class="empty">過去の周回履歴はありません</div>'}`;syncFloatingNav();scrollTo(0,0)}
function quizResultBoxes(){const s=stats(),items=[['safe','result-first','✓','安心',s.safe],['caution','result-second','△','勘',s.caution],['danger','result-wrong','×','無理',s.danger]];return `<section class="quiz-home-results"><div style="grid-template-columns:repeat(3,minmax(0,1fr))">${items.map(([key,cls,icon,label,count])=>`<button type="button" class="${cls}" onclick="Glossary.startStatus('${key}')"><span aria-hidden="true">${icon}</span><strong>${label}</strong><em>${count}語</em></button>`).join('')}</div></section>`}
function startQuizResult(type){const terms=data.terms.filter(term=>resultType(latestAnswer(term))===type),labels={first_correct:'1回目正解',second_correct:'2回目正解',wrong:'不正解',unable:'無理'};if(!terms.length){showStatusMessage(`${labels[type]}に該当する用語はありません`);return}startSession(terms,labels[type],true)}
function renderHome(){
 setAppScreen(APP_SCREEN.HOME,{returnScreen:APP_SCREEN.HOME});reverseMode=false;
 const bookmarkCount=data.terms.reduce((count,term)=>count+(isBookmarked(term)?1:0),0),roundMistakeCount=currentRoundMistakeTerms().length;
 app.innerHTML=`${quizProgressSummary()}<section class="quiz-home-group"><div class="today-feature-card"><button class="home-feature-card feature-flash" type="button" onclick="Glossary.startMode('today')"><span class="home-feature-icon" aria-hidden="true">✓</span><span class="home-feature-copy"><strong>今日の10語</strong><small>3択クイズ（全10問）</small></span></button><div class="today-home-actions"><button class="today-home-mistake" type="button" onclick="Glossary.openRoundMistakes(event)" aria-label="現在の周回で間違えた問題一覧"><span class="certainty-icon today-home-mistake-icon" aria-hidden="true">×</span><span class="today-home-mistake-count">${roundMistakeCount}</span></button><button class="today-home-bookmark" type="button" onclick="Glossary.openTodayBookmarks(event)" aria-label="今日の10語ブックマーク一覧"><span class="today-home-bookmark-icon" aria-hidden="true">🔖</span><span class="today-home-bookmark-count">${todayBookmarks.size}</span></button></div></div>${quizResultBoxes()}</section><section class="learning-mode-grid" aria-label="用語学習メニュー"><button class="learning-mode-card term-mode" type="button" onclick="Glossary.startFlashcards()"><span aria-hidden="true">▣</span><strong>用語</strong></button><button class="learning-mode-card reverse-mode" type="button" onclick="Glossary.startReverse()"><span aria-hidden="true">↶</span><strong>逆引</strong></button><button class="learning-mode-card bookmark-mode" type="button" onclick="Glossary.openBookmark()"><span aria-hidden="true">🔖</span><strong>ブックマーク</strong><em>${bookmarkCount}</em></button></section><section class="home-feature-grid home-top-links"><a class="home-feature-card feature-points" href="taisaku-youten.html"><span class="home-feature-copy"><strong>対策要点</strong><small>試験に出やすい重要ポイントを整理</small></span></a><a class="home-feature-card feature-infection" href="infection-classification-guide.html"><span class="home-feature-copy"><strong>一類〜五類解説</strong><small>感染症法の一類から五類までを解説</small></span></a></section><section class="home-term-search"><label for="termNameSearch">用語名・問題番号検索</label><input id="termNameSearch" type="search" placeholder="用語名または問題番号を入力" autocomplete="off" oninput="Glossary.searchTermNames(this.value)"><div id="termSearchResults" class="term-search-results"></div></section>${categoryStatsHtml()}<section class="backup-panel"><button type="button" onclick="Glossary.exportBackup()">バックアップを書き出す</button><button type="button" onclick="document.getElementById('backupFileInput').click()">バックアップを読み込む</button><input id="backupFileInput" type="file" accept="application/json,.json" onchange="Glossary.importBackup(this.files[0]);this.value=''" hidden></section><section class="glossary-reset"><button onclick="Glossary.resetLearning()">リセット</button></section><section class="text-enlarge-setting" aria-label="文字表示設定"><span>文字を拡大</span><button id="textEnlargeToggle" class="text-enlarge-toggle${textEnlarged?' is-on':''}" type="button" role="switch" aria-checked="${textEnlarged}" onclick="Glossary.toggleTextEnlarged()"><span class="text-enlarge-state">${textEnlarged?'ON':'OFF'}</span><span class="text-enlarge-knob" aria-hidden="true"></span></button></section><div class="app-version">Version ${APP_VERSION}</div>`;
 syncFloatingNav();
}


let bookmarkLearningReverse=false,bookmarkListScrollY=0,statusListScrollY=0,todayBookmarkListScrollY=0,roundMistakeListScrollY=0,categoryHomeScrollY=0;
function bookmarkedTerms(){return data.terms.filter(term=>isBookmarked(term))}
function bookmarkLearningListHtml(){const terms=bookmarkedTerms();return terms.length?terms.map(term=>`<button type="button" class="learning-bookmark-list-item" onclick="Glossary.openLearningBookmark(${term.id})"><span>${esc(term.name)}</span><small>${esc(term.category)}</small><span aria-hidden="true">›</span></button>`).join(''):'<div class="empty">登録した用語はありません。</div>'}
function renderBookmark(restoreScroll=false){setAppScreen(APP_SCREEN.BOOKMARK,{returnScreen:APP_SCREEN.HOME,preserveReturn:restoreScroll});flashcardMode=false;listTerms=bookmarkedTerms();app.innerHTML=`<section class="view-head"><span></span><h1>ブックマーク</h1><span></span></section><div class="learning-bookmark-mode" role="group" aria-label="ブックマークの学習方法"><button type="button" class="${bookmarkLearningReverse?'':'selected'}" onclick="Glossary.setBookmarkLearningMode(false)">用語カード</button><button type="button" class="${bookmarkLearningReverse?'selected':''}" onclick="Glossary.setBookmarkLearningMode(true)">逆引き</button></div><div id="list-container" class="learning-bookmark-list">${bookmarkLearningListHtml()}</div>`;syncFloatingNav();requestAnimationFrame(()=>scrollTo(0,restoreScroll?bookmarkListScrollY:0))}
function setBookmarkLearningMode(isReverse){bookmarkLearningReverse=Boolean(isReverse);renderBookmark()}
function startLearningBookmarkSession(preferredId=0){const terms=bookmarkedTerms();if(!terms.length){renderBookmark();return}bookmarkListScrollY=window.scrollY;beginLearningSession({entryType:LEARNING_ENTRY.BOOKMARK,targetTerms:terms,startIndex:indexForTerm(terms,preferredId),displayMode:bookmarkLearningReverse?'reverse':'normal',returnScreen:LEARNING_RETURN.BOOKMARK,returnScrollY:bookmarkListScrollY,returnData:{learningReverse:bookmarkLearningReverse}},{idPrefix:'lb',label:bookmarkLearningReverse?'ブックマーク逆引き':'ブックマーク用語カード'})}
function listMetaHtml(term,showNumber=false){return `<span class="term-category">${showNumber?`<span>問題 ${term.id}</span>`:''}<span>${esc(term.category)}</span></span>`}
function listCards(terms,showNumber=false){return terms.length?terms.map(term=>{const s=termState(term);return `<details class="term-card" id="term-${term.id}"><summary><span class="arrow">▶</span><span>${esc(term.name)}</span>${listMetaHtml(term,showNumber)}</summary><div class="term-back">${termFields(term)}${sourceBlock(term)}<div class="assessment-inline">${assessmentButtons(term,s?.status,'inline')}</div></div></details>`}).join(''):'<div class="empty">対象の用語はありません。</div>'}
function todayBookmarkTerms(){return [...todayBookmarks].map(id=>termById.get(id)).filter(term=>term&&q[term.id])}
function todayBookmarkCards(){const terms=todayBookmarkTerms();return terms.length?terms.map(term=>`<button type="button" class="today-bookmark-list-item" onclick="Glossary.openTodayBookmarkQuestion(${term.id})"><span>${esc(term.name)}</span><small><span>問題 ${term.id}</span><span>${esc(term.category)}</span></small><span aria-hidden="true">›</span></button>`).join(''):'<div class="empty">登録した問題はありません。</div>'}
function renderTodayBookmarks(restoreScroll=false){setAppScreen(APP_SCREEN.TODAY_BOOKMARKS,{returnScreen:APP_SCREEN.HOME,preserveReturn:restoreScroll});app.innerHTML=`<section class="view-head"><span></span><h1>今日の10語ブックマーク</h1><span></span></section><div id="list-container" class="today-bookmark-list">${todayBookmarkCards()}</div>`;syncFloatingNav();requestAnimationFrame(()=>scrollTo(0,restoreScroll?todayBookmarkListScrollY:0))}
function startTodayBookmarkSession(preferredId=0){const terms=todayBookmarkTerms();if(!terms.length){renderTodayBookmarks();return}todayBookmarkListScrollY=window.scrollY;setAppScreen(APP_SCREEN.SESSION,{returnScreen:APP_SCREEN.TODAY_BOOKMARKS,returnScrollY:todayBookmarkListScrollY,returnData:{mode:'todayBookmarks'}});flashcardMode=false;session=[...terms];sessionIndex=Math.max(0,session.findIndex(term=>term.id===Number(preferredId)));sessionId=`tb-${Date.now()}-${Math.random().toString(36).slice(2,8)}`;sessionModeKey='todayBookmarks';statusSessionMode=false;isTodaySession=false;todayQuizMode=true;todayAnswers=new Map();evaluatedIds=new Set();sessionStats={label:'ブックマーク問題',sourceStatus:'',studied:0,correct:0,firstCorrect:0,secondCorrect:0,wrong:0,unable:0,safe:0,caution:0,danger:0};prepareTerm();renderSession();scrollTo(0,0)}
function currentRoundMistakeTerms(){const wrong=roundMeta().current.wrongAnswers;return Object.keys(wrong).filter(id=>wrong[id]===true).map(Number).filter((id,index,ids)=>ids.indexOf(id)===index).map(id=>termById.get(id)).filter(term=>term&&q[term.id])}
function currentRoundMistakeCards(terms=currentRoundMistakeTerms()){return terms.length?terms.map(term=>`<button type="button" class="today-bookmark-list-item round-mistake-list-item" onclick="Glossary.openRoundMistakeQuestion(${term.id})"><span>${esc(q[term.id].question)}</span><small><span>正解となる用語名</span><strong>${esc(term.name)}</strong></small><span aria-hidden="true">›</span></button>`).join(''):'<div class="empty">現在の周回で間違えた問題はありません</div>'}
function renderRoundMistakes(restoreScroll=false){setAppScreen(APP_SCREEN.ROUND_MISTAKES,{returnScreen:APP_SCREEN.HOME,preserveReturn:restoreScroll});flashcardMode=false;isTodaySession=false;todayQuizMode=false;sessionModeKey='';const terms=currentRoundMistakeTerms();app.innerHTML=`<section class="view-head"><span></span><h1>間違えた問題</h1><span></span></section><div class="status-list-count">${terms.length}問</div><div id="list-container" class="today-bookmark-list round-mistake-list">${currentRoundMistakeCards(terms)}</div>`;syncFloatingNav();requestAnimationFrame(()=>scrollTo(0,restoreScroll?roundMistakeListScrollY:0))}
function startRoundMistakeSession(preferredId=0){const terms=currentRoundMistakeTerms();if(!terms.length){renderRoundMistakes();return}roundMistakeListScrollY=window.scrollY;setAppScreen(APP_SCREEN.SESSION,{returnScreen:APP_SCREEN.ROUND_MISTAKES,returnScrollY:roundMistakeListScrollY,returnData:{mode:'roundMistakes'}});flashcardMode=false;session=[...terms];sessionIndex=Math.max(0,session.findIndex(term=>term.id===Number(preferredId)));sessionId=`rm-${Date.now()}-${Math.random().toString(36).slice(2,8)}`;sessionModeKey='roundMistakes';statusSessionMode=false;isTodaySession=false;todayQuizMode=true;todayAnswers=new Map();evaluatedIds=new Set();sessionStats={label:'間違えた問題',sourceStatus:'',studied:0,correct:0,firstCorrect:0,secondCorrect:0,wrong:0,unable:0,safe:0,caution:0,danger:0};prepareTerm();renderSession();scrollTo(0,0)}
function termSymptoms(term){const own=Array.isArray(term.symptoms)?term.symptoms:[];if(own.length)return own;const disease=infectionDiseaseFor(term);return Array.isArray(disease?.symptoms)?disease.symptoms:[]}
function symptomListHtml(values,currentId=0,linkable=false){return `<div data-multiline>${values.map(value=>{const text=String(value).replace(/^・\s*/u,''),content=linkable?dictionaryText(text,currentId):esc(text);return `<div class="exam-bullet-line"><span aria-hidden="true">・</span><span class="exam-line-text">${content}</span></div>`}).join('')}</div>`}
function symptomField(term,linkable=false){const values=termSymptoms(term);if(!values.length)return '';return `<div class="term-field symptom-field"><div class="term-label symptoms">${esc(sectionHeading('symptoms'))}</div><div class="term-value">${symptomListHtml(values,term.id,linkable)}</div></div>`}
function diseaseProfileField(key,value,linkable=false,currentId=0){return textField(diseaseProfileHeading(key),value,'disease-profile-field',linkable,currentId)}
function textField(label,value,extra='',linkable=false,currentId=0){if(!value)return '';const multi=String(value).split('<br>').length>1?' data-multiline':'';return `<div class="term-field ${extra}"><div class="term-label ${label===sectionHeading('definition')?"definition":label===sectionHeading('exam')?"exam":label===sectionHeading('mixup')?"mixup":""}">${esc(label)}</div><div class="term-value${multi}">${linkable?dictionaryText(value,currentId):esc(value)}</div></div>`}
function listField(label,values,extra='',linkable=false,currentId=0){if(!values?.length)return '';const multi=values.length>1?' data-multiline':'';const isExam=label===sectionHeading('exam');return `<div class="term-field ${extra}"><div class="term-label ${label===sectionHeading('definition')?"definition":label===sectionHeading('exam')?"exam":label===sectionHeading('mixup')?"mixup":""}">${esc(label)}</div><div class="term-value${multi}"><ul${isExam?' class="exam-list"':''}>${values.map(value=>{const bullet=isExam&&value.startsWith('・'),text=bullet?value.slice(1).trimStart():value,content=linkable?dictionaryText(text,currentId):esc(text);return `<li${isExam?` class="${bullet?'exam-bullet':'exam-plain'}"`:''}>${bullet?'<span aria-hidden="true">・</span>':''}${isExam?`<span class="exam-line-text">${content}</span>`:content}</li>`}).join('')}</ul></div></div>`}
function termFields(term,linkable=false){return `${textField(sectionHeading('definition'),term.definition,'',linkable,term.id)}${term.aliases?.length?textField('別名・関連表記',term.aliases.join('／')):''}${Object.entries(term.special||{}).map(([label,value])=>textField(label,value)).join('')}${symptomField(term,linkable)}${listField(sectionHeading('exam'),term.exam,'exam-points',linkable,term.id)}${term.mixup?.length?mixupFieldHtml(term,'div',linkable):''}`}
function infectionDiseaseFor(term){if(term.category!=='感染症法')return null;const diseases=globalThis.INFECTION_DISEASE_DATA?.diseases||[];return diseases.find(item=>item.name===term.name||item.name.startsWith(`${term.name}（`))||diseases.find(item=>item.alias&&(item.alias===term.name||term.aliases?.includes(item.alias)))||null}
function quizTermFields(term,linkable=false){const disease=infectionDiseaseFor(term);if(!disease)return termFields(term,linkable);return `${diseaseProfileField('officialName',disease.name,linkable,term.id)}${diseaseProfileField('alias',disease.alias||'なし',linkable,term.id)}${diseaseProfileField('classification',disease.classification,linkable,term.id)}${diseaseProfileField('route',disease.route,linkable,term.id)}${diseaseProfileField('symptoms',disease.symptoms,linkable,term.id)}`}
function flashcardFields(term){return `${textField(sectionHeading('definition'),term.definition,'',true)}${symptomField(term,true)}${listField(sectionHeading('exam'),term.exam,'exam-points')}${term.mixup?.length?mixupFieldHtml(term,'div',true):''}`}
function sourceBlock(term){const links=(term.sources||[]).map(source=>source.url?`<a href="${esc(source.url)}" target="_blank" rel="noopener">${esc(source.label)}</a>`:esc(source.label)).join('<br>');return `<details class="source-details" open><summary>出典・監修状態</summary><div class="source-content">${esc(term.sourceText)}${links?`<br>${links}`:''}<br><span class="review-pill">${esc(term.status)}</span>　基準日：${REVIEW_DATE}</div></details>`}

function stateSymbol(key){return key==='safe'?'🟢':key==='caution'?'🟡':'🔴'}
function assessmentButtons(term,current,kind='session'){return Object.entries(states).map(([key,label])=>`<button class="${key}${current===key?' selected':''}" onclick="Glossary.assess(${term.id},'${key}','${kind}')">${stateSymbol(key)} ${label}</button>`).join('')}
function startMode(mode){if(mode!=='today')return;const terms=modeTerms(),label=terms.length===10?'今日の10語':`今日の${terms.length}語`;if(!terms.length){showStatusMessage('今日の学習対象はありません');return}startSession(terms,label,false,'','today')}
function beginTodayTracking(){const meta=todayMeta(),key=id=>`${sessionId}:${id}`;meta.lastSession={ids:session.map(term=>term.id),results:Object.fromEntries(session.map(term=>[term.id,'']))};for(const term of session){const unique=key(term.id);if(meta.countedSessionTerms[unique])continue;meta.countedSessionTerms[unique]=true;meta.dailyCounts[term.id]=(Number(meta.dailyCounts[term.id])||0)+1;meta.dailyTermIds.push(term.id);meta.lastShown[term.id]=today()}meta.activeSession={sessionId,ids:session.map(term=>term.id),index:0,label:sessionStats.label,answers:{},stats:sessionStats,evaluatedIds:[]};saveTodayMeta()}
function persistTodaySession(){if(!isTodaySession)return;const meta=todayMeta();meta.activeSession={sessionId,ids:session.map(term=>term.id),index:sessionIndex,label:sessionStats.label,answers:Object.fromEntries(todayAnswers),stats:sessionStats,evaluatedIds:[...evaluatedIds]};for(const [id,response] of todayAnswers)meta.lastSession.results[id]=response.finalResult||'';saveTodayMeta()}
function startSession(terms,label='用語学習',useThreeChoice=false,sourceStatus='',modeKey=''){if(!terms.length){showStatusMessage('対象の用語はありません');return}const searchQuestion=modeKey==='searchQuestion';setAppScreen(APP_SCREEN.SESSION,{returnScreen:modeKey==='todayBookmarks'?APP_SCREEN.TODAY_BOOKMARKS:searchQuestion?LEARNING_RETURN.SEARCH_RESULTS:APP_SCREEN.HOME,returnScrollY:searchQuestion?activeSearchScrollY:window.scrollY,returnData:searchQuestion?{query:activeSearchQuery}:{modeKey}});flashcardMode=false;session=[...terms];sessionIndex=0;sessionId=`gs-${Date.now()}-${Math.random().toString(36).slice(2,8)}`;sessionModeKey=modeKey;statusSessionMode=Boolean(sourceStatus);isTodaySession=modeKey==='today';todayQuizMode=isTodaySession||useThreeChoice;todayAnswers=new Map();evaluatedIds=new Set();sessionStats={label,sourceStatus,studied:0,correct:0,firstCorrect:0,secondCorrect:0,wrong:0,unable:0,safe:0,caution:0,danger:0};if(isTodaySession)beginTodayTracking();prepareTerm();renderSession()}
function startFlashcards(){screen='session';flashcardMode=true;session=shuffle([...data.terms]);sessionIndex=0;sessionId=`fc-${Date.now()}-${Math.random().toString(36).slice(2,8)}`;statusSessionMode=false;isTodaySession=false;todayQuizMode=false;todayAnswers=new Map();evaluatedIds=new Set();sessionStats={label:'用語カード',sourceStatus:'',studied:0,correct:0,firstCorrect:0,secondCorrect:0,wrong:0,unable:0,safe:0,caution:0,danger:0};prepareTerm();renderSession()}
function toggleFlashcard(){}
function recallPrompt(term){if(['感染症法','感染症予防'].includes(term.category))return'類型・感染源・感染経路は？';if(term.category==='消毒法')return'作用・濃度・時間・対象は？';if(['公衆衛生','地域保健法','健康増進法'].includes(term.category))return'目的・対象・重要な数値は？';if(term.category==='消費者基本法')return'目的・主体・権利・義務は？';if(['皮膚','毛髪'].includes(term.category))return'位置・構造・機能は？';if(term.category==='香粧品成分')return'作用・用途・成分区分は？';if(term.category==='カッティング')return'目的・操作・仕上がりは？';return'意味・試験の要点・似た用語との違いは？'}
function safeFlashHint(term,value,fallback){let text=String(value||fallback);for(const word of [term.name,...(term.aliases||[])].filter(Boolean))text=text.split(word).join('この用語');return text}
function flashHint(term,index){if(index===0)return safeFlashHint(term,term.exam?.[0],'試験で問われる働きや特徴を思い出してください。');return safeFlashHint(term,term.exam?.[1]||term.mixup?.[0],'関連する対象・数値・似た用語との違いを思い出してください。')}
function flashAdvance(){if(!flashcardMode)return;if(flashStage===0){flashStage=1;renderSession()}else if(flashStage===1){flashStage=3;renderSession()}else flashNext()}
function showFlashHint(){flashAdvance()}
function showFlashAnswer(){if(!flashcardMode)return;flashStage=3;renderSession()}
function flashNext(){
  if(!flashcardMode||flashSwipeLocked)return;
  flashSwipeLocked=true;
  if(sessionHistoryIndex<sessionHistory.length-1){
    sessionHistoryIndex++;
    sessionIndex=sessionHistory[sessionHistoryIndex];
  }else if(sessionIndex<session.length-1){
    sessionIndex++;
    pushSessionHistory();
  }else if(isContextBoundedLearning()){
    flashSwipeLocked=false;
    returnFromLearningContext();
    return;
  }else{
    const last=currentTerm()?.id;
    const nextDeck=reverseMode?randomizedLearningTerms(learningPool()):shuffle([...learningPool()]);
    if(nextDeck.length>1&&nextDeck[0].id===last)[nextDeck[0],nextDeck[1]]=[nextDeck[1],nextDeck[0]];
    session.push(...nextDeck);
    sessionIndex++;
    pushSessionHistory();
  }
  saveLearningDeckPosition();
  prepareTerm();
  if(reverseMode)reverseRevealed=false;
  renderSession();
  scrollTo(0,0);
  setTimeout(()=>{flashSwipeLocked=false},180)
}
function flashPrevious(){
  if(!flashcardMode||flashSwipeLocked)return;
  if(sessionHistoryIndex===0&&isContextBoundedLearning()){
    returnFromLearningContext();
    return;
  }
  if(sessionHistoryIndex>0){
    flashSwipeLocked=true;
    sessionHistoryIndex--;
    sessionIndex=sessionHistory[sessionHistoryIndex];
    saveLearningDeckPosition();
    prepareTerm();
    if(reverseMode)reverseRevealed=false;
    renderSession();
    scrollTo(0,0);
    setTimeout(()=>{flashSwipeLocked=false},180);
  }
}
function bindFlashGestures(){const card=document.querySelector('.flash-card');if(!card)return;let startX=0,startY=0,tracking=false;card.addEventListener('touchstart',event=>{if(event.touches.length!==1||flashSwipeLocked)return;const touch=event.touches[0];startX=touch.clientX;startY=touch.clientY;tracking=true},{passive:true});card.addEventListener('touchcancel',()=>{tracking=false},{passive:true});card.addEventListener('touchend',event=>{if(!tracking||flashSwipeLocked)return;tracking=false;const touch=event.changedTouches[0];if(!touch)return;const dx=touch.clientX-startX,dy=touch.clientY-startY,ax=Math.abs(dx),ay=Math.abs(dy);if(ax<55||ax<=ay*1.25)return;event.preventDefault();flashSuppressClickUntil=Date.now()+500;if(dx<0)flashNext();else flashPrevious()},{passive:false})}
function isBookmarked(term){return Boolean(termState(term)?.bookmarked)}
function toggleBookmark(id){const term=termById.get(id);if(!term)return;const key=stateKey(term),old=termState(term)||{};learning[key]={...old,bookmarked:!old.bookmarked};saveLearning();if(screen==='session')renderSession();else if(screen==='bookmark')renderBookmark();else renderHome()}
function removeBookmark(id,event){event?.preventDefault();event?.stopPropagation();const term=termById.get(Number(id));if(!term||!isBookmarked(term))return;const key=stateKey(term),old=termState(term)||{};learning[key]={...old,bookmarked:false};flushLearning();renderBookmark()}
function assessFlash(id,status){const term=termById.get(id);if(!term||!states[status])return;setStatus(term,status);renderSession()}
function prepareTerm(){revealed=false;hintVisible=false;flashStage=0;assessedCurrent=false}
function currentTerm(){return session[sessionIndex]}
function renderSession(){const term=currentTerm(),progress=Math.round(sessionIndex/session.length*100);if(flashcardMode){const cycleCount=data.terms.length,cyclePosition=sessionIndex%cycleCount+1,flashProgress=Math.round(cyclePosition/cycleCount*100),actionLabel=['ヒント1を見る','ヒント2を見る','答えを見る','次の用語'][flashStage];app.innerHTML=`<div class="study-progress flash-study-progress"><i style="width:${flashProgress}%"></i></div><section class="study-card flash-study-card"><div class="flash-card flash-progressive" aria-live="polite"><div class="flash-front"><div class="term-category">${esc(term.category)}</div><div class="flash-term-main"><div><h2>${esc(term.name)}</h2><div class="term-reading">${esc(term.reading||'')}</div><div class="recall-guide"><span>次の観点から思い出してください</span><strong>${esc(recallPrompt(term))}</strong>${flashStage>=1?`<div class="flash-hint"><span>ヒント1</span>${esc(flashHint(term,0))}</div>`:''}${flashStage>=2?`<div class="flash-hint"><span>ヒント2</span>${esc(flashHint(term,1))}</div>`:''}</div>${flashStage>=3?`<div class="flash-answer">${flashcardFields(term)}</div>`:''}</div></div></div></div><div class="flash-learning-actions flash-learning-single"><button type="button" onclick="Glossary.flashAdvance()">${actionLabel}</button></div><div class="flash-actions"><button type="button" onclick="Glossary.toggleBookmark(${term.id})">${isBookmarked(term)?'🔖 ブックマーク済み':'🔖 ブックマーク'}</button></div><div class="flash-back-navigation"><button type="button" onclick="Glossary.flashPrevious()" ${sessionIndex===0?'disabled':''}>前の用語</button></div></section><div class="flash-count-bottom">${cyclePosition} / ${cycleCount}語</div>`;syncFloatingNav();bindFlashGestures();return}app.innerHTML=`<section class="view-head today-session-head"><span></span><h1>${esc(sessionStats.label)}</h1><span></span></section><div class="study-count today-study-count">${sessionIndex+1} / ${session.length}語</div><div class="study-progress today-study-progress"><i style="width:${progress}%"></i></div><section class="study-card today-study-card"><button type="button" class="today-question-bookmark${isTodayBookmarked(term.id)?' is-bookmarked':''}" onclick="Glossary.toggleTodayBookmark(${term.id},event)" aria-label="${isTodayBookmarked(term.id)?'今日の10語ブックマークを解除':'今日の10語ブックマークに追加'}">🔖</button><div class="term-front"><div><div class="term-category">${esc(term.category)}</div><h2>${esc(term.name)}</h2>${term.reading?`<div class="today-term-reading">${esc(term.reading)}</div>`:''}</div></div>${todayQuizHtml(term)}<span class="today-question-number">問題 ${term.id}</span></section>${sessionNavigation()}`;syncFloatingNav()}
const renderSessionBase=renderSession;
renderSession=function(){renderSessionBase();if(flashcardMode){document.querySelector('.flash-study-progress')?.remove();const term=currentTerm(),card=document.querySelector('.flash-card'),actionWrap=document.querySelector('.flash-learning-actions'),bookmarkWrap=document.querySelector('.flash-actions'),backWrap=document.querySelector('.flash-back-navigation'),count=document.querySelector('.flash-count-bottom'),marked=isBookmarked(term);if(card){card.className='flash-card memory-card';card.setAttribute('aria-label','暗記カード。下へスクロールすると答えを確認できます');card.innerHTML=`<button type="button" class="flash-bookmark${marked?' is-bookmarked':''}" onclick="Glossary.toggleBookmark(${term.id})" aria-label="${marked?'ブックマークを解除':'ブックマークに追加'}">🔖</button><div class="memory-card-scroll"><section class="memory-card-front"><div class="term-category">${esc(term.category)}</div><h2>${esc(term.name)}</h2><div class="memory-card-reading">${esc(term.reading||'')}</div></section><section class="memory-card-answer">${flashcardFields(term)}</section></div>`}actionWrap?.remove();bookmarkWrap?.remove();if(backWrap&&count){const nav=document.createElement('div');nav.className='flash-compact-nav';nav.innerHTML=`<button type="button" onclick="Glossary.flashPrevious()" ${sessionIndex===0?'disabled':''}>‹ 前へ</button><span>${sessionIndex%data.terms.length+1} / ${data.terms.length}</span><button type="button" onclick="Glossary.flashNext()">次へ ›</button>`;backWrap.replaceWith(nav);count.remove()}return}const head=document.querySelector('.today-session-head'),count=document.querySelector('.today-study-count');if(head&&count){count.className='today-header-count';head.appendChild(count)}};
let flashCategory='',flashDeck=[],flashDeckCursor=0,flashCycle=1,flashSlots=[null,null];
function flashPool(){return flashcardTerms.filter(term=>!flashCategory||term.category===flashCategory)}
function refillFlashDeck(){const visibleIds=new Set(flashSlots.filter(Boolean).map(slot=>slot.term.id));flashDeck=shuffle([...flashPool()]);if(flashDeck.length>1&&visibleIds.has(flashDeck[0].id)){const swapIndex=flashDeck.findIndex(term=>!visibleIds.has(term.id));if(swapIndex>0)[flashDeck[0],flashDeck[swapIndex]]=[flashDeck[swapIndex],flashDeck[0]]}flashDeckCursor=0;flashCycle++}
function drawFlashSlot(excludeIds=[]){if(!flashDeck.length||flashDeckCursor>=flashDeck.length)refillFlashDeck();let index=flashDeck.findIndex((term,i)=>i>=flashDeckCursor&&!excludeIds.includes(term.id));if(index<flashDeckCursor){refillFlashDeck();index=flashDeck.findIndex(term=>!excludeIds.includes(term.id));if(index<0)index=0}if(index!==flashDeckCursor)[flashDeck[index],flashDeck[flashDeckCursor]]=[flashDeck[flashDeckCursor],flashDeck[index]];const term=flashDeck[flashDeckCursor],position=flashDeckCursor+1;flashDeckCursor++;return{term,position,cycle:flashCycle}}
function initializeFlashDeck(category='',preferredTerm=null){flashCategory=category;flashDeck=[];flashDeckCursor=0;flashCycle=0;flashSlots=[null,null];const pool=flashPool();flashDeck=shuffle([...pool]);flashCycle=1;if(preferredTerm&&pool.some(term=>term.id===preferredTerm.id)){const index=flashDeck.findIndex(term=>term.id===preferredTerm.id);if(index>0)[flashDeck[0],flashDeck[index]]=[flashDeck[index],flashDeck[0]]}flashSlots[0]=drawFlashSlot();flashSlots[1]=drawFlashSlot([flashSlots[0].term.id])}
startFlashcards=function(preferredId=0){screen='session';flashcardMode=true;sessionId=`fc-${Date.now()}-${Math.random().toString(36).slice(2,8)}`;statusSessionMode=false;isTodaySession=false;todayQuizMode=false;todayAnswers=new Map();evaluatedIds=new Set();sessionStats={label:'用語カード',sourceStatus:'',studied:0,correct:0,firstCorrect:0,secondCorrect:0,wrong:0,unable:0,safe:0,caution:0,danger:0};const preferred=flashcardTerms.find(term=>term.id===Number(preferredId))||null;initializeFlashDeck('',preferred);renderSession();scrollTo(0,0)}
function flashCardHtml(slot,index){const {term,position}=slot,marked=isBookmarked(term),fields=flashcardFields(term).replace(sectionHeading('exam'),sectionHeading('exam'));return `<article class="whiteboard" data-card-index="${index}"><div class="whiteboard-scroll"><section class="whiteboard-front"><div class="whiteboard-category">${esc(term.category)}</div><h2>${esc(term.name)}</h2>${term.reading?`<div class="whiteboard-reading">${esc(term.reading)}</div>`:''}</section><section class="whiteboard-fields">${fields}</section><div class="whiteboard-scroll-position">${position} / ${flashPool().length}</div></div><button type="button" class="whiteboard-bookmark${marked?' is-bookmarked':''}" onclick="Glossary.toggleBookmark(${term.id})" aria-label="${marked?'ブックマークを解除':'ブックマークに追加'}">🔖</button></article>`}
function categoryButtonsHtml(){return `<div class="whiteboard-category-nav" aria-label="カテゴリ選択">${data.categories.map(category=>`<button type="button" class="${flashCategory===category?'selected':''}" onclick="Glossary.selectFlashCategory('${esc(category)}')">${esc(category)}</button>`).join('')}</div>`}
function bindIndependentFlashGestures(){document.querySelectorAll('.whiteboard').forEach((card,index)=>{let x=0,y=0;card.addEventListener('touchstart',event=>{const touch=event.touches[0];if(touch){x=touch.clientX;y=touch.clientY}},{passive:true});card.addEventListener('touchend',event=>{const touch=event.changedTouches[0];if(!touch)return;const dx=touch.clientX-x,dy=touch.clientY-y;if(Math.abs(dx)<55||Math.abs(dx)<=Math.abs(dy)*1.25)return;Glossary.advanceFlashCard(index)},{passive:true})})}
function renderFlashcardPage(){const host=document.querySelector('.flash-study-card');if(!host)return;host.className='whiteboard-study';host.innerHTML=`<div class="whiteboard-stack">${flashCardHtml(flashSlots[0],0)}${flashCardHtml(flashSlots[1],1)}</div>${categoryButtonsHtml()}`;bindIndependentFlashGestures()}
const renderSessionBeforeIndependent=renderSession;
renderSession=function(){if(!flashcardMode){renderSessionBeforeIndependent();return}app.innerHTML=`<section class="study-card flash-study-card"></section>`;renderFlashcardPage();syncFloatingNav()}
function advanceFlashCard(index){if(!flashcardMode||flashSwipeLocked||!flashSlots[index])return;flashSwipeLocked=true;const other=flashSlots[index===0?1:0];flashSlots[index]=drawFlashSlot(other?[other.term.id]:[]);renderSession();setTimeout(()=>{flashSwipeLocked=false},180)}
function selectFlashCategory(category){if(!data.categories.includes(category))return;initializeFlashDeck(category);renderSession();scrollTo(0,0)}
let activeSearchQuery='',activeSearchTerms=[],activeSearchScrollY=0;
function searchTermNames(value){const host=document.getElementById('termSearchResults');if(!host)return;const raw=String(value||'').trim(),query=raw.toLocaleLowerCase('ja');activeSearchQuery=raw;if(!query){activeSearchTerms=[];host.innerHTML='';return}const numberMatch=raw.match(/^(?:問題\s*)?(\d+)$/u),questionId=numberMatch?Number(numberMatch[1]):null;activeSearchTerms=data.terms.filter(term=>(questionId!==null&&Number(term.id)===questionId)||term.name.toLocaleLowerCase('ja').includes(query)||(term.reading||'').includes(query)).slice(0,30);host.innerHTML=activeSearchTerms.length?activeSearchTerms.map(term=>`<div class="term-search-result"><div class="term-search-result-label"><span>${esc(term.name)}</span><small>問題 ${term.id}　${esc(term.category)}</small></div><div class="term-search-result-actions"><button type="button" onclick="Glossary.openSearchedTerm(${term.id})">用語カード</button>${q?.[term.id]?`<button type="button" onclick="Glossary.openSearchedQuestion(${term.id})">問題</button>`:''}</div></div>`).join(''):'<p>該当する用語はありません。</p>'}
function restoreSearchResults(){renderHome();requestAnimationFrame(()=>{const input=document.getElementById('termNameSearch');if(input){input.value=activeSearchQuery;searchTermNames(activeSearchQuery)}requestAnimationFrame(()=>scrollTo(0,activeSearchScrollY))})}
function openSearchedTerm(id){if(!activeSearchTerms.length)return;activeSearchScrollY=window.scrollY;beginLearningSession({entryType:LEARNING_ENTRY.SEARCH,targetTerms:activeSearchTerms,startIndex:indexForTerm(activeSearchTerms,id),displayMode:'normal',returnScreen:LEARNING_RETURN.SEARCH_RESULTS,returnScrollY:activeSearchScrollY,returnData:{query:activeSearchQuery}},{idPrefix:'sr',label:'検索結果'})}
function openSearchedQuestion(id){const term=termById.get(Number(id));if(!term||!q?.[term.id])return;activeSearchScrollY=window.scrollY;reverseMode=false;startSession([term],'3択で確認',true,'','searchQuestion')}
function exportBackup(){flushLearning();const payload={format:'riyoshi-glossary-backup',version:1,appVersion:APP_VERSION,exportedAt:new Date().toISOString(),storageKey:STORAGE_KEY,learning,todayBookmarks:[...todayBookmarks]};const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),link=document.createElement('a');link.href=url;link.download=`riyoshi-glossary-backup-${today()}.json`;document.body.appendChild(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),1000)}
async function importBackup(file){if(!file)return;try{const payload=JSON.parse(await file.text());if(!payload||payload.format!=='riyoshi-glossary-backup'||payload.version!==1||!payload.learning||typeof payload.learning!=='object'||Array.isArray(payload.learning))throw new Error('形式が一致しません');if(payload.todayBookmarks!==undefined&&!Array.isArray(payload.todayBookmarks))throw new Error('今日の10語ブックマークの形式が一致しません');const restoredTodayBookmarks=new Set((payload.todayBookmarks||[]).map(Number).filter(id=>Number.isInteger(id)&&q[id]));if(!confirm('現在の学習履歴を、選択したバックアップ内容で置き換えます。よろしいですか？'))return;learning=payload.learning;todayBookmarks=restoredTodayBookmarks;flushLearning();saveTodayBookmarks();normalizedKeys.clear();renderHome();alert('バックアップを読み込みました。')}catch(error){alert(`バックアップを読み込めませんでした。${error?.message?' '+error.message:''}`)}}
function todayResponse(term=currentTerm()){if(todayAnswers.has(term.id))return todayAnswers.get(term.id);const question=quizData.questions?.[term.id],distractors=question?shuffle([...question.distractors]).slice(0,2):[],options=question?shuffle([{text:question.correct,correct:true},...distractors.map(text=>({text,correct:false}))]):[],response={question:question?.question||'',source:question?.source||'',options,hold:!question,attempts:[],completed:false,autoStatus:'',currentStatus:'',counted:false,roundCounted:false,originalResult:'',finalResult:'',unable:false,unableTiming:'',recorded:false};todayAnswers.set(term.id,response);persistTodaySession();return response}
function performanceHtml(term,response){const perf=performanceFor(term),s=termState(term),recent=statusBucket(term),recentHtml=states[recent]?`<span class="recent-assessment ${recent}"><span>${recent==='safe'?'✓':recent==='caution'?'△':'×'}</span>${states[recent]}</span>`:'未評価',label={safe:'安心候補',caution:'勘',danger:'無理',none:'データなし'}[perf.level],final={safe:'安心相当',caution:'勘相当',danger:'無理相当',unlearned:'未学習'}[finalPriority(term)],notice=response.unable?'自力回答不能として記録されています':s?.status==='safe'&&['caution','danger'].includes(perf.level)?'実績では要注意':['caution','danger','unable'].includes(s?.status)&&perf.level==='safe'?'実績は改善傾向です':'';return `<details class="performance-details" open><summary>正答実績</summary><div>自己評価：${states[statusBucket(term)]||'未設定'}<br>実力評価：${label}<br><span class="recent-assessment-row">直近：${recentHtml}</span><br>1回目正解率：${perf.rate===null?'未算出':perf.rate+'％'}<br>復習優先度：${final}${notice?`<br><span class="performance-notice">${notice}</span>`:''}</div></details>`}
function pointChoice(term,option){
 const name=String(option?.text||'').trim();
 const exactTerm=choiceDictionaryTerm(name,null);
 const definition=pointDefinitionOverrides.get(normalizeChoiceDictionaryText(name))||String(exactTerm?.definition||exactTerm?.exam?.[0]||'').replace(/^・\s*/,'').trim();
 return {name:name||exactTerm?.name||term?.name||'',definition};
}
function pointComparisonHtml(term,response){
 const wrongIndex=response.attempts.find(index=>!response.options[index]?.correct);
 if(!response.pointOpen)return'';
 const correctOption=response.options.find(option=>option.correct);
 const correctPoint=pointChoice(term,correctOption);
 let rows='';
 if(response.attempts.length===0){
  rows=response.options.map(option=>{const point=pointChoice(term,option);return `<div class="point-row"><span>${esc(point.name)}</span>${point.definition?`<p>${esc(point.definition)}</p>`:''}</div>`}).join('');
 }else if(wrongIndex!==undefined){
  rows=response.options.map((option,index)=>{
   const point=pointChoice(term,option);
   const rowClass=option.correct?' correct':response.attempts.includes(index)?' selected':' candidate';
   return `<div class="point-row${rowClass}"><span>${esc(point.name)}</span>${point.definition?`<p>${esc(point.definition)}</p>`:''}</div>`;
  }).join('');
 }else{
  rows=`<div class="point-row correct"><span>${esc(correctPoint.name)}</span>${correctPoint.definition?`<p>${esc(correctPoint.definition)}</p>`:''}</div>`;
  rows+=response.options.filter(option=>!option.correct).map(option=>{const point=pointChoice(term,option);return `<div class="point-row candidate"><span>${esc(point.name)}</span>${point.definition?`<p>${esc(point.definition)}</p>`:''}</div>`}).join('');
 }
 return `<div class="point-overlay" onclick="Glossary.closePoint(event)"><section class="point-comparison" role="dialog" aria-modal="true" aria-label="選択肢の違い" onclick="event.stopPropagation()"><button type="button" class="point-close" onclick="Glossary.closePoint(event)" aria-label="閉じる">×</button>${rows}</section></div>`;
}
function todayQuizHtml(term){const response=todayResponse(term),wrong=new Set(response.attempts.filter(index=>!response.options[index].correct)),hideGivenTerm=quizData.questions?.[term.id]?.reverseLookup&&!response.completed;return `${pointComparisonHtml(term,response)}${hideGivenTerm?'<style>.today-study-card>.term-front h2{font-size:0}.today-study-card>.term-front h2::after{content:"用語を選んでください";font-size:var(--font-lv1)}.today-study-card>.term-front .today-term-reading{display:none}.today-study-card>.term-front>div::after{content:"説明を読んで、3択から選択";display:block;margin-top:7px;color:#66738a;font-size:var(--font-exception-caption);line-height:1.4}</style>':''}<section class="quiz today-quiz"><h3>${response.completed?dictionaryText(response.question,term.id):esc(response.question)}</h3>${response.options.map((option,index)=>{const dictionaryTerm=choiceDictionaryTerm(option.text,term),stateClass=`${wrong.has(index)?'wrong ':''}${response.completed&&option.correct?'correct ':''}`;return `<div class="quiz-choice-row ${stateClass}"><button class="quiz-choice quiz-choice-answer ${stateClass}" onclick="Glossary.chooseToday(${index})" ${(response.completed||wrong.has(index))?'disabled':''}>${index+1}．${esc(option.text)}</button><button type="button" class="quiz-choice-dictionary" onclick="Glossary.openDictionary(${dictionaryTerm.id},event)" aria-label="${esc(dictionaryTerm.name)}の用語カードを開く" title="用語カード"><span aria-hidden="true">📖</span></button></div>`}).join('')}<div class="certainty-actions">${Object.entries(states).map(([key,label])=>`<button class="${key}${response.currentStatus===key?' selected':''}" onclick="Glossary.setTodayAssessment('${key}')"><span class="certainty-icon">${key==='safe'?'✓':key==='caution'?'△':'×'}</span>${label}</button>`).join('')}</div>${response.completed||response.assessmentRevealed?`<div class="term-back">${quizTermFields(term,true)}${q[term.id]?.explanation?`<div class="term-field"><div class="term-label">解説</div><div class="term-value">${dictionaryText(q[term.id].explanation,term.id)}</div></div>`:''}${sourceBlock(term)}</div>${performanceHtml(term,response)}`:''}</section>`}

function finalResultFor(response){if(response.unable)return'unable';const last=response.attempts.at(-1),correct=response.options[last]?.correct;if(correct)return response.attempts.length===1?'first_correct':'second_correct';return response.attempts.length>=2?'wrong':''}
function saveRecentAnswer(term,response){const key=stateKey(term),s=termState(term)||{},result=finalResultFor(response);if(!result)return;const rows=[...(s.recentAnswers||[])],existing=rows.findIndex(x=>x.sessionId===sessionId&&x.termId===term.id),row={id:`${sessionId}-${term.id}`,sessionId,termId:term.id,answeredAt:dateTime(),mode:sessionStats.label,firstChoice:response.attempts[0]??null,secondChoice:response.attempts[1]??null,originalResult:response.originalResult||result,finalResult:result,unable:response.unable,unableTiming:response.unableTiming||'',automaticStatus:response.autoStatus,manualStatus:response.currentStatus||response.autoStatus,reason:response.unable?'利用者が自力回答不能を申告':''};if(existing>=0)rows[existing]={...rows[existing],...row};else rows.push(row);learning[key]={...s,recentAnswers:rows.slice(-5)};saveLearning();response.recorded=true}
function applyQuizOutcome(term,response){const previous=response.finalResult||'',next=finalResultFor(response);if(!next||previous===next)return;if(previous){if(previous==='first_correct')sessionStats.firstCorrect--;else if(previous==='second_correct')sessionStats.secondCorrect--;else if(previous==='wrong')sessionStats.wrong--;else if(previous==='unable')sessionStats.unable--;adjustQuizTotals(term,previous,-1)}if(next==='first_correct')sessionStats.firstCorrect++;else if(next==='second_correct')sessionStats.secondCorrect++;else if(next==='wrong')sessionStats.wrong++;else sessionStats.unable++;adjustQuizTotals(term,next,1);response.finalResult=next;recordCurrentRoundQuizResult(term,next);saveRecentAnswer(term,response);persistTodaySession()}
function adjustQuizTotals(term,result,delta){const key=stateKey(term),s=termState(term)||{},correct=result==='first_correct'||result==='second_correct';learning[key]={...s,quizCorrect:Math.max(0,(Number(s.quizCorrect)||0)+(correct?delta:0)),quizWrong:Math.max(0,(Number(s.quizWrong)||0)+(correct?0:delta))};saveLearning()}
function chooseToday(index){const term=currentTerm(),response=todayResponse(term);if(response.completed||response.attempts.includes(index))return;response.attempts.push(index);const correct=response.options[index].correct;if(!correct)recordCurrentRoundMistake(term);if(correct||response.attempts.length===2){response.completed=true;response.originalResult=correct?(response.attempts.length===1?'first_correct':'second_correct'):'wrong';response.autoStatus=correct?(response.attempts.length===1?'safe':'caution'):'danger';const finalStatus=response.autoStatus==='danger'?'danger':response.preStatus||response.autoStatus;if(response.currentStatus&&sessionStats[response.currentStatus]>0)sessionStats[response.currentStatus]--;response.currentStatus=finalStatus;applyQuizOutcome(term,response);setStatus(term,finalStatus,true,`3択:${response.originalResult}${response.preStatus==='caution'?'・勘':''}`);recordCategoryRoundEvaluation(term,finalStatus);sessionStats[finalStatus]++;evaluatedIds.add(term.id)}renderSession()}
function openPoint(event){event?.preventDefault();event?.stopPropagation();const response=todayResponse();response.pointOpen=true;renderSession();bindPointGesture()}
function closePoint(event){event?.preventDefault();event?.stopPropagation();const response=todayResponse();if(!response.pointOpen)return;response.pointOpen=false;renderSession()}
function bindPointGesture(){const card=document.querySelector('.point-comparison');if(!card)return;let startY=0;card.addEventListener('touchstart',event=>{startY=event.touches[0]?.clientY||0},{passive:true});card.addEventListener('touchend',event=>{const endY=event.changedTouches[0]?.clientY||0;if(endY-startY>55)closePoint(event)},{passive:false})}
function markGuess(){const term=currentTerm(),response=todayResponse(term);if(response.completed)return;response.preStatus=response.preStatus==='caution'?'':'caution';persistTodaySession();renderSession()}
function markUnable(){const term=currentTerm(),response=todayResponse(term);if(response.unable)return;response.unable=true;response.unableTiming=response.completed?'after':'before';if(!response.completed){response.completed=true;response.originalResult='unable'}response.autoStatus='danger';if(response.currentStatus&&sessionStats[response.currentStatus]>0)sessionStats[response.currentStatus]--;response.currentStatus='danger';sessionStats.danger++;applyQuizOutcome(term,response);setStatus(term,'danger',true,'利用者が自力回答不能を申告');recordCategoryRoundEvaluation(term,'danger');evaluatedIds.add(term.id);renderSession()}
function overrideToday(status){const term=currentTerm(),response=todayResponse(term);if(!response.completed||!states[status])return;if(response.currentStatus!==status){sessionStats[response.currentStatus]=Math.max(0,sessionStats[response.currentStatus]-1);sessionStats[status]++;response.currentStatus=status;setStatus(term,status,false,'手動自己評価を優先');recordCategoryRoundEvaluation(term,status);saveRecentAnswer(term,response);persistTodaySession()}renderSession()}
function setTodayAssessment(status){const term=currentTerm(),response=todayResponse(term);if(!states[status])return;response.assessmentRevealed=true;if(response.currentStatus!==status){if(response.currentStatus&&sessionStats[response.currentStatus]>0)sessionStats[response.currentStatus]--;response.currentStatus=status;response.preStatus=status==='caution'?'caution':'';sessionStats[status]++;setStatus(term,status,false,'自己評価');recordCategoryRoundEvaluation(term,status);evaluatedIds.add(term.id);if(status==='danger'&&!response.completed){response.unable=true;response.unableTiming='before';response.completed=true;response.originalResult='unable';response.autoStatus='danger';applyQuizOutcome(term,response)}else if(response.completed)saveRecentAnswer(term,response)}persistTodaySession();renderSession()}


function sessionNavigation(){const listMode=sessionModeKey==='todayBookmarks'||sessionModeKey==='roundMistakes',lastLabel=listMode?'一覧へ戻る＞':'結果を見る＞',response=todayQuizMode?todayResponse():null,navLabel=sessionModeKey==='todayBookmarks'?'ブックマーク問題':sessionModeKey==='roundMistakes'?'間違えた問題':'今日の10語';return `<nav class="session-navigation today-session-navigation${response?' has-point':''}" aria-label="${navLabel}の前後移動"><button onclick="Glossary.previousTerm()">＜前へ</button>${response?'<button type="button" class="point-trigger" onclick="Glossary.openPoint(event)">Point！</button>':''}<button class="session-next" onclick="Glossary.nextTerm()">${sessionIndex===session.length-1?lastLabel:'次へ＞'}</button></nav>`}




function setStatus(term,status,automatic=false,reason=''){const normalizedStatus=status==='unable'?'danger':status,key=stateKey(term),old=termState(term)||{},now=dateTime(),ability=performanceFor(term).level;learning[key]={...old,status:normalizedStatus,performanceLevel:ability,previousStudyAt:old.lastStudyAt||null,lastStudyAt:now,studyCount:(Number(old.studyCount)||0)+1,history:[...(Array.isArray(old.history)?old.history:[]),{at:now,status:normalizedStatus,automatic,performanceLevel:ability,reason}].slice(-50)};recordGlobalRoundEvaluation(term,normalizedStatus);saveLearning();return learning[key]}
function assess(id,status,kind){const term=termById.get(id);if(!term)return;if(screen==='session'&&assessedCurrent)return;setStatus(term,status);if(screen==='session'){if(sessionModeKey==='categoryAll')recordCategoryRoundEvaluation(term,status);sessionStats[status]++;assessedCurrent=true;evaluatedIds.add(term.id);renderSession()}else if(screen==='bookmark'){renderBookmark()}else renderHome()}
function nextTerm(){if(todayQuizMode){const response=todayResponse();countRoundProgress(response);if(response.completed&&!response.counted){sessionStats.studied++;response.counted=true;saveRecentAnswer(currentTerm(),response)}}else sessionStats.studied++;if(sessionIndex<session.length-1){sessionIndex++;persistTodaySession();prepareTerm();renderSession();scrollTo(0,0)}else if(sessionModeKey==='todayBookmarks'){renderTodayBookmarks(true)}else if(sessionModeKey==='roundMistakes'){renderRoundMistakes(true)}else if(sessionModeKey==='searchQuestion')restoreSearchResults();else renderResult()}
function previousTerm(){if(sessionIndex>0){sessionIndex--;persistTodaySession();prepareTerm();renderSession();scrollTo(0,0)}else{if(isTodaySession){todayMeta().activeSession=null;saveTodayMeta()}if(sessionModeKey==='todayBookmarks')renderTodayBookmarks(true);else if(sessionModeKey==='roundMistakes')renderRoundMistakes(true);else if(sessionModeKey==='searchQuestion')restoreSearchResults();else renderHome()}}
function renderResult(){setAppScreen(APP_SCREEN.RESULT,{returnScreen:APP_SCREEN.HOME});if(isTodaySession){const meta=todayMeta();meta.activeSession=null;saveTodayMeta()}app.innerHTML=`${quizProgressSummary().replace('最終評価：注意','最終評価：勘')}<div class="result-actions"><button class="next-button next-ten-button" onclick="Glossary.nextTodaySet()">次の10語へ</button><button class="next-button return-glossary-button" onclick="Glossary.home()">ホームへ戻る</button></div>`;syncFloatingNav()}

function nextTodaySet(){const meta=todayMeta();meta.activeSession=null;saveTodayMeta();startMode('today')}
function resetLearning(){if(!confirm('用語集の安心・勘・無理、解答履歴をすべて削除します。この操作は元に戻せません。'))return;learning={};try{localStorage.removeItem(STORAGE_KEY)}catch(_){}normalizedKeys.clear();renderHome()}
function restoreActiveToday(){const active=todayMeta().activeSession;if(!active||!Array.isArray(active.ids)||!active.ids.length||!active.sessionId)return false;const terms=active.ids.map(id=>termById.get(Number(id))).filter(term=>term&&q[term.id]);if(!terms.length)return false;setAppScreen(APP_SCREEN.SESSION,{returnScreen:APP_SCREEN.HOME});session=terms;sessionIndex=Math.min(Math.max(0,Number(active.index)||0),terms.length-1);sessionId=active.sessionId;statusSessionMode=false;isTodaySession=true;todayQuizMode=true;todayAnswers=new Map(Object.entries(active.answers||{}).filter(([id])=>q[Number(id)]).map(([id,response])=>[Number(id),response]));evaluatedIds=new Set((active.evaluatedIds||[]).map(Number).filter(id=>q[id]));sessionStats={label:active.label||`今日の${terms.length}語`,sourceStatus:'',studied:0,correct:0,firstCorrect:0,secondCorrect:0,wrong:0,unable:0,safe:0,caution:0,danger:0,...(active.stats||{})};prepareTerm();renderSession();return true}
function restoreHomePosition(scrollY){renderHome();requestAnimationFrame(()=>{if(fieldReturnIndex>=0)document.querySelector(`.field-row[data-field-index="${fieldReturnIndex}"]`)?.setAttribute('open','');fieldReturnIndex=-1;scrollTo(0,Number(scrollY)||0)})}
function exitCurrent(){if(screen==='today-bookmarks'||screen==='round-mistakes'){renderHome();return}if(isTodaySession){todayMeta().activeSession=null;saveTodayMeta()}if(flashcardMode&&sessionContext){returnFromLearningContext();return}if(sessionModeKey==='todayBookmarks')renderTodayBookmarks(true);else if(sessionModeKey==='roundMistakes')renderRoundMistakes(true);else if(sessionModeKey==='searchQuestion')restoreSearchResults();else if(sessionModeKey==='categoryAll')restoreHomePosition(categoryHomeScrollY);else renderHome()}
function relatedTerms(term){
 const values=term.relatedIds||term.relatedTerms||term.related||[];
 return values.map(value=>typeof value==='number'?termById.get(value):data.terms.find(item=>item.name===value)).filter(Boolean);
}
function renderLearningCard(){
 const term=currentTerm(),marked=isBookmarked(term),related=relatedTerms(term),reverse=reverseMode;
 const pool=learningPool(),position=sessionIndex%pool.length+1;
 const reverseHints=term.reverseHints||[];
 const reverseHintsHtml=`<span class="reverse-hints-list">${reverseHints.map(value=>{const text=String(value??'').replace(/^\s*・\s*/u,'').replace(/[。．]+\s*$/u,'').trim();return `<span class="reverse-hint-item"><span class="reverse-hint-text">${esc(text)}</span></span>`}).join('')}</span>`;
 const linkText=value=>reverse&&!reverseRevealed?esc(value):dictionaryText(value,term.id);
 const defText=linkText(term.definition||term.meaning||'');
 const examText=term.exam?.length?term.exam.map(value=>{const bullet=value.startsWith('・'),text=bullet?value.slice(1).trimStart():value;return `<div class="${bullet?'exam-bullet-line':'exam-plain-line'}">${bullet?'<span aria-hidden="true">・</span>':''}<span class="exam-line-text">${linkText(text)}</span></div>`}).join(''):'';
 const symptoms=termSymptoms(term);
 const details=`<section class="learning-details"><section><h2 class="definition">${sectionHeading('definition')}</h2><div${multilineAttr(defText)}>${defText}</div></section>${symptoms.length?`<section><h2 class="symptoms">${sectionHeading('symptoms')}</h2>${symptomListHtml(symptoms,term.id,!reverse||reverseRevealed)}</section>`:''}${term.exam?.length?`<section><h2 class="point">${sectionHeading('exam')}</h2><div${multilineAttr(examText)}>${examText}</div></section>`:''}${term.mixup?.length?mixupFieldHtml(term,'h2',!reverse||reverseRevealed):''}</section>`;
 app.innerHTML=`${learningCategoryButtonsHtml()}<article class="learning-card${reverse?' is-reverse':''}"><header><span>${esc(term.category)}</span><em>${position} / ${pool.length}語</em></header><div class="learning-card-scroll">${reverse?`<section class="learning-hero reverse-question"><button type="button" class="learning-card-bookmark${marked?' is-bookmarked':''}" onclick="Glossary.toggleBookmark(${term.id})" aria-label="${marked?'ブックマークを解除':'ブックマークに追加'}">🔖</button>${reverseHintsHtml||'ヒントを確認してください'}</section><section class="reverse-answer${reverseRevealed?' is-visible':''}"><h1>${esc(term.name)}</h1>${details}</section>`:`<section class="learning-hero"><button type="button" class="learning-card-bookmark${marked?' is-bookmarked':''}" onclick="Glossary.toggleBookmark(${term.id})" aria-label="${marked?'ブックマークを解除':'ブックマークに追加'}">🔖</button><h1>${esc(term.name)}</h1></section>${details}`}<nav class="learning-actions" aria-label="用語カードの前後移動と理解済み登録"><button onclick="Glossary.flashPrevious()"><span>＜</span>前へ</button><button onclick="Glossary.reverseUnderstood()"><span>✓</span>理解した</button><button onclick="Glossary.flashNext()"><span>＞</span>次へ</button></nav>${!reverse&&related.length?`<div class="related-list" hidden>${related.map(item=>`<button onclick="Glossary.openRelated(${item.id})">${esc(item.name)}</button>`).join('')}</div>`:''}</div></article>`;
 syncFloatingNav();
 bindLearningCardFlick();
}
const learningDeckStates=new Map();
let sessionHistory=[],sessionHistoryIndex=0;
const LEARNING_ENTRY={DEFAULT:'defaultLearning',BOOKMARK:'learningBookmarks',STATUS:'statusLearning',SEARCH:'searchLearning'};
const LEARNING_RETURN={HOME:'home',BOOKMARK:'bookmark',STATUS_LIST:'status-list',SEARCH_RESULTS:'search-results'};
let sessionContext=null;
function indexForTerm(terms,preferredId=0){const index=terms.findIndex(term=>term.id===Number(preferredId));return Math.max(0,index)}
function createSessionContext({entryType=LEARNING_ENTRY.DEFAULT,targetTerms=[],startIndex=0,displayMode='normal',returnScreen=LEARNING_RETURN.HOME,returnScrollY=0,returnData={}}={}){const terms=[...targetTerms];return{entryType,targetTerms:terms,startIndex:Math.min(Math.max(0,Number(startIndex)||0),Math.max(0,terms.length-1)),displayMode:displayMode==='reverse'?'reverse':'normal',returnScreen,returnScrollY:Math.max(0,Number(returnScrollY)||0),returnData:{...(returnData||{})}}}
function emptyLearningStats(label,sourceStatus=''){return{label,sourceStatus,studied:0,correct:0,firstCorrect:0,secondCorrect:0,wrong:0,unable:0,safe:0,caution:0,danger:0}}
function beginLearningSession(context,options={}){
 sessionContext=createSessionContext(context);
 setAppScreen(APP_SCREEN.SESSION,{returnScreen:sessionContext.returnScreen,returnScrollY:sessionContext.returnScrollY,returnData:sessionContext.returnData});flashcardMode=true;reverseMode=sessionContext.displayMode==='reverse';reverseRevealed=false;
 sessionModeKey=options.modeKey??sessionContext.entryType;
 if(options.clearCategory!==false)flashCategory='';
 session=[...sessionContext.targetTerms];sessionIndex=sessionContext.startIndex;
 if(!options.preserveHistory){sessionHistory=[sessionIndex];sessionHistoryIndex=0}
 sessionId=`${options.idPrefix||'fc'}-${Date.now()}-${Math.random().toString(36).slice(2,8)}`;
 statusSessionMode=Boolean(options.statusSession);isTodaySession=false;todayQuizMode=false;
 todayAnswers=new Map();evaluatedIds=new Set();
 sessionStats=emptyLearningStats(options.label||(reverseMode?'逆引':'用語'),options.sourceStatus||'');
 prepareTerm();renderSession();scrollTo(0,0)
}

function isContextBoundedLearning(){return Boolean(sessionContext&&sessionContext.entryType!==LEARNING_ENTRY.DEFAULT)}
function returnFromLearningContext(){
 if(!sessionContext){renderHome();return}
 const context=sessionContext,returnData=context.returnData||{};
 sessionContext=null;
 switch(context.returnScreen){
  case LEARNING_RETURN.BOOKMARK:
   bookmarkLearningReverse=Boolean(returnData.learningReverse);
   bookmarkListScrollY=context.returnScrollY;
   renderBookmark(true);
   return;
  case LEARNING_RETURN.STATUS_LIST:
   activeStatusListKey=returnData.status||activeStatusListKey;
   activeStatusListLabel=returnData.label||activeStatusListLabel;
   statusListScrollY=context.returnScrollY;
   renderStatusList(activeStatusListKey,listTerms,activeStatusListLabel,true);
   return;
  case LEARNING_RETURN.SEARCH_RESULTS:
   activeSearchQuery=returnData.query??activeSearchQuery;
   activeSearchScrollY=context.returnScrollY;
   restoreSearchResults();
   return;
  default:
   restoreHomePosition(context.returnScrollY)
 }
}
function learningField(name){return EXAM_FIELDS.find(field=>field.name===name)}
function learningPool(fieldName=flashCategory){if(sessionModeKey==='learningBookmarks')return bookmarkedTerms();if(sessionModeKey==='statusLearning')return listTerms;if(sessionModeKey==='searchLearning')return activeSearchTerms;const field=learningField(fieldName),shared=new Set(field?.sharedTermIds||[]);return flashcardTerms.filter(term=>!fieldName||field?.categories.includes(term.category)||shared.has(Number(term.id)))}
function randomizedLearningTerms(terms,preferred=null){const randomized=shuffle([...new Map(terms.map(term=>[term.id,term])).values()]);if(preferred){const index=randomized.findIndex(term=>term.id===preferred.id);if(index>0)[randomized[0],randomized[index]]=[randomized[index],randomized[0]]}return randomized}
function learningDeckKey(fieldName=flashCategory){return fieldName||'すべて'}
function saveLearningDeckPosition(){if(!flashcardMode||!session.length)return;learningDeckStates.set(learningDeckKey(),{session,index:sessionIndex,history:[...sessionHistory],historyIndex:sessionHistoryIndex})}
function loadLearningDeck(fieldName,preferred=null,randomize=false){flashCategory=fieldName;const key=learningDeckKey(),saved=learningDeckStates.get(key);if(saved&&!preferred&&!randomize){session=saved.session;sessionIndex=saved.index;sessionHistory=saved.history;sessionHistoryIndex=saved.historyIndex;return}session=randomize?randomizedLearningTerms(learningPool(),preferred):[...learningPool()];if(preferred&&!randomize){const index=session.findIndex(term=>term.id===preferred.id);if(index>0)[session[0],session[index]]=[session[index],session[0]]}sessionIndex=0;sessionHistory=[0];sessionHistoryIndex=0;saveLearningDeckPosition()}
function learningCategoryButtonsHtml(){if(sessionModeKey==='learningBookmarks')return `<div class="learning-bookmark-session-label">${reverseMode?'逆引き':'用語カード'}・ブックマーク内</div>`;if(sessionModeKey==='statusLearning')return `<div class="learning-bookmark-session-label">${esc(activeStatusListLabel)}の用語・一覧内</div>`;if(sessionModeKey==='searchLearning')return `<div class="learning-bookmark-session-label">検索結果「${esc(activeSearchQuery)}」内</div>`;return `<nav class="learning-category-nav" aria-label="科目選択"><button type="button" class="${flashCategory?'':'selected'}" onclick="Glossary.selectFlashCategory('')">すべて</button>${EXAM_FIELDS.map(field=>`<button type="button" class="${flashCategory===field.name?'selected':''}" onclick="Glossary.selectFlashCategory('${esc(field.name)}')">${esc(field.name)}</button>`).join('')}</nav>`}
function pushSessionHistory(){
 sessionHistory.splice(sessionHistoryIndex+1);
 sessionHistory.push(sessionIndex);
 sessionHistoryIndex=sessionHistory.length-1;
}
function bindLearningCardFlick(){
 const card=document.querySelector('.learning-card');
 if(!card)return;
 let startX=0,startY=0,tracking=false;
 card.addEventListener('touchstart',event=>{
  if(event.touches.length!==1)return;
  const touch=event.touches[0];
  startX=touch.clientX;startY=touch.clientY;tracking=true;
 },{passive:true});
 card.addEventListener('touchcancel',()=>{tracking=false},{passive:true});
 card.addEventListener('touchend',event=>{
  if(!tracking)return;
  tracking=false;
  const touch=event.changedTouches[0];
  if(!touch)return;
  const dx=touch.clientX-startX,dy=touch.clientY-startY;
  if(Math.abs(dx)<55||Math.abs(dx)<=Math.abs(dy)*1.25)return;
  event.preventDefault();
  if(dx<0)flashNext();
  else flashPrevious();
 },{passive:false});
}
function startLearningMode(isReverse,preferredId=0){
 const continuingLearning=flashcardMode;
 if(continuingLearning)saveLearningDeckPosition();
 const preferred=flashcardTerms.find(term=>term.id===Number(preferredId))||null;
 const preferredField=preferred?EXAM_FIELDS.find(field=>field.categories.includes(preferred.category)||(field.sharedTermIds||[]).includes(Number(preferred.id)))?.name||'':flashCategory;
 loadLearningDeck(preferredField,preferred,isReverse);
 beginLearningSession({entryType:LEARNING_ENTRY.DEFAULT,targetTerms:session,startIndex:sessionIndex,displayMode:isReverse?'reverse':'normal',returnScreen:LEARNING_RETURN.HOME,returnScrollY:0,returnData:{category:flashCategory}},{idPrefix:'fc',modeKey:'',label:isReverse?'逆引':'用語',preserveHistory:true,clearCategory:false});
}
startFlashcards=function(preferredId=0){startLearningMode(false,preferredId)}
const renderSessionLearningBase=renderSession;
renderSession=function(){if(flashcardMode){renderLearningCard();return}renderSessionLearningBase()}
function startReverse(){startLearningMode(true)}
selectFlashCategory=function(fieldName){if(fieldName!==''&&!learningField(fieldName))return;const pool=learningPool(fieldName);if(!pool.length){showStatusMessage(`「${fieldName}」に該当する用語はありません`);return}saveLearningDeckPosition();loadLearningDeck(fieldName,null,reverseMode);reverseRevealed=false;prepareTerm();renderSession();scrollTo(0,0)}
function showRelated(){const list=document.querySelector('.related-list');if(list){list.hidden=!list.hidden}else showStatusMessage('関連語なし')}
function openRelated(id){const term=termById.get(id);if(!term)return;session=[term];sessionIndex=0;reverseMode=false;renderLearningCard()}
function checkThreeChoice(){const term=currentTerm();if(!q[term.id]){showStatusMessage('対応する問題はありません');return}reverseMode=false;startSession([term],'3択で確認',true,'','termCheck')}
function reverseUnderstood(){const term=currentTerm(),key=stateKey(term),old=termState(term)||{};learning[key]={...old,reverseUnderstood:true,reverseUnderstoodAt:dateTime()};saveLearning();reverseRevealed=true;renderLearningCard()}
const flashNextOriginal=flashNext;
flashNext=function(){if(reverseMode)reverseRevealed=false;flashNextOriginal()}
document.addEventListener('click',event=>{const link=event.target.closest('.dictionary-link[data-dictionary-id]');if(!link)return;event.preventDefault();event.stopPropagation();openDictionary(link.dataset.dictionaryId,event)},true);
document.addEventListener('click',event=>{const link=event.target.closest('a[href]');if(!link)return;const saved={reason:'linked-page',screen,scrollY:window.scrollY};if(screen==='status-list'){const existing=JSON.parse(sessionStorage.getItem(VIEW_STATE_KEY)||'null');saved.status=existing?.status||Object.keys(states).find(status=>listTerms.some(term=>statusBucket(term)===status))}saveViewState(saved)},true);
globalThis.Glossary={home:goHome,startFlashcards,startReverse,showRelated,openRelated,checkThreeChoice,reverseUnderstood,toggleFlashcard,flashAdvance,flashNext,flashPrevious,advanceFlashCard,selectFlashCategory,searchTermNames,openSearchedTerm,openSearchedQuestion,exportBackup,importBackup,toggleBookmark,removeBookmark,toggleTodayBookmark,openTodayBookmarks(event){event?.preventDefault();event?.stopPropagation();renderTodayBookmarks()},openTodayBookmarkQuestion:startTodayBookmarkSession,openRoundMistakes(event){event?.preventDefault();event?.stopPropagation();renderRoundMistakes()},openRoundMistakeQuestion:startRoundMistakeSession,assessFlash,showFlashHint,showFlashAnswer,openBookmark:renderBookmark,openRoundHistory:renderRoundHistory,setBookmarkLearningMode,openLearningBookmark:startLearningBookmarkSession,openDictionary,dictionaryBack,dictionaryToCard,dictionaryToQuiz,back:goBack,startMode,startStatus,openStatusLearning:startStatusLearningSession,startQuizResult,chooseToday,openPoint,closePoint,markGuess,markUnable,overrideToday,setTodayAssessment,assess,nextTerm,previousTerm,resetLearning,toggleTextEnlarged,nextTodaySet,exitSession:exitCurrent,startCategoryWeak,startFieldQuiz,startCategoryQuiz,startFieldLearning,startCategoryLearning,resetCategoryLearning};
const launchParams=new URLSearchParams(location.search),launchCard=Number(launchParams.get('card')),launchQuiz=Number(launchParams.get('quiz'));
if(launchCard&&termById.has(launchCard))startFlashcards(launchCard);
else if(launchQuiz&&termById.has(launchQuiz)&&q?.[launchQuiz])startSession([termById.get(launchQuiz)],'3択で確認',true,'','dictionaryCheck');
else if(!restoreSavedView())renderHome();
})();
