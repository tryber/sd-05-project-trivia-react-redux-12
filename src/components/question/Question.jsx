import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { handleClick, stopTimer, startTimer, updateTimer, answerQuestion, setPoint, changeUnmount, timeOverOn, timeOverOff } from '../../redux/actions/index';
import calcPoints from '../../points/points';

const saida = { target: { dataset: { testid: '' } } };
let basicTimer;

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeOver: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    basicTimer = setInterval(this.props.updateTimer, 1000);
    this.props.startTimer();
    this.props.timeOverOff();
  }
  componentWillUnmount() {
    this.props.changeUnmount(false);
    this.props.answerQuestion(false);
    this.props.timeOverOff();
  }
  async handleClick(e) {
    console.log(this);
    this.props.stopTimer();
    const time = this.props.time;
    clearInterval(basicTimer);
    this.props.answerQuestion(true);
    if (e.target.dataset.testid === 'correct-answer') {
      await this.props.setPoint(calcPoints(time, this.props.quest.difficulty));
    }
    const buttons = document.getElementsByClassName('option');
    for (let i = 0; i < buttons.length; i += 1) {
      buttons[i].disabled = true;
      if (buttons[i].dataset.testid === 'correct-answer') {
        buttons[i].classList.toggle('correct');
      } else {
        buttons[i].classList.toggle('wrong');
      }
    }
    this.props.timeOverOn();

    localStorage.setItem('state', JSON.stringify(this.props.player));
  }
  render() {
    const { quest } = this.props;
    const { disable } = this.props;
    if (this.props.time <= 0 && !this.props.timeOver) {
      this.handleClick(saida);
    }
    if (!quest) return null;
    return (
      <div>
        <h2 data-testid="question-category">opa</h2>
        <h3 data-testid="question-text">{quest.question}</h3>
        {quest.suffle.map((el) => (
          <button
            disable={disable}
            className="option"
            onClick={this.handleClick}
            data-testid={el.tag}
          >
            {el.text}
          </button>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  question: state.reducerQuestions.questions,
  index: state.reducerQuestions.index,
  disable: state.reducerQuestions.disable,
  time: state.reducerTimer.time,
  player: { player: state.reducerUser.player },
  timeOver: state.reducerQuestions.timeOver,
});

const mapDispatchToProps = (dispatch) => ({
  question: () => dispatch(handleClick()),
  stopTimer: () => dispatch(stopTimer()),
  startTimer: () => dispatch(startTimer()),
  updateTimer: () => dispatch(updateTimer()),
  answerQuestion: (payload) => dispatch(answerQuestion(payload)),
  setPoint: (point) => dispatch(setPoint(point)),
  changeUnmount: (payload) => dispatch(changeUnmount(payload)),
  timeOverOn: () => dispatch(timeOverOn()),
  timeOverOff: () => dispatch(timeOverOff()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);

Question.propTypes = {
  answerQuestion: propTypes.func.isRequired,
  disable: propTypes.bool.isRequired,
  changeUnmount: propTypes.func.isRequired,
  player: propTypes.instanceOf(Object).isRequired,
  quest: propTypes.arrayOf(propTypes.instanceOf(Object)).isRequired,
  startTimer: propTypes.func.isRequired,
  time: propTypes.number.isRequired,
  timeOver: propTypes.bool.isRequired,
  timeOverOff: propTypes.func.isRequired,
  updateTimer: propTypes.func.isRequired,
};
