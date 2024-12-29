"use strict";
class Shape {
}
class ColoredShape extends Shape {
}
class ColoredCircle extends ColoredShape {
    constructor(radius, color) {
        super();
        this.radius = radius;
        this.color = color;
    }
    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}
class ColoredRectangle extends ColoredShape {
    constructor(width, height, color) {
        super();
        this.width = width;
        this.height = height;
        this.color = color;
    }
    calculateArea() {
        return this.width * this.height;
    }
}
// Использование
const shapes = [
    new ColoredCircle(10, "red"),
    new ColoredRectangle(5, 10, "blue"),
];
shapes.forEach((shape) => {
    console.log(`Color: ${shape.color}, Area: ${shape.calculateArea()}`);
});
