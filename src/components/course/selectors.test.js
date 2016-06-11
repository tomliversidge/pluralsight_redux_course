import expect from 'expect';
import {authorsFormattedForDropdown} from './selectors';

describe('Author Selectors', () => {
  describe('authorsFormattedForDropdown', () =>{
    it('should return author data formatted for use in a dropdown', () => {
      const authors = [
        {
          id: 'tom', firstName:'Tom', lastName: 'Liversidge'
        },
        {
          id: 'ingrid', firstName: 'Ingrid', lastName: 'foo'
        }
      ];

      const expected = [
        {
          value: 'tom', text:'Tom Liversidge'
        },
        {
          value: 'ingrid', text: 'Ingrid foo'
        }
      ];
      let actual = authorsFormattedForDropdown(authors);
      expect(actual).toEqual(expected);
    });
  });
});
