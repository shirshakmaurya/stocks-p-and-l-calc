const initialPrice = document.querySelector("#initial-price")
const quantityOfStocks = document.querySelector("#quantity-of-stocks")
const currentPrice = document.querySelector("#current-price")

const calculateButton = document.querySelector("#calculate-button")

const output = document.querySelector("#output")

function calculateProfitAndLoss(initial,quantity,current){
    
    if(initial > current){
        var loss = (initial - current) * quantity
        var lossPercentage = (loss/initial) * 100
        var lossPercentage = lossPercentage.toFixed(2)
        output.style.color = 'red'
        showOutput(`The loss is ${loss} and the loss percentage is ${lossPercentage}`)
    }
    else if(current > initial){
        var profit = (current - initial) * quantity
        var profitPercentage = (profit/initial) * 100
        var profitPercentage = profitPercentage.toFixed(2)
        output.style.color = 'green'
        showOutput(`The Profit is ${profit} and the profit percentage is ${profitPercentage}`)      

    }
    else{
        showOutput("No profit No Loss")
    }
}


calculateProfitAndLoss(10,10,10)

function submitHandler(){
    if(initialPrice.value==='' || quantityOfStocks.value==='' || currentPrice.value===''){
        showOutput("Please enter all the fields")
    }
    else{
    var ip = Number(initialPrice.value) 
    var qty = Number(quantityOfStocks.value)
    var curr = Number(currentPrice.value)

    calculateProfitAndLoss(ip,qty,curr)
    }
}

function showOutput(str){
    output.innerHTML=str
}

calculateButton.addEventListener("click", submitHandler)