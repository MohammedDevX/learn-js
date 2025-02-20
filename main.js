// window.alert ("hello twis is java script")
// console.log("hello from js");
// console.error("error");
// console.table(["Osama", "Mohammed", "Ahmed"]);
// console.log("%chello %cfrom %cjs", "color: red; font-size: 50px; background-color: blue; margin-right: 10px;", "color: green; font-size: 20px", "color: blue; font-size: 40px");



// Data Types in java script { 
// -string
// -number
// -object
// -object
// -boolean
// -boolean
// console.log(typeof ("hello from js"));
// console.log(typeof 500.40);
// console.log(typeof ["Mohammed", "Ahmed", "Osama"]);
// console.log(typeof {name: 'Mohammed', age: 18, country: 'Morroco'});
// console.log(typeof true);
// console.log(typeof false);
// console.log(typeof undefined);
// console.log(typeof null);
// }



// variables: {
// var user = "Hello Mohammed";
// var age = 18;
// console.log(user);
// console.log(age);
// }



// let a = "we love";
// let b = "java script";
// let c = "and";
// let d = "programming";
// console.log(a + " " + b + "\n22" + c + " " + d);
// console.log("hello 'world'");
// console.log("hello \"Mohammed\"");
// console.log("hello\nMohammed");
// console.log(`${a} "" '' \\${b}
// ${c} ${d}`);
// let paragraphe = `welcome body`;
// let homies = `welcome brothers`;
// let makeUp = `<div>hello Mohammed
//               hello world<p>${paragraphe}</p>
//                 <p>${homies}</p>
//               </div>`;
// document.write(makeUp);
// console.log(makeUp);
// document.write(`${paragraphe} + ${homies} + ${makeUp}`);
// console.log(`${homies} + ${paragraphe}`);




// let title = `Elzero`;
// let description = `Elzero Web School`;
// let data = `25/10`;
// let hello = `Hello`;
// let paragraphe = `<div>
//                     <h3>${hello} ${title}</h3>
//                     <p>${description}</>
//                     <span>${data}</span>
//                   </div>`;
// document.write(`${paragraphe}`);



// console.log(10 + 20);
// console.log(10 + "Mohammed")
// console.log(10 - 20)
// console.log(10 - "Osama"); //NaN
// console.log(10 * -20);
// console.log(10 * 20);
// console.log(10 / 20);
// console.log(10 / -20);
// console.log(4 ** 2); //Puissance
// console.log(10 / 2); //Nombre Naturel
// console.log(11 /2); //Nombre Non Naturel
// console.log(10 % 2); //Le Reste = 0 : Nomre Paire
// console.log(11 % 2); // Le Reste = 1 : Nombre Impaire
// console.log(37 / 2);
// console.log(36 / 2); //Rmove 1 To Get Natural Number
// ++Increment [Post / Pre]
// --Decrement [Post / Pre]
// console.log(100); //Number
// console.log("100"); //String
// console.log(+"100"); //Number
// console.log(+"-100"); //Number
// console.log(+"Mohammed") //NaN
// console.log(+"10.5"); //Number
// console.log(+0XFF); //Hexadicimale
// console.log(+ true);
// console.log(+ false);
// console.log(+ null);



// console.log(-100); //Number
// console.log("-100"); //String
// console.log(-"100"); //Number
// console.log(-"-100"); //Number
// console.log(-"Mohammed") //NaN
// console.log(-"10.5"); //Number
// console.log(-0XFF); //Hexadicimale
// console.log(- true);
// console.log(- false);
// console.log(- null);

// let a = "10";
// let b = 20;
// let c = true;
// let d = false;
// console.log(b - a);
// console.log(+"") // 0;
// console.log("" - b);
// console.log(+a + b + c);



// let a = 10;
// let b = a + 20;
// b = b + 10;
// b += 10; //b + 10 = 50
// b -= 50; //b - 50 = 0
// b += 10; //b + 10 = 10
// b *= 10; //b * 10 = 100
// b /= 2; //b / 2 = 50
// b **= 2; //b * b = 2500
// console.log(b);
// console.log(Number("20"));



// let d = "-100";
// let e = "20";
// let f = 30;
// let g = true;
// console.log(-d * e);
// console.log(-d * ++f / (+ --e - +g)); = 173




//how to write numbers {
// console.log(1e6); // = 1000000
// console.log(1_000_000); // = 1000000
// console.log(10 ** 6) // = 1000000
// console.log(1000000.000) // = 1000000

// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MAX_VALUE);
//}



// console.log((100).toString()); // number transforme to string
// console.log(100..toString());// number transforme to string
// console.log(10.55455.toFixed(2));// will late 2 numbers after dote = 10.55
// console.log(parseInt("100 Mohammed"));
// console.log(parseInt("100.35"));// = 100
// console.log(parseFloat("100.45"))// = 100.45
// console.log(Number.isInteger("100"));// False
// console.log(Number.isInteger(100.45));// False
// console.log(Number.isInteger(100));// True
// console.log(Number.isNaN("Osama"));// False
// console.log(Number.isNaN("Osama" / 2));// True



// console.log(Math.round(99.9)); // la valeur la plut recent
// console.log(Math.round(99.2));// la valeur la plut recent

// console.log(Math.ceil(99.2));// la valeur qui est après
// console.log(Math.floor(99.9));// la valeur qui est avant

// console.log(Math.min(100, 129, 203, 10, -10));
// console.log(Math.max(100, 129, 203, 10, -10));

// console.log(Math.pow(6, 2));// thats meen (6 ** 2) = 36

// console.log(Math.random());// generate numbers

// console.log(Math.trunc(28.2))// delete numbers after dote (28.2 = 28)



// Exercices Numbers {
// let a = 1_00;
// let b = 2_00.5;
// let c = 1e2;
// let d = 2.4;

// console.log(Math.min(a, b, c, d));
// console.log(Math.trunc(d));

// console.log(Math.pow(a, d));

// console.log(Math.trunc(d));
// console.log(Math.floor(d));
// console.log(Math.round(d));
// console.log(Math.round(Math.floor(d)))
// }



// let The_name = "  Mohammed ";

