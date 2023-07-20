convert.addEventListener("click", function () {
  let check = document.getElementById("temperature").value;
  if (check == "Celcius") {
    const value1 = document.getElementById("input").value;
    const F = (value1 * 9) / 5 + 32;
    const K = +value1 + 273.15;
    document.getElementById("display2").innerHTML = K.toFixed(2) + " K";
    document.getElementById("display1").innerHTML = F.toFixed(2) + "&#176" + " F";
  } else if (check == "Frenheit") {
    const value2 = document.getElementById("input").value;
    const C = (value2 - 32) * (5 / 9);
    const K = C + 273.15;

    document.getElementById("display2").innerHTML = K.toFixed(2) + " K";
    document.getElementById("display1").innerHTML = C.toFixed(2) + "&#176" + " C";
  } else {
    const value3 = document.getElementById("input").value;
    const C = value3 - 273.15;
    const F = C * (9 / 5) + 32;
    document.getElementById("display1").innerHTML = C.toFixed(2) + "&#176" + " C";
    document.getElementById("display2").innerHTML = F.toFixed(2) + "&#176" + " F";
  }
});
