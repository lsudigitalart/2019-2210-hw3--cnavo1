

function draw( ) {
    createCanvas(800, 600);
    background(15, 21, 105);

    strokeWeight(3)
    //stroke(255, 59, 0)
    //fill(255, 148, 0)

    for(var i = 1000; i > 0; i = i -50) {
        for(var m = 0; m < 50; m += 100) {
            fill(random(255), random(148), random(0));
            
            
       }
        //fill(255, 148, 0)
        stroke(255, 59, 0)
        circle(0, 600, i-85);
            stroke(255, 122, 193)
            //fill(106, 233, 177)
            fill(random(106), random(233), random(177));
            circle(0, 0, i-85)
        stroke(255, 148, 0)
        //fill(255, 59, 0)
        fill(random(255), random(59), random(0));
        circle(800, 600, i-85);
            //fill(255, 122, 193)
            fill(random(255), random(122), random(193));
            stroke(106, 233, 177)
            circle(800, 0, i-85)
        fill(255, 255, 255)
        stroke(random(225), random(225), random(225))
        circle(-50, 300, i-100);
            fill(255, 255, 255)
            stroke(random(225), random(225), random(225))
            circle(850, 300, i-100);
        stroke(random(255), random(225), random(225))
        fill(0)
        circle(400, -120, i-100)
            stroke(random(255), random(225), random(225))
            fill(0)
            circle(400, 720, i-100)
        
    
    }
    

    for(var i = 1000; i > 0; i = i -15) {
        stroke(0)
        strokeWeight(7);
        point(795, i-3);
        point(780, i-3)
        point(765, i-3)
        point(5, i-3);
        point(20, i-3)
        point(35, i-3)
        
        
    }

  

}

