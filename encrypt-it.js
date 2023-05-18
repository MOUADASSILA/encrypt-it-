"use strict";

window.addEventListener("load", init);

function init() {
  console.log("Window loaded!");
  document.getElementById("encrypt-it").addEventListener("click", handleClick);
}


function handleFontSizeChange() {
  
  const selectedFontSize = document.querySelector('input[name="text-size"]:checked').value;
  
  const outputElement = document.getElementById('result');
  
  outputElement.style.fontSize = selectedFontSize;
}

const radioButtons = document.querySelectorAll('input[name="text-size"]');
radioButtons.forEach(radioButton => {
  radioButton.addEventListener('change', handleFontSizeChange);
});



const allCapsCheckbox = document.getElementById('all-caps');
allCapsCheckbox.addEventListener('change', handleAllCaps);
function handleAllCaps() {
  const allCapsCheckbox = document.getElementById('all-caps');
  
  const outputElement = document.getElementById('result');

  if (allCapsCheckbox.checked) {
    outputElement.textContent = outputElement.textContent.toUpperCase();
  } else {
   outputElement.textContent = outputElement.textContent.toLowerCase();
  }
}

function handleClick() {
  console.log("Button clicked");
  var unencrypted_text = document.getElementById("input-text").value;
  var encrypted_text = shiftCipher(unencrypted_text);
  var result_field = document.getElementById("result");
  result_field.innerHTML = encrypted_text;
}
document.getElementById("reset").addEventListener("click", handleReset)
function handleReset() {
  console.log("Reset clicked");
  document.getElementById("input-text").value = "";
  document.getElementById("result").innerHTML = "";
}

function shiftCipher(text) {
  text = text.toLowerCase();
  let result = "";
 for (let i = 0; i < text.length; i++) {
    if (text[i] < "a" || text[i] > "z") {
      result += text[i];
    } else if (text[i] == "z") {
      result += "a";
    } else {
      let letter = text.charCodeAt(i);
      let resultLetter = String.fromCharCode(letter + 1);
      result += resultLetter;
    }
  }
  return result;
}



