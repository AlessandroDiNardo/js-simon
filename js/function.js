// funziona genera numero random
function randomNum(min, max) {
    return (Math.floor(Math.random() * ((max + 1) - min) + min));
}

// funzione genera array con numeri randomici
function genArrNumRandom(howMany, minNum, maxNum) {  
    const newArr = [];

    // generare array di tot elementi tra numeri random min e max
    while(newArr.length < howMany) {
        // genera numeri random min e max
        let newNum = randomNum(minNum, maxNum);

        if(!newArr.includes(newNum)) {
            newArr.push(newNum);
        }
    }

    return newArr;
}