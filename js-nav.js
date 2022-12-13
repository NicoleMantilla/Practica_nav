// capturamos el evento en el listener y guardamos el valor en localStorage

let inputList =[]
const formTrans = document.querySelector('#addTrans')

formTrans.addEventListener('submit',(event)=> {
    event.preventDefault()

    const typeInput = document.querySelector('#typeInput')
    const amountInput = document.querySelector('#amountInput')

    let listElements = {
        subject: typeInput.value,
        amount: amountInput.value,
        id: Math.floor(Math.random()* 1000),
    }
    typeInput.value = "";
    amountInput.value = "";

    inputList.push(listElements);
    drawHistory(listElements);
    calculated();

})



//creo un article
const historyList = document.querySelector('#hisList')
function drawHistory(listElements){
        const historyElement = document.createElement("article");

        historyElement.setAttribute('id', listElements.id)

        let transElement = `
        <div class= "styleInEx">
            <p>   ${listElements.subject}</p>
            <p>  ${listElements.amount}€</p> 
            <button class='delete-button' onclick = 'deletetransaction(${listElements.id})'>x</button> 
        </div>`;

        historyElement.innerHTML = transElement;

        historyList.appendChild(historyElement);
    
}

//Guardar todas las variables. 
const totalSavings = document.querySelector('#Saving')
const incomes = document.querySelector('#incomes')
const expenses = document.querySelector('#expenses')

function calculated(){

//hago todas las operaciones 
const quantity = inputList.map((listElements) => listElements.amount);
const filterIncomes = quantity.filter((item) => item > 0)    
const filterExpenses = quantity.filter((item) => item < 0)
const totalIncomes = filterIncomes.reduce(function(a, b) {
    return Number(a) + Number(b);
  }, 0);
const totalExpenses = filterExpenses.reduce(function(a, b) {
    return Number(a) + Number(b);
  }, 0);
  console.log(totalExpenses); 
const save = totalIncomes + totalExpenses;
incomes.innerText = `${totalIncomes}€`;
expenses.innerText = `${totalExpenses}€`;
totalSavings.innerText = `${save}€`;
}

function deletetransaction(listElementsId){
    let newinputList = []
    newinputList = inputList.filter(item => item.id !== listElementsId )
    inputList = newinputList
    const listElements = document.getElementById(listElementsId);
    listElements.remove();
    calculated();
}
  