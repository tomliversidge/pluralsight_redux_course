import expect from 'expect';
import * as courseActions from './courseActions';
import * as types from '../../actions/actionTypes';

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