// console.log(The_name[2]);// he start from "0" and write the caracter = "M"
// console.log(The_name.charAt(2));// he start from "0" and write the caracter = "M"
// console.log(The_name.length);// calculating how many caracters in the variable = 11
// console.log(The_name.trim());// deleting all spaces in to the variable
// console.log(The_name.toLocaleUpperCase());//transfaring all caracters in the variable to "Majiscules Lettres" = MOHAMMED
// console.log(The_name.toLocaleLowerCase());//transfaring all caracters in the variable to "Miniscules Lettres" = mohammed
// console.log(The_name.trim().charAt(4).toLocaleUpperCase());// = M



// let a = "Elzero Web School";

// console.log(a.indexOf("Web"));// = 7 : he give you how many caracters we have i the variable by declaring when he stop
// console.log(a.indexOf("Web", 8));

// console.log(a.indexOf("l"));// = 1 : give you the number of the first caracter in the variable frol left to right
// console.log(a.lastIndexOf("l"));// = 16 : give you the number of the lastest caracter in the variable frol left to right

// console.log(a.slice(7, 10));// = "Web" : he cut the caracters starting by 7 and ending to 10
// console.log(a.slice(-5, -2));// = "cho" : reverse

// console.log(a.repeat(4))// repeat the vaiables

// console.log(a.split());
// console.log(a.split(" "));
// console.log(a.split(" ", 2));



let  a = "Elzero Web School";

// console.log(a.substring(2, 6)); // = "zero"
// console.log(a.substring(2, 6)); // = "zero"
// console.log(a.substring(-10, 6)); // = "Elzero" : 2 -- 6
// console.log(a.substring(12, 14));

// console.log(a.substring(a.length -6));
// console.log(a.substring(a.length -5, a.length -3));

// console.log(a.substr(0,6));// = "Elzero"
// console.log(a.substr(17));// When you write a big number he make a empty 
// console.log(a.substr(-3));// = "ool"
// console.log(a.substr(-5, 2));// = "ch"

// console.log(a.includes("Elzero"));// = "true", found an caracters in the variable
// console.log(a.includes("Helo"));// = "false", found an caracters in the variable

// console.log(a.startsWith("W", 7));// = "true", found an caracters in the variable
// console.log(a.startsWith("E"));// = "true", found an caracters in the variable

// console.log(a.endsWith("l"));// = "true", the last caracter in the variable is "l"
// console.log(a.endsWith("W", 8));// = "true", the last caracter in the nins 8 is "W"



// let a = "Elzero Web School";

// console.log(a.substring(2, 6).toLocaleUpperCase());



// console.log(10 == "10"); // 10 = 10 : true
// console.log(-100 == "-100");// -100 = -100 : true
// console.log(10 != "10");// 10 # 10 : false
// console.log(10 === "10");// number = string : false
// console.log(10 === 10);// number = number : true
// console.log("10" === "10");// string = string : true
// console.log(10 !== "10");// number # string : true
// console.log(10 !== 10);// number # number : false

// console.log(10 > 100);// false
// console.log(10 > 10);// false
// console.log(10 >= 10);// true
// console.log(10 < 100);// false
// console.log(10 < 10);// false
// console.log(10 <= 10);// true

// console.log("Mohammed" === "Osama");// same string but not the same value : false
// console.log("Osama" === "Osama");// same string and same value : true



// ! : not
// && : and
// || : or

// console.log(!(10 == "10"));
// console.log(!(5 == "10"));

// console.log(10 == "10" && 100 > 10 && 10 >= 10);
// console.log(10 == "10" && 100 > 10 && 10 >= 100);// if one of conditions are false all the fonction are false

// console.log(10 == "10" || 100 > 10 || 10 >= 100);// if one of conditions are true all the foncion are true



/*
    Control Flow
    - if = si
    - else if = si non : if the first condition are not available he turn to check the second condition
    - else = alors : if all conditions are not available he ....
*/

// let price = 100;
// let discount = false;
// let discountAmount = 30;
// let country = "Tunisia"

// if (discount === true) {
//     price -= discountAmount;// price = price - discountAmount : 100 - 30 = 70
// } else if (country === "Morroco") {
//     price -= 40;
// } else if (country === "Syria") {
//     price -= 50;
// } else {
//     price -= 10;
// }

// console.log(price);



/* 
    -nesting
*/

// let price = 100;
// let discount = false;
// let discountAmount = 30;
// let country = "Morroco"
// let student = true

// if (country === "Morroco") {
//     if (student === true) {
//         price += discountAmount + 30;
//     }
//     else {
//         price += discountAmount + 10;
//     }
// }

// console.log(price);



// let name = "Mona";
// let gender = "Female";
// let age = 18;

// if (gender === "Male") {
//     console.log("Mr");
// }
// else {
//     console.log(`${"Mrs"} ${name}`);
// }

// // Conditional ? if True : if False

// gender === "Male" ? console.log("Mr") : console.log("Mrs");

// let result = gender === "Male" ? "Mr" : "Mrs";

// document.write(result);

// console.log(gender === "Male" ? "Mr" : "Mrs");

// console.log(`Hello ${gender === "Male" ? "Mr" : "Mrs"} ${name}`);

// age < 18 ? console.log(18) : age > 18 && age < 60 ? console.log("18 To 60") : age > 60 ? console.log("Larger Than 60") : console.log("Unknow");



// console.log(Boolean(100));
// console.log(Boolean(-100));
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(null));

// let price = "";

// console.log(`The price is ${price || 200}`);
// console.log(`The price is ${price ?? 200}`);



// let st = "Elzero Web School"
// let age = "34"
// let num = "number"

// if (age === "34") {
//     console.log("Good");
// }

// if (st.length !== "string") {
//     console.log("Good");
// }

// if (num === "number") {
//     console.log("Good");
// }



// let day = 0;// Dont type a string 

// switch (day) {
//     case 0:
//         console.log("Samedi");
//         break;
//     case 0:
//         console.log("Dimanche");
//         break;
// }


// let jour = 0;

// switch (jour) {
//     case 1:
//         console.log("Samedi");
//         break;
//     case 0:
//         console.log("Dimanche");
//         break;
// }

// let nhar = 3;

// switch (nhar) {
//     case 0:
//         console.log("Samedi");
//         break;
//     case 1:
//         console.log("Dimanche");
//         break;
//     default:// if all conditions are false he write ...
//         console.log("Unknow Day");
// }



