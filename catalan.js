function catalanNumber(index)
{
    //catalan number obliczanie wlasxiwe

    if(index === 1)
    {
        return 1;
    }

    else
    {
        var h = index - 1; //zmienna pomocnicza
        return catalanNumber(index-1) * (4*h + 2)/(h+2);
    }
}


function catalan()
{
  var n = document.getElementById("n").value;
  n = parseFloat(n);

  if(n < 0 || Number.isInteger(n)===false)
    document.getElementById("result").innerHTML = "niepoprawne n. podaj liczbę całkowitą większą od 0";

  else
    {
    document.getElementById("result").innerHTML = n + ". liczba Catalana to " + catalanNumber(n);

    }

}
