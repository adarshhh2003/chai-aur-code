// for

for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 5) {
        // console.log("5 is the best number")
    }
    // console.log(element)
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Value ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(i ,`*`, j ,`=`, i*j);
        
    }
}

for (let index = 0; index <= 10; index++) {
    if(index == 5) {
        // console.log(`5 Detected`)
        break;
    }
    // console.log(index);
}

for (let index = 0; index <= 10; index++) {
    if(index == 5) {
        console.log(`5 Detected`)
        continue;
    }
    console.log(index);
}