/* Exercices if to switch

let job = "Manager";
let salary = 0;

switch (job) {
    case "Manager":
        salary = 8000;
        console.log(salary);
        break;
    case "IT":
    case "Support":
        salary = 6000;
        console.log(salary);
        break;
    case "Developer":
    case "Designer":
        salary = 7000;
        console.log(salary);
        break;
    default:
        salary = 4000;
        console.log(salary);
}

let holidays = 0;
let money = 0;

if (holidays === 0) {
    money = 5000;
    console.log(`My Money is ${money}`);
}
else if (holidays === 1 || holidays === 2) {
    money = 3000;
    console.log(`My Money is ${money}`);
}
else if (holidays === 3) {
    money = 2000;
    console.log(`My Money is ${money}`);
}
else if (holidays === 4) {
    money = 1000;
    console.log(`My Money is ${money}`);
}
else if (holidays === 5) {
    money = 0;
    console.log(`My Money is ${money}`);
}
else {
    money = 0;
    console.log(`My Money is ${money}`);
}
 */



/* Array 
let Myfriends = ["Mohammed", "Ahmed", "Faysall"];
console.log(`Hello ${Myfriends[0]}`);// choose one index : [0] = "Mohammed"
console.log(`${Myfriends[0][4]}`);// choose a caracter in to the index [0][4] = m

let myfriends = ["Mohammed", "Ahmed", "Faysall", ["Ali", "Omayma"]];
console.log(`${myfriends[3][1]}`);
console.log(`${myfriends[3][1][3]}`);

console.log(myfriends);
myfriends[0] = "Assiya";// methode to change the caracter : "Mohammed" = "Assiya"
console.log(myfriends);

myfriends[3] = "Osama";// transforme array caracter : ["Ali", "Omayma"] = "Osama"
console.log(myfriends);

myfriends[3] = ["Jamal", "Ayaa"];// transforme the caracter to aray : "Osama" = ["Jamal", "Ayaa"]
console.log(myfriends);

console.log(Array.isArray(myfriends));// the variable (myfriends) is an array
*/



/* Arrays Methodes
    - Lenght
*/
// Index start feom 0 [0, 1, 2, 3, 4, 5]

// let myfriends = ["Mohammed", "Osama", "Jamal", "Faysall"];

// console.log(myfriends.length);// 4
// myfriends[myfriends.length] = "Omayma";
// console.log(myfriends);

// console.log(myfriends.length);// 5

// myfriends[myfriends.length - 1] = "Narimane";// the last index "Omayma" will transforme to "Narimane" 
// console.log(myfriends);

// myfriends.length = 3;// Write juste 3 index 
// console.log(myfriends);




// let myfriends = ["Mohammed", "Osama", "Ahmed", "Omayma"];

// console.log(myfriends);

// myfriends.unshift("Nabil", "Manal");// add new indexs at the first
// console.log(myfriends);

// myfriends.push("Ayaa", "Kamal");// add new indexs at the final
// console.log(myfriends);

// let first = myfriends.shift();// he sauvgard and write the first index : "First Mr Nabil"
// console.log(`First Mr ${first}`);

// let last = myfriends.pop();// he sauvgard and write the lest index : "Last Mr Kamal"
// console.log(`Last Mr ${last}`);



// let myfriends = ["Ahmed", "Mohammed", "Osama", "Alaa", "Ahmed"];

// console.log(myfriends);

// console.log(myfriends.indexOf("Ahmed"));// Searche from "Ahmed" lft to right : 0
// console.log(myfriends.indexOf("Ahmed", 2));// Searche from "Ahmed" starting by "Osama" : 4

// console.log(myfriends.lastIndexOf("Ahmed"));// Searching from "Ahmed" rght to lft : 4
// console.log(myfriends.lastIndexOf("Ahmed", -2));// Seraching from "Ahmed" starting by "Alaa"

// console.log(myfriends.includes("Ahmed"));// If we have "Ahmed" in the indexes he will type : "True"
// console.log(myfriends.includes("Ahmed", 2));// If we have "Ahmed" in the indexes starting by "Osama" he will type : "True"

// if (myfriends.indexOf("Mohammed") === 3) {
//     console.log("Not Found");
// }

// if (myfriends.indexOf("Omayma") === -1) {
//     console.log("Not Found");// If the the index is not avaibale he write : "Not Found"
// }



// let myfriends = [10, "Mohammed", 20, "Sayed", 1000, "90", -10, -20];

// console.log(myfriends);

// console.log(myfriends.sort());// Big to the small / NB: 1000 < 20 because 1 < 2
// console.log(myfriends.reverse());// Small to the big



// let myfriends = ["Ahmed", "Mohammed", "Osama", "Jamal"];

// console.log(myfriends.slice());// he write all the indexes
// console.log(myfriends.slice(1));// he write indexes starting by "Mohammed"
// console.log(myfriends.slice(1, 3));// he write indexes sterting by "Mohammed" to "Osama" / NB : the last index (3) dont incldued
// console.log(myfriends.slice(-2));// he write indexes starting by "Osama" to "Jamal"
// console.log(myfriends.slice(1, -1));// he write indexes starting by "Mohammed" to "Osama" / NB : The last index (-1) is not included
// console.log(myfriends.slice(-4, -1)); // he write indexes starting by "Ahmed" to "Osama" / NB : The last index (-1) is not included

// console.log(myfriends);
// // myfriends.splice(0, 0, "Marwan", "Omayma");// Add new indexes at the first
// // console.log(myfriends);

// // myfriends.splice(0, 1, "Marwan", "Omayma");// He delete the first index "Ahmed" and add new indexes at fist
// // console.log(myfriends);

// myfriends.splice(1, 2, "Marwan", "Omayma");// He delete two indexes "Mohammed" and "Osama" and add new indexes after "Ahmed"
// console.log(myfriends);



// let myfriends = ["Housam", "Yassine", "Brahim", "fouad"];
// let mynewFriends = ["Omayma", "shaimae"];
// let schoolFriends = ["Ahmed", "Ayoub", "Hicham"];

// // let allFriends = myfriends.concat(mynewFriends);// allFriends = myfriends + mynewFriends
// // console.log(allFriends);

