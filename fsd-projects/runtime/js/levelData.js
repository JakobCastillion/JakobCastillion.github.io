var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 700, y: groundY, speedX: -4 },
          { type: "sawblade", x: 1300, y: groundY, speedX: -4 },
          { type: "enemy", x: 1500, y: groundY-60, speedX: -3, scale: 1},
          { type: "sawblade", x: 1900, y: groundY, speedX: -4},
          { type: "marker", x: 2100, y: groundY-100},

        ],
      },
        {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 700, y: groundY, speedX: -3 },
          { type: "sawblade", x: 1000, y: groundY, speedX: -3 },
          { type: "enemy", x: 1500, y: groundY-60, speedX: -3, scale: 1},
          { type: "sawblade", x: 1300, y: groundY, speedX: -3 },
          { type: "enemy", x: 1700, y: groundY-60, speedX: -3, scale: 1},
          { type: "sawblade", x: 1600, y: groundY, speedX: -5 },
          { type: "sawblade", x: 1900, y: groundY, speedX: -3 },
          { type: "reward", x: 800, y: groundY - 60},
          { type: "marker", x: 2500, y: groundY-100},
        ],
      },
            {
        name: "Robot Distruction",
        number: 3,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 700, y: groundY, speedX: -3 },
          { type: "enemy", x: 1000, y: groundY-60, speedX: -5, scale: 1 },
          { type: "enemy", x: 1500, y: groundY-60, speedX: -3, scale: 1},
          { type: "sawblade", x: 1300, y: groundY, speedX: -3 },
          { type: "enemy", x: 1700, y: groundY-60, speedX: -3, scale: 1},
          { type: "enemy", x: 1600, y: groundY-60, speedX: -5, scale: 1 },
          { type: "enemy", x: 1900, y: groundY-60, speedX: -3, scale: 1 },
          { type: "reward", x: 1800, y: groundY - 60},
          { type: "marker", x: 2500, y: groundY-100},

        ],
      },
            {
        name: "dance of the saw",
        number: 4,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 700, y: groundY, speedX: -1 },
          { type: "sawblade", x: 1000, y: groundY, speedX: -3 },
          { type: "sawblade", x: 1500, y: groundY-100, speedX: -4},
          { type: "sawblade", x: 1300, y: groundY, speedX: -5 },
          { type: "sawblade", x: 1700, y: groundY-100, speedX: -4},
          { type: "sawblade", x: 1600, y: groundY, speedX: -5 },
          { type: "sawblade", x: 1900, y: groundY, speedX: -3 },
          { type: "sawblade", x: 1900, y: groundY, speedX: -6},
          { type: "marker", x: 2500, y: groundY-100},
        ],
      },
            {
        name: "Mann Vs Machine",
        number: 5,
        speed: -3,
        gameItems: [
          { type: "enemy", x: 700, y: groundY-60, speedX: -3, scale: 1 },
          { type: "enemy", x: 1000, y: groundY-60, speedX: -3, scale: 1 },
          { type: "enemy", x: 1500, y: groundY-60, speedX: -3, scale: 1},
          { type: "sawblade", x: 1300, y: groundY, speedX: -3 },
          { type: "enemy", x: 1700, y: groundY-60, speedX: -3, scale: 1},
          { type: "sawblade", x: 1600, y: groundY, speedX: -5 },
          { type: "enemy", x: 1900, y: groundY-60, speedX: -3, scale: 1 },
          { type: "reward", x: 800, y: groundY - 60},
          { type: "marker", x: 2500, y: groundY-100},
        ],
      },
            {
        name: "Ro-bot",
        number: 6,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 700, y: groundY, speedX: -3 },
          { type: "sawblade", x: 1000, y: groundY, speedX: -3 },
          { type: "enemy", x: 1500, y: groundY-60, speedX: -3, scale: 1},
          { type: "sawblade", x: 1300, y: groundY, speedX: -3 },
          { type: "enemy", x: 1700, y: groundY-60, speedX: -3, scale: 1},
          { type: "enemy", x: 1800, y: groundY-60, speedX: -5, scale: 1},
          { type: "sawblade", x: 1600, y: groundY, speedX: -5 },
          { type: "sawblade", x: 1900, y: groundY, speedX: -3 },
          { type: "reward", x: 800, y: groundY - 60},
          { type: "marker", x: 2500, y: groundY-100},
        ],
      },
            {
        name: "Robot ralambago",
        number: 7,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 700, y: groundY, speedX: -3 },
          { type: "sawblade", x: 1000, y: groundY, speedX: -3 },
          { type: "enemy", x: 1500, y: groundY-60, speedX: -3, scale: 1},
          { type: "sawblade", x: 1300, y: groundY, speedX: -3 },
          { type: "enemy", x: 1700, y: groundY-60, speedX: -3, scale: 1},
          { type: "sawblade", x: 1600, y: groundY, speedX: -5 },
          { type: "enemy", x: 1750, y: groundY-60, speedX: -8, scale: 1},
          { type: "sawblade", x: 1900, y: groundY, speedX: -3 },
          { type: "enemy", x: 1500, y: groundY-60, speedX: -1, scale: 1},
          { type: "enemy", x: 1700, y: groundY-60, speedX: -10, scale: 1},
          { type: "reward", x: 800, y: groundY - 60},
          { type: "marker", x: 2500, y: groundY-100},
        ],
      },
            {
        name: "jesus thats alot of robots",
        number: 8,
        speed: -3,
        gameItems: [
          { type: "enemy", x: 1760, y: groundY-60, speedX: -2, scale: 1},
          { type: "enemy", x: 1750, y: groundY-60, speedX: -3, scale: 1},
          { type: "enemy", x: 1770, y: groundY-60, speedX: -3, scale: 1},
          { type: "enemy", x: 1780, y: groundY-60, speedX: -2, scale: 1},
          { type: "enemy", x: 1790, y: groundY-60, speedX: -3, scale: 1},
          { type: "enemy", x: 1710, y: groundY-60, speedX: -2, scale: 1},
          { type: "enemy", x: 1720, y: groundY-60, speedX: -3, scale: 1},
          { type: "enemy", x: 1730, y: groundY-60, speedX: -5, scale: 1},
          { type: "enemy", x: 1740, y: groundY-60, speedX: -3, scale: 1},
          { type: "enemy", x: 1690, y: groundY-60, speedX: -5, scale: 1},
          { type: "enemy", x: 1680, y: groundY-60, speedX: -4, scale: 1},
          { type: "enemy", x: 1660, y: groundY-60, speedX: -3, scale: 1},
          { type: "enemy", x: 500, y: groundY-60, speedX: -1, scale: 1},
          { type: "enemy", x: 1800, y: groundY-60, speedX: -3, scale: 1},
          { type: "enemy", x: 1800, y: groundY-60, speedX: -3, scale: 1},
          { type: "marker", x: 2500, y: groundY-100},
        ],
      },
                  {
        name: "RoB0b, Destroyer of Planets",
        number: 9,
        speed: -3,
        gameItems: [
          { type: "enemy", x: 1760, y: groundY-600, speedX: -3, scale: 10},
          { type: "sawblade", x: 5000, y: groundY, speedX: -30 },
          { type: "sawblade", x: 4900, y: groundY, speedX: -30 },
          { type: "sawblade", x: 4800, y: groundY, speedX: -30 },
          { type: "sawblade", x: 5100, y: groundY-20, speedX: -30 },
          { type: "sawblade", x: 4950, y: groundY-20, speedX: -30 },
          { type: "sawblade", x: 4850, y: groundY-20, speedX: -30 },
        ], // unkillable boss is a distraction from the sawblade barrage
      },

    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
