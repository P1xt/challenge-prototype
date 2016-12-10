var should = require( 'chai' ).should();
var p1xtMap = require( './source.js' );

describe('p1xtMap', function() {
  let timesTwo = (c) => c * 2;
  it('should double each number in the array when passed the timesTwo function', function() {
    [1,2,3,4].p1xtMap(timesTwo).should.deep.equal([2,4,6,8]);
  })
})
describe('p1xtFilter', function() {
  let isOne = (c) => c === 1;
  it('should filter out any element in the array that returns false for the isOne function', function() {
    [1,2,3,4].p1xtFilter(isOne).should.deep.equal([1]);
  })
})