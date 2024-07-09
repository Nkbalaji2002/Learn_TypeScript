const createCounter = () => {
  let counterValue = 0;

  return {
    increment: function () {
      counterValue++;
    },

    getValue: function () {
      return counterValue;
    },

    decrement: function () {
      counterValue--;
    },
  };
};

let counter1 = createCounter();

counter1.increment();
counter1.increment();
counter1.increment();

counter1.decrement();

console.log(counter1.getValue());
