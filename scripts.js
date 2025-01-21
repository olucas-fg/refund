//seleciona os elementos do formulário 
const amount = document.getElementById("amount")

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