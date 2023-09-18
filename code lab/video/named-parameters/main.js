class User {
  constructor(name, { age, phoneNo = "1223455" } = {}) {
    this.name = name;
    this.age = age;
    this.phoneNo = phoneNo;
  }
}

const user = new User("Esh", { age: 10 });
console.log(user);
const user1 = new User("Rob", { age: 20, phoneNo: "1111111" });
console.log(user1);
