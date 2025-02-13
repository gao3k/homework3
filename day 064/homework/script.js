function findLongest(array) {
    return array.reduce((mostDigitNumber, currentNumber) => {
      return currentNumber.toString().length > mostDigitNumber.toString().length ? currentNumber : mostDigitNumber;
    }, array[0]);
  }
  