export default function courseReducer(state = [], action){
  switch(action.type){
    case 'CREATE_COURSE':
        return [
          ...state,
          Object.assign({}, action.course) //copy action.course so as not to reference/mutate what is passed in
        ];
    default:
          return state;
  }
}
