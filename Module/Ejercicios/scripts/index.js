// index.js

// Variables y Operaciones Básicas

// 1. Declara una variable llamada `nombre` y asigna tu nombre como valor. Luego, muestra el contenido de la variable en la consola.

function mostrarNombre() {
  const nombre = "Jhosua";
  console.log(nombre);
}

// 2. Declara dos variables: `base` y `altura`, asigna valores numéricos, y crea una tercera variable llamada `area` que guarde el resultado de multiplicarlas. Muestra el valor del área en la consola.

function calcularArea() {
  const base = 10;
  const altura = 5;
  const area = base * altura;
  console.log(area);
}

// 3. Declara dos variables `a` y `b` con valores diferentes. Crea una tercera variable para intercambiar sus valores. Al final, muestra los nuevos valores de `a` y `b` en la consola.

function intercambiarValores() {
  let a = 10;
  let b = 5;
  console.log("Antes:", a, b);
  let c = a;
  a = b;
  b = c;
  console.log("Después:", a, b);
}

// Condicionales

// 1. Crea una variable `edad` y asigna un valor numérico. Usa una estructura `if` para mostrar en consola:

// - "Es mayor de edad" si la edad es mayor o igual a 18.
// - "Es menor de edad" en caso contrario.

function mostrarEdad() {
  const edad = 20;
  edad >= 18
    ? console.log("Es mayor de edad")
    : console.log("Es menor de edad");
}

// 2. Declara dos variables: `usuario` y `contraseña`. Luego usa una estructura condicional con operadores lógicos para validar lo siguiente:

// - Si el usuario es "admin" y la contraseña es "1234", muestra "Acceso concedido".
// - Si no, muestra "Acceso denegado".

function validarAcceso() {
  const usuario = "admin";
  const contraseña = "1234";
  usuario === "admin" && contraseña === "1234"
    ? console.log("Acceso concedido")
    : console.log("Acceso denegado");
}

//  3. Crea una variable `numero` y escribe una condición que verifique si el número está entre 10 y 50 (inclusive).
//  Si es así, muestra "Número dentro del rango", de lo contrario, muestra "Número fuera del rango".

function verificarNumero() {
  const numero = 30;
  numero >= 10 && numero <= 50
    ? console.log("Número dentro del rango")
    : console.log("Número fuera del rango");
}

// 4. Declara una variable `nota` con un valor numérico del 0 al 10. Usa `if`, `else if` y `else` para imprimir:

// - "Insuficiente" si la nota es menor a 5
// - "Suficiente" si la nota es entre 5 y 6
// - "Bien" si es 7
// - "Notable" si es 8 o 9
// - "Sobresaliente" si es 10

function mostrarNota() {
  const nota = 7;
  if (nota < 5) {
    console.log("Insuficiente");
  } else if (nota >= 5 && nota <= 6) {
    console.log("Suficiente");
  } else if (nota === 7) {
    console.log("Bien");
  } else if (nota === 8 || nota === 9) {
    console.log("Notable");
  } else {
    console.log("Sobresaliente");
  }
}

// 5. Declara una variable `dia` con un valor del 1 al 7. Usa `switch` para imprimir el nombre del día correspondiente (1 = Lunes, ..., 7 = Domingo). Si el valor no está entre 1 y 7, muestra "Día inválido".

function mostrarDia() {
  const dia = 3;
  switch (dia) {
    case 1:
      console.log("Lunes");
      break;
    case 2:
      console.log("Martes");
      break;
    case 3:
      console.log("Miércoles");
      break;
    case 4:
      console.log("Jueves");
      break;
    case 5:
      console.log("Viernes");
      break;
    case 6:
      console.log("Sábado");
      break;
    case 7:
      console.log("Domingo");
      break;
    default:
      console.log("Día inválido");
  }
}

// 6. Declara tres variables: `num1`, `num2` y `operacion` (puede ser "sumar", "restar", "multiplicar" o "dividir"). Usa `switch` para ejecutar la operación correspondiente y mostrar el resultado. Si la operación no es válida, muestra "Operación no reconocida".

function calcular() {
  const num1 = 10;
  const num2 = 5;
  const operacion = "sumar";
  switch (operacion) {
    case "sumar":
      console.log(num1 + num2);
      break;
    case "restar":
      console.log(num1 - num2);
      break;
    case "multiplicar":
      console.log(num1 * num2);
      break;
    case "dividir":
      console.log(num1 / num2);
      break;
    default:
      console.log("Operación no reconocida");
  }
}

// Ciclos

// 1. Usa un ciclo `for` para imprimir en consola los números del 1 al 10.

function mostrarNumeros() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

// 2. Utiliza un ciclo `for` para mostrar solo los números pares del 1 al 20 en la consola.

function mostrarNumerosPares() {
  for (let i = 2; i <= 20; i += 2) {
    console.log(i);
  }
}

// 3. Declara una variable `n` con un número positivo. Usa un ciclo `for` para calcular la suma de los números del 1 hasta `n`. Imprime el resultado final en la consola.

function calcularSuma() {
  const n = 10;
  let suma = 0;
  for (let i = 1; i <= n; i++) {
    suma += i;
  }
  console.log(suma);
}

// 4. Declara una variable `contadora` con valor 1. Usa un ciclo `while` para imprimir los números del 1 al 5 en consola.

function mostrarNumerosWhile() {
  let contadora = 1;
  while (contadora <= 5) {
    console.log(contadora);
    contadora++;
  }
}

