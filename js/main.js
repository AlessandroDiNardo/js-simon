/*Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/

// variabili DOM
let num = document.querySelector("#num-random");
let countdown = document.querySelector("#countdown");
let input = document.querySelector("#numAdd");
let btnStart = document.querySelector("#start");
let btnEnter = document.querySelector("#enter");
let btnReset = document.querySelector("#reset");

// creazione array con 5 numeri randomici
let numRandomArr = genArrNumRandom(5, 1, 10);
console.log(numRandomArr);

// creazione array vuoto per salvare i numeri inseriti dall'utente
let arrUser = [];

// variabili secondi del countdown
let second = 30;

// l'input di inserimento dei numeri appare alla fine del timer
document.querySelector(".input").style.display = "none";

// array vuoto per inserire numeri corretti
let numRight = [];
        
// array vuoto per inserire numeri errati
let numWrong = [];

// btn reset nascosto fino a quando non escono gli score
btnReset.style.display = "none";

// imposto countdown
btnStart.addEventListener("click",
    function(event) {
        event.preventDefault()

        num.append(numRandomArr);

        document.querySelector("#rules").innerHTML = `HAI 30 SECONDI PER MEMORIZZARE I NUMERI`;

        setInterval(function(){
            if(second === -1) {
                clearInterval(countdown);
                num.style.display = "none";
                countdown.style.display = "none";
                btnStart.style.display = "none";
                document.querySelector("#rules").style.display = "none";
                document.querySelector(".input").style.display = "block";
            }else{
                countdown.innerHTML = second--;
            }
        }, 1000);
    }
);


btnEnter.addEventListener("click",
    function(event) {
        event.preventDefault()

        let numberAddUser = parseInt(input.value);
        input.value = "";

        arrUser.push(numberAddUser);

        // non appena l'utente inserisce 5 numeri spariscono l'input e il button enter
        if(arrUser.length === 5) {
            input.style.display = "none";
            btnEnter.style.display = "none";
            btnReset.style.display = "inline-block";
        }

        // check numeri inseriti dall'utente con quelli dell'array randomico
        if(numRandomArr.includes(numberAddUser)) {

            numRight.push(numberAddUser);
            console.log("CORRETTI", numRight);

            document.querySelector("#points-right").innerHTML = `Hai indovinato i seguenti numeri ${numRight}.`;

        }else if(!numRandomArr.includes(numberAddUser)){
            numWrong.push(numberAddUser);
            console.log("SBAGLIATI", numWrong);

            document.querySelector("#points-wrong").innerHTML = `Hai sbagliato i seguenti numeri ${numWrong}.`;
        }
    }
);