// let allFriends = myfriends.concat(mynewFriends, schoolFriends, "Jamal", [1, 2]);// allFriends = myfriends + mynewFriends + schoolFriends
// console.log(allFriends);
// console.log(allFriends.join());
// console.log(allFriends.join(" @ "));
// console.log(allFriends.join("|").toLocaleUpperCase());



// let zero = 0;
// let counter = 3;
// let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"]

// console.log(my);

// console.log(my.reverse().slice(2));

// console.log(my.slice(1, 3).reverse());

// console.log(my.splice(0, 1));




/*
    Loop
    -For
 */
// for (let i = 0; i < 10; i++) { // we have i = 0, and i < 10 starting by index 0, and we add one i (i++)
//     console.log(i);
// }



/*
    Loop
    -Loop On Sequence
 */

// let myFriends = [1, 2, "Osama", "Mohammed", "Ahmed", "Hajar"];
// let onlyNames = [];

// console.log(myFriends[0]);
// console.log(myFriends[1]);
// console.log(myFriends[2]);
// console.log(myFriends[3]);

// for (let i = 0; i < myFriends.length; i++) {// He write the indexes myFriends, (myFriends.length) help you to write indexes stoping at the last index "Hajar"
//     console.log(myFriends[i]);
// }

// if (typeof myFriends[0] === 'string') {
//     onlyNames.push(myFriends[0]);
// }
// if (typeof myFriends[1] === 'string') {
//     onlyNames.push(myFriends[1]);
// }
// if (typeof myFriends[2] === 'string') {
//     onlyNames.push(myFriends[2]);
// }
// if (typeof myFriends[3] === 'string') {
//     onlyNames.push(myFriends[3]);
// }
// if (typeof myFriends[4] === 'string') {
//     onlyNames.push(myFriends[4]);
// }

// for (let i = 0; i < myFriends.length; i++) {
//     if (typeof myFriends[i] === 'string') { // Add just string indexes in var (onlyNames) by using "loop"
//         onlyNames.push(myFriends[i]);
//     }
// }
// console.log(onlyNames);



// if (typeof myFriends[4] === 'string') {
//     onlyNames.push(myFriends[4]);
// }
// console.log(onlyNames);



/*
    Loop
    -Nested Loops
 */

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];
// let colors = ["Red", "Blue", "Green"];
// let models = [2020, 2021];

// for (let i = 0; i < products.length; i++) {
//     console.log("#".repeat(10));
//     console.log(`${products[i]}`);
//     console.log("Colors :")
//     for (let j = 0; j < colors.length; j++) {
//         console.log(`- ${colors[j]}`);
//     }
//     console.log("Models :")
//     for (let k = 0; k < models.length; k++) {
//         console.log(`@ ${models[k]}`);
//     }
// }



/*
    Loop Control
    -Break // Stop writing others indexes by using "break"
    -Continue // Delet the index and continue writing the indexes
    -Label // Label is like name of loop 
 */

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];
// let colors = ["Red", "Blue", "Green"];

// for (let i = 0; i < products.length; i++) {
//     console.log(products[i]);
//     if (products[i] === "Pen") {
//         break;
//     }
// }

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];
// let colors = ["Red", "Blue", "Green"];

// for (let i = 0; i < products.length; i++) {
//     if (typeof products[i] === "number") {
//         continue;
//     }
//     console.log(products[i]);
// }

// mainloop: for (let i = 0; i < products.length; i++) {
//     console.log("#".repeat(10));
//     console.log(`@ ${products[i]}`);
//     nestedloop: for (j = 0; j < colors.length; j++) {
//         console.log(`- ${colors[j]}`);
//         if (colors[j] === "Blue") {
//             break nestedloop;
//         }
//     }
// }



// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "Iphone"];
// let colors = ["Red", "Blue", "Green"];
// let showCount = 5;

// document.write(`<h1>Show ${showCount} Products</h1>`);

// for (let i = 0; i < showCount; i++) {
//     document.write(`<div>`);
//     document.write(`<h3>[${i + 1}] ${products[i]}</h3>`);
//     for (let j = 0; j < colors.length; j++) {
//         document.write(`<p>- ${colors[j]}</p>`);
//     }
//     document.write(`${colors.join(" | ")}`);
//     document.write(`</div>`);
// }



/*
    Loop 
    - While
 */

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "Iphone"];
// let index = 0

// while (index < products.length) {
//     console.log(products[index]);
//     index++;
//     }



/*
    Loop 
    - Do / While
 */

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "Iphone"];
// let i = 0

// do {
//     console.log(i); // Do: He write the condition also if she is false
//     i++
// }while (false);
// console.log(i);



// Chalange Loop

// let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
// let myEmployees = ["Amgad", "Samah", "Ameer", "Omare", "Othmane", "Amany", "Samia"];
// let numAdmins = 3
// let counterOne = 1

// document.write(`<div>We Have ${numAdmins} Admins</div>`);

// for (let i = 0; i < myEmployees.length; i++) {
//     if (myAdmins[i] === "Stop") {
//         break;
//     }
//     document.write(`<hr>`)
//     document.write(`<div>`);
//     document.write(`<div>The Admin For Team ${i + 1} Is ${myAdmins[i]}</div>`)
//     document.write(`<h3>Team Members:</h3>`);
//     for (let j = 0; j < myEmployees.length; j++) {
//         if (myAdmins[i].startsWith("A") && myEmployees[j].startsWith("A")) {
//             document.write(`<p>-${counterOne++} ${myEmployees[j]}</p>`);
//         }
//         else if(myAdmins[i].startsWith("O") && myEmployees[j].startsWith("O")) {
//             document.write(`<p>-${counterOne++} ${myEmployees[j]}</p>`);
//         }
//         else if(myAdmins[i].startsWith("S") && myEmployees[j].startsWith("S")) {
//             document.write(`<p>-${counterOne++} ${myEmployees[j]}</p>`);
//         }
//     }
//     document.write(`</div>`);
// } 



/*
    -Function
*/

// function sayHello(userName) { // This is the variable
//     console.log(`Hello ${userName}`); // This is the task
// }
// sayHello("Mohammed"); // This is the value of variable
// sayHello("Osamma");
// sayHello("Ahmed");
// sayHello("Houssam");
// The function help you to execute more than one task in one task



