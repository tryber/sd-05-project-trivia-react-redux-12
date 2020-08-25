import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Indagation from '../components/question';
import { getQA } from './Trivia';

class teste extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      perguntas: [''],
      index: 0,
    };
    this.doBaralho = this.doBaralho.bind(this);
    this.perguntaNova = this.perguntaNova.bind(this);
  }
  componentDidMount() {
    this.perguntaNova();
  }
  async perguntaNova() {
    const newQuest = await getQA(this.state.token);
    this.setState({ perguntas: newQuest });
  }
  async doBaralho() {
    this.setState({ token: this.props.token });
  }
  render() {
    return (
      <div>
        <button onClick={this.doBaralho}>Okay</button>
        <button onClick={this.perguntaNova}>Pergunta Nova</button>
        {this.state.perguntas.results ? <Indagation {...this.state.perguntas.results[0]} /> : null}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  token: state.reducerJogador.token,
});
teste.propTypes = {
  token: propTypes.string.isRequired,
};
export default connect(mapStateToProps)(teste);
