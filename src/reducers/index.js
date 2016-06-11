import {combineReducers} from 'redux';
import courses from '../components/course/courseReducer';
import authors from './authorReducer';
import numAjaxCallsInProgress from './ajaxStatusReducer';
const rootReducer = combineReducers({
  courses, authors, numAjaxCallsInProgress
});

export default rootReducer;
