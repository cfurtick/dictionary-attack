
var wordsList = [];

function init() {
  // Load the words from the dictionary text file to wordsList
  var wordsFile = "https://raw.githubusercontent.com/GirlsFirst/SIP-2017/master/Unit2_Applications/dictionary-attack/dictionary.txt?token=ADcVhZjRMd86ZdhPE2jVvIaJdQdzLA6Yks5YvvVSwA%3D%3D";
  $.get(wordsFile, function(data) {
    document.getElementById("btnSubmit").disabled = true; 
    wordsList = data.split('\n');
    document.getElementById("btnSubmit").disabled = false; 
  });
}

window.onload = init;

/* ADD YOUR CODE BELOW */

function checkPassword() {
  
  var password = document.getElementById("pw").innerHTML;
  
  for (var x = 0, x < wordList.length, x++){
    if password == wordList[x] {
      return document.getElementById("results").innerHTML = "weak password";
    }
    else {
      return document.getElementById("results").innerHTML = "good password";
    }
  }

}
