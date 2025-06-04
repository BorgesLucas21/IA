const { createElement } = require("react");

const caixaPrincipal = document.querySelector(".caixa-pricipal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
        enunciado: "pergunta1",
        alternativa:
            [
                {
                    texto: "alternativa1",
                    afirmacao: "afirmacao2"
                },
                {
                    texto: "alternativa2",
                    afirmacao: "afirmacao2"
                },

            ]
    },
    {
        enunciado: "pergunta2",
        alternativa:
            [
                {
                    texto: "alternativa1",
                    afirmacao: "afirmacao2"
                },
                {
                    texto: "alternativa2",
                    afirmacao: "afirmacao2"
                },

            ]

    }
]

function mostrarPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
let atual = 0;
let perguntaAtual;
function mostrarPergunta() {
    perguntaAtual = perguntas[atual];
    caixaAlternativas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = createElement("button")
        botaoAlternativa.textContent = alternativa.texto;
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}
mostrarPergunta();