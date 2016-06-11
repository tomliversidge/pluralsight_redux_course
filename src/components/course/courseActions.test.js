import expect from 'expect';
import * as courseActions from './courseActions';
import * as types from '../../actions/actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

describe('Course Actions', () => {

  describe('createCourseSuccess', () => {
    it('should create a CREATE_COURSE_SUCCESS action', () => {
        const course = {id: 'hello', title:'goodbye'};
        const expectedAction = {
          type: types.CREATE_COURSE_SUCCESS,
          course
        };

        const action = courseActions.createCourseSuccess(course);
        expect(action).toEqual(expectedAction);
      });
  });

});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {

  afterEach(() => {
    nock.cleanAll();
  });

  describe('createCourseSuccess', () => {
    it('should create BEGIN_AJAX_CALL and LOAD_COURSE_SUCCESS when loading courses', (done) => {

      //example of how to call nock

      // nock('http://someurl')
      //   .get('/someapi')
      //   .reply(200, {body: { course:{}}});
      const expectedAction = [
        {type: types.BEGIN_AJAX_CALL},
        {type: types.LOAD_COURSES_SUCCESS, body: { courses: [{
          id: 'clean-code', title: 'Clean Code'
        }]}}
      ];

      const store = mockStore({courses:[]}, expectedAction);
      store.dispatch(courseActions.loadCourses()).then(()=>{
        const actions = store.getActions();
        expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
        expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
        done();
      });

    });
  });

});


