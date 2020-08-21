export async function getToken() {
  return fetch('https://opentdb.com/api_token.php?command=request')
    .then((resposta) => resposta.json())
    .then((resposta) => (resposta.token));
}

export async function getQA(token) {
  let questions;
  await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`)
    .then((question) => question.json())
    .then((question) => (questions = question));
  return questions;
}
