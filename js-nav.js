// capturamos el evento en el listener y guardamos el valor en localStorage

let inputList =[]
const formTrans = document.querySelector('#addTrans')

formTrans.addEventListener('submit',(event)=> {
    event.preventDefault()

    const typeInput = document.querySelector('#typeInput')
    const amountInput = document.querySelector('#amountInput')

    let listElements = {
        subject: typeInput.value,
        amount: +amountInput.value,
        id: Math.floor(Math.random()* 1000),
    }
        typeInput.value = "";
        amountInput.value = "";

        inputList.push(listElements);
        drawHistory(listElements);

console.log(listElements)


})



//creo un article
const historyList = document.querySelector('#hisList')
function drawHistory(listElements){
        const historyElement = document.createElement("article");

        historyElement.setAttribute('id', listElements.id)

        let transElement = `
        <p> Subject: ${listElements.subject}</p>
        <p> Amount: ${listElements.amount}</p> 
        <button class='delete-button' onclick = 'deletetransaction(${listElements.id})'>x</button> 
        `;

        historyElement.innerHTML = transElement;

        historyList.appendChild(historyElement);
    
}
//hago todas las operaciones 
const quantity = inputList.map((listElements) => listElements.amount);
console.log(quantity)

const filterIncomes = quantity.filter((item) => item > 0)
    console.log(filterIncomes) 
    
const filterExpenses = quantity.filter((item) => item < 0)
console.log(filterExpenses)

const totalIncomes = filterIncomes.reduce(function(a, b) {
    return a + b;
  }, 0);
  console.log(totalIncomes);

const totalExpenses = filterExpenses.reduce(function(a, b) {
    return a + b;
  }, 0);
  console.log(totalExpenses);

function savings(totalIncomes, totalExpenses) {
 return totalIncomes - totalExpenses;
}

//Guardar todas las variables. 
const amountSaving = document.querySelector('#amountSaving')
const incomes = document.querySelector('#incomes')
const expenses = document.querySelector('#expenses')

//dibujar los ahorros 
const totalSavings = document.querySelector('#totalSaving')



  