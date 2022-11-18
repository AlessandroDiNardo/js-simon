/*Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/

// creazione array generico
const random = genArrNumRandom(5, 1, 10);
console.log(random);

// creazione variabile tempo
let time = 2;

setTimeout(function() {
    for(let i = 0; i < random.length; i++) {
        let number = parseInt(prompt("inserisci i numeri: "));
        console.log(number);
    }

    // controllo dei numeri
   

}, time * 1000);


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