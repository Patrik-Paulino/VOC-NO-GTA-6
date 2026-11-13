/* 
1) LOGICA DE PROGRAMAÇÃO
- Saber a sequencia que o computador/projeto
quer que voce execute as coisas

2) ALGORITMOS
- Receita de bolo = passo a passo, sequencia 
lógica para o computador executar uma tarefa

ALGORITMO 1 
1) saber quem é a imagem
2) saber que o botão foi clicado
3) trocar a foto e o nome do personagem

ALGORITMO 2



3) VARIAVEIS
4) FUNÇÕES

HTML = document
querySelector = selecionar ALGO no HTML


*/
let nome = document.querySelector(".nome");
let personagem = document.querySelector(".personagem");

function escolherPersonagem(nomePersonagem, imagemPersonagem, cor) {

    nome.innerHTML = nomePersonagem;
    personagem.src = imagemPersonagem;
    nome.style.color = cor;
}