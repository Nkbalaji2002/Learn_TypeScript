// create with inheritance
class Person {
  firstName: string;
  lastName: string;
  age: number;

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  greet() {
    return `Hello, ${this.firstName} ${this.lastName}!!!`;
  }

  getAge() {
    return `Age : ${this.age}`;
  }
}

class User_2 extends Person {
  constructor(firstName: string, lastName: string, age: number) {
    super(firstName, lastName, age);
  }
}

const user5 = new User_2("John", "Doe", 25);

console.log(user5.greet());
console.log(user5.getAge());

class Admin extends Person {
  role: string;

  constructor(firstName: string, lastName: string, age: number, role: string) {
    super(firstName, lastName, age);
    this.role = role;
  }

  greet(): string {
    return `Hello, ${this.firstName} ${this.lastName}, Role: ${this.role} `;
  }

  manageUsers() {
    return `Managing users with role ${this.role}`;
  }
}

const admin_1 = new Admin("Alice", "Smith", 35, "Administrator");

console.log(admin_1.greet());
console.log(admin_1.getAge());
console.log(admin_1.manageUsers());
