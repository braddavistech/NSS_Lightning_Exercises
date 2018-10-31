class Restaurant {
  constructor (props) {
      this.name = props.name
      this.address = props.address
      this.hasStromboli = props.hasStromboli
      this.hourOpen = props.hourOpen
      this.hourClosed = props.hourClosed
      this.menu = {
          small_pizza: null,
          large_pizza: null,
          soda: null,
          salad: null,
          breadsticks: null
      }
  }

  get ComboPrice () {
    return ((this.menu.small_pizza + this.menu.soda) * this.discount).toFixed(2);
  }

  set Discount (props) {
      this.discount = props;
  }

  /*
      Method to set the menu items after the object has
      been created.
  */
  setMenu (menuItems) {
      for (const item in menuItems) {
          this.menu[item] = Number(menuItems[item])
      }
  }

  /*
      Get a special, combined price for a combo of a
      small pizza, soda, and a salad.
  */

};

let nellys = new Restaurant ({
  name: "Nelly's Pizza",
  address: "5441 Main Street, Spring Hill, TN 37174",
  hasStromboli: true,
  hourOpen: "11:00 am",
  hourClosed: "8:00 pm",
})

nellys.setMenu ({
  small_pizza: 15,
  large_pizza: 17,
  soda: 2.75,
  salad: 5.75,
  breadsticks: 6.50
})

nellys.Discount = .85;
console.log(nellys.ComboPrice);

console.log(nellys);