var answers = ['16796', 'Dziewięciokąt', 'a = 3, b = 1 lub -1']
var clues = ['Obwód = 4 ∙ n', 'n + 2 = liczba boków figury', 'Zacznij od rozwiązania drugiego równania']

function exercises(number){
    switch(number){
    case 0:
        document.getElementById("answer").innerHTML = "Odpowiedź: " + answers[0];
        break;
    case 1:
        document.getElementById("answer1").innerHTML = "Odpowiedź: " + answers[1];
        break;
    case 2:
        document.getElementById("answer2").innerHTML = "Odpowiedź: " + answers[2];
        break;

    }
}

function help(number){
    switch(number){
    case 0:
        document.getElementById("answer").innerHTML = "Wskazówka: " + clues[0];
        break;
    case 1:
        document.getElementById("answer1").innerHTML = "Wskazówka: " + clues[1];
        break;
    case 2:
        document.getElementById("answer2").innerHTML = "Wskazówka: " + clues[2];
        break;

    }

}

function hide(number){
    switch(number){
    case 0:
        document.getElementById("answer").innerHTML = " ";
        break;
    case 1:
        document.getElementById("answer1").innerHTML = " ";
        break;
    case 2:
        document.getElementById("answer2").innerHTML = " ";
        break;


    }

}
