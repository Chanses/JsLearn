function Calculate(value) {
  if (!new.target) {
    throw "Function is not constructor";
  }

  const initValue = [value];
  const signs = ["+"];
  const methods = {
    plus: (val) => {
      initValue.push(val);
      signs.push("+");
      return methods;
    },
    minus: (val) => {
      initValue.push(val);
      signs.push("-");
      return methods;
    },
    multiply: (val) => {
      initValue.push(val);
      signs.push("*");
      return methods;
    },
    divide: (val) => {
      initValue.push(val);
      signs.push("/");
      return methods;
    },
    calculate: () => {
      const result = [];
      initValue.forEach((el, index) => {
        switch (signs[index]) {
          case "+":
            result.push(el);
            break;
          case "-":
            result.push(-el);
            break;
          case "*": {
            const lastElement = result[index - 1];
            result.pop();
            result.push(lastElement * el);
            break;
          }
          case "/": {
            const lastElement = result[index - 1];
            result.pop();
            result.push(lastElement / el);
            break;
          }
        }
      });

      return result.reduce((acc, value) => acc + value);
    },
  };
  return methods;
}

const check = new Calculate(2).plus(2).multiply(2).minus(1).calculate();
console.log(check);
