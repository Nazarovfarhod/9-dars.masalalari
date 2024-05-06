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
// let result = numbers.map((item) => {
//   return item ** 2;
// });
// console.log(result);

// 4-masala;
// let numbers = [1, -4, 12, 0, -3, 29, -150];
// let result = numbers
//   .filter((num) => {
//     return num > 0;
//   })
//   .reduce((acc, vall) => {
//     return (acc += vall);
//   });
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

// console.log(
//   ` eng yoshi ${people[0].name} eng kattasi ${
//     people[people.length - 1].name
//   } ularning yoshlari orasidagi farq ${
//     people[people.length - 1].age - people[0].age
//   }. `
// );

// 7-masala;
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// const juft = numbers.filter((number) => number % 2 == 0);
// const toq = numbers.filter((number) => number % 2 == 1);

// console.log("Juvt sonlar:", juft);
// console.log("Toq sonlar:", toq);

// 8-masala;
// const numbers = [1, 2, 3, 4, 5, 1, 2, 3, 4, 3, 2, 5];
// let noRepeat = (item) => {
//   let number = item.reduce((acc, vall) => {
//     if (!acc.includes(vall)) {
//       acc.push(vall);
//     }
//     return acc;
//   }, []);
//   return number;
// };

// console.log(noRepeat(numbers));

// 9-masala

// id si bo'yicha sortlaymiz

// let sortingId = products.sort((a, b) => {
//   return a.id - b.id;
// });
// console.log(sortingId);

// narhi o'sishi  bo'yicha tartiblaymiz
// let sortingPrice = products.sort((a, b) => {
//   return a.price - b.price;
// });
// console.log(sortingPrice);

//rating boyocha sortlaymiz

// let sortingRating = products.sort((a, b) => {
//   return a.rating - b.rating;
// });
// console.log(sortingRating);

// 10-masala
// let sortingRayting = products.sort((a, b) => {
//   return a.rating - b.rating;
// });
// const bigRating = sortingRayting[sortingRayting.length - 1];
// console.log(bigRating);

// 11-masala;
// let sortingPrice = products.sort((a, b) => {
//   return a.price - b.price;
// });
// const lowtPrice = sortingPrice[0];
// console.log(lowtPrice);

// 12-masala
// let allPrice = products.reduce((acc, val) => {
//   return acc + val.price;
// }, 0);
// console.log(allPrice);

// 13-masala;
// let productsName = products.map((product) => {
//   return product.title;
// });
// console.log(productsName);

// 14-masala
// const findIdfife = products.find((product) => {
//   return product.id === 5;
// });
// console.log(findIdfife.title);

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
// let deleteProudactfour = acsesuar.filter((acsesuar) => acsesuar.id !== 4);
// console.log(deleteProudactfour);

// 16-masala
// let myFirstName = "Farhod";
// let splited = myFirstName.split("");
// let letterChecking = splited.every((letter) => /[a-zA-Z]/.test(letter));
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
    name: "Farhod",
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
