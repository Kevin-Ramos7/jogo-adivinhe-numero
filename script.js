 
 // Seleciona os elementos do HTML
 const entrada = document.getElementById("entrada")
 const botao = document.getElementById("btn-tentar")
 const mensagem = document.getElementById("mensagem")
 const tentativasTexto = document.getElementById("tentativas")
 
// Gerar um número aleatório entre 1 e 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1
let tentativas = 0

// Evento de clique no botão
botao.addEventListener("click", ()=> {
  const chute = Number(entrada.value) // Converte o valor do input para número


  // Validação do valor
  if(chute < 1 || chute > 100 || isNaN(chute)) {
    mensagem.textContent = "❌ Digite um número válido entre 1 e 100."
    return 
  }

  tentativas++
  tentativasTexto.textContent = tentativas

 // Verifica se o chute esta correto alto ou baixo
 if(chute === numeroSecreto) {
  mensagem.textContent = `🎉 Parabéns! Você acertou com ${tentativas} tentativa(s)!`
  entrada.disabled = true
  botao.disabled = true 
 } else if (chute < numeroSecreto) {
    mensagem.textContent = "🔽 Muito baixo! Tente um número maior."
 } else {
    mensagem.textContent = "🔼 Muito alto! Tente um número menor."
 }


 // Limpa o input e foca novamente
 entrada.value = ""
 entrada.focus()
})

