var answers = ['16796', 'Jedenastokąt', 'a = 3, b = 1 lub -1', 'Są na to 42 sposoby', 'Jest 429 takich dróg']
var clues = ['Obwód = 4 ∙ n', 'n + 2 = liczba boków figury', 'Zacznij od rozwiązania drugiego równania', 'Zauważ, z ilu argumentów składa się działanie', 'a = 2n']

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
    case 3:
        document.getElementById("answer3").innerHTML = "Odpowiedź: " + answers[3];
        break;
    case 4:
        document.getElementById("answer4").innerHTML = "Odpowiedź: " + answers[4];
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
    case 3:
        document.getElementById("answer3").innerHTML = "Wskazówka: " + clues[3];
        break;
    case 4:
        document.getElementById("answer4").innerHTML = "Wskazówka: " + clues[4];
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
    case 3:
        document.getElementById("answer3").innerHTML = " ";
        break;
    case 4:
        document.getElementById("answer4").innerHTML = " ";
        break;
    }

}
