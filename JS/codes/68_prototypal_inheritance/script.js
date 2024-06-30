// class User {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }

//   getBirhtYear() {
//     return new Date().getFullYear() - this.age;
//   }

//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }

//   set fullName(value) {
//     const [firstName, lastName] = value.split(" ");
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
// }

// // const user1 = new User("Rohit", "Sharma", 37);
// // const user2 = new User("Virat", "Kohli", 36);

// class Student {
//   constructor(firstName, lastName, age, course) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.course = course;
//   }

//   getBirhtYear() {
//     return new Date().getFullYear() - this.age;
//   }

//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }

//   set fullName(value) {
//     const [firstName, lastName] = value.split(" ");
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
// }

// const student1 = new Student("Rohit", "Sharma", 37, "BSC");
// const student2 = new Student("Virat", "Kohli", 36, "LAW");

// class Employee {
//   constructor(firstName, lastName, age, company) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.company = company;
//   }

//   getBirhtYear() {
//     return new Date().getFullYear() - this.age;
//   }

//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }

//   set fullName(value) {
//     const [firstName, lastName] = value.split(" ");
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
// }

// const emp1 = new Employee("Rohit", "Sharma", 37, "Google");
// const emp2 = new Employee("Virat", "Kohli", 36, "Microsoft");

// almost most of the things are same in other two classes, so we inherits them using inheritance

// ----------------------------------------------------------

class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getBirhtYear() {
    return new Date().getFullYear() - this.age;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(value) {
    const [firstName, lastName] = value.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

// const user1 = new User("Rohit", "Sharma", 37);
// const user2 = new User("Virat", "Kohli", 36);
