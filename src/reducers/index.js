import {combineReducers} from 'redux';
import courses from '../components/course/courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
const rootReducer = combineReducers({
  courses, authors, ajaxCallsInProgress
});

export default rootReducer;
