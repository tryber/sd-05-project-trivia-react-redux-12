import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

function Rank(props) {
  const { assertions, picture, name, score } = props.player;
  return (
    <div>
      <header>
        <h1>FEEDBACK</h1>
        <img data-testid="header-profile-picture" src={picture} alt="Gravatar" />
        <h2 data-testid="header-player-name">{name}</h2>
        <h3 data-testid="header-score">{score}</h3>
      </header>

      <h1 data-testid="feedback-text">{assertions < 3 ? 'Podia ser melhor...' : 'Mandou bem!'}</h1>
      <div>
        <h4 data-testid="feedback-total-score">{score}</h4>
        <h4 data-testid="feedback-total-question">{assertions}</h4>
      </div>
      <Link to="/ranking">
        <button data-testid="btn-ranking">Ver Ranking</button>
      </Link>
      <Link to="/">
        <button data-testid="btn-play-again">Jogar novamente</button>
      </Link>
    </div>
  );
}
const mapStateToProps = (state) => ({
  player: state.reducerUser.player,
});

export default connect(mapStateToProps)(Rank);

Rank.propTypes = {
  player: propTypes.instanceOf(Object).isRequired,
};
