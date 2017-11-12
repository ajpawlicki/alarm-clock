const {renderTime, getTime, timesAreEqual} = require('../client/index');

describe('Test clock logic', () => {
  describe('renderTime', () => {
    it('Will return an object', () => {
      
      expect(getTime()).toBeInstanceOf(Object);
    });
  });

  describe('getTime', () => {
    
  });
});