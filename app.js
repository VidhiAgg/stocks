var intialPrice = document.querySelector("#intialPrice");
var stockNumber = document.querySelector("#stock-number");
var currentPrice = document.querySelector("#current-price");
var submitButton = document.querySelector("#submit-btn");
var output = document.querySelector("#output");
output.style.display = "none";
submitButton.addEventListener("click", getResult);
function getResult()
{
    var     intial =(intialPrice.value);
    var quantity = (stockNumber.value);
    var currentAmount = (currentPrice.value);
    if( currentAmount > intial )
    {
        var profit =(currentAmount-intial)*quantity;
        var profitPercentage = (profit/intial)*100;
        var message = `You have a profit of ${profitPercentage}% and that is  ${profit}`;
        showOutput(message,"Profit");
    }
    else if( currentAmount < intial )
    {
        var loss =(intial-currentAmount)*quantity;
        var lossPercentage = (loss/intial)*100;
        var message = `You have a loss of ${lossPercentage}% and that is  ${loss}`;
        showOutput(message,"Loss");
        
    }
        else{
        showOutput(`Neither profit nor loss`, "neutral");
    }
}
function showOutput(message,status )
{

switch(status)
{
    case "Profit" : 
    output.style.display="block";
    //output.style.color ="green";
     output.innerText = message;
        break;
     case "Loss" : 
    output.style.display="block";
    //output.style.color ="red";
     output.innerText = message;
     break;

     case "neutral" : 
    output.style.display="block";
     output.innerText = message;
}
}
