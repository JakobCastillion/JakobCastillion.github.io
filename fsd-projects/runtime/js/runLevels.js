var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(false);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    function createObstacles(x, y, speedX){
    var hitZoneSize = 25;
    var damageFromObstacle = 50;
    var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
    sawBladeHitZone.x = x;
    sawBladeHitZone.y = y-10; 
    sawBladeHitZone.rotationalVelocity = 30;
    sawBladeHitZone.velocityX = speedX;
    game.addGameItem(sawBladeHitZone);
    var obstacleImage = draw.bitmap("img/energy.png");
    sawBladeHitZone.addChild(obstacleImage);
    obstacleImage.scaleX = 0.1
    obstacleImage.scaleY = 0.1
    obstacleImage.x=-23
    obstacleImage.y=-21
    
  }

    function createEnemy(x,y, speedX, scale) {
    var enemy = game.createGameItem("enemy", 25);
    var redSquare = draw.bitmap("img/enemy.png");
    redSquare.x = -25;
    redSquare.y = -25;
    redSquare.scaleX = 0.5*scale;
    redSquare.scaleY = 0.5*scale
    enemy.addChild(redSquare);
    enemy.x = x;
    enemy.y = y
    game.addGameItem(enemy);
    
    enemy.velocityX = speedX;
    enemy.onPlayerCollision = function () {
    game.changeIntegrity(-100)
    }
    enemy.onProjectileCollision = function () {
    game.increaseScore(100);
    enemy.fadeOut();
    }
  }


    function createReward(x,y) {
    var reward = game.createGameItem("reward", 25);
    var blueSquare = draw.bitmap("img/medickit.png")
    blueSquare.x = -25;
    blueSquare.y = -25;
    blueSquare.scaleX = 0.2;
    blueSquare.scaleY = 0.2
    reward.addChild(blueSquare);
    reward.x = x;
    reward.y = y
    game.addGameItem(reward);
    
    reward.velocityX = -1;
    reward.onPlayerCollision = function () {
    game.changeIntegrity(+25)
    reward.fadeOut()
    }
    reward.onProjectileCollision = function () {
    reward.fadeOut();
    game.changeIntegrity(+5)
    }
    }

    function createMarker(x,y){
      var marker = game.createGameItem("marker", 25);
      var greenSquare = draw.bitmap("img/flag.png")

      greenSquare.x = -25;
      greenSquare.y = -25;
      greenSquare.scaleX = 0.3
      greenSquare.scaleY = 0.3
      marker.addChild(greenSquare);
      marker.x = x;
      marker.y = y
      game.addGameItem(marker);
      marker.velocityX = -2;
      marker.onPlayerCollision = function () {
        marker.fadeOut();
        startLevel();
      }
      marker.onProjectileCollision = function () {
        marker.fadeOut();
        startLevel();
      }
    } 
    
    function startLevel() {
      // TODO 13 goes below here
      var level = levelData[currentLevel]
      var levelObjects = level.gameItems
      for(var i = 0; i < levelObjects.length; i++){
        var element = levelObjects[i]

        if(element.type === "sawblade"){
          createObstacles(element.x, element.y, element.speedX)
        } else if(element.type === "marker") {
          createMarker(element.x, element.y)
        }else if(element.type === "reward"){
          createReward(element.x, element.y)
        }else if(element.type === "enemy"){
          createEnemy(element.x, element.y, element.speedX, element.scale)
        }
      }




    

      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
