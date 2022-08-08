// write a circle object which will have the radius property and area property. radius property should be read and write, area property will be read only

const circle = {
    radius: 1,
    get area(){
        return Math.PI * this.radius * this.radius;
    }
};

console.log(circle);
console.log(circle.radius);
console.log(circle.area);