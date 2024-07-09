function logMethod(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(
      `Calling ${propertyKey} method will arguments ${args.join(",")}`
    );

    const result = originalMethod.apply(this, args);
    console.log(`Result : ${result}`);

    return result;
  };
}

// class Calc {
//   @logMethod
//   add(a: number, b: number) {
//     const result = a + b;
//     return result;
//   }

//   @logMethod
//   subtract(a: number, b: number) {
//     const result = a - b;
//     return result;
//   }
// }

// const calculator = new Calc();
// calculator.add(10, 20);
// calculator.subtract(7, 2);
