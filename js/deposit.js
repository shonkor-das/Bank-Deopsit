
// add event listeneeeeer 
document.getElementById('btn-deposit').addEventListener('click', function(){
    // get the deposit amount from the deposit input field 
    const depositFileld = document.getElementById('deposit-amount');
     // always remember to the use .value to get text from an input field
    const newDepositAmountString = depositFileld.value;
     // clear the deposit field value 
     depositFileld.value = '';
    // convert sting to Number 
    const newDepositAmount = parseFloat(newDepositAmountString);

    const depositTotalAmount = document.getElementById('deposit-total');
    const previousDepositTotalSting = depositTotalAmount.innerText;
    // convert sting to Number 
    const previousDepositTotal = parseFloat(previousDepositTotalSting);
    // add Number to set the total deposit 
    const currentDepositTotal = previousDepositTotal + newDepositAmount;

    depositTotalAmount.innerText = currentDepositTotal;

    // get balance current total 
    const balanceTotalAmount = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalAmount.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // calculate current total balance 
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    // set the balance total 
    balanceTotalAmount.innerText = currentBalanceTotal;
   
    
})