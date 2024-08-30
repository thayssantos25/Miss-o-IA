const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: " Qual é a principal causa das mudanças climáticas?",
        alternativas: [
            {
                texto: "Emissão de gases de efeito estufa",
                afirmacao: "O meio ambiente enfrenta desafios significativos, como mudanças climáticas e poluição. A principal causa das mudanças climáticas é a emissão de gases de efeito estufa, enquanto o uso excessivo de plásticos polui os oceanos. Soluções incluem práticas sustentáveis, como reduzir o consumo de água e adotar energias renováveis. "
            },
            {
                texto: " Aumento da biodiversidade",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Qual é uma das principais fontes de poluição dos oceanos?",
        alternativas: [
            {
                texto: "Plásticos descartáveis",
                afirmacao: ""
            },
            {
                texto: "Ventos fortes",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Qual é uma prática recomendada para a conservação da água?",
        alternativas: [
            {
                texto: "Reduzir o tempo no banho",
                afirmacao: ""
            },
            {
                texto: "Usar água potável para regar plantas",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Qual é o impacto do desmatamento nas áreas tropicais?",
        alternativas: [
            {
                texto: "Perda de habitat para muitas espécies",
                afirmacao: ""
            },
            {
                texto: "Aumento da fertilidade do solo",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Qual é uma alternativa sustentável ao uso de combustíveis fósseis?",
        alternativas: [
            {
                texto: "Energias renováveis (como solar e eólica)",
                afirmacao: ""
            },
            {
                texto: "Aumento do consumo de carvão",
                afirmacao: " "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em resumo...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
