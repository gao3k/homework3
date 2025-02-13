//1
function centuryFromYear(year) {
    return Math.ceil(year / 100);
  }
  
  // Examples
  console.log(centuryFromYear(1705)); // 18
  console.log(centuryFromYear(1900)); // 19
  console.log(centuryFromYear(1601)); // 17
  console.log(centuryFromYear(2000)); // 20
  console.log(centuryFromYear(2742)); // 28

  //2
  function toCamelCase(str) {
    return str
      .split(/[-_]/) // Split the string by dash or underscore
      .map((word, index) => 
        index === 0 
          ? word // Keep the first word as is
          : word.charAt(0).toUpperCase() + word.slice(1) // Capitalize subsequent words
      )
      .join(''); // Join the words back together
  }
  
  // Examples
  console.log(toCamelCase("the-stealth-warrior")); // "theStealthWarrior"
  console.log(toCamelCase("The_Stealth_Warrior")); // "TheStealthWarrior"
  console.log(toCamelCase("The_Stealth-Warrior")); // "TheStealthWarrior"
  
  