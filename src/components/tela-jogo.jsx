import React from 'react';
import { connect } from 'react-redux';
import Teste from '../APIs/testes-api';
import { requestQuest, nextQuestion, updateNextLoading } from '../actions/questionAction';
import Questions from '../components/question';

class TelaJogo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loading: true, index:0}
  }
  componentDidMount() {
    this.props.getQuestion(this.props.token);
    this.setState({loading: false})
  }
  render() {
    const { index, perguntas, isLoading } = this.props;
    const { results } = perguntas;
    if(this.state.loading || !results) return <h1>Carregando ...</h1>
    if (this.props.nextLoading) {this.props.updateNextLoading()}
    return (
      <div>
        <div>Time: {this.props.timer.toFixed(0)}</div>
        <div>
          <img src={`https://www.gravatar.com/avatar/${this.props.foto}`} alt="vazio" data-testid="header-profile-picture" />
          <h1 data-testid="header-player-name">{this.props.nome}</h1>
          <h2 data-testid="header-score">{this.props.placar}</h2>
        </div>
        <div>
          {this.props.btnProx?<button onClick={this.props.next} data-testid="btn-next">Proxima</button>:null}
           {!this.props.nextLoading?<Questions question={results[index]} />:null}
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  getQuestion: (token) => dispatch(requestQuest(token)),
  next: () => dispatch(nextQuestion()),
  updateNextLoading: () => dispatch(updateNextLoading()),
});

const mapStateToProps = (state) => ({
  foto: state.reducerJogador.gravatar,
  nome: state.reducerJogador.nome,
  placar: state.reducerJogador.placar,
  token: state.reducerJogador.token,
  perguntas: state.reducerQuestion.perguntas,
  index: state.reducerQuestion.index,
  isLoading: state.reducerQuestion.isLoading,
  nextLoading: state.reducerQuestion.nextLoading,
  timer: state.reducerQuestion.timer,
  btnProx: state.reducerQuestion.btnProx,
});

export default connect(mapStateToProps, mapDispatchToProps)(TelaJogo);
