import { combineReducers } from 'redux';
import reducerJogador from './reducerJogador';
import reducerQuestion from './reducerQuestion';

const rootReducers = combineReducers({ reducerJogador, reducerQuestion });

export default rootReducers;
