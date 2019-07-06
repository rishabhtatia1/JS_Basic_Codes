  // Create a function that takes two numbers as arguments and return their sum
  /*Test cases
Parameter a and b should not be undefined
Both parameter should be number
  */
  var addition = (a, b) => {
      if (typeof a !== "number" || typeof b !== "number") {
          return "Sorry but you didn't pass two numbers.";
      }
      return a + b;
  }
