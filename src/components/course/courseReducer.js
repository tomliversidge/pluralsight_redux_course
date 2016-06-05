import * as types from '../../actions/actionTypes';

export default function courseReducer(state = [], action){
  switch(action.type){
    case types.CREATE_COURSE:
        return [
          ...state,
          Object.assign({}, action.course) //copy action.course so as not to reference/mutate what is passed in
        ];
    case types.LOAD_COURSES_SUCCESS:
          return action.courses;
    default:
          return state;
  }
}
