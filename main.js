var elForm = document.querySelector(".js-form");
var elResult = document.querySelector(".js-result");
var elInput = document.querySelector(".js-input");

elForm.addEventListener("submit", function (eve) {
  eve.preventDefault();
  var inputValue = Number(elInput.value);
  if (inputValue % 3 == 0 && inputValue % 5 == 0) {
    elResult.textContent = "FizzBuzz";
  } else if (inputValue % 3 == 0) {
    elOutput.textContent = "Fizz";
  } else if (inputValue % 5 == 0) {
    elResult.textContent = "Buzz";
  } else {
    elResult.textContent = `devisible by 3 and 5 => ${inputValue}`;
  }
  elInput.value = "";
});
