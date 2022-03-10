`use strict`;

// Map

// Пусть дан массив массивов ([[1,"first"], [3,"third"]]).
// Создайте коллекцию Map из этjого массива.

const myMapArr = new Map([
  [1, "first"],
  [3, "third"],
]);

// console.log("myMapArr :>> ", myMapArr);
console.log();

// Получите список ключей и значений отдельно.

console.log("keys", myMapArr.keys());
for (let key of myMapArr.keys()) {
  console.log("keys :>> ", key);
}

console.log("keys", myMapArr.values());
for (let value of myMapArr.values()) {
  console.log("values :>> ", value);
}

// Получите текущее количество элементов.
console.log("size :>> ", myMapArr.size);

// Добавьте и удалите элемент

myMapArr.set(5, "fifth");
myMapArr.set("del", "delete");
console.log(myMapArr);
myMapArr.delete("del");
console.log(myMapArr);

// Произведите поиск по ключу

console.log(myMapArr.has(3));
console.log(myMapArr.has("del"));

// ******************************************************
// Set

// Создайте коллекцию Set с начальными значениями 1,2,3.

const mySetArr = new Set([1, 2, 3]);

console.log("mySetArr :>> ", mySetArr);
// С помощью метода has проверьте наличие элемента со значением 3, а затем элемента со значением 4.

console.log(mySetArr.has(3));
console.log(mySetArr.has(4));

// Добавите еще несколько элементов.

mySetArr.add(4);
mySetArr.add(44);
console.log(mySetArr);

// С помощью цикла for-of переберите ее значения и выведите в консоль.

for (let value of mySetArr) {
  console.log("value :>> ", value);
}
// Найдите сумму этих значений.

// function getSumSetArr(arr) {
//   let sum = 0;
//   for (let value of mySetArr) {
//     sum += value;
//   }
//   return sum;
// }

// console.log(" :>> ", getSumSetArr(mySetArr));

let sum = 0;
mySetArr.forEach((value) => {
  sum += value;
});
console.log("sum :>> ", sum);
// Удалите элемент 2.

mySetArr.delete(2);
console.log(mySetArr);
// Очистите всю коллекцию.

mySetArr.clear();
console.log(mySetArr);

// Из массива [1,6,9,4,9,1,5,6] получить массив уникальных значений.

const numbers = [1, 6, 9, 4, 9, 1, 5, 6];
const set = Array.from(new Set(numbers));

console.log(numbers, "=>>", set);
// Из массивов [1,6,9,4,9,1,5,6] и [5, 10, 11] получить один массив уникальных значений.
const arr1 = [1, 6, 9, 4, 9, 1, 5, 6];
const arr2 = [5, 10, 11];

const arrSet = new Set([...arr1, ...arr2]);

console.log(arr1, "+", arr2, "=>>", arrSet);
