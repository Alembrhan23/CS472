
// Question 4
function Animal(name, speed){
    this.name = name;
    this.speed = speed;
    this.run= function() {
        this.speed = this.speed + speed;// let's say it increases by 5
    }
    // Animal.compareBySpeed  declares, the method as static
    Animal.compareBySpeed=function(a1, a2) {
        return a1.speed - a2.speed;
    }
}

let a1 = new Animal('Dog', 1000);
let a2 = new Animal('Cat', 2000);
console.log(Animal.compareBySpeed(a1, a2));
console.log();

// Rabbit constructor function, inheriting from Animal
function Rabbit(name, speed, furColor) {
    Animal.call(this, name, speed); // Call the Animal constructor to initialize name and speed
    this.furColor = furColor;
}

// Inherit from Animal
Rabbit.prototype = Object.create(Animal.prototype);
Rabbit.prototype.constructor = Rabbit; // Set correct constructor

// Rabbit method: hide
Rabbit.prototype.hide = function() {
    console.log(`${this.name} hides.`);
};

