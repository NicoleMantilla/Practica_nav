//Guardar todas las variables. 
const amountSaving = document.querySelector('#amountSaving')
const incomes = document.querySelector('#incomes')
const expenses = document.querySelector('#expenses')
const hisList = document.querySelector('#hisList')
const {typeInput, amountInput} = itemSummary

//historial 


//capturar en un evento el formulario 

let listIncomes = {}
const addTrans = document.querySelector('#addTrans')
addTrans.addEventListener('submit', addTransaction)

function addTransaction(event){
    event.preventDefault()

   const subjectInput = document.getElementById('typeInput').value
   const amountInput = document.getElementById('amountInput').value


    const listIncome = {
        subject: subjectInput.value,
        amount: +amountInput.value,
        id: Math.floor(Math.random()* 100),
    }

}



// calcular los datos. 
let itemIncomes
let itemExpenses


function calcExpensesIncomes(amountInput){

    if (amountInput > 0){
        const sumIncomes = itemIncomes + parseInt(amountInput)
        itemIncomes = sumIncomes
  
    } else {
        const sumExpenses = itemExpenses + parseInt(amountInput)
        itemExpenses = sumExpenses

   
    }

}
  const savingMoney =  (itemIncomes - itemExpenses)

  console.log( itemIncomes, itemExpenses)

