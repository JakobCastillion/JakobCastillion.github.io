var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
        
    
    window.opspark.makeGame = function() {
        
        window.opspark.game = {};
        var game = window.opspark.game;
        
        ///////////////////
        // PROGRAM SETUP //
        ///////////////////
        
        // TODO 1 : Declare and initialize our variables
        var circle;
        var circles = [];// array for the ammount of circles drawn
        


        // TODO 2 : Create a function that draws a circle 
        function drawCircle(){
            circle = draw.randomCircleInArea(canvas, true, true, "#999", 2); // draws random circles in different areas
            physikz.addRandomVelocity(circle, canvas, 5, 5); // adds a random direction and velocity
            view.addChild(circle); 
            circles.push(circle); // adds new circles to the array
        }


        // TODO 3 : Call the drawCircle() function


        // TODO 7 : Use a loop to create multiple circles
        for (var i = 0; i < 500; i++){
            drawCircle()
        } // draws circles 500 times, or however many the number that i has to be less than



        ///////////////////
        // PROGRAM LOGIC //
        ///////////////////
        
        /* 
        This Function is called 60 times/second, producing 60 frames/second.
        In each frame, for every circle, it should redraw that circle
        and check to see if it has drifted off the screen.         
        */
        function update() {
            // TODO 4 : Update the position of each circle using physikz.updatePosition()
 
            // TODO 5 : Call game.checkCirclePosition() on your circles

            // TODO 8 / TODO 9 : Iterate over the array
           for (i=0; i<circles.length; i++){
            physikz.updatePosition(circles[i]); // pushes the circles in random directions
            game.checkCirclePosition(circles[i]); // checks the positon of each circle so we know where they are
           }

        };
    
        /* 
        This Function should check the position of a circle that is passed to the 
        Function. If that circle drifts off the screen, this Function should move
        it to the opposite side of the screen.
        */
        game.checkCirclePosition = function(circle) {

            // if the circle has gone past the RIGHT side of the screen then place it on the LEFT
            if ( circle.x > canvas.width ) { // 
                circle.x = 0;
            }
            
            // TODO 6 : YOUR CODE STARTS HERE //////////////////////
            if (circle.y > canvas.height){  // if the circles goes past the bottom, place it on the top
            circle.y = 0
            }
            if (circle.y < 0){  // if the circles goes past the top, place it on the bottom
            circle.y = canvas.height
            }
            if ( circle.x < 0) {  // if the circles goes past the left, place it on the right
                circle.x = canvas.width;
            }

            // YOUR TODO 6 CODE ENDS HERE //////////////////////////
        }
        
        /////////////////////////////////////////////////////////////
        // --- NO CODE BELOW HERE  --- DO NOT REMOVE THIS CODE --- //
        /////////////////////////////////////////////////////////////
        
        view.addChild(fps);
        app.addUpdateable(fps);
        
        game.circle = circle;
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;
        
        app.addUpdateable(window.opspark.game);
    }
};

// DO NOT REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}
