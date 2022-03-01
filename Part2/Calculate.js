function Calculate(value) {
  if (!new.target) {
    throw new Error("Function is not constructor");
  }

  const initValue = [value];
  const signs = ["+"];

  this.plus = (val) => {
    initValue.push(val);
    signs.push("+");
    return this;
  };
  this.minus = (val) => {
    initValue.push(val);
    signs.push("-");
    return this;
  };
  this.multiply = (val) => {
    initValue.push(val);
    signs.push("*");
    return this;
  };
  this.divide = (val) => {
    initValue.push(val);
    signs.push("/");
    return this;
  };
  this.calculate = () => {
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
          const lastElement = result[result.length - 1] * el;
          result.splice(result.length - 1, 1, lastElement);
          break;
        }
        case "/": {
          const lastElement = result[result.length - 1] / el;
          result.splice(result.length - 1, 1, lastElement);
          break;
        }
      }
    });
    return result.reduce((acc, value) => acc + value);
  };
}

const check = new Calculate(5).plus(2).multiply(2).multiply(2).calculate();
console.log(check);
