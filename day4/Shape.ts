class Shape {
    Area:number;
    constructor(a:number){
        this.Area= a;
    }
}

class Cricle extends Shape {
    disp():void{
        console.log("Area of the circle: " + this.Area);
    }
}

var obj = new Cricle(150);
obj.disp();