import ACTIONS from '../actions/index';

const INITIAL_TIME = {
  time: 30,
  isStoped: false,
  start: new Date(),
  timer: '',
};

function reducerTimer(state = INITIAL_TIME, action) {
  const now = new Date();
  let timeleft = 0;
  if (state.time > 0) { timeleft = Math.floor((now - state.start) / 1000); } else { timeleft = 30; }
  switch (action.type) {
    case (ACTIONS.STOP_TIMER):
      return { ...state, isStoped: true };
    case (ACTIONS.RESET_TIMER):
      return { ...state, isStoped: false, time: 30 };
    case (ACTIONS.UPDATE_TIMER):
      return { ...state, time: 30 - timeleft };
    case (ACTIONS.START_TIMER):
      return { ...state, time: 30, start: now };
    default:
      return state;
  }
}
export default reducerTimer;

