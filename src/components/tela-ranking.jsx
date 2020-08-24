import React from 'react';
import { Link } from 'react-router-dom';

class Ranking extends React.Component {
  render() {
    return (
      <Link>
        <button data-testid="btn-go-home'" /* Deve ir ao início */>Início</button>
      </Link>
    );
  }
}

export default Ranking;
