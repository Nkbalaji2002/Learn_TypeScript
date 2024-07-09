class User_4 {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  /**
   * isAdult
   */
  static isAdult(age: number) {
    return age >= 18;
  }
}

console.log(User_4.isAdult(30));
console.log(User_4.isAdult(2));