// 5. Declara una variable `numeroSecreto` con un valor fijo (por ejemplo, 7). Luego, simula un intento del usuario usando otra variable `intento`. Usa un ciclo `while` para seguir "intentando" hasta que `intento` sea igual a `numeroSecreto`.

function simularIntento() {
  const numeroSecreto = 7;
  let intento = 1;
  while (intento !== numeroSecreto) {
    console.log("Intentando...");
    intento++;
  }
  console.log("¡Correcto!");
}

// 6. Crea una variable `suma` con valor inicial 0 y otra variable `i` en 1. Usa un `while` para ir sumando `i` a `suma` hasta que esta sea mayor a 100. Imprime el valor final de `suma` y cuántos números fueron sumados.

function sumarNumeros() {
  let suma = 0;
  let i = 1;
  while (i <= 100) {
    suma += i;
    i++;
  }
  console.log(suma);
  console.log(i);
}

// 7. Usa un ciclo `do...while` para imprimir los números del 1 al 5 en la consola. (Recuerda iniciar una variable `i` en 1 y aumentar su valor dentro del ciclo).

function mostrarNumerosDoWhile() {
  let i = 1;
  do {
    console.log(i);
    i++;
  } while (i <= 5);
}

// 8. Declara una variable `contrasenaCorrecta` con el valor "1234". Simula un intento con una variable `intento`.

function simularIntentoContrasena() {
  const contrasenaCorrecta = "1234"; // ¿?
  let intento = 1;
  do {
    console.log("Intentando...");
    intento++;
  } while (intento <= 5);
  console.log("¡Correcto!");
}

// 9. Usa un ciclo `do...while` para seguir solicitando la contraseña hasta que el usuario "ingrese" la correcta. (Para este ejercicio puedes cambiar manualmente el valor de `intento` dentro del ciclo para simular).

function solicitarContrasena() {
  let intento = 1;
  do {
    console.log("Intentando...");
    intento++;
  } while (intento <= 5 && prompt("Ingrese la contraseña") !== "1234");
  console.log("¡Correcto!");
}

// 10. Crea una variable `opcion` y usa un ciclo `do...while` para simular un menú en consola con las siguientes opciones:

function mostrarMenu() {
  let opcion = 1;
  do {
    console.log("1. Ver perfil");
    console.log("2. Configuración");
    console.log("3. Salir");
    // Simulación: cambia el valor de opcion para salir
    opcion++;
  } while (opcion !== 3);
}

// Funciones

// 1. Crea una función llamada `saludar` que reciba un nombre como parámetro y muestre en consola: "Hola, [nombre]!"

function saludar(nombre = "Jhosua") {
  console.log(`Hola, ${nombre}!`);
}

// 2. Escribe una función llamada `cuadrado` que reciba un número y retorne su cuadrado. Ejemplo: `cuadrado(4)` debería retornar 16.

function cuadrado(numero = 4) {
  console.log(numero * numero);
}

// 3. Crea una función llamada `esPrimo` que reciba un número y devuelva `true` si es primo o `false` si no lo es.

function esPrimo(numero = 7) {
  console.log(numero % 2 === 0);
}

// 4. Crea una función llamada `sumar` que reciba dos números como parámetros y retorne la suma de ambos.

function sumar(num1 = 3, num2 = 5) {
  console.log(num1 + num2);
}

// 5. Escribe una función `esPar` que reciba un número como parámetro y devuelva `true` si es par o `false` si es impar.

function esPar(numero = 4) {
  console.log(numero % 2 === 0);
}

// 6. Crea una función `contarVocales` que reciba una cadena de texto y retorne cuántas vocales (a, e, i, o, u) contiene.

function contarVocales(texto = "hola mundo") {
  let vocales = 0;
  for (let i = 0; i < texto.length; i++) {
    switch (texto[i]) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        vocales++;
        break;
    }
  }
  return vocales;
}

// Arrays y Objetos

// 1. Crea un array llamado `frutas` con al menos 4 nombres de frutas. Muestra en consola la primera y la última fruta del array. Agrega una nueva fruta al final del array y vuelve a mostrarlo completo.

function mostrarFrutas() {
  const frutas = ["manzana", "pera", "plátano", "limón"];
  console.log(frutas[0]);
  console.log(frutas[frutas.length - 1]);
  frutas.push("banana");
  console.log(frutas);
}

// 2. Crea un objeto llamado `persona` con las siguientes propiedades:

// - `nombre` (string)
// - `edad` (número)
// - `profesion` (string)

// Muestra en consola un mensaje como:
// "Hola, mi nombre es [nombre], tengo [edad] años y soy [profesion]."

function mostrarPersona() {
  const persona = {
    nombre: "Jhosua",
    edad: 20,
    profesion: "Ingeniero",
  };
  console.log(
    `Hola, mi nombre es ${persona.nombre}, tengo ${persona.edad} años y soy ${persona.profesion}.`
  );
}

// 3. Crea un array llamado `estudiantes` que contenga al menos 3 objetos, cada uno con las propiedades `nombre` y `nota`. Luego, recorre el array con un `for` y muestra un mensaje por cada estudiante:
// "[nombre] tiene una nota de [nota]"

function mostrarEstudiantes() {
  const estudiantes = [
    { nombre: "Alice", nota: 7 },
    { nombre: "Jhosua", nota: 9 },
    { nombre: "Albaro", nota: 8 },
  ];
  for (let i = 0; i < estudiantes.length; i++) {
    console.log(
      `${estudiantes[i].nombre} tiene una nota de ${estudiantes[i].nota}`
    );
  }
}
