'use strict';

describe('greeting', function() {
  var greeting;
  beforeEach(function() {
    greeting = require('../lib/greeting');
  });

  it('returns Good Morning! during the morning', function() {
    expect(greeting(6)).toEqual('Good Morning!');
  });

  it('returns Good Afternoon! during the morning', function() {
    expect(greeting(15)).toEqual('Good Afternoon!');
  });

  it('returns Good Night! during the morning', function() {
    expect(greeting(23)).toEqual('Good Night!');
  });
});
