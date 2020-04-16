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

let validateFileType = (mystr) => {
  return (/\.(jpg|jpeg|png)$/).test(mystr);
};

console.log(validateFileType('image.png')); // true
console.log(validateFileType('image.html')); // false
console.log(validateFileType('image.file.jpg')); // true
console.log(validateFileType('image.png.file')); // false
console.log(validateFileType('image.png.jpeg')); // true
console.log(validateFileType('image.pngjpeg')); // true


console.log('====== Задача 4 =========');

let checkYear = (mystr) => {
  return (/^(19\d\d|20\d\d|2100)$/).test(mystr);
};

console.log(checkYear(1900)); // true
console.log(checkYear(2001)); // true
console.log(checkYear(2100)); // true
console.log(checkYear(1899)); // false
console.log(checkYear(20)); // false
console.log(checkYear(200)); // false
console.log(checkYear(20000)); // false
console.log(checkYear('20000')); // false
console.log(checkYear(19)); // false
console.log(checkYear('19')); // false
console.log(checkYear(2101)); // false

console.log('====== Задача 5 =========');

let checkEmail = (mystr) => {
  return (/^[a-zA-z]+\W?[a-zA-z]+@[a-zA-z\.]+\.[a-z]{2,3}$/).test(mystr);
};

console.log(checkEmail('mail@gmail.com')); // true
console.log(checkEmail('mail.name@mail.ua')); // true
console.log(checkEmail('mail-name@mail.ua')); // true
console.log(checkEmail('mail-name@mail.com.ua')); // true
console.log(checkEmail('mail@gmail')); // false
console.log(checkEmail('mail@gmail-com')); // false
console.log(checkEmail(' mail-name@mail.com.ua')); // false
console.log(checkEmail('mail-name@mail.com.ua ')); // false