// function sayHello(userName, age) { // This is the variable
//     console.log(`Hello ${userName} Yor Age Is ${age}`); // This is the task
//     if (age < 20){
//         console.log("You Are So Young To Open An Account In The Bank");
//     } else {
//         console.log("You Are Avaibale To Oppen An Account In The Bank");
//     }

// }
// sayHello("Mohammed", 18); // This is the value of variable
// sayHello("Osamma", 20);
// sayHello("Ahmed", 38);
// sayHello("Houssam", 50);

// function generateYears(start, end, exeption) {
//     for (let i = start; i <= end; i++) {
//         if (i === exeption) {
//             continue;
//         }
//         console.log(i);
//     } 
// }
// generateYears(1982, 2022, 2018);



// function calc(num1, num2) {
//     return num1 + num2; // Return is like a break and we can not make others variables after the fuction
// }
// let result = calc(10, 20);
// console.log(result);


// function generate(start, end) {
//     for(let i = start; i <= end; i++) {
//         console.log(i);
//         if (i === 15) {
//             return `Interruptig`;
//         }
//     }
// }
// generate(5, 20);



// function sayHello(username, age = "nane") { /* If we dont write a value for "age" he write "undifind" but you can give him an value by writing 
//                                                 age = "nane" */
//     // if (age === undefined) { // or using condition if and writing age === "nane"
//     //     age = "nane";
//     // }
//     // age = age || "nane"; // or by usig "||" (age = age || "nane"
//     return `Hello ${username} Your Age Is ${age}`;
// }
// console.log(sayHello("Mohammed"));



// function calc(...numbers) {
//     let results = 0
//     for (let i = 0; i < numbers.length; i++) {
//         results += numbers[i];
//     }
//     return `The Final Result Is ${results}`;
// }
// console.log(calc(10, 20, 10, 30, 40, 50));



/*
    -Exercice :
*/
// function data(user = "none", age = "none", rt = 0, show = "Yes", ...skills) {
//     document.write(`<div>`);
//     document.write(`<h2>Welcome, ${user}</h2>`);
//     document.write(`<p>Your Age Is : ${age}`);
//     document.write(`<p>Hour Rate : $${rt}`);
//     if (show === "Yes") {
//         if (skills.length > 0) {
//             document.write(`<p>Your Skills Is : ${skills.join(" | ")}</p>`);
//         }else {
//             document.write(`<p>You Dont Have Skills</p>`);
//         }
//     } else {
//         document.write("<p>Skills Is Hidden</p>");
//     }
//     document.write(`</div>`);
// }
// data("Mohammed", 18, 1, "Yes", "sport", "programmation", "crack");


/*
    -Exercice :
*/
// function showDetails(a, b, c) {
//     let name;
//     let age;
//     let status;
//     if (typeof a === "string") {
//         name = a;
//     } else if (typeof a === "number") {
//         age = a;
//     } else {
//         status = a;
//     }
//     if (typeof b === "string") {
//         name = b;
//     } else if (typeof b === "number") {
//         age = b;
//     } else {
//         status = b;
//     }
//     if (typeof c === "string") {
//         name = c;
//     } else if (b === "number") {
//         age = c;
//     } else {
//         status = c;
//     }
//     if (status === true) {
//         status = "you are available for hir";
//     } else {
//         status = "you are not available for hir";
//     }
//     document.write(`<p>Hello ${name}, your age is ${age}, ${status}</p>`)
// } 
// showDetails("Osamma", 18, true);
// showDetails("Osamma", 18, false);
// showDetails(18, true, "Mohammed");


// function data(a, b, c) {
//     if (typeof a === "string") {
//         user = a;
//     } else if (typeof a === "number") {
//         num = a;
//     } else {
//         stats = a;
//     }if (typeof b === "string") {
//         user = b;
//     } else if (typeof b === "number") {
//         num = b;
//     } else {
//         stats = b;
//     }if (typeof c === "string") {
//         user = c;
//     } else if (typeof c === "number") {
//         num = c;
//     } else {
//         stats = c;
//     }
//     if (num >= 18) {
//         stats = "you are available for hir";
//     } else stats = "you are not available for hir";
//     document.write(`<p>Hello ${user}, your age is ${num}, ${stats}</p>`);
// }
// data("Mohammed", 30);


/*
    - Anonimous function // function with out name
*/
// let calc = function (num1, num2) {
//     return num1 + num2;
// };
// console.log(calc(10, 20))

// document.getElementById("but").onclick = function () {
//     document.write("got");
// };
// setTimeout(function () {
//     console.log("good");
// }, 2000);



/*
    - Nested Function : function insisde function
*/

// Exemple 1:
// function sayMessage(fname, lName) {
//     let message = `Hello`;
//     // Nested Function
//     function concatMsg() {
//         message = `${message} ${fname} ${lName}`;
//     }
//     concatMsg();
//     return message;
// }
// console.log(sayMessage("Mohammed", "Ossama"));



/*
    - Arrow Function Syntax
*/

// function print() { // Normale Function
//     return 10
// }
// console.log(print(10));

// let print = () => 10; // Arow Function : we can use arrow fuction whene we have juste one line after (function)
// console.log(print());

//  let print = (num1, num2) => num1 + num2; // This is an arrow function with two proprieties 
// console.log(print(10, 30));



/*
    Scope
    - Global and Local scope
*/

// let a = 1;
// var b = 2;

// function showText() {
//     let a = 10; // The function use variables whos are insde the function (Local) at first and if we dont have variables inside the function ge use variables aside the function (Global)
//     var b = 20;
//     console.log(`Function - From Local ${a}`);
//     console.log(`Function - From Local ${b}`);
// }
// showText();

// console.log(`From global ${a}`);
// console.log(`From global ${b}`);



/*
    - Block scope [if, switch, for]
*/

// var x = 10;

// if (10 === 10) {
//     let x = 50; // also condition (if) use variables inside theme "Local" but if we dont have, he use variables aside condition(if) "Global"
//     console.log(`From local ${x}`);
// }
// console.log(`From global ${x}`);



/*
    Scope 
    - Lexical Scope
*/

// function parent() {
//     let a = 10;

