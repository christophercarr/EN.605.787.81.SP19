// NOTE! The steps in this file are basically identical to the ones you
// performed in the SpeakGoodBye.js file.

// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
// See Lecture 52, part 2
(function (window) { // Open the IIFE

// Use the function constructor so that we have a better "class" to use.
function SpeakHello() {
  // Empty, For now...
}

// STEP 3: Create an object, called 'helloSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1

// Using an explicit "class" instead of the literal object creation.
var helloSpeaker = new SpeakHello();

// DO NOT attach the speakWord variable to the 'helloSpeaker' object.
var speakWord = "Hello";

// STEP 4: Rewrite the 'speak' function such that it is attached to the
// helloSpeaker object instead of being a standalone function.
// See Lecture 52, part 2

// Use the prototype construct so that any/all created objects have the same
// function declaration in the "class/function" level, instead of in the
// individual instance memory space.
SpeakHello.prototype.speak = function(name) {
  console.log(speakWord + " " + name);
};

// STEP 5: Expose the 'helloSpeaker' object to the global scope. Name it
// 'helloSpeaker' on the global scope as well.
// See Lecture 52, part 2
// (Note, Step 6 will be done in the SpeakGoodBye.js file.)
window.helloSpeaker = helloSpeaker;

})(window); // Close & Execute The IIFE
