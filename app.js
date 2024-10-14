function criaCartão(categoria, perguta, resposta) { 
    let container = document.getElementById('container')
    let cartão = document.createElement('article')
    cartao.className = 'cartao'

cartao.innerHTML =
<div class="cartao__conteudo">
<h3>$(categoria)</h3>
<div class="cartao__conteudo__pergunta">
   <p>$(pergunta)</p>
</div>
  </div class= "cartão__conteudo__resposta">
        <p>${resposta}</p> 
    </div>
    </div> 


  let respostaEstaVisivel = false

  function viraCartao() {
    respostaEstaVisivel = !respostaEStaVisivel
   cartao.classList.toggle('active', respostaEStaVisivel)
  }
cartao.addEventListener('click', viraCartao)


container.apendChild(cartao)

}