// Business Logic
function encode(array) {
  var arrayLength = array.length;
  var index = Math.ceil(Math.sqrt(arrayLength))
  var encodedString = "";

  for(var i = 0; i < arrayLength; i+= index) {
    encodedString += array[i]
    console.log(encodedString + "first loop");
  }
  for(var i = 1; i < arrayLength; i+= index) {
    encodedString += array[i]
    console.log(encodedString + "second loop");
  }

  return encodedString;
};

// User Logic
$(document).ready(function() {
  $("#user-input-form").submit(function(event) {
    event.preventDefault();
    var userInput = $("#user-input").val().trim().toLowerCase();
    var lettersArray = userInput.match(/[a-z]/g);

    console.log(lettersArray);
    $("#output").empty().text(encode(lettersArray));
  });
});
