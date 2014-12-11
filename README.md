#Inheritance in JavaScript

**Inheritance** is a very important **OOPS** concept, by virtue of which children **classes** **inherit** from their parent **classes**. But now, question is how to implement **inheritance** in **JavaScript**?

We all know how to make **class** in **JavaScript**? **Class** in **JavaScript** is nothing but a **[constructor function](http://codechutney.in/blog/javascript/constructor-pattern/)**. Here is a sample class:

```JavaScript
function Peacock(name){
    this.name = name;
}
```
In **JavaScript**, we do not have any **extend** keyword, the only way to implement **inheritance** is through **prototype chaining**.

So, what is **prototype chaining**?

Each object in **JavaScript** has internal link to another object, through a property known as **[Prototype](http://codechutney.in/blog/javascript/prototype-in-javascript/)**. While moving through the chain of these **objects**, one would encounter 'null' in the **prototype** which would mean that Object **prototype** has reached.

When a property requested in one object is not found in that **object**, then **prototype chaining** is used to look into the next **object** in the chain and so on.....until the end of chain is reached. This behavior of **Prototype Chaining** help us to add **inheritance** in **JavaScript**.

Let's experience some inheritance using the given sample classes:

**LivingThing Class**
```JavaScript
function LivingThing(sleep){
    this.sleep = sleep;
}
```

**Bird Class**
```JavaScript
function Bird(eat) {
    this.eat = eat;
}
```

**Peacock Class**
```JavaScript
function Peacock(name){
    this.name = name;
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

We are a little unfortunate that we don't have the **extend** keyword in **JavaScript** as available in **Java**, but we aren't that **unlucky** as we have **[prototype](http://codechutney.in/blog/javascript/prototype-in-javascript/)** to our rescue!