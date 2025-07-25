var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        //////////////////////////////////////////////////////////////////
        // ANIMATION VARIABLES HERE //////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        // TODO (several):
        var tree;
        var buildings = [];
        var car;
        var treev2;
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO 1:
            // this currently fills the background with an obnoxious yellow;
            // you should modify both the height and color to suit your game
            var backgroundFill = draw.rect(canvasWidth,groundY,'black');
            background.addChild(backgroundFill);

            // TODO 2: - Add a moon and starfield
            for (var i = 0;i<200; i+=1) {     
            var circle = draw.circle(2, "white", "LightGray", 2);   
            circle.x = canvasWidth * Math.random();
            circle.y = groundY * Math.random();
            background.addChild(circle);
            }
            var moon = draw.bitmap("img/moon.png");
            moon.x = 1200;
            moon.y = -100;
            moon.scaleX = 1.0;
            moon.scaleY = 1.0;
            background.addChild(moon);
    
            // TODO 4: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            for (var i = 0; i < 51; ++i) {
            var buildingHeight = (200*Math.random()*1) +100;
            var building = draw.rect(75, buildingHeight, "Gray", "Black", 1);
            building.x = 200 * i;
            building.y = groundY - buildingHeight;
            background.addChild(building);
             buildings.push(building);
}
            
            // TODO 3: Part 1 - Add a tree
            car = draw.bitmap("img/lacar.png");
            car.x = 100;
            car.y = groundY-70;
            car.scaleX = 0.3
            car.scaleY = 0.3
            background.addChild(car);

            tree = draw.bitmap("img/buildingsee.png");
            tree.x = 100;
            tree.y = groundY-240;
            tree.scaleX = 0.5
            tree.scaleY = 0.5
            background.addChild(tree);

            treev2 = draw.bitmap("img/buildingsee.png");
            treev2.x = 1100;
            treev2.y = groundY-240;
            treev2.scaleX = 0.5
            treev2.scaleY = 0.5
            background.addChild(treev2);



            
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 3: Part 2 - Move the tree!
            treev2.x = treev2.x - 1;

            if (treev2.x < -200) {
             treev2.x = canvasWidth;
}
            tree.x = tree.x - 1;

            if (tree.x < -200) {
             tree.x = canvasWidth;
}
            car.x = car.x - 4;

            if (car.x < -200) {
             car.x = canvasWidth;
}
            
            // TODO 4: Part 2 - Parallax
            for (var i = 0; i < buildings.length; i++) {
             var eachElement = buildings[i];
            eachElement.x = eachElement.x - 0.2;

            if (eachElement.x < -200) {
             eachElement.x = canvasWidth;
}
             // code to do something with each element
}

        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
