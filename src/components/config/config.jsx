import React from 'react';
import { Link } from 'react-router-dom';

class TelaConfig extends React.Component {
  render() {
    return (
      <div>
        <h1 data-testid="settings-title">Configurações</h1>
        <Link to="/"><button>Inicio</button></Link>
      </div>
    );
  }
}

export default TelaConfig;
