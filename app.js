const initialPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#current-price");
const checkBtn = document.querySelector("#check-btn");
const output = document.querySelector("#output");

function submitHandler() {
  var ip = Number(initialPrice.value);
  var qty = Number(stocksQuantity.value);
  var curr = Number(currentPrice.value);
  if (!ip || !qty || !curr) {
    output.innerText = "Enter all the inputs";
  } else if (ip < 1 || qty < 1 || curr < 1) {
    output.innerText = "Enter the positive value greater than zero";
  } else {
    calculateProfitAndLoss(ip, qty, curr);
  }
}

function calculateProfitAndLoss(initial, quantity, current) {
  if (initial < current) {
    var profit = ((current - initial) * quantity).toFixed(2);
    var profitPercentage = ((profit / initial) * 100).toFixed(2);

    showOutput(
      `Hey the profit is ${profit} and percent is ${profitPercentage}%`
    );
  } else if (initial > current) {
    var loss = ((initial - current) * quantity).toFixed(2);
    var lossPercentage = ((loss / initial) * 100).toFixed(2);
    showOutput(`Hey the loss is ${loss} and percent is ${lossPercentage}%`);
  } else {
    showOutput("Try Your Luck Next Time!");
  }
}

function showOutput(message) {
  output.innerHTML = message;
}

checkBtn.addEventListener("click", submitHandler);
