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
          { type: "sawblade", x: 700, y: groundY, speedX: -12 },
          { type: "sawblade", x: 1300, y: groundY, speedX: -3 },
          { type: "sawblade", x: 1900, y: groundY, speedX: -3 },
          { type: "marker", x: 2100, y: groundY-60},

        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 700, y: groundY, speedX: -3 },
          { type: "sawblade", x: 1000, y: groundY, speedX: -3 },
          { type: "sawblade", x: 1300, y: groundY, speedX: -3 },
          { type: "sawblade", x: 1600, y: groundY, speedX: -15 },
          { type: "sawblade", x: 1900, y: groundY, speedX: -3 },
          { type: "reward", x: 800, y: groundY - 60},

        ],
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
