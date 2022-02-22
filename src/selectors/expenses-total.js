const getExpensesTotal = (expenses = []) => {
    let total = 0;
    
    if (expenses !== []) {
        // Map expenses to an array of amounts
        const amounts = expenses.map((expense) => expense.amount) 

        // Sum array of amounts
        total = amounts.reduce((prev, cur) => prev + cur, total)
    }
    
    return total;
}

export default getExpensesTotal;