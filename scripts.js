//seleciona os elementos do formulário 
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const expense = document.getElementById("expense")
const category = document.getElementById("category")

//captura o evento de input para formatar o valor
amount.oninput = () => {
  //obtém o valor atual do input e remove os carecteres não numéricos
  let value = amount.value.replace(/\D/g , "")

  //transforma o valor em centavos
  value = Number(value) / 100

  //atualiza o valor do input
  amount.value = formatCurrencyBRL(value)
}

function formatCurrencyBRL (value){
  //formata o valor no padrão BRL
  value = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })

  //retorna o valor formatado
  return value
}

//captura o evento de submit do formulário para obter os valores
form.onsubmit = (event) => {

  //previne o comportamento padrão de recarregar a página
  event.preventDefault()

  //cria um objeto com os detalhes da nova despesa
  const newExpense = {
    id: new Date().getTime(),
    expense: expense.value,
    category_id: category.value,
    category_name: category.options[category.selectedIndex].text,
    amount: amount.value,
    created_at: new Date(),
  }
}