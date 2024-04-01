let nombre = prompt("Ingrese su nombre completo :");

let notaPrimerExamen = parseInt(prompt("Ingrese la nota del primer examen :"));

let notaSegundoExamen = parseInt(prompt("Ingrese la nota del segundo examen :"));

let notaTercerExamen = parseInt(prompt("Ingrese la nota del tercer e :"));

let examenFinal = parseInt(prompt("Ingrese la nota del examen Final : "));

let notaFinal = (notaPrimerExamen + notaSegundoExamen + notaSegundoExamen + examenFinal) / 4


alert("Hola " + nombre + " su nota final es : " + notaFinal);

if (notaFinal > 6) {

    alert("Felicidades " + nombre + ", aprobaste la materia.");

    console.log("Primer examen : " + notaPrimerExamen);

    console.log("Segundo examen : " + notaSegundoExamen);

    console.log("Tercer examen :" + notaTercerExamen);

    console.log("Nota final : " + notaFinal);
}

if (notaFinal < 7) {

    alert("Lo sentimos " + nombre + ", tu calificación no fue sufuciente para aprobar la materia.");

    alert("Felicidades " + nombre + ", aprobaste la materia.");

    console.log("Primer examen : " + notaPrimerExamen);

    console.log("Segundo examen : " + notaSegundoExamen);

    console.log("Tercer examen :" + notaTercerExamen);

    console.log("Nota final : " + notaFinal);


}


