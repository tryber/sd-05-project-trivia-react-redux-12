import ACTIONS from '../actions/index';
import grava from '../../services/gravatar';

const player = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
  picture: '',
};
const INITIAL_USER = {
  isFetching: false,
  token: '',
  player,
};
function reducerUser(state = INITIAL_USER, action) {
  switch (action.type) {
    case (ACTIONS.LOGIN):
      return {
        ...state,
        player: {
          ...state.player,
          name: action.user,
          gravatarEmail: action.email,
          picture: grava(action.email),
        },
      };
    case (ACTIONS.TOKEN_OK):
      return { ...state, token: action.token };
    case (ACTIONS.SET_POINT):
      return {
        ...state,
        player: {
          ...state.player,
          assertions: state.player.assertions + 1,
          score: state.player.score + action.point,
        },
      };
    case (ACTIONS.RESTART_GAME):
      return { ...state, isFetching: false, player };
    default:
      return state;
  }
}

export default reducerUser;
