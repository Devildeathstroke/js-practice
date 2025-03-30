//1-> log your name and favorite hobby to the console.
// console.log("Gaurav Yadav");
// console.log("Cricket");

//2-> Perform and log the result of 45*2 -10;
// let ans = (45*2)-10
// console.log(ans)

//3-> Use console.log() to display the current year
// let date = new Date()
// let year = date.getFullYear()
// console.log(year)

//4-> Create two variable for first and last name. Concantenate and log them
// let firstName = "Gaurav"
// let lastName ="Yadav"
// console.log(firstName+" "+lastName)

//5-> Track the value of a variable by logging it before and after updating
// let ans=10
// console.log(ans)
// ans=15;
// console.log(ans);

//6-> Use console.error() to simulate an error message .
// console.error("error")

//7-> Log the square of the number 12 to the console.
// console.log(Math.pow(12,2))

//8-> Print the type of a variable holding the value true;
// let ans=true;
// console.log(typeof(ans))

//9->Create a variable holding your age and log whethere it's greater than 18
// let age = 50;
// if (age > 18) {
//   console.log(`Your age is greater the 18 , Your age is ${age}`);
// } else {
//   console.log("Your age less then 18");
// }

//10-> Log the result of 100/0 and  observe the output
// console.log(100/0)

//11-> Declare a variable using let and log its value
// let ans =10;
// console.log(ans)

//12-> Create a constant to store the value of PI and log it 
// const PI = 3.1457
// console.log(PI)
// console.log(Math.PI)

//13-> Reassign a value to a variable declared with let and log the result 
// let ans =10
// ans=11
// console.log(ans)

//14-> Check the type of null and log it 
// console.log(typeof(null))

//15-> Create a variable with a number as a string and log its type
// let ans ="52"
// console.log(typeof(ans))

//16-> Use typeof to check the type of a boolean variable
// let ans =true
// console.log(typeof ans)

//17-> Create three variables of types string ,number ,and boolean, and log their values
// let ans = "Harsh"
// let ans1=15
// let ans2=false
// console.log(`${ans}, ${ans1}, ${ans2}`)

//18-> Declare a variable without assigning a value. Log its type
// let ans
// console.log(typeof (ans))

//19-> Create a variable with undefined and log its type
// let ans =undefined
// console.log(typeof ans)

//20-> Use const to create an array. Try reassigning the array and observe the errror.
// const arr=[1,2,3,4,5]
// arr=[2,4,5,1]
// console.log(arr)

//21-> Write a for loop to print numbers from 1 to 50
// for(let i=1 ;i<=50;i++){
//     console.log(i)
// }

//22-> Use a while loop to sum the numbers from 1 to 10
// let ans=0,i=1
// while(i<=10){
//     ans +=i
//     i++
// }
// console.log(ans)

//23-> Create a for... of loop to log each character of the string "JavaScript"
// let ans = "JavaScript"
// for (let value of ans ){
//     console.log(value)
// }

//24-> Write a for loop that skips even numbers between 1 and 20
// for(let i =1;i<=20;i++){
    // console.log(i)
    // i++

    // if(i%2 !==0){
    //     console.log(i)
    // }
// }

//25-> Use a do...while loop to log numbers from 5 to 1
// let i=5
// do{
//     console.log(i)
//     i--
// }while(i>=1)

//26-> Create a for loop that calculates the factorial of 5
// let ans=1;
// for(let i=1;i<=5;i++){
//     ans *=i
// }
// console.log(ans)

//27-> Wrie a nested loop to print a 3*3 grid of numbers
// let ans =1
// for(let i=1;i<=3;i++){
//     let str=""
//     for (let j=1;j<=3;j++){
//         str +=`${ans} `
//         ans++  
//     }
//     console.log(str)
// }

//28-> Use a for loop to reverse ans array [1,2,3,4]
// let arr =[1,2,3,4]
// for(let i= arr.length-1;i>=0;i--){
//     console.log(arr[i])
// }

//29-> Write a while loop that logs numbers from 1 to 100 divisible by 5
// let number=1
// while(number<100){
//     if(number%5==0){
//         console.log(number)
//     }
//     number++
// }

