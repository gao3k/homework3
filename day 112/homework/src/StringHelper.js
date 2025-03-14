export class StringHelper {
    static reverse(str) {
      return str.split('').reverse().join('');
    }
  
    static compareStrings(str1, str2) {
      const minLength = Math.min(str1.length, str2.length);
      let matchCount = 0;
      
      for (let i = 0; i < minLength; i++) {
        if (str1[i] === str2[i]) {
          matchCount++;
        }
      }
      
      return matchCount;
    }
  
    static isValidString(str) {
      return /^[a-zA-Z0-9_]*$/.test(str);
    }
  }