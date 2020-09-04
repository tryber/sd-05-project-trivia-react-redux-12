import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Rank() {
  const players = JSON.parse(localStorage.getItem('ranking')).sort((a, b) => -a.score + b.score);
  return (
    <div>
      <h1 data-testid="ranking-title">Ranking</h1>
      {players.map((el) => (
        <h2 data-testid="player-name">{el.name}</h2>
      ))}

      <Link to="/">
        <button data-testid="btn-go-home">Jogar novamente</button>
      </Link>
    </div>
  );
}

export default connect()(Rank);
