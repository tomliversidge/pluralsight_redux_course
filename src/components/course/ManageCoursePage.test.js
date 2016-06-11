import React from 'react';
import {mount, shallow} from 'enzyme';
import expect from 'expect';
import {ManageCoursePage} from './ManageCoursePage';

// function setup() {
//   let props = {
//     course: {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''},
//     authors: [],
//     actions: {
//       saveCourse: () => { return Promise.resolve();}
//     }
//   };
//   return mount(<ManageCoursePage {...props}/>);
// }
//
// describe('Given a Manage Course Page', () => {
//
//   it('sets an error message when trying to save with a title less than 5 characters long', () => {
//     const wrapper = setup();//
//     const saveButton = wrapper.find('input').last();
//     expect(saveButton.prop('type')).toBe('submit');
//     saveButton.simulate('click');
//     expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');
//   });
//
// });
