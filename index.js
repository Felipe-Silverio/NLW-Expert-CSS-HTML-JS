const perguntas = [
  {
    pergunta: "Quem foi o artilheiro do Campeonato Brasileiro de 1994?",
    respostas: [
      "Romário",
      "Túlio Maravilha",
      "Edmundo",
    ],
    correta: 0
  },
  {
    pergunta: "Qual clube foi campeão da Copa do Brasil de 1992?",
    respostas: [
      "Cruzeiro",
      "Flamengo",
      "Internacional",
    ],
    correta: 0
  },
  {
    pergunta: "Quem foi o técnico da Seleção Brasileira na conquista da Copa do Mundo de 1994?",
    respostas: [
      "Carlos Alberto Parreira",
      "Luiz Felipe Scolari",
      "Vanderlei Luxemburgo",
    ],
    correta: 0
  },
  {
    pergunta: "Qual jogador brasileiro foi eleito o melhor do mundo em 1997?",
    respostas: [
      "Ronaldo",
      "Romário",
      "Rivaldo",
    ],
    correta: 2
  },
  {
    pergunta: "Em que ano o São Paulo conquistou a sua primeira Copa Libertadores?",
    respostas: [
      "1992",
      "1993",
      "1994",
    ],
    correta: 1
  },
  {
    pergunta: "Qual clube venceu a primeira edição da Copa do Brasil em 1989?",
    respostas: [
      "Grêmio",
      "Atlético Mineiro",
      "Vasco da Gama",
    ],
    correta: 1
  },
  {
    pergunta: "Quem foi o campeão brasileiro de 1996?",
    respostas: [
      "Grêmio",
      "Cruzeiro",
      "Palmeiras",
    ],
    correta: 2
  },
  {
    pergunta: "Qual jogador marcou o gol do título da Copa do Mundo de 1994 para o Brasil?",
    respostas: [
      "Bebeto",
      "Romário",
      "Ronaldo",
    ],
    correta: 1
  },
  {
    pergunta: "Qual clube conquistou a Copa Libertadores de 1998?",
    respostas: [
      "River Plate",
      "Vasco da Gama",
      "Palmeiras",
    ],
    correta: 2
  },
  {
    pergunta: "Qual era o nome do estádio onde o Brasil conquistou a Copa do Mundo de 1994?",
    respostas: [
      "Rose Bowl",
      "Giants Stadium",
      "Estádio do Morumbi",
    ],
    correta: 0
  }
];

  
  //Pegar o Template
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  //Registro das respostas corretas
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //Laço de Repetição
  for (const item of perguntas) {
  
    //Clona cada item
    const quizItem= template.content.cloneNode(true)
  
    //Modifica o h3
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      //Clona o item
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
  
      //Muda o conteúdo do span
      dt.querySelector('span').textContent = resposta
  
      //
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
  
      //Pega o Indice
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
  
      //Reconhe um evento e o indice q esta sendo clicado
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        
        //Reconhece os acertos e nao adiciona no contador se a resposta estiver errada
        corretas.delete(item)
        if (estaCorreta) {
          corretas.add(item)
        }
        
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
      }
  
  
  
  
  
  
      //Coloca na Tela
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    //Deleta o "Resposta A" que foi usado para copiar
    quizItem.querySelector('dl dt').remove()
  
    //Coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }