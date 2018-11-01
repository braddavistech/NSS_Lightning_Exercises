// Write a Person class with a constructor that takes a first and last name.
class Person {

  constructor (props) {
      this.firstName = props.firstName
      this.lastName = props.lastName
  }

  // Write a getter that returns the full name

  get FullName () {
    return this.firstName + " " + this.lastName;
  }

  // Write a setter that sets a nickname.
  set NickName (props) {
      this.nickName = props;
  }

  get NickNamePrint () {
    return `${this.firstName}'s nickname is ${this.nickName}.`;
  }

};

let Brad = new Person ({
  firstName: "Brad",
  lastName: "Davis"
});

Brad.NickName = "Big Country";

let Kevin = new Person ({
  firstName: "Kevin",
  lastName: "Burns"
});

Kevin.NickName = "NoddNodd";

let Richard = new Person ({
  firstName: "Richard",
  lastName: "Nixon"
});

Richard.NickName = "Tricky Dick";

console.log(Brad.FullName);
console.log(Brad.NickNamePrint);

console.log(Kevin.FullName + ". " + Kevin.NickNamePrint);
console.log(Richard.FullName + ". " + Richard.NickNamePrint);