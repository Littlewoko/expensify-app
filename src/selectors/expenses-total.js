const getExpensesTotal = (expenses = []) => {
    let total = 0;
    
    // for (let i=0; i<expenses.length; i++) {
    //     total = total + expenses[i].amount
    // }
    if (expenses !== []) {
        const amounts = expenses.map((expense) => expense.amount) 
        total = amounts.reduce((prev, cur) => prev + cur, total)
    }
    
    return total;
}

export default getExpensesTotal;