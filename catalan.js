function catalanNumber()
{
    //catalan number obliczanie wlasxiwe
    return 4;
}


function catalan()
{
  var n = document.getElementById("n").value;
  n = parseFloat(n);

  if(n < 1 || Number.isInteger(n)===false)
    document.getElementById("result").innerHTML = "niepoprawne n. podaj liczbę całkowitą większą od 0";

  else
    {
    document.getElementById("result").innerHTML = catalanNumber(n);

    }

}
