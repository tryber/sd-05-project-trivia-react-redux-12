import ACTIONS from '../actions/index';

function shuffleQuestion(origin, vezes = 3) {
  const { correct_answer: correct, incorrect_answers: incorrect } = origin;
  const options = [
    { text: correct, tag: 'correct-answer' },
    ...incorrect.map((el, index) => ({ text: el, tag: `wrong-answer-${index}` }))];
  const type = origin.type;
  const num = options.length;
  for (let i = 0; i < vezes; i += 1) {
    const pos1 = Math.floor(Math.random(42) * num);
    const pos2 = Math.floor(Math.random(42) * num);
    const temp1 = options[pos1];
    const temp2 = options[pos2];
    options[pos2] = temp1;
    options[pos1] = temp2;
  }
  let newOption;
  if (type !== 'multiple') {
    newOption = options.sort();
  } else {
    newOption = options;
  }
  return newOption;
}

const INITIAL_QUESTIONS = {
  questions: '',
  questionsLength: '',
  index: 0,
  disable: false,
  isAnswer: false,
  unMount: false,
  timeOver: false,
};

function reducerQuestions(state = INITIAL_QUESTIONS, action) {
  switch (action.type) {
    case (ACTIONS.QUESTIONS_GOT):
      return {
        ...state,
        questions: action.questions.map((el) => ({ ...el, suffle: shuffleQuestion(el) })),
        questionsLength: action.questionsLength,
      };
    case (ACTIONS.HANDLE_CLICK):
      return { ...state, disable: true };
    case (ACTIONS.ANSWER_QUESTION):
      return { ...state, isAnswer: action.payload };
    case (ACTIONS.NEXT_QUESTION):
      return { ...state, index: state.index + 1 };
    case (ACTIONS.UNMOUNT):
      return { ...state, unMount: action.payload };
    case (ACTIONS.RESTART_GAME):
      return INITIAL_QUESTIONS;
    case (ACTIONS.TIME_OVER_ON):
      return { ...state, timeOver: true };
    case (ACTIONS.TIME_OVER_OFF):
      return { ...state, timeOver: false };
    default:
      return state;
  }
}
export default reducerQuestions;
