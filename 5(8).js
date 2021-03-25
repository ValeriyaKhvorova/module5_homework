// Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
// Используйте шаблонные строки.

let myMap = new Map();
myMap.set(0, 'zero');
myMap.set(1, 'one');
myMap.set(2, 'two');
for (let [key, value] of myMap) {
  console.log('Ключ - ' + key + ', Значение - ' + value);
}