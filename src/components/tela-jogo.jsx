import React from 'react';
import { connect } from 'react-redux';
import Teste from '../APIs/testes-api';

class TelaJogo extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src={`https://www.gravatar.com/avatar/${this.props.foto}`} alt="vazio" data-testid="header-profile-picture" />
          <h1 data-testid="header-player-name">{this.props.nome}</h1>
          <h2 data-testid="header-score">{this.props.placar}</h2>
        </div>
        <div>
          <Teste />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  foto: state.reducerJogador.gravatar,
  nome: state.reducerJogador.nome,
  placar: state.reducerJogador.placar,
});
export default connect(mapStateToProps, null)(TelaJogo);

/* 
A página deve conter as informações relacionadas à pergunta



O texto com as alternativas devem ser exibidos seguindo as regras abaixo:
O elemento com a alternativa correta deve possuir o atributo data-testid com o valor correct-answer
Os elementos com as alternativas incorretas devem possuir o atributo data-testid com o valor wrong-answer-${index}, com ${index} iniciando com o valor 0
As alternativas devem ser exibidas em ordem aleatória
Dica: utilize botões (<button/>) para as alternativas
 */
