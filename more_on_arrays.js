const arr1 = [1,2,3,4]

const arr2 = ["adarsh", "patel", "sahab", "baglai"]

// arr1.push(arr2)
// array inside array
// console.log(arr1)

// add 2 or more arrays
const arr1_and_arr2 = arr1.concat(arr2)

// console.log(arr1_and_arr2)

const allarr = [...arr1, ...arr2]

// console.log(allarr)

const another_array = [1,2,[13,43],[23,455,64,[97,54,25]]]

const usable_another_array = another_array.flat(Infinity)

// console.log(usable_another_array)

console.log(Array.isArray("Adarsh"))
console.log(Array.from("Adarsh"))
console.log(Array.from({name:"patel"}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))

