import products from "./data.js";
// 1-masala

// const students = [
//   { name: "Quincy", percent: 96 },
//   { name: "Jason", percent: 84 },
//   { name: "Alexis", percent: 100 },
//   { name: "Sam", percent: 65 },
//   { name: "Katie", percent: 90 },
//   { name: "Anna", percent: 75 },
// ];

// function changStudents(students, baho) {
//   return students.map((grad) => {
//     if (grad.percent > 85) {
//       return { ...grad, grad: 5 };
//     } else if (grad.students > 75) {
//       return { ...grad, grad: 4 };
//     } else {
//       return { ...grad, grad: 3 };
//     }
//   }).filter((item) => {
//     return item.grad == baho
//   // }).map((ism) => {
//   //   return ism.name
//   })
// }
// let result = changStudents(students,5);
// console.log(result);

// 2-masala

// const animals = [
//   "dog",
//   "chicken",
//   "cat",
//   "dog",
//   "chicken",
//   "chicken",
//   "rabbit",
// ];

// let sameName = animals.reduce((acc, value) => {
//   if (acc[value]) {
//     acc[value] += 1;
//   } else {
//     acc[value] = 1;
//   }
//   return acc;
// }, {});
// console.log(sameName);


// 3-masala
// let numbers = [1, 2, 3, 4, 5];
// let result = numbers.map((number) => {
//   return number ** 2;
// });
// console.log(result);

// 4-masala;
// let numbers = [1, -4, 12, 0, -3, 29, -150];
// let result = numbers
//   .filter((num) => {
//     return num > 0;
//   })
//   .reduce((acc, num) => {
//     return (acc += num);
//   }, 0);
// console.log(result);

// 5-masala
// let words = "George Raymond Richard Martin";
// let result = words
//   .split(" ")
//   .map((word) => {
//     return word[0];
//   })
//   .join("");

// console.log(result);

// 6-masala;
// let people = [
//   { name: "John", age: 13 },
//   { name: "Mark", age: 56 },
//   { name: "Rachel", age: 45 },
//   { name: "Nate", age: 67 },
//   { name: "Jeniffer", age: 65 },
// ];

// people.sort((a, b) => {
//   return a.age - b.age;
// });
// const youngest = people[0];
// const youngestName = people[0].name;
// const old = people[people.length - 1];
// const oldName = old.name;
// const differentAge = old.age - youngest.age;
// console.log(
//   eng yoshi ${youngestName} eng kattasi ${oldName} ularning yoshlari orasidagi farq ${differentAge}
// );

// 7-masala;
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// let even = numbers.filter((number) => number % 2 === 0);
// let old = numbers.filter((number) => number % 2 !== 0);
// console.log(even);
// console.log(old);

// 8-masala;
// const numbers = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
// const nonRepeating = (arr) => {
//   const checking = arr.reduce((acc, value) => {
//     if (!acc.includes(value)) {
//       acc.push(value);
//     }
//     return acc;
//   }, []);
//   return checking;
// };
// const result = nonRepeating(numbers);
// console.log(result);

// 9-masala
// narhi o'sishi  bo'yicha tartiblaymiz
// let sortingPrice = products.sort((a, b) => {
//   return a.price - b.price;
// });
// console.log(sortingPrice);

// 10-masala
// reyting bo'yicha eng kattasi
// let sortingReyting = products.sort((a, b) => {
//   return a.rating - b.rating;
// });
// const highestRating = sortingReyting[sortingReyting.length - 1];
// console.log(highestRating);

// 11-masala;
// narhi bo'yicha eng pasti
// let sortingPrice = products.sort((a, b) => {
//   return a.price - b.price;
// });
// const highestPrice = sortingPrice[0];
// console.log(highestPrice);

// 12-masala
// let sumPrice = products.reduce((acc, val) => {
//   return acc + val.price;
// }, 0);
// console.log(sumPrice);

// 13-masala;
// let productName = products.map((product) => {
//   return product.title;
// });
// console.log(productName);

// 14-masala
// const findIdName = products.find((product) => {
//   return product.id === 5;
// });
// console.log(findIdName.title);

