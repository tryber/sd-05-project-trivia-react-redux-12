import React from 'react';

class Feedback extends React.Component {
  render() {
    return (
      <header data-testid="header-profile-picture">
        {/* A imagem do perfil vinda do Gravatar em um elemento que deve possuir o
        atributo data-testid com o valor header-profile-picture */}
        <h1 data-testid="header-pleayer-name">Nome</h1>
        <p data-testid="header-score">{/* O placar com o valor atual em um elemento
        que deve possuir o atributo data-testid com o valor header-score */}</p>
      </header>
    );
  }
}

export default Feedback;
