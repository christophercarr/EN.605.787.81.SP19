// NOTE! The steps in this file are basically identical to the ones you
// performed in the SpeakHello.js file.

// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
// See Lecture 52, part 2
(function (window) { // Open the IIFE

// Use the function constructor so that we have a better "class" to use.
function SpeakGoodBye() {
  // Empty, For now...
}

// STEP 7: Create an object, called 'byeSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1

// Using an explicit "class" instead of the literal object creation.
var byeSpeaker = new SpeakGoodBye();

// DO NOT attach the speakWord variable to the 'byeSpeaker' object.
var speakWord = "Good Bye";

// STEP 8: Rewrite the 'speak' function such that it is attached to the
// byeSpeaker object instead of being a standalone function.
// See Lecture 52, part 2

// Use the prototype construct so that any/all created objects have the same
// function declaration in the "class/function" level, instead of in the
// individual instance memory space.
SpeakGoodBye.prototype.speak = function(name) {
  console.log(speakWord + " " + name);
};

// STEP 9: Expose the 'byeSpeaker' object to the global scope. Name it
// 'byeSpeaker' on the global scope as well.
// See Lecture 52, part 2

window.byeSpeaker = byeSpeaker;

})(window); // Close & Execute The IIFE
