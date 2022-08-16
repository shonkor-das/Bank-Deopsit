
document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-amount');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    const withdrawTotalAmount = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalAmount.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalAmount.innerText = currentWithdrawTotal;
    
    const balanceTotalAmount = document.getElementById('balance-total');
    const previousBalanveTotalString = balanceTotalAmount.innerText;
    const previousBalanceTotal = parseFloat(previousBalanveTotalString);

    // calculate current total balance 
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalAmount.innerText = newBalanceTotal;

     // set the balance total 
    withdrawField.value = '';
})
