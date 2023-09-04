const increaseButton = document.querySelector(".counter_button-increase");
const counterValue = document.querySelector(".counter_value");

increaseButton.addEventListener("click", function () {
  // get current value of the counter
  const currentValue = counterValue.textContent;

  // convert value to number type
  const currentValueAsNumber = +currentValue;

  // increament by 1
  const newValue = currentValueAsNumber + 1;

  //set counter element with new value
  counterValue.textContent = newValue;
});
