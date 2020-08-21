import React from "react";

class TelaJogo extends React.Components {
  render() {
    return (
      <div>
        <img src="" alt="vazio" data-testid="header-profile-picture" />
        <h1 data-testid="header-player-name">Paulinho James</h1>
        <h2 data-testid="header-score" />
      </div>
    );
  }
}

/*

1 header deve conter as informações da pessoa jogadora

  A imagem do perfil vinda do Gravatar em um elemento que deve possuir o atributo 
  data-testid com o valor header-profile-picture
  
  O nome da pessoa em um elemento que deve possuir o atributo data-testid com o 
  valor header-player-name
  
  O placar zerado em um elemento que deve possuir o atributo data-testid com o 
  valor header-score

2 A página deve conter as informações relacionadas à pergunta

  A pergunta e suas alternativas de resposta devem ser recebidas da API do Trivia
  
  A categoria da pergunta (campo category) deve ser exibida em um elemento com o 
  atributo data-testid com o valor question-category para a pessoa que está jogando
  
  O texto da pergunta (campo question) deve ser exibido em um elemento com o 
  atributo data-testid com o valor question-text para a pessoa que está jogando
  
  O texto com as alternativas devem ser exibidos seguindo as regras abaixo:
  
    O elemento com a alternativa correta deve possuir o atributo data-testid 
    com o valor correct-answer
  
    Os elementos com as alternativas incorretas devem possuir o atributo 
    data-testid com o valor wrong-answer-${index}, com ${index} iniciando com o 
    valor 0
  
    As alternativas devem ser exibidas em ordem aleatória
  
    Dica: utilize botões (<button/>) para as alternativas
  
3 Só deve ser possível escolher uma resposta correta por pergunta

4 Ao clicar em uma resposta, a resposta correta deve ficar verde e as incorretas,
 vermelhas

  Utilize a propriedade css border com o valor 3px solid rgb(6, 240, 15) para a 
  alternativa correta.

  Utilize a propriedade css border com o valor 3px solid rgb(255, 0, 0) para as 
  alternativas incorretas.

5 A pessoa que joga tem 30 segundos para responder cada pergunta

  Caso a pergunta não seja respondida a tempo, a resposta é considerada como 
  errada

  Respostas incorretas não somam pontos ao placar

  Um temporizador deve aparecer na tela da pessoa, começando de 30 segundos e 
  indo de forma decrescente até zero

  Após o tempo se esgotar, todos os botões das alternativas devem ser desabilitados

6 Ao clicar na resposta correta, pontos devem ser somados no placar da 
pessoa que está jogando

  Você deve salvar a pontuação atual no localStorage

  Leia a seção "Implementações técnicas" para mais detalhes

  Respostas erradas não devem somar ao placar

  A fórmula para cálculo dos pontos por pergunta é: 10 + (timer * dificuldade),
  onde timer é o tempo restante no contador de tempo e dificuldade é hard: 3, 
  medium: 2, easy: 1, dependendo da pergunta. Exemplo: Se no momento da 
  resposta correta o timer estiver contando 17 segundos, e a 
  dificuldade da pergunta é 2 (média), a pontuação deve ser: 10 + (17 * 2) = 44;

7 Após a resposta ser dada, o botão "Próxima" deve aparecer

  O botão "Próxima" deve possuir o atributo data-testid com o valor btn-next

  Ao clicar nesse botão, a próxima pergunta deve aparecer na tela

8 A pessoa que joga deve responder 5 perguntas no total

  A cada nova pergunta o temporizador deve ser reiniciado para 30 segundos

  Após a quinta pergunta, o botão "Próxima" deve redirecionar a pessoa para a tela
  de Feedback

  Para perguntas com type:"boolean", mostrar somente 2 campos (um para cada 
  resposta possível)

  Para perguntas com type:"multiple", mostrar a quantidade necessária de campos 
  (um para cada resposta possível)
*/
