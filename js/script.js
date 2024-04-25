// Función para obtener los datos del alumno
function obtenerDatosAlumno() {
    let nombre = prompt("Ingrese el nombre del alumno:");

    // Salir si se ingresa "fin"
    if (nombre.toLowerCase() === "fin") {
        return null;
    }

    let nota1 = parseFloat(prompt("Ingrese la nota 1 del alumno:"));
    let nota2 = parseFloat(prompt("Ingrese la nota 2 del alumno:"));
    let nota3 = parseFloat(prompt("Ingrese la nota 3 del alumno:"));

    let notas = [nota1, nota2, nota3];
    let promedio = calcularPromedio(notas);
    let estado = determinarAprobacion(promedio);

    console.log(`Nombre: ${nombre}, Notas: ${notas.join(", ")}, Promedio: ${promedio.toFixed(2)}, Estado: ${estado}`);
    alert(`${nombre} ${estado} con un promedio de ${promedio.toFixed(2)}`);

    return {
        nombre: nombre,
        notas: notas,
        promedio: promedio,
        estado: estado
    };
}

// Función para calcular el promedio de un alumno
function calcularPromedio(notas) {
    let suma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
    return suma / notas.length;
}

// Función para determinar si el alumno aprobó o desaprobó
function determinarAprobacion(promedio) {
    return promedio >= 6 ? "aprobó" : "desaprobó";
}

// Array para almacenar los datos de los alumnos
let alumnos = [];

// Ingresar datos de los alumnos
while (true) {
    let alumno = obtenerDatosAlumno();

    if (!alumno) {
        break;
    }

    alumnos.push(alumno);
}

// Imprimir promedio final de cada alumno en la consola
console.log("Promedios finales:");
alumnos.forEach(alumno => {
    console.log(`Nombre: ${alumno.nombre}, Promedio: ${alumno.promedio.toFixed(2)}, Estado: ${alumno.estado}`);
});