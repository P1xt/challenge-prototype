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
 * zashishzMap should work like the Array.map() method
 * it should return a new array with the results of calling 
 * a provided function on every element in this array.
 * 
 * See:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
var zashishzMap = function(callback) {
    var input = this; // use input to access the array this function was called on
    let tempArr = [];
    for(let i=0; i< input.length; i++) {
        if(callback)
            tempArr.push(callback(input[i]));
        else
            tempArr.push(input[i]);
    }
    return tempArr;
}

/**
 * zashishzFilter should work like the Array.filter() method
 * it should a new array with all elements that pass the test 
 * implemented by the provided function.
 * 
 * See:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 */
var zashishzFilter = function(callback) {
    var input = this; // use input to access the array this function was called on
    let tempArr = [];
    for(var i=0; i< input.length; i++) {
        if(callback && callback(input[i])) {
            tempArr.push(input[i]);
        }
    }
    return tempArr;
}


/**
 * don't change anything in this section
 */
Object.defineProperty(Array.prototype, "zashishzMap", { enumerable: false, value: zashishzMap });
Object.defineProperty(Array.prototype, "zashishzFilter", { enumerable: false, value: zashishzFilter });

module.exports = [zashishzMap, zashishzFilter];

/**
 * do any console logs you want to use to check your functions here
 */
//console.log([1,2,3,4].zashishzMap(function(a) { return a + 3;}))
//console.log([1,2,3,4].zashishzFilter(function(a) { return a === 1;}))




