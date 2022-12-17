var intialPrice = document.querySelector("#intialPrice");
var stockNumber = document.querySelector("#stock-number");
var currentPrice = document.querySelector("#current-price");
var submitButton = document.querySelector("#submit-btn");
var outputPopupBox = document.querySelector(".output-container")
var output = document.querySelector("#output");
outputPopupBox.style.display = "none";
output.style.display = "none";
submitButton.addEventListener("click", getResult);
function getResult() {
    var intial = (intialPrice.value);
    var quantity = (stockNumber.value);
    var currentAmount = (currentPrice.value);
    if (currentAmount > intial) {
        var profit = (currentAmount - intial) * quantity;
        var profitPercentage = (profit / intial) * 100;
        var message = `You have a 📈 profit of ${profitPercentage}% and that is ${profit}. 🤑`;
        showOutput(message, "Profit");
    }
    else if (currentAmount < intial) {
        var loss = (intial - currentAmount) * quantity;
        var lossPercentage = (loss / intial) * 100;
        var message = `You have a 📉 loss of ${lossPercentage}% and that is ${loss} 🙁`;
        showOutput(message, "Loss");

    }
    else {
        showOutput(`Neither profit nor loss`, "neutral");
    }
}
function showOutput(message, status) {

    switch (status) {
        case "Profit":
            outputPopupBox.style.display = "block"
            output.style.display = "block";
            outputPopupBox.style.background = "rgba(6, 214, 86, 0.979)"
            output.innerText = message;
            break;
        case "Loss":
            output.innerText = message;
            outputPopupBox.style.display = "block"
            output.style.display = "block";
            outputPopupBox.style.background = "rgba(255, 15, 15, 0.979)"
           
            break;

        case "neutral":
            output.innerText = message;
            outputPopupBox.style.display = "block"
            output.style.display = "block";
            outputPopupBox.style.background = "rgba(0, 0, 0, 0.979)"
            
    }
}

