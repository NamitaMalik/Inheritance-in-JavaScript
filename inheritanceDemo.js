/**
 * Created by Amit Thakkar on 11/12/14.
 */

function LivingThing() {
    this.move = function() {
        console.log("I am living thing! I can move!!");
    };
}

function Bird() {
    this.fly = function() {
        console.log("I am bird! I can fly!!");
    };
}

function Peacock() {
    this.dance = function() {
      console.log("I am Peacock! I can dance");
    };
}

Bird.prototype = new LivingThing();
Bird.prototype.constructor = Bird;

Peacock.prototype = new Bird();
Peacock.prototype.constructor = Peacock;

var peacock = new Peacock();
peacock.dance(); // I am Peacock! I can dance
peacock.fly(); // I am bird! I can fly!!
peacock.move(); // I am living thing! I can move!!