const sum = (a,b) => a+b;

//equivalent to above
function sum2(a,b) {
  return a + b;
}

const divide = (a,b) => {
  if (b===0) {
    throw new Error("Don't divide by zero!")
  }
  return a/b
}

module.exports = { sum, divide };