//     function child() {
//         console.log(a); // The function use the variable from function "parent" (global) 
//         console.log(b); // We have an errore here because we cant use variables (b) from function "grand"

//         function grand() {
//             let a = 20; // The function use the variable from local 
//             let b = 30; // The function use the variable from local 

//             console.log(a);
//             console.log(b);
//         }
//         grand();
//     }
//     child();
// }
// parent();



/*
    Arrow function chalenges
*/

// Ecercice1 :

// let names = (...name) => `String [${name.join("],[")}] => Done !`;
// console.log(names("Osamma", "Mohammed", "Ali"));



/*
    Higher order functions 
    - Map // Map meen put an array in new array
*/

// let array = [1, 2, 3, 4, 5];
// let newArray = [];

// for (let i = 0; i < array.length; i++) {
//     newArray.push(array[i] + array[i]);
// }
// console.log(newArray);


// let addSelf = array.map(function(element, index, array) {
//     return element + element;
// }, 10)
// console.log(addSelf);


// let addSelf = array.map((element) => element + element);
// console.log(addSelf);


// function addition(ele) {
//     return ele + ele;
// }

// let add = array.map(addition);

// console.log(add);



// Exercices : 

// let swappingCases = "elZERo";
// let invetedNumbers = [1, -10, -20, 15, 100, -30];
// let ingnoreBooleans = "Elz123er4o";

// let sw = swappingCases.split("").map(function (ele) { // transfaring cappital caracter to small caracter and reverse 
//     return ele === ele.toLocaleUpperCase() ? ele.toLocaleLowerCase() : ele.toLocaleUpperCase();
// })
// .join("");
// console.log(sw);

// let inv = invetedNumbers.map(function (a) { // transfaring negatif numbers to positif numbers and reverse 
//     return -a;
// })
// console.log(inv);

// let ing = ingnoreBooleans.split("").map(function (ele) { // deleting numbers from the variable
//     return isNaN(parseInt(ele)) ? ele : ("");
// })
// .join("");
// console.log(ing);



// let myFriends = ["Mohammed", "Asmae", "Ahmed", "Faysall", "Amjad"];

// let friendsA = myFriends.filter(function (el) { // Write just names who starts wth "A"
//     return el.startsWith("A") ? true : false;
// })
// console.log(friendsA);


// let numbers = [1, 4, 3, 8, 10, 20];

// let paireNumbers = numbers.filter(function(ele) { // Write just paire numbers
//     return ele % 2 === 0;
// }) 
// console.log(paireNumbers);



// let sentence = "i love foood code too playing much";

// let newSentence = sentence.split(" ").filter(function(ele) { // Write just caracters who are inferieure ou = 4
//     return ele.length <= 4;
// }).join(" ");
// console.log(newSentence);


// let ignoreNumers = "elz123ro4";

// let newIgnore = ignoreNumers.split("").filter(function(ele) { // Write just string with out numbers
//     return isNaN(parseInt(ele)) ? ele : "";
// }).join("");
// console.log(newIgnore);


// let mix = "A13BS2ZX";

// let newMix = mix.split("").filter(function(ele) { // Write just numbers with out strings and multiple by his srlf
//     return !isNaN(parseInt(ele));
// })
// .map(function(ele) {
//     return ele * ele;
// })
// .join("");
// console.log(newMix);


// let strings = "ezl32ero854";

// let newStrings = strings.split("").filter(function(ele) {
//     return isNaN(parseInt(ele));
// }).join("")
// console.log(newStrings);



/*
    - Reduce
    Syntax:
    reduce(CallBackFunction(Accumulator, Current Val, Current Index, Source Array) { }, initialValue)
*/

// let nums = [10, 20, 15, 30];

// let newNums = nums.reduce(function(acc, current, index, array) { // Reduce accepete 4 values (Accumulator, Current Val, Current Index, Source Array)
//     console.log(`Accumulator : ${acc}`);                        // - Accumulator : Is the first caractere from the array (10)
//     console.log(`Current Val : ${current}`);                    // - Current Val : Is the second number after accumulator (20)
//     console.log(`Current Index : ${index}`);                    // - Current Index : Is the place of curent val in the array (1)
//     console.log(`CArray : ${array}`);                           // - Array : Is the array [10, 20, 15, 30]
//     console.log(acc + current);
//     console.log(`#######`);
//     return acc + current;
// })
// console.log(newNums);



// let theBiggest = ["bla", "ahmad", "Mohammed", "ola", "kakarotop"];

// let newBiggest = theBiggest.reduce(function(acc, current, index, array) {
//     console.log(`Accumulator : ${acc}`);                   
//     console.log(`Current Val : ${current}`);              
//     console.log(`Current Index : ${index}`);                  
//     console.log(`CArray : ${array}`);        
//     console.log(acc.length > current.length ? acc : current);
//     console.log(`##########`);
//     return acc.length > current.length ? acc : current;
// })
// console.log(newBiggest);


// let removeChars = ["E", "@", "@", "L", "Z", "E", "@", "@", "R", "O", "@"];
// let newChars = removeChars.filter(function(ele) {
//     return ele !== "@";
// })
// .reduce(function(acc, current) {
//     return acc + current;
// })
// console.log(newChars);


// let removeChars = ["E", "@", "@", "L", "Z", "E", "@", "@", "R", "O", "@"];
// let newChars = removeChars.filter(function(ele) {
//     return !ele.startsWith("@");
// })
// .reduce(function(acc, current) {
//     return acc + current;
// })
// console.log(newChars);



/*
    - forEach
*/

// let allLis = document.querySelectorAll("ul li");
// let allDivs = document.querySelectorAll(".content div");

// allLis.forEach(function(ele) {
//     ele.onclick = function() {
//         allLis.forEach(function (ele) {
//             ele.classList.remove("active");
//         });
//         this.classList.add("active");
//         allDivs.forEach(function(ele) {
//             ele.style.display = 'none';
//         })
//     };
// });



// let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

// let solution = myString.split("").map(function(ele) {
//     return ele !== "," ? ele : "";
// })
// .filter(function(ele) {
//     return isNaN(parseInt(ele));
// })
// .reduce(function(acc, current) {
//     return acc + current;
// })
// .slice(true, -isNaN(myString)).replaceAll("_", " ");
// console.log(solution);



