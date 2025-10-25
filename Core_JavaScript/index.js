// let str = "I am AsadUllah"

// let reversedStr = str.split("").reverse().join("");
// console.log(reversedStr)

// Function for a checking if a string is palindrome
// let str = "DADADADADADADADADAD"

// function checkPalindrome(str){
//     let opp = str.split("").reverse().join("")
//     if (opp == str){
//         console.log(str, " is a palindrome")
//     } else {
//         console.log(str, " is not a palindrome")
// }
// }

// checkPalindrome(str);

// Function for camparing two arrays
// let arr1 = [100, 200, 300, 400]
// let arr2 = [100, 200, 300, 400]

// function checkComparison(){
//     let changedStr = arr1.toString();
//     let changedStr1 = arr2.toString();
    
//     if (changedStr == changedStr1){
//        return true;
//     } else {
//        return false;
//     }
// }

// checkComparison();

// Null and Undefined
// console.log(null === undefined) // return false
// console.log(null == undefined) // return true because of difference of operator we used in both 

// How to assign value of 100 to an array in javaScript
// let arr4 = []
// console.log(arr4.length)

// for(let i = 0; i < 100; i++){
//     arr4.push(i + 1)
// }

// console.log(arr4)

// Second method to assign the length to new array
// let arr3 = new Array(100).fill(0).map((_, i) => i + 1);
// console.log(arr3)

// Function to merge a string
// let str1 = "AsadU"
// let str2 = "Chaudhry"
// let str3 = "";

// function mergeString(){
//     for(let i = 0; i < str1.length + str2.length; i++){
//         if (i < str1.length){
//         str3 += str1[i]
//         }
//         if (i < str2.length){
//         str3 += str2[i]
// }
// }
// }
// mergeString();
// console.log(str3);

// checking length of an array
// let arr5 = [,,,]
// console.log(arr5.length)

// What is the difference between map method and forEach method in javaScript

// How to avoid deep copy
// const obj = {
//     age: 23
// }

// let newObj = {...a}
// newObj.age = 2345
// console.log(newObj.age)


// How to avoid deep copy
// const obj = {
//     age: 23
// }

// let newObj = {...a}
// newObj.age = 2345
// console.log(newObj.age)

// How to convert obj entries into an array
// const obj = {
//     a:1,
//     b:2,
//     c:3,
//     d:4
// }

// console.log(Object.entries(obj))

// How to make different arrays based on data types from one array
// const arr = [100, 'A', "AsadUllah", 300, 'C']

// const numberArray = []
// const stringArray = []
// arr.forEach((ele) =>{
//     if(typeof(ele) == "number"){
//         numberArray.push(ele)
// } else if (typeof(ele) == "string"){
//         stringArray.push(ele)
// }
// })

// console.log(numberArray)
// console.log(stringArray)