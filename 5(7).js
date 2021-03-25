// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
// При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.

let arr = [5, 10, 15, 18, 20, 30, 35, 40, 45, 0, '399'];
let sumEven = 0;
let sumOdd = 0;
// arr.forEach(function(item, index, array){
//   if (item == 0) {
//     console.log(item);
//   }
// });
for (i = 0; i < arr.length; i++) {
   if (typeof arr[i] == 'number') {
     if (arr[i] != 0) {
        if (arr[i] % 2 == 0) {
        sumEven++;
        } else if (arr[i] % 2 != 0) {
        sumOdd++;
        }  
     }
        if (arr[i] == 0) {
        console.log(arr[i]);
        }
   }
}
console.log('Even :' + sumEven);
console.log('Odd :' + sumOdd);
console.log('количество эл-ов в массиве :' + arr.length); 