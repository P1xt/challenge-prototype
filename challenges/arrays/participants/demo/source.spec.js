var should = require( 'chai' ).should();
var demoMap = require( './source.js' );

describe('demoMap', function() {
  let timesTwo = (c) => c * 2;
  it('should double each number in the array when passed the timesTwo function', function() {
    [1,2,3,4].demoMap(timesTwo).should.deep.equal([2,4,6,8]);
  })
})
describe('demoFilter', function() {
  let isOne = (c) => c === 1;
  it('should filter out any element in the array that returns false for the isOne function', function() {
    [1,2,3,4].demoFilter(isOne).should.deep.equal([1]);
  })
})