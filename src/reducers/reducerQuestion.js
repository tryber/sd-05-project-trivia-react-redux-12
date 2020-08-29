import Actions from '../actions/questionAction';
import { act } from 'react-dom/test-utils';

const initState = {
  date: new Date(),
  isLoading: true,
  perguntas: [],
  index: 0,
  shuffle: [],
  end: false,
  nextLoading: false,
  timer: 30,
  setTimer: '',
  btnProx: false,
};

function ReducerQuestion(state = initState, action) {
  const { perguntas, index } = state;
  switch (action.type) {
    case Actions.GETSTART:
      return {
        ...state,
        isLoading: action.isLoading,
      };
      case Actions.GETEND:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case Actions.GET_SUCESS:
      return {
        ...state,
        perguntas: action.perguntas,
      };
    case Actions.GET_FAIL:
      return {
        ...state,
        isLoading: action.isLoading,
      };
      case Actions.NEXT:
        if(perguntas.results.length > index + 1){
          return {
            ...state,
            index: index + 1,
            nextLoading: true,
            date: new Date(),
          };
        }
        return {
          ...state,
          end: true,
        };
      case Actions.UPDATENEXTLOADING:
        return {
          ...state,
          nextLoading: false,
      };
    case Actions.SHUFFLE:
      return {
        ...state,
        shuffle: action.shuffle,
      };
      case Actions.TIMER:
        const d = new Date();
        return { 
          ...state,
          timer: state.timer<=0 ? 0 : state.timer - ( d - state.date)/1000,
          date: d,
        }
      case Actions.HIDE_PROX:
        return {
          ...state,
          btnProx: false,
      };
      case Actions.SHOW_PROX:
        return {
          ...state,
          btnProx: true,
      };
      case Actions.RESET_TIME:
        return {
          ...state,
          timer: 30,
      };
    default:
      return state;
  }
}
export default ReducerQuestion;
