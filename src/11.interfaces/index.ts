interface User {
  firstName: string;
  lastName: string;
  age_2?: number;
  middleName?: string;
}

const greetUser = (user: User) => {
  return `Hello ${user.firstName} ${user.lastName}`;
};

let user1 = {
  firstName: "John",
  lastName: "Cena",
};

// console.log(greetUser(user1));

const logUserDetails = (user: User) => {
  console.log(`
        first Name : ${user.firstName}
        last Name : ${user.lastName}
        age : ${user.age_2}
        middle Name : ${user.middleName}
    `);
};

let user2 = {
  firstName: "Seth",
  lastName: "Rollins",
  age: 38,
  middleName: "Freakin",
};

// logUserDetails(user2);
