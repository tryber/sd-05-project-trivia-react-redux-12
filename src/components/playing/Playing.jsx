import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import propTypes from 'prop-types';
import Question from '../question/Question';
import { nextQuestion, changeUnmount } from '../../redux/actions';

function upload(player) {
  if (!localStorage.getItem('ranking')) {
    localStorage.setItem('ranking', JSON.stringify([player]));
  } else {
    localStorage.setItem('ranking', JSON.stringify([...JSON.parse(localStorage.getItem('ranking')), player]));
  }
}
class Playing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      unMount: false,
      goRanking: false,
    };
    this.goingNext = this.goingNext.bind(this);
  }
  async goingNext() {
    await this.props.nextQuestion();
    console.log(this.props.index);
    if (this.props.index === 5) {
      await this.setState({ goRanking: true });
    }
    if (this.state.index < this.props.index) {
      this.props.changeUnmount(true);
      this.setState({ index: this.state.index + 1 });
    }
  }
  render() {
    const { user, picture, score, index, unMount, player } = this.props;
    const { goingNext } = this;
    if (this.state.goRanking) {
      upload(player);
      return <Redirect to={'/feedback'} />;
    }
    return (
      <div>
        <h1 data-testid="header-player-name">{user}</h1>
        <img data-testid="header-profile-picture" src={picture} alt="Gravatar" />
        <h2>
          Tempo: <span>{this.props.time}</span>
        </h2>
        <h1 data-testid="header-score">{score}</h1>
        {this.props.isAnswer ? (
          <button data-testid="btn-next" onClick={goingNext}>
            Next
          </button>
        ) : null}
        {this.props.questions.length > 0 && !unMount ?
          <Question quest={this.props.questions[index]} /> :
          null
        }

        <h1>playing</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.reducerUser.player.name,
  picture: `https://www.gravatar.com/avatar/${state.reducerUser.player.picture}`,
  score: state.reducerUser.player.score,
  questions: state.reducerQuestions.questions,
  index: state.reducerQuestions.index,
  time: state.reducerTimer.time,
  isAnswer: state.reducerQuestions.isAnswer,
  unMount: state.reducerQuestions.unMount,
  player: state.reducerUser.player,
});
const mapDispatchToProps = (dispatch) => ({
  nextQuestion: () => dispatch(nextQuestion()),
  changeUnmount: (payload) => dispatch(changeUnmount(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Playing);

Playing.propTypes = {
  changeUnmount: propTypes.func.isRequired,
  user: propTypes.string.isRequired,
  picture: propTypes.string.isRequired,
  score: propTypes.number.isRequired,
  index: propTypes.number.isRequired,
  unMount: propTypes.bool.isRequired,
  player: propTypes.instanceOf(Object).isRequired,
  time: propTypes.number.isRequired,
  isAnswer: propTypes.bool.isRequired,
  questions: propTypes.arrayOf(propTypes.instanceOf(Object)).isRequired,
};
