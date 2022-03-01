function Calculate(value) {
  if (!new.target) {
    throw new Error("Function is not constructor");
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
            const lastElement = result[result.length - 1];
            result.pop();
            result.push(lastElement * el);
            break;
          }
          case "/": {
            const lastElement = result[result.length - 1];
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

const check = new Calculate(5)
  .multiply(2)
  .plus(2)
  .divide(1)
  .plus(3)
  .divide(3)
  .calculate();
console.log(check);
