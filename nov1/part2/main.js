// Make a childCare class where you can pass in any child and care giver as properties with methods to change diaper (console logs an inspirational quote to the care giver), and to store behavior in a properties (good or bad ect) using a setter.

class ChildCare {

  constructor (props) {
      this.child = props.child
      this.caregiver = props.caregiver
  }
  get changeDiaper () {
    return console.log(`I know this job stinks, but keep it up , ${this.caregiver}, remember you are getting paid for it!`);
  }
  get behavior () {
    return console.log(`Today, ${this.child} behaved ${this._behavior}.`);
  }
  set behavior (props) {
      this._behavior = props;
  }

};

let Deanna = new ChildCare ({
  child: "Deanna Davis",
  caregiver: "Brad Davis"
});
Deanna.behavior = "So-So";
Deanna.changeDiaper;
Deanna.behavior;

let Katie = new ChildCare ({
  child: "Katie Young",
  caregiver: "Forrest Gump"
});
Katie.behavior = "very poorly";
Katie.changeDiaper;
Katie.behavior;




