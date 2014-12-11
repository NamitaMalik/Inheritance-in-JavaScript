/**
 * Created by Amit Thakkar on 11/12/14.
 */

function LivingThing(sleep) {
    this.sleep = sleep;
}

function Bird(eat) {
    this.eat = eat;
}

function Peacock(name) {
    this.name = name;
}

Bird.prototype = new LivingThing();
Bird.prototype.constructor = Bird;

Peacock.prototype = new Bird();
Peacock.prototype.constructor = Peacock;