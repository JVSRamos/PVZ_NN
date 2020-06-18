const FR_RATE = 30; // frame/second
const SUNRATE = FR_RATE*10;
const SUNVAL = 25;
const ROWS = 5;
const COLS = 9;
const GAMETIME = FR_RATE*120;
const SPAWNRATE = FR_RATE*5;
const NPLANTS = 1;
const BACKPATH = "Assets/back.png";

const ZOMBIES = {
  normal: {
    hp: 10,
    speed: 1
  }
}

const PLANTS = {
  normal: {
    hp: 5,
    cadence: 1/(FR_RATE*5/2),
    img:"Assets/normal.gif",
    cost: 100
  },
  sunflower: {
    hp: 5,
    cadence: 1/(FR_RATE*10),
    sunval:25,
    cost: 5
  }
}

const BULLETS = {
  normal: {
    dammage: 1,
    speed: 10
  }
}
