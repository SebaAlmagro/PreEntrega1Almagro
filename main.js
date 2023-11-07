
let moneda = prompt("Ingrese un monto a convertir a dollar entre ARS, MOP, JPY")

function convMonDol(monto, cambio) {
     const monDol = monto / cambio;
     return Math.round(monDol * 100) / 100;
}

switch (moneda) {
     case "ARS":
               let cambioDolArs = 349;
               const monArs = parseInt(prompt("Ingrese la cantidad a convertir en peso Argentino: "));
               const monDol = convMonDol (monArs, cambioDolArs);
               alert(`Su cambio en dolares es: $${monDol}`);
               break;

     case "MOP":
               let cambioDolMop = 8;
               const monMop = parseInt(prompt("Ingrese la cantidad a convertir en Pataca Mecaenense: "));
               const monDolMop = convMonDol (monMop, cambioDolMop);
               alert (`Su cambio en dolares es: $${monDolMop}`);
               break;

     case "JPY":
          function convMonDol(monto, cambio) {
               const monDol = monto / cambio;
               return Math.round(monDol * 100) / 100;
          }

               let cambioDolJpy = 8;
               const monJpy = parseInt(prompt("Ingrese la cantidad a convertir en Pataca Mecaenense: "));
               const monDoLJpy = convArsDol (monJpy, dolJpy);
               alert ("Su cambio en dolares es: $",{dolJpy});
               break;

     default:
          alert("Usted a ingresado un monto incorrecto, pruebe de nuevo con ARS, MOP, JPY")
          break
}