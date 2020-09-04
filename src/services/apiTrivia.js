export function getToken() {
  return fetch('https://opentdb.com/api_token.php?command=request')
    .then((resposta) => resposta.json())
    .then((resposta) => (resposta.token));
}

export function getQuestions(token) {
  return fetch(`https://opentdb.com/api.php?amount=5&token=${token}`)
    .then((question) => question.json())
    .then((question) => question);
}
