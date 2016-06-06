import {combineReducers} from 'redux';
import courses from '../components/course/courseReducer';
import authors from './authorReducer';

const rootReducer = combineReducers({
  courses, authors
});

export default rootReducer;