//30->Use a for... in loop to iterate over an object and logs its keys
// const item={
//     name: "Harsh",
//     age: 25,
//     sex: "M"
// }
// for(let key in item){
//     console.log(key)
//     console.log(item[key]);
// }

//31-> Create an array of your top 5 favorite movies and log it.
// let movies =["iron man","superman","flash","go","spiderman"]
// console.log(movies)

//32-> Find and log the second element of an array
// let arr=[1,2,3]
// console.log(arr[1])

//33-> Add two new elements to the start of an array using .unshift().
// let arr =[1,2,3]
// arr.unshift(4,5)
// console.log(arr)

//34-> Remove the last element of an array and log the updated array
// let arr=[1,2,3]
// arr.pop()
// console.log(arr)

//35-> Use.slice() to extract the first three elements of an array 
// let arr= [1,2,3,4,5,6]
// console.log(arr.slice(0,3))

//36-> Find the index of a specific element in an array using .indexOf().
// let arr =[11,14,16,48,57]
// console.log(arr.indexOf(16))

//37-> Check if a value exists in an array using .includes()
// let arr =[11,14,16,48,57]
// console.log(arr.includes(58))

//38-> Combine two arrays [1,2] and [3,4] using .concat()
// let arr =[1,2]
// let arr1=[3,4]
// console.log(...arr,...arr1)

//39-> Sort an array of numbers [5,2,9,1] in ascending order
// let arr = [5, 2, 1, 9];
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1; j++) {
//         if (arr[j] > arr[j + 1]) {
//             let temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//         }
//     }
// }
// console.log(arr)

//40-> Write a program that creates a copy of an array without mutating the original
// let arr=[4,5,7,8]
// let arr1=arr
// console.log(arr1)

//41-> Write a function to check if a number is even or odd
// function evenorodd(n){
//     if(n%2==0){
//         console.log(`${n} is even number`)
//     }
//     else {
//         console.log(`${n} is odd number`)
//     }
// }
// evenorodd(12)

//42-> Create a function to calculate the area of a circle with a given radius
// function area(n){
//     console.log(`Arer of circle with radius ${n} is ${2*Math.PI*n} `)
// }
// area(2)

//43-> Write a function that accepts an array and returns the sum of its elements 
// function sumOfarr(arr){
//     let sum=0
//     for(let i=0;i<arr.length;i++){
//         sum =sum+arr[i]
//     }
//     console.log(sum)
// }
// sumOfarr([1,2,3,4])

//44-> Create a function that checks if a string starts with a specific character
// function checkchar(str){
//     if(str.charAt(0)==='H'){
//         console.log(`string start with H`)
//     }
//     else {
//         console.log("String start with something else")
//     }
// }
// checkchar("Harsh")

//45-> Write a function to find the maximum of two numbers
// function maxofnum(a,b){
//     console.log(Math.max(a,b))
// }
// maxofnum(5,7)

//46-> Create a function that takes a number and returns its factorial
// function fact(n){
//     let ans =1
//     for(let i=1;i<=n;i++){
//         ans = ans *i
//     }
//     console.log(ans)
// }
// fact(5)

//47-> Write a funcation that accepts a string and returns its reverse 
// function reverseString(str) {
//     return str.split('').reverse().join('');
// }
// console.log(reverseString("hello"));

//48-> Create a function to find the largest number in an array
// function largestNum(arr){
//     return Math.max(...arr)
// }
// console.log(largestNum([5,8,17,41,2]))

//49-> Write a functiion that convert a string to kebab-case
// function toKebabCase(str) {
//     return str
//         .replace(/([a-z])([A-Z])/g, '$1-$2') // Add hyphen between camelCase words
//         .replace(/\s+/g, '-') // Replace spaces with hyphens
//         .replace(/_/g, '-') // Replace underscores with hyphens
//         .toLowerCase(); // Convert to lowercase
// }
// console.log(toKebabCase("HelloWorld")); 
// console.log(toKebabCase("hello world")); 
// console.log(toKebabCase("hello_world")); 
// console.log(toKebabCase("Hello World_test")); 

//50-> Create a function that logs "Hello, World!" everytime it is called
function Hello(){
    console.log("Hello World")
}
Hello()
Hello()
