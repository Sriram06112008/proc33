class Snow {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
        }
        this.image = loadImage("snow4.webp");
        this.body = Bodies.circle(x, y, 50, options);
        //this.r = r;
        World.add(world, this.body);   

    }
    display() 
    {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        image(this.image,0 , 0, 50, 50);
        imageMode(CENTER);
        noStroke();
        pop();
    }
}