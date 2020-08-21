import React from 'react';

class Feedback extends React.Component {
  render() {
    return(
      <header data-testid="header-profile-picture"> {/* A imagem do perfil vinda do Gravatar em um elemento que deve possuir o atributo data-testid com o 
      valor header-profile-picture */}
        <h1 data-testid="header-pleayer-name">Nome</h1>
        <p data-testid="header-score">{/* O placar com o valor atual em um elemento 
        que deve possuir o atributo data-testid com o valor header-score */}</p>
      </header>
    )
  }
}

/* 

2 A pessoa deve ver a mensagem de feedback

  A mensagem deve ser "Podia ser melhor..." caso a pessoa acerte menos de 3 
  perguntas

  A mensagem deve ser "Mandou bem!" caso a pessoa acerte 3 perguntas ou mais

  O elemento da mensagem de feedback deve possuir o atributo data-testid com o 
  valor feedback-text

3 A pessoa jogadora deve ver as informações relacionadas aos resultados obtidos

  O placar final deve ser mostrado em um elemento com o atributo data-testid com 
  o valor feedback-total-score

  O número de perguntas que a pessoa acertou deve ser exibido em um elemento com 
  o atributo data-testid com o valor feedback-total-question

4 A pessoa jogadora tem a opção de jogar novamente

  Ao clicar no botão "Jogar novamente", a pessoa deve ser redirecionada para a 
  tela de início

  O botão para jogar novamente deve possuir o atributo data-testid com o valor 
  btn-play-again

5 A pessoa jogadora tem a opção de visualizar a tela de ranking

  Ao clicar no botão "Ver Ranking", a pessoa deve ser redirecionada para a tela 
  de ranking

  O botão para ir para a tela de ranking deve possuir o atributo data-testid com 
  o valor btn-ranking

  A tela de ranking deve possuir um título com o atributo data-testid contendo o 
  valor ranking-title */

export default Feedback;
