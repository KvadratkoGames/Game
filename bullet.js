class Bullet {
    constructor(x, y, radius, targetX, targetY, speed){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.targetX = targetX;
        this.targetY = targetY;
        this.speed = speed;
        this.dist = dist(this.x, this.y, this.targetX, this.targetY);
        this.dx = (this.x - this.targetX)/this.dist * this.speed;
        this.dy = (this.y - this.targetY)/this.dist * this.speed;
    }
    draw(){
        context.fillStyle = 'black';
        context.beginPath;
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.fill();
    }
    shoot(){
        this.x += this.dx;
        this.y += this.dy;
    }
}