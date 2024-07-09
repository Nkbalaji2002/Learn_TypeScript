// create the class
class User {
  first_name: string;
  last_name: string;
  my_age_2: number;

  constructor(firstName: string, lastName: string, age: number) {
    this.first_name = firstName;
    this.last_name = lastName;
    this.my_age_2 = age;
  }

  greet() {
    return `Hello, ${this.first_name} ${this.last_name}`;
  }

  getAge() {
    return this.my_age_2;
  }
}

// create the instance
let user3 = new User("John", "Doe", 25);

console.log(user3.greet());
console.log(user3.getAge());