// 15-masala
// let acsesuar = [
//   {
//     id: 6,
//     name: "Smarthpone",
//     price: 12000,
//     rating: 4.5,
//     discount: 20,
//   },
//   {
//     id: 2,
//     name: "Acer",
//     price: 10000,
//     rating: 4.3,
//     discount: 10,
//   },
//   {
//     id: 1,
//     name: "Mac book",
//     price: 17000,
//     rating: 4.7,
//     discount: 40,
//   },
//   {
//     id: 4,
//     name: "HP",
//     price: 21000,
//     rating: 4.1,
//     discount: 30,
//   },
//   {
//     id: 5,
//     name: "Dell",
//     price: 35000,
//     rating: 4.9,
//     discount: 30,
//   },
// ];
// let deleteProudact = acsesuar.filter((acsesuar) => acsesuar.id !== 4);
// console.log(deleteProudact);

// 16-masala
// let myName = "Mvlonbek";
// let splited = myName.split("");
// let letterChecking = splited.every((item) => /[a-zA-Z]/.test(item));
// console.log(letterChecking);

// 17-masala;
// const getTruthyFalsy = (item) => {
//   return {
//     truthy: item.filter((data) => Boolean(data)),
//     falthy: item.filter((data) => !Boolean(data)),
//   };
// };
// const arr = ["salom", "", 0, undefined, null, "0", true, 25, {}];
// const result = getTruthyFalsy(arr);
// console.log(result);

// 18-masala;
// let job = "men frontend developperman";
// let splited = job.split(" ");
// let lengthWord = splited.map((element) => {
//   return element.length;
// });
// console.log(splited);
// console.log(lengthWord);

// 19-masala
// let str = "men frontend developperman";
// let splitedStr = str.split("");
// let checkingSpace = splitedStr.some((item) => item == " ");
// console.log(checkingSpace);

// 20-masala
// const obj = { a: 2, b: 5, c: 7 };
// const entries = Object.entries(obj); // [['a', 2], ['b', 5], ['c', 7]]
// const combined = entries.map(([key, value]) => key + value);
// console.log(combined);

// 21-masala
// function digitSum(n) {
//   if (n < 10) {
//     return n;
//   }
//   const lastDigit = n % 10;
//   const remainingDigits = Math.floor(n / 10);
//   console.log(remainingDigits);
//   return lastDigit + digitSum(remainingDigits);
// }
// console.log(digitSum(1234));

const pupils = [
  {
    name: "Elbek",
    protcent: 95,
  },
  {
    name: "Zafar",
    protcent: 78,
  },
  {
    name: "Aziz",
    protcent: 83,
  },
  {
    name: "Jasur",
    protcent: 88,
  },
  {
    name: "Bobur",
    protcent: 66,
  },
  {
    name: "Kamron",
    protcent: 75,
  },
];

// 22-masala;
// let ortachaQiymat = pupils.reduce((a, b) => {
//   return Math.floor((a + b.protcent) / 2);
// }, 0);
// console.log(ortachaQiymat);

// 23-masala;
// const addGrede = (arr) => {
//   return arr.map((item) => {
//     if (item.protcent > 90) {
//       return { ...item, grade: 5 };
//     } else if (item.protcent > 80 && item.protcent < 90) {
//       return { ...item, grade: 4 };
//     } else if (item.protcent > 70 && item.protcent < 80) {
//       return { ...item, grade: 3 };
//     } else {
//       return { ...item, grade: 2 };
//     }
//   });
// };
// const result = addGrede(pupils);
// console.log(result);

// 24-masala
// const addPassed = (arr) => {
//   return arr.map((item) => {
//     if (item.protcent > 70) {
//       return { ...item, isPassed: true };
//     } else {
//       return { ...item, isPassed: false };
//     }
//   });
// };
// const result = addGrede(pupils);
// console.log(result);
// 25-masala;
// const addPassed = (arr) => {
//   return arr
//     .map((item) => {
//       if (item.protcent > 70) {
//         return { ...item, isPassed: true };
//       } else {
//         return { ...item, isPassed: false };
//       }
//     })
//     .reduce((acc, value) => {
//       return acc + value.isPassed;
//     }, 0);
// };
// let yeqilgan = pupils.length - addPassed(pupils);
// console.log("yeqilgan", yeqilgan, "ta");
// console.log("o'tgan", addPassed(pupils), "ta");