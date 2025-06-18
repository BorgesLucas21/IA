const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
        enunciado: "Qual equipe você acha que terá o melhor desempenho nesta temporada ?",
        alternativas: [
            {
                texto: "Red Bull",
                afirmacao: "A Red Bull tem o segundo melhor carro,"
               
            },
            {
                texto: "Ferrari",
                afirmacao: "A Ferrari está a baixo da Red Bull,"
            },
            {
                texto: "Mclaren",
                afirmacao: "A Mclaren tem o carro mais rápido do grid,"
            },
        ]
    },
    {
        enunciado: "Qual destes pilotos conquistou o maior número de campeonatos mundiais na F1 (até o momento) ?",
        alternativas: [
            {
                texto: "Ayrton Senna",
                afirmacao: "Ele possui 3 títulos mundiais,"
            },
            {
                texto: "Michael Schumacher",
                afirmacao: "Ele possui 7 títulos Mundiais junto de Lewis Hamilton,"
            },
            {
                texto: "Alain Prost",
                afirmacao: "Ele possui 4 títulos Mundias,"
            },
            
        ]
    },
    {
        enunciado: "O que significa a sigla "DRS" na Fórmula 1",
        alternativas: [
            {
                texto: "Sistema de Redução de Arrasto",
                afirmacao: "Sitema de Redução de Arrasto está correta"
            },
            {
                texto: "Dispositivo de Resposta Rápida",
                afirmacao: "Dispositivo de Resposta Rápida está errada"
            },
            {
                texto: "Diferencial de Rotação Suave",
                afirmacao: "Diferencial de Rotação Suave está errado"
            },
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if (atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", ()=>respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
     atual++;
     mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Conclusão...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}
mostraPergunta();