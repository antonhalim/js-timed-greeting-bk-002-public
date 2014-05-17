'use strict';

describe('isAfternoon', function() {
  var isAfternoon;
  beforeEach(function() {
    isAfternoon = require('../lib/isAfternoon');
  });

  it('returns true during the afternoon', function() {
    expect(isAfternoon(14)).toEqual(true);
  });

  it('returns false during the morning and night', function() {
    expect(isAfternoon(8)).toEqual(false);
    expect(isAfternoon(22)).toEqual(false);
  });

});
