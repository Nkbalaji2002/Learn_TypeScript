class User_5 {
  name: string;
  static total: number = 0;

  constructor(name: string) {
    this.name = name;
    User_5.total++;
  }

  getName() {
    return this.name;
  }

  static getTotalUsers() {
    return User_5.total;
  }
}

console.log(User_5.total, "Users at start");

const user_1 = new User_5("Alice");
const user_2 = new User_5("Bob");

console.log(user_1.getName());
console.log(user_2.getName());

console.log(User_5.total, "Users at end");
