// Работа #7 (21) 
console.log('====== Задача 1 =========');

let replaceCSSComments = (mystr) => {
  return mystr.replace(/\/\*.*?\*\/\s?/g, '');
};
console.log(replaceCSSComments('код без /*комментарий*/ комментов')); // код без комментов
console.log(replaceCSSComments('код бе/*коммент1*/з ком/* коммент2 */ментов')); // код без комментов
console.log(replaceCSSComments('код /*к1*/ без /* к2 */ коммент/*к3*/ов')); // код без комментов

console.log('====== Задача 2 =========');

let replaceHTMLComments = (mystr) => {
  return mystr.replace(/\<\!\-\-*.*?\-\-\>\s*/g, '').trim();
};
console.log(replaceHTMLComments('<!--коммент1--> код без комментов <!--коммент2-->')); // код без комментов
console.log(replaceHTMLComments('<!--к1--> код <!-- к2 --><!-- к3 --> без <!-- к4 --> комментов')); // код без комментов
console.log(replaceHTMLComments('код <!--к1--> без <!-- к2 --> комментов')); // код без комментов

console.log('====== Задача 3 =========');

