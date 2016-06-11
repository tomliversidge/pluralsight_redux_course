import React from 'react';
import {mount, shallow} from 'enzyme';
import expect from 'expect';
import CourseForm from './CourseForm';

function setup(saving) {
  let props = {
    course: {
      title: "Test Title",
      category: "Test Category",
      length: "Test Length"
    },
    saving: saving,
    errors: {},
    onSave: () => {},
    onChange: () => {},
    allAuthors: ['Tom', 'Sally', 'Geoff']
  };
  return shallow(<CourseForm {...props}/>);
}

describe('Given a Course Form', () => {

  it('the DOM includes the form', () => {
    const wrapper = setup();
    expect(wrapper.find('form').length).toBe(1);
  });

  it('the header text is "Manage Course"', () => {
    const wrapper = setup();
    expect(wrapper.find('h1').text()).toEqual('Manage Course');
  });

  describe('the form fields are correctly populated', ()=>{
    it('Course Title', () => {
      const wrapper = setup();
      expect(wrapper.find('[label="Title"]').props().value).toBe('Test Title');
    });
    it('Category', () => {
      const wrapper = setup();
      expect(wrapper.find('[label="Category"]').props().value).toBe('Test Category');
    });
    it('Length', () => {
      const wrapper = setup();
      expect(wrapper.find('[label="Length"]').props().value).toBe('Test Length');
    });
    it('Authors', () => {
      const wrapper = setup();
      expect(wrapper.find('SelectInput').props().options)
        .toInclude('Tom')
        .toInclude('Geoff')
        .toInclude('Sally');
    });
  });

  describe('when saving', () =>{
    it('save button is labelled "Saving..."', () => {
      const wrapper = setup(true);
      expect(wrapper.find('input').props().value).toBe('Saving...');
    });
    it('save button is disabled', () => {
      const wrapper = setup(true);
      expect(wrapper.find('input').props().disable).toBe(true);
    });
  });

  describe('when not saving', ()=>{
    it('save button is labelled "Save"', () => {
      const wrapper = setup(false);
      expect(wrapper.find('input').props().value).toBe('Save');
    });
    it('save button is enabled', () => {
      const wrapper = setup(false);
      expect(wrapper.find('input').props().disable).toBe(false);
    });
  });

});
