import { getQA } from '../APIs/Trivia';

const GETSTART = 'GETSTART';
const GETEND = 'GETEND';
const GET_SUCESS = 'GET_SUCESS';
const GET_FAIL = 'GET_FAIL';
const NEXT = 'NEXT';
const SHUFFLE = 'SHUFFLE';
const UPDATENEXTLOADING = 'UPDATENEXTLOADING';
const TIMER = 'TIMER';
const SHOW_PROX = 'SHOW_PROX';
const HIDE_PROX = 'HIDE_PROX';
const RESET_TIME = 'RESET_TIME';
const Actions = { GETSTART, GETEND, GET_SUCESS, GET_FAIL, NEXT, SHUFFLE, UPDATENEXTLOADING, TIMER, SHOW_PROX, HIDE_PROX, RESET_TIME };

export function getStart() {
  return {
    type: GETSTART,
    isLoading: true,
  };
}
export function getEnd() {
  return {
    type: GETEND,
    isLoading: false,
  };
}

export function getSucess(perguntas) {
  return {
    type: GET_SUCESS,
    perguntas,
  };
}

export function getFail() {
  return {
    type: GET_FAIL,
  };
}

export function requestQuest(token) {
  return (dispatch) => {
    dispatch(getStart());
    return getQA(token)
      .then((perguntas) => {
        dispatch(getEnd());
        dispatch(getSucess(perguntas))
      })
      .catch(() => {
        dispatch(getEnd());
        dispatch(getFail())
      });
  };
}

export function nextQuestion() {
  return {
    type: NEXT,
  }
}

export function shuffle(options, vezes = 3, type) {
  console.log(options)
  const num = options.length;
  for (let i = 0; i < vezes; i += 1) {
    const pos1 = Math.floor(Math.random(42) * num);
    const pos2 = Math.floor(Math.random(42) * num);
    const temp1 = options[pos1];
    const temp2 = options[pos2];
    options.splice(pos1, 1, temp2);
    options.splice(pos2, 1, temp1);
  }
  if (type !== 'multiple') {
    options = options.sort();
  }

  console.log(options)
  return {
    type: SHUFFLE,
    shuffle: options,
  }
}
export function updateNextLoading() {
  return {
    type: UPDATENEXTLOADING,
  }
}

export function timer() {;
  return {
    type: TIMER,
  }
}
export function showProximoOn() {
  return {
    type: SHOW_PROX
  }
}
export function showProximoOff() {
  return {
    type: HIDE_PROX
  }
}
export function resetTimer() {
  return {
    type: RESET_TIME,
  }
}
export default Actions;
