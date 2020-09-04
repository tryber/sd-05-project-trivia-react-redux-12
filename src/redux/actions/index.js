import { getToken, getQuestions } from '../../services/apiTrivia';

const START_TOKEN = 'START_TOKEN';
const TOKEN_OK = 'TOKEN_OK';
const QUESTIONS_GOT = 'QUESTIONS_GOT';
const LOGIN = 'LOGIN';
const HANDLE_CLICK = 'HANDLE_CLICK';
const UPDATE_TIMER = 'UPDATE_TIMER';
const STOP_TIMER = 'STOP_TIMER';
const RESET_TIMER = 'RESET_TIMER';
const START_TIMER = 'START_TIMER';
const ANSWER_QUESTION = 'ANSWER_QUESTION';
const NEXT_QUESTION = 'NEXT_QUESTION';
const SET_POINT = 'SET_POINT';
const UNMOUNT = 'UNMOUNT';
const RESTART_GAME = 'RESTART_GAME';
const TIME_OVER_ON = 'TIME_OVER_ON';
const TIME_OVER_OFF = 'TIME_OVER_OFF';
const ACTIONS = {
  START_TOKEN,
  TOKEN_OK,
  QUESTIONS_GOT,
  LOGIN,
  HANDLE_CLICK,
  UPDATE_TIMER,
  STOP_TIMER,
  RESET_TIMER,
  START_TIMER,
  ANSWER_QUESTION,
  SET_POINT,
  NEXT_QUESTION,
  UNMOUNT,
  RESTART_GAME,
  TIME_OVER_ON,
  TIME_OVER_OFF,
};

export default ACTIONS;
function requestingToken() {
  return {
    type: START_TOKEN,
    isFetching: true,
  };
}

function requestedToken(token) {
  return {
    type: TOKEN_OK,
    token,
  };
}

function requestedQuestion(questions) {
  return {
    type: QUESTIONS_GOT,
    questions,
    questionsLength: questions.length,
  };
}

export function GetToken() {
  return (dispatch) => {
    dispatch(requestingToken());
    return getToken()
      .then((token) => {
        dispatch(requestedToken(token));
        return token;
      })
      .then((token) => getQuestions(token))
      .then((questions) => dispatch(requestedQuestion(questions.results)));
  };
}

export function login(user, email) {
  return {
    type: LOGIN,
    user,
    email,
  };
}

export function handleClick() {
  return {
    type: HANDLE_CLICK,
  };
}

export function updateTimer() {
  return {
    type: UPDATE_TIMER,
  };
}

export function stopTimer() {
  return {
    type: STOP_TIMER,
  };
}

export function resetTimer() {
  return {
    type: RESET_TIMER,
  };
}

export function startTimer() {
  return {
    type: START_TIMER,
  };
}

export function answerQuestion(payload) {
  return {
    type: ANSWER_QUESTION,
    payload,
  };
}

export function setPoint(point) {
  return {
    type: SET_POINT,
    point,
  };
}

export function nextQuestion() {
  return {
    type: NEXT_QUESTION,
  };
}

export function changeUnmount(payload) {
  return {
    type: UNMOUNT,
    payload,
  };
}

export function restartGame() {
  return {
    type: RESTART_GAME,
  };
}

export function timeOverOn() {
  return {
    type: TIME_OVER_ON,
  };
}

export function timeOverOff() {
  return {
    type: TIME_OVER_OFF,
  };
}
