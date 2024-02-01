const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const tutorialTitlecase = [
//   "What Does The This Keyword Mean?",
//   "What Is The Constructor OO Pattern?",
//   "Implementing Blockchain Web API",
//   "The Test Driven Development Workflow",
//   "What Is NaN And How Can We Check For It",
//   "What Is The Difference Between StopPropagation And PreventDefault?",
//   "Immutable State And Pure Functions",
//   "What Is The Difference Between == And ===?",
//   "What Is The Difference Between Event Capturing And Bubbling?",
//   "What Is JSONP?"
// ]
// function titleCased() {

//   return tutorialTitlecase
// }
// Ok, so you can satisfy this test by just returning the title cased array laid out in the test, as shown above. I have a feeling that this isn't what we are supposed to do, so I'm going to use .map instead.


// function titleCased() {
//   return tutorials.map(tutorial =>  {
//     let tutorialTitlecased = "";
//     let getCapitalizedfoo = true;

//     for(let capped = 0; capped < tutorials.length; capped++) {
//       if (getCapitalizedfoo && tutorial[capped] !== ` `) {
//         tutorialTitlecased += tutorial[capped].toUpperCase();
//         getCapitalizedfoo = false;
//       } else {
//         tutorialTitlecased += tutorial[capped]

//       }

//       if (tutorial[capped] === "") {
//         getCapitalizedfoo = true;

//         }
//       }
//       return tutorialTitlecased;

//   });

//     } I have to fix this syntax and stuff, a little sloppy

function titleCased() {  //declare the titleCased fucntion
  return tutorials.map(tutorial => { //use the .map method on the 'tutorials' array
    let tutorialTitleCased = ""; //define the tTc variable, this will be the new title cased jawn
    let getCapitalizedFoo = true; //makes this a boolean to decide which letter gets capitalized. set to true to cap each first letter in 'tutorial'

    for (let capped = 0; capped < tutorial.length; capped++) { //start a loop to ITERATE over each letter in a selected tutorial string. 
      if (getCapitalizedFoo && tutorial[capped] !== " ") { //checks if gCF is 'true' and the current character you are looping over isn't an empty space
        tutorialTitleCased += tutorial[capped].toUpperCase(); //caps the letter and adds it to the array
        getCapitalizedFoo = false; // makes itr so that other latters after the first one we capitalized in a word doesnt also get capped if it's not the first letter
      } else {
        tutorialTitleCased += tutorial[capped];// if gCf is 'false' (i.e. doesnt need to be capped) or a blank space
      }

      if (tutorial[capped] === " ") { //checks if current character is a space
        getCapitalizedFoo = true; //if its a space, get capped, foo
      }
    }
    return tutorialTitleCased; // returns the title cased tutorial
  });
}


