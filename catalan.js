function catalanNumber(index)
{

    if(index === 0)
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
    document.getElementById("result").innerHTML = "Niepoprawna wartość n. Podaj liczbę całkowitą nieujemną.";

  else
    {
    document.getElementById("result").innerHTML = n + ". liczba Catalana to " + catalanNumber(n);

    }

}
