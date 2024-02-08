const perguntas = [
    {
      pergunta: "Qual é a sintaxe correta para declarar uma variável em JavaScript?",
      respostas: [
        "var x = 10;",
        "let x = 10;",
        "const x = 10;",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o operador utilizado para atribuição de valor em JavaScript?",
      respostas: [
        "=",
        "==",
        ":=",
      ],
      correta: 0
    },
    {
      pergunta: "Como você escreve um comentário de uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "<!-- Este é um comentário -->",
        "/* Este é um comentário */",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o método usado para imprimir uma mensagem no console em JavaScript?",
      respostas: [
        "log()",
        "print()",
        "console.log()",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Comparação de valores",
        "Comparação de tipos de dados",
        "Concatenação de strings",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a estrutura de controle usada para tomar decisões em JavaScript?",
      respostas: [
        "for loop",
        "if-else",
        "switch case",
      ],
      correta: 1
    },
    {
      pergunta: "O que o método 'parseInt()' faz em JavaScript?",
      respostas: [
        "Converte uma string para um número inteiro",
        "Arredonda um número para o inteiro mais próximo",
        "Remove os espaços em branco de uma string",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a forma correta de escrever um loop 'for' em JavaScript?",
      respostas: [
        "for (let i = 0; i < 5; i++) {}",
        "for (i = 0; i < 5; i++) {}",
        "for (i = 0; i <= 5; i++) {}",
      ],
      correta: 0
    },
    {
      pergunta: "Como você acessa o último elemento de um array chamado 'arr' em JavaScript?",
      respostas: [
        "arr[arr.length - 1]",
        "arr.last()",
        "arr.end()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o resultado da expressão '10 + '5' em JavaScript?",
      respostas: [
        "105",
        "15",
        "Erro",
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