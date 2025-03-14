export class MathHelper {
    static PI = 3.14159265359;
    static E = 2.71828182846;
    static DEFAULT_PRECISION = 3;
  
    static factorial(n) {
      if (n < 0) return undefined;
      if (n <= 1) return 1;
      return n * this.factorial(n - 1);
    }
  
    static endsWithFiveOrZero(number) {
      const lastDigit = Math.abs(number % 10);
      return lastDigit === 0 || lastDigit === 5;
    }
  
    static roundToNearestFiveOrZero(number) {
      return Math.round(number / 5) * 5;
    }
  
    static roundWithPrecision(number) {
      const factor = Math.pow(10, this.DEFAULT_PRECISION);
      return Math.round(number * factor) / factor;
    }
  }