/*
    - Object
*/

// let user = {
//     // Properties 
//     theName: "Mohammed",
//     theAge: 18,
//     // Methods
//     sayHello: function() {
//         return `Hello`;
//     },
// };
// console.log(user.theAge);
// console.log(user.theName);
// console.log(user.sayHello());


// let myVar = "Morroco";

// let user = {
//     Name: "Mohammed",
//     "Age of": 18,
//     "17": "number",
// };
// console.log(user.Name);
// console.log(user["Age of"]);
// console.log(user["17"]);
// console.log(user[myVar]);


/*
    - Dot Notation -> .
    - Bracket Notation -> []
*/

// let myVar = "Country";

// let user = {
//     Name : "Mohammed",
//     Age : 18,
//     "Country" : "Morroco",
// }

// console.log(user.Name);
// console.log(user.Age);
// console.log(user.Country); // This is "dote notation" methode to access to properties 
// console.log(user["Country"]);  // This is "bracket notation" methode to access to properties
// console.log(user[myVar]); // You shoud to use bracket notation to access to propertie already is value of a variable



/*
    - Nested object
*/

// let avaibale = true;

// let user = {
//     name : "Mohammed",
//     age : 18,
//     skills : ["HTML", "CSS", "JS"],
//     available : false,
//     chackAv : function() {
//         if (user.available === true) {
//             return "User free for work";
//         } else {
//             return "User not free";
//         }
//     },
//     adress : {
//         France : "Paris",
//         Morroco : {
//             one : "Guercif",
//             two : "Taourirt",
//         }
//     }
// }

// console.log(user.name);
// console.log(user.age);
// console.log(user.skills);
// console.log(user.adress.Morroco.one); 
// // Or : 
// console.log(user["adress"]["Morroco"]["two"]);
// console.log(user.chackAv());



/*
    - This Keyword
*/

// let user = {
//     age : 18,
//     ageInDays : function() {
//         return this.age * 365; // This here return the object of this method
//     },
// };
// console.log(user.age);
// console.log(user.ageInDays());



/*
    - Dom :
            -- Find element by ID
            -- Find element by Tag Name
            -- Find element by Class Name
            -- Find element by CSS Selectors 
            -- Find element by Collection 
            ------- title 
            ------- body
            ------- images 
            ------- forms
            ------- links
*/

// let myIdElement = document.getElementById("my-div");
// let myTagElements = document.getElementsByTagName("p");
// let myClassElement = document.getElementsByClassName("my-span");
// let myQueryElement = document.querySelector(".my-span"); // He select just the first class in the form
// let myQueryAllElement = document.querySelectorAll(".my-span"); // He select all the classes in the form

// console.log(myIdElement);
// console.log(myTagElements);
// console.log(myClassElement[1]);
// console.log(myQueryElement);
// console.log(myQueryAllElement);

// console.log(document.title);
// console.log(document.body);
// console.log(document.forms[0].one.value);
// console.log(document.links[0].href);



/*
    - GET & SET Elements 
    - Content & Attributes 
        -- innerHTML 
        -- textContent
        -- Change Attributes Directly
        -- Change Attributes With Methods
            --- getAttribute
            --- setAttribute
*/

// let myElemnt = document.querySelector(".js"); // Select div with class (.js)
// console.log(myElemnt.innerHTML); // innerHTML show you all HTML form -> tag html + content
// console.log(myElemnt.textContent); // textContent show you just the content with out tag HTML

// myElemnt.innerHTML = "Hello its <span>JavaScript<span>"; // You change the content of div and add span tag in the div
// myElemnt.textContent = "Hello its <span>JavaScript<span>"; // You chnage the content of div and the span added is just a text not a tag

// document.images[0].src = "https://google.com"; // He change src of image 
// document.images[0].alt = "Alternate"; // He change alt of image 
// document.images[0].id = "img"; // He change or add id for image 
// document.images[0].className = "img"; // He cahnge or add class for image 

// document.links[0].href = "https://facebook.com"; // He change href for link

// let myLink = document.querySelector(".link"); // Select link with class (.link)

// console.log(myLink.getAttribute("class")); // He get the class of link 
// console.log(myLink.getAttribute("href")); // He get href of link 

// myLink.setAttribute("href", "https://facebook.com"); // He get href of link and chnage theme
// myLink.setAttribute("class", "my-link"); // He get class of link and change theme 
// myLink.setAttribute("id", "my-link"); //He get id of link and change theme 



/*
    - Check Attributes :
        -- Element.attributes : He show you all attributes in the element 
        -- Eelement.hasAttributes : He show you if we have attribute in the element 
        -- Eelement.removeAttribute : He remove the attribute from the element 
*/

// console.log(document.getElementsByTagName("p")[0].attributes); // He give you all attributes in the paragraphe 

// let myP = document.getElementsByTagName("p")[0];

// if (myP.hasAttribute("data-src") ) { // hasAttribute show you if we have this attribute in the element 
//     if (myP.getAttribute("data-src") === "") {
//         myP.removeAttribute("data-src"); // He remove the attributes from element 
//     } else {
//         myP.setAttribute("data-src", "new-testing");
//     }
// } else {
//     console.log("Not Found");
// }

// if (document.getElementsByTagName("div").hasAttribute) { // NB: hasAttribute should not have ["()"]
//     console.log(`Div has attribute`);
// } else {
//     console.log(`Div has no attribute`);
// }



/*
    - Create Eelements :
        -- createEelement
        -- createComment
        -- createTextNode
        -- createAttribute
        -- appendChild
*/

// let myEelement = document.createElement("div"); // He create the element 
// let myAttr = document.createAttribute("data-custom"); // He create attribute 
// let myText = document.createTextNode("Hello from div"); // He create the text
// let myComment = document.createComment("This is comment"); // He create comment

// myEelement.className = ("my-div"); // He add attribute class to the element 
// myEelement.setAttributeNode(myAttr);
// myEelement.setAttribute("id", "my-div"); // He add attribute id = "my-div" to the element 

// // Append comment to element :
// myEelement.appendChild(myComment); // He add comment to the element 

// // Append text to element :
// myEelement.appendChild(myText); // He add the text variable to the element 

// console.log(myEelement);

