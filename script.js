function calcularPropina() {
  var total = parseFloat(document.getElementById("total").value);
  var porcentaje = parseFloat(document.getElementById("porcentaje").value);
  var error = document.getElementById("error");
  if (porcentaje > 100) {
    error.innerHTML = "El porcentaje no puede ser mayor a 100";
    document.getElementById("porcentaje").classList.add("error_input");
    return;
  }

  var propina = total * (porcentaje / 100);
  var totalConPropina = total + propina;

  if (!isNaN(totalConPropina)) {
    document.getElementById("totalFac").innerHTML = "$" + total.toFixed(2);
    document.getElementById("totalProp").innerHTML = "$" + propina.toFixed(2);
    document.getElementById("totalPago").innerHTML =
      "$" + totalConPropina.toFixed(2);
  } else {
    document.getElementById("totalPago").innerHTML = "Ingrese valores válidos";
  }
}

function esconderError() {
  document.getElementById("error").innerHTML = "";
  document.getElementById("porcentaje").classList.remove("error_input");
}
document.getElementById("porcentaje").addEventListener("click", esconderError);
