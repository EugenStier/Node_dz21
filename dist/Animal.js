"use strict";
class Animal {
}
class Dog extends Animal {
    makeSound() {
        return "Bark";
    }
}
class Cat extends Animal {
    makeSound() {
        return "Meow";
    }
}
// Использование
const animals = [new Dog(), new Cat()];
animals.forEach((animal) => console.log(animal.makeSound()));
