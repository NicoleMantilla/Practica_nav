//Guardar todas las variables. 
const amountSaving = document.querySelector('#amountSaving')
const totalIncomes = document.querySelector('#totalIncomes')
const totalExpenses = document.querySelector('#totalExpenses')
const addTrans = document.querySelector('#addTrans')
const hisDisplay = document.querySelector('#hisList')


//capturar en un evento el formulario 

addTrans.addEventListener('submit', addTransaction)

function addTransaction(event){
    event.preventDefault()

   const subjectInput = document.getElementById('subjectInput').value
   const amountInput = document.getElementById('amountInput').value


    const incomes = {
        subject: subjectInput.value,
        amount: +amountInput.value,
        id: Math.floor(Math.random()* 100),
    }

}

