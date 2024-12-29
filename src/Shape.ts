abstract class Shape {
  abstract calculateArea(): number;
}

abstract class ColoredShape extends Shape {
  abstract color: string;
}

class ColoredCircle extends ColoredShape {
  constructor(public radius: number, public color: string) {
    super();
  }

  calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

class ColoredRectangle extends ColoredShape {
  constructor(
    public width: number,
    public height: number,
    public color: string
  ) {
    super();
  }

  calculateArea(): number {
    return this.width * this.height;
  }
}

// Использование
const shapes: ColoredShape[] = [
  new ColoredCircle(10, "red"),
  new ColoredRectangle(5, 10, "blue"),
];

shapes.forEach((shape) => {
  console.log(`Color: ${shape.color}, Area: ${shape.calculateArea()}`);
});