// // Append element to body :
// document.body.appendChild(myEelement); // He add element to the page html



/*
    - Deal with childrens :
        -- children
        -- childNodes
        -- firstChild
        -- lastChild
        -- firstElementChild
        -- lastElementChild
*/

// let myEelement = document.querySelector("div");

// console.log(myEelement.children);
// console.log(myEelement.children[0]);
// console.log(myEelement.childNodes);
// console.log(myEelement.childNodes[0]);

// console.log(myEelement.firstChild);
// console.log(myEelement.lastChild);

// console.log(myEelement.firstElementChild);
// console.log(myEelement.lastElementChild);



/*
    - Events :
        NB: You can use those events in html or js you have the choise
        -- onclick
        -- oncontextmenu
        -- onlouseenter
        -- onmouseleave

        -- onload
        -- onscroll
        -- onresize

        -- onfocus
        -- onblur
        -- onsubmit
*/

// function btn() {
//     console.log("Hello world"); // You importe the function added in html button by onclick
// }

// let myId = document.getElementById("btn"); // Or you can use this methode

// myId.onclick = function () {
//     console.log("Hello from button");
// }



/*
    - Event :
        -- Validate Form Practice 
        -- Prevent Default 
*/

// let userInput = document.querySelector("[name='user']");
// let ageInput = document.getElementsByName("[name='age']");

// document.forms[0].onsubmit = function (e) {
//     let userValid = false;
//     let ageValid = false;

//     if (userInput.value !== "" && userInput.value.length <= 10) {
//         userValid = true;
//     }

//     if (ageInput.value !== "") {
//         ageValid = true;
//     }

//     if (userValid === false || ageValid === false) {
//         e.preventDefault();
//     }
// };

// document.links[0].onclick = function (event) {
//     console.log(event); // He show you some informations about this link
//     event.preventDefault(); // He let the links not go to the main page 
// }



/*
    Event Smulation :
        -- click
        -- focus
        -- blur
*/

// let inputOne = document.querySelector("#user");
// let inputTwo = document.querySelector("#age");

// window.onload = function () { // Whene the page refreche he will make focus on inpute one
//     inputOne.focus();
// }

// inputTwo.onblur = function () {
//     document.links[0].click(); // Whene you put on input two and get out he automaticly click on ink you declared
// }



/*
    - Class List :
        -classList :
            -- length 
            -- contains
            -- item(index)
            -- add
            -- remove 
            -- toggle
*/

// let myEelement = document.getElementById("my-div");

// console.log(myEelement.classList); // To run the object you should to use this code
// console.log(typeof myEelement.classList);
// console.log(myEelement.classList.contains("show")); // He show you if the class contain this caractere : true
// console.log(myEelement.classList.contains("medox")); // He show you if the class contain this caractere : false 
// console.log(myEelement.classList.item(3)); // He give you the caractere detected by indexes in class

// myEelement.onclick = function () {
//     myEelement.classList.add("medox", "nemedox"); // He add caracters detected after clicking on the div on the class
// }

// myEelement.onclick = function () {
//     myEelement.classList.remove("one", "two"); // He remove caracters detected after clicking on the div on the class
// }

// myEelement.onclick = function () {
//     myEelement.classList.toggle("medox"); // He add the caracter to the class if he doesnt existed and he remove him if he already existed
// }



/*
    - Deal with Eelements :
        -- before 
        -- after
        -- append
        -- prepend
        -- remove
*/

// let element = document.getElementById("my-div");
// let creatP = document.createAttribute("p");

// element.before("Hello"); // He create before the div content
// element.after("New"); // He create after div content
// element.append("Couscous"); // He create after div content
// element.prepend("New body"); // He create before the div content



/*
    - Traversing ;
        -- nextSibling
        -- previousSibling
        -- nextEelementSibling 
        -- previousEelementSibling
        -- parentEelement 
*/

// let element = document.getElementById("my-div");

// console.log(element.nextSibling); // He will give you the next element or attribut or comment after the element you declare 
// console.log(element.nextElementSibling); // He will give you the next element after the element you declare 
// console.log(element.previousSibling); // He will give you the previous element or attribut or comment befor the element you declare 
// console.log(element.previousElementSibling); // He will give you the previous element befor the element you declare 

// element.onclick = function() {
//     element.parentElement.remove(); // You can control all the element by controlling the parent element 
// }



/*
    - Cloning
*/



/*
    - BOM :
        -- alert
        -- comfirm
        -- prompt
*/

// alert("hello");

// let comfrimMessage = confirm("Are you sure to delet the form");
// console.log(comfrimMessage);

// if (comfrimMessage === true) {
//     console.log("From was deleting");
// } else {
//     console.log("Form not deleting")
// }

// let promptMessage = prompt("Print Message");
// console.log(promptMessage);



/*
    - setTimeout
    - clearTimeout
*/

// let count = setTimeout(sayHello, 3000, "Mohammed"); // The function run after 3s 
// function sayHello (name) {
//     console.log(`Hello MR ${name}`)
// }

// let stop = document.getElementById("btn");
// stop.onclick = function () {
//     clearTimeout(count); // He stop code to run 
// }  



/*
    - setInterval : He return the code with time when the code finish 
    - clearInterval : He cancel the procces
*/

// let div = document.querySelector("div");

// function countDown () {
//     div.innerHTML -= 1;
//     if (div.innerHTML === "0") {
//         clearInterval(counter);
//     }
// }
// let counter = setInterval(countDown, 1000);



/*
    - Location Object
        -- href Get / Set [URL || Hash || File || Mail]
        -- host 
        -- hash 
        -- protocol
        -- reload()
        -- replace()
        -- assign()
*/

// console.log(location);
// console.log(location.href);
// location.href = "https://google.com"; // He get you to the page who declared in the location

// console.log(location.host); // He give you the name of the web site and the port
// console.log(location.hostname); // He give you only the name of the web site

// console.log(location.protocol); // He give you the protocol of the web site -> http / https

// console.log(location.hash); // He give you the name of the pages on your web site

// location.reload(); // He reload the page 

// location.replace("https://google.com"); // He get you the url you detected on the location and he delet the last url on the history

// location.assign("https://google.com"); // He get you the url you detected on the location and he doesnt delet the lats url on the history



