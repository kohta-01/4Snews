'use strict';
const userNameInput = document.getElementById ('user-name');
const assessmentButton = document.getElementById ('assessment');
const resultDivided = document.getElementById ('result-area');
const tweetDivided = document.getElementById ('tweet-area');

/**
 * 指定した要素の子供を全て削除する
 * @param {HTMLElement} element HTMLの要素
 */
function removeAllChildren(element) {
    while (element.firstChild) {
    //子供の要素がある限り削除
    element.removeChild (element.firstChild);
    }
}
assessmentButton.onclick = () => {
const userName = userNameInput.value;
if (userName.length === 0) {//名前が空の時は処理を終了する　
return;
 }

//TODO 診断結果エリアの作成
removeAllChildren(resultDivided);
const header = document.createElement ('h3');
header.innerText = '検索結果';
resultDivided.appendChild(header);

const paragraph = document.createElement ('p');
const result = assessment(userName);
paragraph.innerText =result;
resultDivided.appendChild(paragraph);

//widgets.jsの設定
const script=document.createElement('script');
script.setAttribute('src','https://platform.twitter.com/widgets.js');
tweetDivided.appendChild(scriprt);
};
const answers = [
'{userName}では、完治した患者が、新たな感染者数を上回っており、希望の光が見え始めている。',
'{userName}では、収入維持のために外へ働きに行かざるをえない貧困層が多く、政府の外出禁止令は不調に終わっている。これからの更なる感染拡大も懸念されている。',
'{userName}のオックスフォード大学では、世界に先駆けてワクチン開発が行われいる。',
'{userName}の死亡率は他の欧米諸国と比べて極めて少ないことから、ドイツの危機管理能力の高さがうかがえる。',
'{userName}ではコロナによる死者数が５万人を突破し、世界で最も深刻な状況となっている。世界一の大国であるが故に世界経済に与える影響は計り知れないものとなるだろう。',
'先進国の中で{userName}のコロナ感染者数、死亡者共に極めて少ない。しかし余談を許してはならない',
'{userName}軍の部隊がコロナの影響と金正恩氏のにより壊滅状態にあるという噂がある。また、首都平壌では買い占めも多発しており、コロナによる「北朝鮮崩壊説」も唱えられているほどだ。',
'{userName}は、新型コロナウイルスの感染者が爆発的に増加し、医療崩壊に陥った。中国依存の経済的要因、不十分な医療体制という政治的要因が{userName}を欧州における”激震地”にしたのだと考えられる。',
'{userName}では３月３０日にブハリ大統領により、外出禁止が指示された。アフリカ最大の人口を誇る{userName}だが、医療体制が未熟であるためにさらなる感染拡大時の医療崩壊が懸念されており、現在、中国の医療チームが対策支援のため現地入りしている。',
'{userName}では３月下旬にピークを迎えたが、それ以降徐々に落ち着きを取り戻し、現在では社会活動も回復した。だが、感染の第二波を恐れているため、厳戒態勢が取られている。',
'{userName}政府は医療関係者や一部公務員を除く出勤を禁じ、公共交通機関も止めるという大胆な都市封鎖措置をとっており、世界中から注目を集めている。'
];
/**
 * 名前の文字列を渡すと診断結果を返す関数
 * @param {string} userName ユーザーの名前
 * @return {string} 診断結果
 */
function assessment (userName){
 //全文字コード番号を取得してそれを足し合わせる
let sumOfCharCode = 0;
for (let i = 0; i<userName.length; i++)
{sumOfCharCode = sumOfCharCode + userName.charCodeAt(i);}
//文字コード番号の合計を回答の数で割って添字の数値を求める
const index = sumOfCharCode %　answers.length;
let result = answers[index];
result = result.replace(/\{userName\}/g,userName);
return result;}
