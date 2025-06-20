# Ejercicios prácticos de algoritmia en JavaScript

## Tabla de Contenido

- [Ejercicios prácticos de algoritmia en JavaScript](#ejercicios-prácticos-de-algoritmia-en-javascript)
  - [Tabla de Contenido](#tabla-de-contenido)
  - [Cómo acceder a la consola del navegador](#cómo-acceder-a-la-consola-del-navegador)
  - [Descripción](#descripción)
  - [Ejercicios](#ejercicios)
    - [Variables y Operaciones Básicas](#variables-y-operaciones-básicas)
    - [Condicionales](#condicionales)
    - [Ciclos](#ciclos)
    - [Funciones](#funciones)
    - [Arrays y Objetos](#arrays-y-objetos)

## Cómo acceder a la consola del navegador

Para ver los resultados de tus ejercicios en JavaScript, puedes utilizar la consola del navegador. Sigue estos pasos:

1. Abre tu navegador web (por ejemplo, Chrome, Firefox o Edge).
2. Presiona la tecla `F12` o haz clic derecho en la página y selecciona "Inspeccionar" o "Inspeccionar elemento".
3. Ve a la pestaña llamada "Consola" o "Console".
4. De ahí podras ver los mensajes que se muestran con `console.log()` tras oprimir un ejercicio.

## Descripción

Bienvenidos al taller de práctica de JavaScript, diseñado especialmente para fortalecer los conocimientos fundamentales del lenguaje. A lo largo de una serie de ejercicios progresivos, abordaremos temas esenciales como la declaración de variables, uso de condicionales, ciclos, funciones, arrays y objetos. Este taller tiene como objetivo ayudarte a desarrollar lógica, familiarizarte con la sintaxis de JavaScript y prepararte para resolver problemas más complejos de forma estructurada. ¡Manos al código y a divertirse aprendiendo!

## Ejercicios

### Variables y Operaciones Básicas

1. Declara una variable llamada `nombre` y asigna tu nombre como valor. Luego, muestra el contenido de la variable en la consola.
1. Declara dos variables: `base` y `altura`, asigna valores numéricos, y crea una tercera variable llamada `area` que guarde el resultado de multiplicarlas. Muestra el valor del área en la consola.
1. Declara dos variables `a` y `b` con valores diferentes. Crea una tercera variable para intercambiar sus valores. Al final, muestra los nuevos valores de `a` y `b` en la consola.

### Condicionales

1. Crea una variable `edad` y asigna un valor numérico. Usa una estructura `if` para mostrar en consola:

   - "Es mayor de edad" si la edad es mayor o igual a 18.
   - "Es menor de edad" en caso contrario.

1. Declara dos variables: `usuario` y `contraseña`. Luego usa una estructura condicional con operadores lógicos para validar lo siguiente:

   - Si el usuario es "admin" y la contraseña es "1234", muestra "Acceso concedido".
   - Si no, muestra "Acceso denegado".

1. Declara una variable `numero`. Escribe una condición que verifique si el número está entre 10 y 50 (inclusive).

   - Si está en el rango, muestra "Número válido".
   - Si no, muestra "Número fuera de rango".

1. Declara una variable `nota` con un valor numérico del 0 al 10. Usa `if`, `else if` y `else` para imprimir:

   - "Insuficiente" si la nota es menor a 5
   - "Suficiente" si la nota es entre 5 y 6
   - "Bien" si es 7
   - "Notable" si es 8 o 9
   - "Sobresaliente" si es 10

1. Declara una variable `dia` con un valor del 1 al 7. Usa `switch` para imprimir el nombre del día correspondiente (1 = Lunes, ..., 7 = Domingo). Si el valor no está entre 1 y 7, muestra "Día inválido".

1. Declara tres variables: `num1`, `num2` y `operacion` (puede ser "sumar", "restar", "multiplicar" o "dividir"). Usa `switch` para ejecutar la operación correspondiente y mostrar el resultado. Si la operación no es válida, muestra "Operación no reconocida".

### Ciclos

1. Usa un ciclo `for` para imprimir en consola los números del 1 al 10.

1. Utiliza un ciclo `for` para mostrar solo los números pares del 1 al 20 en la consola.

1. Declara una variable `n` con un número positivo. Usa un ciclo `for` para calcular la suma de los números del 1 hasta `n`. Imprime el resultado final en la consola.

1. Declara una variable `contadora` con valor 1. Usa un ciclo `while` para imprimir los números del 1 al 5 en consola.

1. Declara una variable `numeroSecreto` con un valor fijo (por ejemplo, 7). Luego, simula un intento del usuario usando otra variable `intento`. Usa un ciclo `while` para seguir "intentando" hasta que `intento` sea igual a `numeroSecreto`.

1. Crea una variable `suma` con valor inicial 0 y otra variable `i` en 1. Usa un `while` para ir sumando `i` a `suma` hasta que esta sea mayor a 100. Imprime el valor final de `suma` y cuántos números fueron sumados.

1. Usa un ciclo `do...while` para imprimir los números del 1 al 5 en la consola. (Recuerda iniciar una variable `i` en 1 y aumentar su valor dentro del ciclo).

1. Declara una variable `contrasenaCorrecta` con el valor "1234". Simula un intento con una variable `intento`.

1. Usa un ciclo `do...while` para seguir solicitando la contraseña hasta que el usuario "ingrese" la correcta. (Para este ejercicio puedes cambiar manualmente el valor de `intento` dentro del ciclo para simular).

1. Crea una variable `opcion` y usa un ciclo `do...while` para simular un menú en consola con las siguientes opciones:

   - Ver perfil
   - Configuración
   - Salir

   El ciclo debe continuar mostrando el menú hasta que el usuario elija la opción 3. (Simula la selección cambiando el valor de `opcion` dentro del ciclo).

### Funciones

1. Crea una función llamada `saludar` que reciba un nombre como parámetro y muestre en consola: "Hola, [nombre]!"

1. Escribe una función llamada `cuadrado` que reciba un número y retorne su cuadrado. Ejemplo: `cuadrado(4)` debería retornar 16.

1. Crea una función llamada `esPrimo` que reciba un número y devuelva `true` si es primo o `false` si no lo es.

1. Crea una función llamada `sumar` que reciba dos números como parámetros y retorne la suma de ambos.

1. Escribe una función `esPar` que reciba un número como parámetro y devuelva `true` si es par o `false` si es impar.

1. Crea una función `contarVocales` que reciba una cadena de texto y retorne cuántas vocales (a, e, i, o, u) contiene.

### Arrays y Objetos

1. Crea un array llamado `frutas` con al menos 4 nombres de frutas. Muestra en consola la primera y la última fruta del array. Agrega una nueva fruta al final del array y vuelve a mostrarlo completo.

1. Crea un objeto llamado `persona` con las siguientes propiedades:

   - `nombre` (string)
   - `edad` (número)
   - `profesion` (string)

   Muestra en consola un mensaje como:
   "Hola, mi nombre es [nombre], tengo [edad] años y soy [profesion]."

1. Crea un array llamado `estudiantes` que contenga al menos 3 objetos, cada uno con las propiedades `nombre` y `nota`. Luego, recorre el array con un `for` y muestra un mensaje por cada estudiante:
   "[nombre] tiene una nota de [nota]"
