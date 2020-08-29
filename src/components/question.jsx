import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { pontos, botaoOn, botaoOff } from '../actions/userAction';
import { shuffle, timer, showProximoOn, showProximoOff, resetTimer } from '../actions/questionAction';

/* function embaralhar(arr = [], vezes) {
  const num = arr.length;
  for (let i = 0; i < vezes; i += 1) {
    const pos1 = Math.floor(Math.random(42) * num);
    const pos2 = Math.floor(Math.random(42) * num);
    const temp1 = arr[pos1];
    const temp2 = arr[pos2];
    arr.splice(pos1, 1, temp2);
    arr.splice(pos2, 1, temp1);
  }
  return arr;
} */
let getTimer;

function acertos(func, tempo, diff, act) {
  func(tempo, diff);
  const t = document.getElementsByClassName('space-me');
  for (let index = 0; index < t.length; index++) {
    t[index].disabled = true;
    t[index].dataset['testid'] === 'correct-answer' ? t[index].classList.toggle('correct') : t[index].classList.toggle('wrong');
  }
  act();
  clearInterval(getTimer);
}

function errors(act) {
  const t = document.getElementsByClassName('space-me');
  for (let index = 0; index < t.length; index++) {
    t[index].disabled = true;
    t[index].dataset['testid'] === 'correct-answer' ? t[index].classList.toggle('correct') : t[index].classList.toggle('wrong');
  }
  act();
  clearInterval(getTimer);
}

function Multiplas(props) {
  /* const correta = (
    <button
      data-testid="correct-answer"
      className="space-me"
      onClick={() => acertos(props.calcPoints, 5, props.quest.difficulty, props.act)}
      disabled={props.off}
    >
      {props.quest.correct_answer}
    </button>
  );
  const errada = props.quest.incorrect_answers.map((res, index) => (
    <button className="space-me" key={res} disabled={props.off} data-testid={`wrong-answer-${index}`} onClick={() => errors(props.act)}>
      {res}
    </button>
  )); */
  // props.shuffleFunc([correta, ...errada], 10, props.quest.type)
  const final = props.shuffle;
  return (
    <div>
      <h2 data-testid="question-category">{props.quest.category}</h2>
      <h3 data-testid="question-text">{`${props.quest.question}`}</h3>
      <div>{final.map((questao) => questao)}</div>
      <h5>{props.quest.type}</h5>
      <h6>{props.quest.difficulty}</h6>
    </div>
  );
}
/* Multiplas.propTypes = {
  calcPoints: propTypes.func.isRequired,
  act: propTypes.func.isRequired,
  off: propTypes.bool.isRequired,
  quest: propTypes.shape({
    difficulty: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    incorrect_answers: propTypes.string.isRequired,
    correct_answer: propTypes.string.isRequired,
    question: propTypes.string.isRequired,
    category: propTypes.string.isRequired,
  }).isRequired,
}; */

class question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mixed: [],
    };
  }
  componentDidMount() {
    const correta = (
      <button data-testid="correct-answer" className="space-me" onClick={() => acertos(this.props.calcPoints, this.props.time, this.props.question.difficulty, this.props.showProximoOn)}>
        {this.props.question.correct_answer}
      </button>
    );
    const errada = this.props.question.incorrect_answers.map((res, index) => (
      <button className="space-me" key={res} data-testid={`wrong-answer-${index}`} onClick={() => errors(this.props.showProximoOn)}>
        {res}
      </button>
    ));
    this.props.shuffleFunc([correta, ...errada], 10, this.props.question);
    this.props.resetTimer();
    this.props.showProximoOff();
    {
      getTimer = setInterval(() => this.props.timer(), 1000);
    }
  }
  render() {
    return <Multiplas quest={this.props.question} calcPoints={this.props.calcPoints} tempo={5} off={this.props.isDisable} act={this.props.botaoDis} shuffle={this.props.shuffle} />;
  }
}
const mapStateToProps = (state) => ({
  isDisable: state.reducerJogador.botaoDisable,
  shuffle: state.reducerQuestion.shuffle,
  time: state.reducerQuestion.timer,
});

const mapDispatch = (dispatch) => ({
  calcPoints: (tempo, dificuldade) => dispatch(pontos(tempo, dificuldade)),
  botaoOn: () => dispatch(botaoOn()),
  botaoOff: () => dispatch(botaoOff()),
  shuffleFunc: (options) => dispatch(shuffle(options)),
  timer: () => dispatch(timer()),
  showProximoOn: () => dispatch(showProximoOn()),
  showProximoOff: () => dispatch(showProximoOff()),
  resetTimer: () => dispatch(resetTimer()),
});
export default connect(mapStateToProps, mapDispatch)(question);

/* question.propTypes = {
  isDisable: propTypes.bool.isRequired,
  calcPoints: propTypes.func.isRequired,
  botaoDis: propTypes.func,
  // incorrect_answers: propTypes.arrayOf(propTypes.string).isRequired,
  question: propTypes.string,
}; */
