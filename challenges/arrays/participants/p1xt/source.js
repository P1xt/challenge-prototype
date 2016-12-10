/**
 * In this file, you will find four functions.
 * Each of those functions currently does nothing.
 * Your mission is to make each function work the way it should.
 * There is a handy test file provided for you in this folder
 * which will throw errors for any function in your source that
 * isn't producing the appropriate output.
 * 
 * Make your functions pass the tests.
 */

/**
 * p1xtMap should work like the Array.map() method
 * it should return a new array with the results of calling 
 * a provided function on every element in this array.
 * 
 * See:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
var p1xtMap = function(callback) {
    var input = this; // use input to access the array this function was called on
    var newArr = [];
    for (var i=0; i < input.length; i++) {
        newArr.push(callback(input[i]));
    }
    return newArr;
}

/**
 * p1xtFilter should work like the Array.filter() method
 * it should a new array with all elements that pass the test 
 * implemented by the provided function.
 * 
 * See:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 */
var p1xtFilter = function(callback) {
    var input = this; // use input to access the array this function was called on
    var newArr = [];
    for (var i=0; i < input.length; i++) {
        if (callback(input[i]))
            newArr.push(input[i]);
    }
    return newArr;
}


/**
 * don't change anything in this section
 */
Object.defineProperty(Array.prototype, "p1xtMap", { enumerable: false, value: p1xtMap });
Object.defineProperty(Array.prototype, "p1xtFilter", { enumerable: false, value: p1xtFilter });

module.exports = [p1xtMap, p1xtFilter];

/**
 * do any console logs you want to use to check your functions here
 */
//console.log([1,2,3,4].p1xtMap(function(a) { return a + 3;}))
//console.log([1,2,3,4].p1xtFilter(function(a) { return a === 1;}))




