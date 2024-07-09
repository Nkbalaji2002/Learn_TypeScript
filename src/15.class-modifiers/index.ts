// with class modifiers
class User_3 {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public getName() {
    return this.name;
  }

  public getAge() {
    return this.age;
  }

  public setName(name: string) {
    this.name = name;
  }

  public setAge(age: number) {
    if (age > 0) {
      this.age = age;
    }
  }
}

const user_4 = new User_3("Alice", 30);

console.log(user_4.getName());
console.log(user_4.getAge());

user_4.setName("Bob");
user_4.setAge(-10 + 30);

console.log(user_4.getName());
console.log(user_4.getAge());
