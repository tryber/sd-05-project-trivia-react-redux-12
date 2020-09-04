import { combineReducers } from 'redux';
import reducerQuestions from './question';
import reducerUser from './user';
import reducerTimer from './time';

const rootReducers = combineReducers({ reducerQuestions, reducerUser, reducerTimer });

export default rootReducers;
