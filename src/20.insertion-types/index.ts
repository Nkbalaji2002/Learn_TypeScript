interface Employee {
  name: string;
  id: number;
}

interface Admin_3 {
  isAdmin: boolean;
  accessLevel: number;
}

type AdminEmployee = Employee & Admin_3;

let employee_2: AdminEmployee = {
  id: 123,
  name: "Alice",
  isAdmin: true,
  accessLevel: 2,
};

console.log(employee_2.name);
console.log(employee_2.isAdmin);
console.log(employee_2.accessLevel);
