import React from 'react';

class question extends React.Component {
  render() {
    if (this.props.type === 'multiple') {
      return (
        <div>
          <h1>{this.props.category}</h1>
          <h1>
            {this.props.question
              .replace(/&quot;/g, '"')
              .replace(/&#039;/g, '"')}
          </h1>
          <ol>
            <l1>{this.props.correct_answer}</l1>
            {this.props.incorrect_answers.map((res) => (
              <li key={res}>{res}</li>
            ))}
          </ol>
          <h1>{this.props.type}</h1>
          <h1>{this.props.difficulty}</h1>
        </div>
      );
    }
    return (
      <div>
        <h1>{this.props.category}</h1>
        <h1>{`${this.props.question}`}</h1>
        <ol>
          <l1>{this.props.correct_answer}</l1>
          {this.props.incorrect_answers.map((res) => (
            <li key={res}>{res}</li>
          ))}
        </ol>
        <h1>{this.props.type}</h1>
        <h1>{this.props.difficulty}</h1>
      </div>
    );
  }
}

export default question;
