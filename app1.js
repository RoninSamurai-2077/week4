console.log("Hello world!");
console.warn("This is a warning");
console.error("Error! System critical!");
//9) Declare a variable named var1
var var1;
//10) Assign a string data type value to var1
var1 = "parents" + " " + "3 kids";
//11) Write the value of var1 to the console
console.log(var1);
//12) Write a blank line to the console. (I showed one way to do this in class, there are some others feel free to use those instead if you'd like, practice your google-fu)
console.info("  ");
//13) Define and assign a variable named var2, the value should be of the number type
var var2 = 2;
//14) Evaluate var1 + var2 and write the result to the console (You can store the result in a variable and write it to the console, or pass the expression into a method that will remain un-named)
console.info(var1 + var2 = parents 3 kids2); 
//15) Could you guess the result? Write your guess in an inline comment next to where you're writing it to the console

//2parents 3 kids 

//16) Add in a multi line comment and write some of the types we covered in class today on individual lines
/*
 you can put the <script src="/app1.js"></script> in the head & body.
 To add a string to a var just doing var var1 = "anything" + "numbers" 
*/
//17) Write the type of the var1 variable to the console

//18) Can you guess the result? Write your guess in an inline comment next to where you're writing to the console.
console.info (typeof var1); //string
//19) Declare a variable named var3 and assign it the string value text
var var3 = var2 + " " + "and"+ var1;
//20) Write the value of var3 to the console
console.info(var3);
//20) Reassign var3 to a boolean value
 var3 = true;

//21) Write the value of var3 to the console
console.log(var3);
//22) Reassign var1 to the number 5
var1 = 5;
//23) Reassign var2 to the string 5 
var2 = "5";
//24) In any order or in however many lines you'd like, parse var2 from a string to a number and add it to var1, write your result to the console.
console.log(
    parseInt(var2) + var1
);
