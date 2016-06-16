#Inheritance in JavaScript

**Inheritance** is a very important **OOPS** concept, by virtue of which children **classes** **inherit** from their parent **classes**. But now, question is how to implement **inheritance** in **JavaScript**?

We all know how to make **class** in **JavaScript**? **Class** in **JavaScript** is nothing but a **[constructor function](http://codechutney.in/blog/javascript/constructor-pattern/)**. Here is a sample class:

```JavaScript
function Peacock() {
    this.dance = function() {
      console.log("I am Peacock! I can dance");
    };
}
```

In **JavaScript**, we do not have any **extend** keyword, the only way to implement **inheritance** is through **prototype chaining**.

So, what is **prototype chaining**?

Each object in **JavaScript** has internal link to another object, through a property known as **[Prototype](http://codechutney.in/blog/javascript/prototype-in-javascript/)**. While moving through the chain of these **objects**, one would encounter 'null' in the **prototype** which would mean that Object **prototype** has reached.

When a property requested in one object is not found in that **object**, then **prototype** of that **object** is looked into. **Prototype** contains the reference to the next **object** in the chain. **Prototype chaining** is used to look into the next **object** in the chain and so on.....until the end of chain is reached. This behavior of **Prototype Chaining** helps us to add **inheritance** in **JavaScript**.

Let's experience some inheritance using the given sample classes:

**LivingThing Class**

```JavaScript
function LivingThing() {
    this.move = function() {
        console.log("I am living thing! I can move!!");
    };
}
```

**Bird Class**

```JavaScript
function Bird() {
    this.fly = function() {
        console.log("I am bird! I can fly!!");
    };
}
```

**Peacock Class**

```JavaScript
function Peacock() {
    this.dance = function() {
      console.log("I am Peacock! I can dance");
    };
}
```

Now, we know that Peacock is a bird and bird is a living thing. So all we need to show here is their relationship i.e. we need to implement the **inheritance**. Here we go:

```JavaScript
Bird.prototype = new LivingThing();
Bird.prototype.constructor = Bird;
```

In the above two lines of code we have passed the instance of LivingThing to the **prototype** of Bird, therefore we have linked Bird to LivingThing. Second line though does not makes any difference to the **inheritance** but it is in important in the sense that it makes the constructor property of **prototype** refer to the correct class/function.

Now, let's link Peacock to the Bird class. This can be done in the following way:

```JavaScript
Peacock.prototype = new Bird();
Peacock.prototype.constructor = Peacock;
```

In the above snippet we have linked Peacock to Bird. This type of **chaining** can go on and on. The above set of snippets would lead us to hierarchy given below:

> LivingThing --> Bird --> Peacock

Lets try to create an object of Peacock **class**, and call dance, fly and move **methods/functions** on that object, and see what is happening??

```JavaScript
var peacock = new Peacock();
peacock.dance(); // I am Peacock! I can dance
peacock.fly(); // I am bird! I can fly!!
peacock.move(); // I am living thing! I can move!!
```

You can see, we can call the parent methods/function on child object/peacock. Let's see the above snippet in more detail:

We called ```dance()``` on Peacock **object**, since ```dance()``` belonged to Peacock, so it could be easily accessed. ```fly()``` belonged to Bird, but it could still be called on Peacock reason being that ```fly()``` was first searched in Peacock, on not finding ```fly()``` in Peacock, **prototype** was looked into to access the next **object** in the chain, which is Bird and hence we were able to call ```fly()```. Similar thing happened when ```move()``` was called, first Peacock object was searched, then hunt moved to the  **prototype** of Peacock in order to know the next object in the chain. Bird object was then looked into and on not finding ```move()``` there, reference of next **object** in **prototype** of Bird was looked which led the search to LivingThing **object**, which actually had the ```move()```. This is how we made a hierarchy starting from LivingThing to Peacock!

We are a little unfortunate that we don't have the **extend** keyword in **JavaScript** as available in **Java**, but we aren't that **unlucky** as we have **[prototype](http://namitamalik.github.io/Prototype-in-JavaScript/)** to our rescue!

Follow Me
---
[Github](https://github.com/NamitaMalik)

[Twitter](https://twitter.com/namita13_04)

[LinkedIn](https://in.linkedin.com/in/namita-malik-a7885b23)

[More Blogs By Me](https://namitamalik.github.io/)