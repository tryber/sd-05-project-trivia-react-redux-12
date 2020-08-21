import React from 'react';
import Indagation from './question';
import {getQA, getToken} from './Trivia';

class teste extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      perguntas: [''],
    };
    this.doBaralho = this.doBaralho.bind(this);
    this.perguntaNova = this.perguntaNova.bind(this);
  }
  async doBaralho() {
    const myToken = await getToken();
    this.setState({ token: myToken });
  }
  async perguntaNova() {
    const matheus = await getQA(this.state.token);
    this.setState({ perguntas: matheus });
  }
  render() {
    return (
      <div>
        <button onClick={this.doBaralho}>Okay</button>
        <button onClick={this.perguntaNova}>Pergunta Nova</button>
        {this.state.perguntas.results ? (
          <Indagation {...this.state.perguntas.results[1]} />
        ) : null}
        {/* <p>{this.state.perguntas.results[0].category}</p> */}
      </div>
    );
  }
}

/* async function getToken() {
  return fetch('https://opentdb.com/api_token.php?command=request')
    .then((resposta) => resposta.json())
    .then((resposta) => (resposta.token));
}

async function getQA(token) {
  let questions;
  await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`)
    .then((question) => question.json())
    .then((question) => (questions = question));
  return questions;
} */

export default teste;
