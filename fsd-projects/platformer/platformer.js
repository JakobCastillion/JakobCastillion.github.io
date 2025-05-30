$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(350, 630, 200, 20);
    createPlatform(900, 630, 200, 20);
    createPlatform(650, 530, 200, 20);
    createPlatform(300, 430, 200, 20);
    createPlatform(1000, 430, 200, 20);
    createPlatform(100, 300, 200, 20);
    createPlatform(1200, 300, 200, 20);
    createPlatform(650, 330, 200, 20);
    createPlatform(900, 200, 200, 20);
    createPlatform(350, 200, 200, 20);


    // TODO 3 - Create Collectables
    createCollectable("gold" ,430, 570);
    createCollectable("gold" ,980, 570);
    createCollectable("gold" ,730, 460);
    createCollectable("gold" ,380, 360);
    createCollectable("gold" ,1080, 380);
    createCollectable("gold" ,180, 240);
    createCollectable("gold" ,1280, 250);
    createCollectable("gold" ,730, 280);
    createCollectable("gold" ,980, 150);
    createCollectable("gold" ,430, 150);
    
    // TODO 4 - Create Cannons
    createCannon("top", 300, 3500);
    createCannon("left", 200, 2500);
    createCannon("right", 200, 2700);
    createCannon("top", 1100, 3500);
    createCannon("left", 500, 3000);
    createCannon("right", 500, 2500);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
