var should = require( 'chai' ).should();
var zashishzMap = require( './source.js' );

describe('zashishzMap', function() {
  let timesTwo = (c) => c * 2;
  it('should double each number in the array when passed the timesTwo function', function() {
    [1,2,3,4].zashishzMap(timesTwo).should.deep.equal([2,4,6,8]);
  })
})
describe('zashishzFilter', function() {
  let isOne = (c) => c === 1;
  it('should filter out any element in the array that returns false for the isOne function', function() {
    [1,2,3,4].zashishzFilter(isOne).should.deep.equal([1]);
  })
})