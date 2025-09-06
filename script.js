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
