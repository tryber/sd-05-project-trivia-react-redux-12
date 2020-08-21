async function getToken() {
  let token;
  fetch("https://opentdb.com/api_token.php?command=request")
    .then((resposta) => resposta.json())
    .then((resposta) => token = resposta.token);
  return token;
}

function getQA(token) {
  const questions = fetch(
    `https://opentdb.com/api.php?amount=5&token=${token}`
  ).then((question) => question.json());
  return questions;
}
