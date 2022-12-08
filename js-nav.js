//Guardar todas las variables. 
const amountSaving = document.querySelector('#amountSaving')
const incomes = document.querySelector('#incomes')
const expenses = document.querySelector('#expenses')
const hisList = document.querySelector('#hisList')

// capturamos el evento en el listener y guardamos el valor en localStorage

let inputList =[]
addTrans.addEventListener('submit',(event)=> {
    event.preventDefault()

    const typeInput = document.querySelector('#typeInput')
    const amountInput = document.querySelector('#amountInput')

    const listIncome = {
        subject: typeInput.value,
        amount: amountInput.value,
        id: Math.floor(Math.random()* 100),
    }
    inputList.push(listIncome)

localStorage.setItem('localHistoryTrans', JSON.stringify(inputList));

typeInput.value = "";
amountInput.value = "";
})

const textFromLocalStorage = localStorage.getItem('localHistoryTrans')



/*function calcExpensesIncomes(amountInput){

    if (amountInput > 0){
        const sumIncomes = itemIncomes + parseInt(amountInput)
        itemIncomes = sumIncomes
  
    } /*else {
        const sumExpenses = itemExpenses + parseInt(amountInput)
        itemExpenses = sumExpenses

   
    }

}*/
  