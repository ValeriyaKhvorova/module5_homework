// Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".

let str = 'Hello!';
let res = '';
for (let i = 0; i<str.length; i++) {
//   console.log(str[str.length-i-1]);
  res += str[str.length-i-1];
  
}
console.log(res);