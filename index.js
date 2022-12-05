/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/


/* 
stringa= inserisci i caratteri in stringa, tutti quei caratteri che non sononumeri e servono per formare parole che possono essere nomi di: persone, città, oggetti ecc.
numerico= inserisci solamente numeri interi o decimali
int= valore numerico intero
float= valore numerico decimale
booleano= inserisci delle variabili che diano come risultato vero o falso es. 50>60?=falso oppure 30<60?=vero
undefined= la variabile selezionata non ha mai avuto un valore
costant= definisce una variabile che non può essere modificata
nul= Viene usato per svuotare una variabile precedentemente utilizzata
let= definisce una variabile che può essere modificata
      */

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
var name= "Alberto";
var surname= "Macis";

console.log("il mio nome è " + name + ", il mio cognome è " + surname );

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let number1= 12

let number2=20

console.log(number1 + number2)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
let x= 12
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

// const name= "Alberto"
// let name= "Bebo"

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
console.log(4 - x)
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1= "john"
let name2= "John"

console.log(name1 === name2)

console.log(name1 === name2.toLowerCase())


// prove di "and, or, not"

let num1= 60
let num2= 40
let num3= 20

console.log(30> num1 && num2 && num3)

console.log(30< num1 || num2 || num3)

console.log( !(num1 < num3))

// prove "typ of"

console.log(typeof name1)

console.log(typeof num1)
/* SCRIVI QUI LA TUA RISPOSTA */
