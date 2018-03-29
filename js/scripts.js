// Business Logic
function encode(array) {
  // Index is the squareroot of the array length, rounded down
  var index = Math.floor(Math.sqrt(array.length))
  var encodedString = "";
  // Loop shifts nested loop one character over until it hits the index to prevent redundant characters
  for (var x = 0; x < index; x++) {
    // Updates encodedString with each letter based on the index
    var i = x;
    for( i ; i < array.length; i+= index) {
    encodedString += array[i]
    }
  }
  // Return array of encodedString broken into 5 character increments
  var encodedStringArray = encodedString.match(/.{1,5}/g);
  return encodedString;
};

// User Logic
$(document).ready(function() {
  $("#user-input-form").submit(function(event) {
    event.preventDefault();
    // Grab input from user form, trim whitespace, lowercase
    var userInput = $("#user-input").val().trim().toLowerCase();
    // Capture string as array only matching a-z characters using regex
    var lettersArray = userInput.match(/[a-z]/g);


    $("#output").empty().text(encode(lettersArray));
  });
});
