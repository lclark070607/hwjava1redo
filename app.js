/* Tallest Mountain

PROBLEM:  Create an array that contains a bunch of numbers 
representing the heights of various mountains. 
Write some code that identifies the height of the tallest of the 
available mountains and prints it out. 

Step 1:  Create an array of numbers.
Step 2:  Sort the array into ascending order. 
Step 3:  Return last number in the array, which is the largest/highest number.*/

//set the array of numbers
let mountainArray = [52, 73, 86, 102, 59, 2];

//sort the array into ascending order
let newArray = mountainArray.sort((function (a, b) { return a - b }));
console.log(newArray);

//set the variable to the highest number in the index
let tallestMountain = mountainArray[5];
console.log(tallestMountain);

/* Hangman Lite

PROBLEM:  Create a variable called word that contains a hangman word, 
and create a second variable called letter that indicates the letter 
that the player guessed. 
Print out "Yeah, the letter x exists y times in my word" 
if the letter exists (but substitute the actual letter and 
the number of times). If the letter doesn't exist, 
print out "Nope, that letter doesn't exist in my word."

Step 1: Create a variable for hangman word.
Step 2: Create a variable for the letter guessed.
Step 3:  Using the letter variable, iterate over the word to identify if
that letter exists.
Step 4:  Count the number of times the letter exists.
Step 5:  Console log the message:  "Yeah, the letter x exists y times in my word" order
"Nope, that letter doesn't exist in my word."


Luke-Question:  I'm almost getting it but it's showing up wrong in the console.
It's showing each loop through the string.  */

//set the variables
let word = 'candyccc';

let letter = 'p';
let result = 0;

//iterate over 
for (i = 0; i < word.length; i++) {
    //if letter variable is equal to a character in strWord
    if (letter === word[i]) {
        //add it to result
        result++;
    }

    if (result === 1) {
        console.log('Yeah, letter ' + letter + ' exists ' + result + 'time in my word.');
    } else if (result > 0) {
        console.log('Yeah, letter ' + letter + ' exists ' + result + 'times in my word.');
    } else {
        console.log('Nope, ' + letter + ' doesn\'t exist in my word.');
    };
};

/* Cherokee Hare

Problem:  There's a mythical species of rabbit called the Cherokee Hare 
that can reproduce at variable rates and never seem to die. Fortunately, 
some engineers figured out to write some code to describe it's future 
population. Wildlife experts rejoice! 
Create a variable called startingPopulation that keeps track of the initial 
population of hares, a variable called birthRate that keeps track of what 
percentage is born each week, and a variable called numberOfWeeks that 
represents how long we're trying to simulate. 
Print out "There will be x Cherokee Hares after y weeks" but 
replace x with the number of hares and y with the number of weeks.

Step 1:  create variables for startingPopulation - set to 0, birthRate - set to 5%, 
numberOfWeeks - set to 6.
Step 2:  determine number of new Hares in week 1
Step 3:  determine total number of Hares after week 1
Step 4:  loop through each week to determine number of Hares after 6 weeks*/

let startingPopulation = 100;
let birthrate = .05;
let numberOfWeeks = 6;
let totalPop = startingPopulation

for (i = 0; i < numberOfWeeks; i++) {
    //newHares = startingPopulation * birthrate;
    totalPop = totalPop + (totalPop * birthrate);
}


totalPop = Math.floor(totalPop)

console.log('There will be ' + totalPop + ' after ' + numberOfWeeks + ' weeks.')

/*  CHANGE MACHINE 

PROBLEM:  Imagine we have a very versatile change machine. 
Create a variable called amount stores a quantity of dollars, 
and write some code that produces an array that indicates the number of 1, 5, 10, 
and 20 bills that the change machine should return. You want the change machine to 
return the smallest number of bills possible.

After your code runs you should have a new array of the format 
[twenties, tens, fives, ones]. For example, if amount = 47, you should print an array 
after your code runs that looks like [2, 0, 1, 2] 
(two twenties, 0 tens, 1 five, 2 ones).

Step 1:  Create variable Amount 
Step 2: create change array
Step 3:  use modulus to create change amounts for each dollar amount

*/

let amount = 74;
let change = [0, 0, 0, 0]; //array equals 20s, 10s, 5s, 1s

change[0] = Math.floor(amount/20); //number of full twenties able to pull
amount = amount % 20;//bills left to make change

change[1] = Math.floor(amount/10);
amount = amount % 10;

change[2] = Math.floor(amount/5);
amount = amount % 5;

change[3] = Math.floor(amount/1);
amount = amount % 1;

console.log(change);

/* Finding Palindromes

PROBLEM:  Create a variable called word that stores a word we want to 
test as a palindrome. Write some code that prints out "true" if word is a palindrome, 
or "false" if its not.

Step 1:  create word variable
Step 2:  create a loop to iterate over word
Step 3:  condition1: compare indexes(first/last) (first +1, last -1) etc, print true if they match
Step 6:  
 Determine if first and last letters are the same, if not print false


*/
let string = 'abbar';
let palindrome = true;

for (i = 0; i < string.length; i++) {

//if the first and last index don't match, palindrome is false    
    if  (string[i] !== string[string.length - i -1]) {
      palindrome = false;
    }
};
    console.log(palindrome);
    










