// for of 

const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
    // console.log(num)
}

const greeting = "Hello World!";
for (const greet of greeting) {
    // console.log(`The each char is ${greet}`)
}

const map = new Map();
map.set('In','India')
map.set('fr','france')
map.set('USA','United states of America')

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, `:-`, value);
}

const myObject = {
    js : 'javascript',
    rb : 'ruby',
    swift : 'swift by apple',
    py : 'python'
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const coding = ['javascript', 'python', 'c++', 'ruby'];
for (const key in coding) {
    // console.log(key,coding[key])
}

// for each
coding.forEach(function (item) {
    // console.log(item)
})

coding.forEach( (item) => {
    // console.log(item)
} )

// function printme(item) {
//     console.log(item)
// }
// coding.forEach(printme)

coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr)
})

const mycoding = [
    {
        languageName : 'Javascript',
        languageFileName : 'js'
    },

    {
        languageName : 'java',
        languageFileName : 'java'
    },

    {
        languageName : 'python',
        languageFileName : 'py'
    }
];

mycoding.forEach( (item) => {
    console.log(item.languageName);
})