class User {
  constructor(name) {
    this.name = name;
  }
}
class UserBuilder {
  constructor(name) {
    this.user = new User(name);
  }
  setAge(age) {
    this.user.age = age;
    return this;
  }
  setPhoneNo(num) {
    this.user.phoneNo = num;
    return this;
  }

  build() {
    return this.user;
  }
}
const user = new UserBuilder("Esh").build();
console.log(user);

const user1 = new UserBuilder("Eee").setAge(38).setPhoneNo("1111111").build();
console.log(user1);
