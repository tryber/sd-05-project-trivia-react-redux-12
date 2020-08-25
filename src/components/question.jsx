import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { pontos, botao } from '../actions/index';

function embaralhar(arr = [], vezes) {
  const num = arr.length;
  for (let i = 0; i < vezes; i += 1) {
    const pos1 = Math.floor(Math.random(42) * num);
    const pos2 = Math.floor(Math.random(42) * num);
    const temp1 = arr[pos1];
    const temp2 = arr[pos2];
    arr[pos1] = temp2;
    arr[pos2] = temp1;
  }
  console.log(arr);
  return arr;
}

function acertos(func, tempo, diff, act) {
  func(tempo, diff);
  act();
}

function errors() {}

function Multiplas(props) {
  const {
    act,
    category,
    question,
    correct_answer: correctAnswer,
    incorrect_answers: incorrectAnswers,
    type,
    difficulty,
    calcPoints,
  } = props;
  const correta = (
    <button
      data-testid="correct-answer"
      className="space-me"
      onClick={() => acertos(calcPoints, 5, difficulty, act)}
      disabled={props.off}
    >
      {correctAnswer}
    </button>
  );
  const errada = incorrectAnswers.map((res, index) => (
    <button className="space-me" key={res} disabled={props.off} data-testid={`wrong-answer-${index}`} onClick={errors}>
      {res}
    </button>
  ));
  const final = embaralhar([correta, ...errada], 15);
  return (
    <div>
      <h2 data-testid="question-category">{category}</h2>
      <h3 data-testid="question-text">{`${question}`}</h3>
      <div>{final.map((questao) => questao)}</div>
      <h5>{type}</h5>
      <h6>{difficulty}</h6>
    </div>
  );
}
Multiplas.propTypes = {
  calcPoints: propTypes.func.isRequired,
  act: propTypes.func.isRequired,
  off: propTypes.bool.isRequired,
  difficulty: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  incorrect_answers: propTypes.string.isRequired,
  correct_answer: propTypes.string.isRequired,
  question: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
};

function Alternativa(props) {
  console.log(props);
  const {
    category,
    question,
    correct_answer: correctAnswer,
    incorrect_answers: incorrectAnswers,
    type,
    difficulty
  } = props;
  const correta = (
    <button data-testid="correct-answer" disabled={props.off}>
      {correctAnswer}
    </button>
  );
  const errada = incorrectAnswers.map((res, index) => (
    <button disabled={props.off} key={res} data-testid={`wrong-answer-${index}`}>
      {res}
    </button>
  ));
  const final = [correta, ...errada].sort();
  return (
    <div>
      <h1 data-testid="question-category">{category}</h1>
      <h1 data-testid="question-text">{`${question}`}</h1>
      <ul>{final.map((questao) => questao)}</ul>
      <h1>{type}</h1>
      <h1>{difficulty}</h1>
    </div>
  );
}
Alternativa.propTypes = {
  off: propTypes.bool.isRequired,
  difficulty: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  incorrect_answers: propTypes.string.isRequired,
  correct_answer: propTypes.string.isRequired,
  question: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
};

class question extends React.Component {
  render() {
    if (this.props.type === 'multiple') {
      return (
        <Multiplas
          {...this.props}
          calcPoints={this.props.calcPoints}
          tempo={5}
          off={this.props.isDisable}
          act={this.props.botaoDis}
        />
      );
    }
    console.log(this.props);
    if (!this.props.incorrect_answers) return <h1>Carregando ...</h1>;

    return (
      <Alternativa
        act={this.props.botaoDis}
        {...this.props}
        calcPoints={this.props.calcPoints}
        tempo={5}
        off={this.props.isDisable}
      />
    );
  }
}
const mapStateToProps = (state) => ({
  isDisable: state.reducerJogador.botaoDisable,
  isShuffle: state.reducerJogador.isShuffle,
});

const mapDispatch = (dispatch) => ({
  calcPoints: (tempo, dificuldade) => dispatch(pontos(tempo, dificuldade)),
  botaoDis: () => dispatch(botao()),
});
export default connect(mapStateToProps, mapDispatch)(question);

question.propTypes = {
  isDisable: propTypes.bool.isRequired,
  calcPoints: propTypes.func.isRequired,
  botaoDis: propTypes.func.isRequired,
  incorrect_answers: propTypes.arrayOf(propTypes.string).isRequired,
  type: propTypes.string.isRequired,
};
