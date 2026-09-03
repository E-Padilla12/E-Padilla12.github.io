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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();


    // TODO 2 - Create Platforms
    // createPlatform(x, y, width, height, "color")
    createPlatform(500, 600, 50, 50, "black");
    createPlatform(250, 700, 50, 50, "blue");
    createPlatform(750, 500, 50, 50, "black");
    createPlatform(1000, 450, 300, 30, "blue");
    createPlatform(1000, 330, 50, 20, "black");
    createPlatform(800, 260, 100, 30, "blue");
    createPlatform(250, 350, 300, 30, "black");




    // TODO 3 - Create Collectables
    //createCollectable(type, x, y, gravity, bounce)
    createCollectable("diamond", 1350, 350);
    createCollectable("diamond", 400, 550);
    createCollectable("diamond", 100, 250);



    
    // TODO 4 - Create Cannons
    //createCannon(side, position, delay)
    createCannon("top", 400, 800);
    createCannon("bottom", 650, 800);
    createCannon("top", 1000, 1000);


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
