// ! 1-masala
// function getOddDividersSum(n) {
//     let sum = 0;
//     for (let i = 0; i < n; i++) {
//         if(n % i === 0 && i % 2 !== 0) {
//             sum += i;
//         }
//     }
//     return sum;
// }
// let n = 15;
// console.log(getOddDividersSum(n));

// ! 2-masala
// function search (arr, str) {
//     let result = arr.filter(names => names.toLowerCase().includes(str.toLowerCase()));

//     return result;
// }
// let arr = ['Aziz', 'Xusan', 'Muhammad', 'Xasan'];
// let str = 'X';
// console.log(search(arr, str));

// ! 3-masala
// function getDividersSum(arr, n) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % n === 0){
//             sum += arr[i];
//         }
//     }
//     return sum;
// }
// let arr = [2, 5, 7, 10, 0, 18, 15];
// let n = 5;
// console.log(getDividersSum(arr, n));

// ! 4-masala
// let str = 'Abdulaziz is a full-stack developer';
// let str = 'Abdulaziz is a full-stack developer.';
// function checkSentence(str) {
//   let firstChar = str[0];

//   let lastChar = str[str.length - 1];


//   if (firstChar === firstChar.toUpperCase() && lastChar === '.') {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(checkSentence(str));

// ! 5-masala
// let str = 'Xusan Programmer';
// function getNumberOfCases(str) {
//     let result = {
//         upperCase : 0,
//         lowerCase : 0
//     }
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i]
//         if (/[A-Z]/.test(char)){
//             result.upperCase++
//         }else if (/[a-z]/.test(char)){
//             result.lowerCase++
//         }
//     }
//     return result
// } 
// console.log(getNumberOfCases(str));

// ! 6-masala 
// let obj = {
//     a: 1, 
//     b: 2, 
//     c: 3
// }
// function changeObjToString(obj) {
//     let keys = Object.keys(obj).join('')
//     let values = Object.values(obj).join('')
//     return keys + values
// }
// console.log(changeObjToString(obj));

// ! 7-masala
// const products = [
//   { id: 1, name: 'Bike', price: 100 },
//   { id: 2, name: 'TV', price: 400 },
//   { id: 3, name: 'Album', price: 800 },
//   { id: 4, name: 'Book', price: 600 },
//   { id: 5, name: 'Phone', price: 500 },
//   { id: 6, name: 'Computer', price: 1000 },
//   { id: 7, name: 'Skate', price: 300 },
//   { id: 8, name: 'Keyboard', price: 200 },
//   { id: 9, name: 'Bottle', price: 700 },
// ];

// function getProductsSum(...ids) {
//     let sum = 0;
//     for (let id of ids) {
//         let product = products.find(p => p.id == id)
//         if (product) {
//           sum += product.price;
//         }
//     }
//     return sum;
// }
// console.log(getProductsSum(4, 6, 9));
