let botoes = document.querySelectorAll('.botao');
let personagens = document.querySelectorAll('.personagem')
botoes.forEach((botao,indice)=>{
    botao.addEventListener("click",()=>{


        let botaoselecionado = document.querySelector('.botao.selecionado');
        botaoselecionado.classList.remove("selecionado")
        botao.classList.add("selecionado")

        let personagem_selecionado = document.querySelector('.personagem.selecionado')
        personagem_selecionado.classList.remove('selecionado')
        personagens[indice].classList.add('selecionado')
    
        
        

    })

})



