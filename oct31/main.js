class Birds {

  constructor (props) {
      this.height = props.height
      this.flightless = true
      this.isExtinct = props.isExtinct
      this.name = props.name
      this.runningSpeed = props.runningSpeed

  }

  blowMyMind () {
      return `The ${this.name} is a big, scary bird that stands up to ${this.height} and can run up to ${this.runningSpeed} mph!`
  }
}

const placeHolder = document.getElementById("birdMan");

let penguinDeets = {
  height: 3.7,
  isExtinct: false,
  name: "Emperor Penguin",
  runningSpeed: 5.6
}
const penguin = new Birds(penguinDeets);
let penguinPrint = `<p class="birdFacts">${penguin.blowMyMind()}</p>`;


let emuDeets = {
  height: 5,
  isExtinct: false,
  name: "Emu",
  runningSpeed: 30
}
const emu = new Birds(emuDeets);
let emuPrint = `<p class="birdFacts">${emu.blowMyMind()}</p>`;

let dwarfDeets = {
  height: 3.2,
  isExtinct: false,
  name: "Lesser Rhea",
  runningSpeed: 37
}
const dwarf = new Birds(dwarfDeets);
let dwarfPrint = `<p class="birdFacts">${dwarf.blowMyMind()}</p>`;

placeHolder.innerHTML = `<h1 id="title">CRAZY BIRD FACTS</h1>` + penguinPrint + emuPrint + dwarfPrint;
let bkgrndImg = document.createElement("img");
bkgrndImg.setAttribute("src", "roadrunner.jpg");
bkgrndImg.setAttribute("id", "bkgrnd");
document.body.appendChild(bkgrndImg);