//login button event handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
  const loginArea = document.getElementById("login-area");
  loginArea.style.display = "none";
  const transactionArea = document.getElementById("transaction-area");
  transactionArea.style.display = "block";
});

//deposite button event handler
const depositeBtn = document.getElementById("deposit-btn");
depositeBtn.addEventListener("click", function () {
  const depositNumber = getInputNumber("deposit-amount");

  updateSpanText("currentDeposit", depositNumber);

  updateSpanText("currentBallance", depositNumber);

  document.getElementById("deposit-amount").value = "";
});

// Widthdraw button event handler
const widthdrawBtn = document.getElementById("widthdraw-btn");
widthdrawBtn.addEventListener("click", function() {
  const widthdrawNumber = getInputNumber("widthdraw-amount");

  updateSpanText("currentWidthdraw", widthdrawNumber);
  updateSpanText("currentBallance", -1 * widthdrawNumber);

  document.getElementById("widthdraw-amount").value = " ";
});

//deposit/widthdraw btn function
function updateSpanText(id, addedNumber) {
  const currentBallance = document.getElementById(id).innerText;
  const currentNumber = parseFloat(currentBallance);
  const totalBallance = addedNumber + currentNumber;
  document.getElementById(id).innerText = totalBallance;

};
//get input
function getInputNumber(id) {
  const amount = document.getElementById(id).value;
  const amountNumber = parseFloat(amount);
  return amountNumber;
}