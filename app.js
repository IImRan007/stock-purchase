const initialPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#current-price");
const checkBtn = document.querySelector("#check-btn");
const output = document.querySelector("#output");

function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    var loss = (initial - current) * quantity;
    var lossPercentage = (loss / initial) * 100;

    showOutput(
      `Hey! The loss is ${loss} and the loss percentage is ${lossPercentage}%`
    );
  } else if (current > initial) {
    var profit = (current - initial) * quantity;
    var profitPercentage = (profit / initial) * 100;

    showOutput(
      `Hey! The profit is ${profit} and the profit percentage is ${profitPercentage}%`
    );
  } else {
    showOutput("Please Input Values");
  }
}

function submitHandler() {
  var ip = Number(initialPrice.value);
  var qty = Number(stocksQuantity.value);
  var curr = Number(currentPrice.value);

  calculateProfitAndLoss(ip, qty, curr);
}

function showOutput(message) {
  output.innerText = message;
}

checkBtn.addEventListener("click", submitHandler);
