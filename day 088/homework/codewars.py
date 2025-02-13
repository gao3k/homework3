#6kyu
function findOdd(arr) {
    const countMap = new Map();
    
    // Count occurrences of each number
    for (let num of arr) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }
    
    // Find the number with an odd count
    for (let [num, count] of countMap) {
        if (count % 2 !== 0) {
            return num;
        }
    }
    
    return null; // Should never reach here because there's always an odd occurrence number
}
const assert = require('chai').assert;

describe('Example tests', function() {
  
  function doTest(a, n) {
    assert.strictEqual(findOdd(a), n, `Incorrect answer for input=[${a}]`);
  }
  
  it("Example tests", () => {
    doTest([7], 7);
    doTest([0], 0);
    doTest([1,1,2], 2);
    doTest([0,1,0,1,0], 0);
    doTest([1,2,2,3,3,3,4,3,3,3,2,2,1], 4);
  });
  
  it("Fixed tests", () => {
    doTest([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5);
    doTest([1,1,2,-2,5,2,4,4,-1,-2,5], -1);
    doTest([20,1,1,2,2,3,3,5,5,4,20,4,5], 5);
    doTest([10], 10);
    doTest([1,1,1,1,1,1,10,1,1,1,1], 10);
    doTest([5,4,3,2,1,5,4,3,2,10,10], 1);
  });
});