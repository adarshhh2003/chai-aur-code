//  Arrays

const myArray = [0,1,2,3,4,5]
const Heroes = ["shaktiman","salman","shahrukh","akshay"]

const myArr2 = new Array(1,3,3,45,65,4)
// console.log(myArray[0])

myArray.push(6)
myArray.pop()
// console.log(myArray)

// myArray.unshift(9)

// console.log(myArray)

// myArray.shift()

// console.log(myArray)

// console.log(myArray.includes(9))
// console.log(myArray.indexOf(4))

const newArray = myArray.join() // Returns a string value not a array object

// console.log(typeof myArray)
// console.log(typeof newArray)

// Slice , Splice

console.log("A ", myArray)

// slice does not manipulate the original array
const myn1 = myArray.slice(1,3)

console.log(myn1)
console.log("B ", myArray)

// the splice manipulates the original array also 
const myn2 = myArray.splice(1,3)

console.log(myn2)
console.log("C ", myArray)



