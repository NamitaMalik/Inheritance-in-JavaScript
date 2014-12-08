**Inheritance in JavaScript**

**Inheritance** is a very important **OOPS** concept, by virtue of which children classes inherit from their parent classes. But now, question is how to implement inheritance in JavaScript.

We all know how to make class in JavaScript? Class in **JavaScript** is nothing but a **constructor function**. Here is a sample class:

```JavaScript
function Peacock(name){
this.name = name;
}
```
In **JavaScript**, we do not have any **extend** keyword, the only way to implement **inheritance** is through **prototype chaining**.

So, what is **prototype chaining**?

Each object in **JavaScript** has internal link to another object, through a property known as **Prototype**. While moving through the chain of these **objects**, one would encounter 'null' in the prototype which would mean that Object prototype has reached.
When a property requested in one object is not found in that **object**, then **prototype chaining** is used to look into the next **object** in the chain and so on.....until the end of chain is reached. This behavior of **Prototype Chaining** help us to add **inheritance** in **JavaScript**.

Let's experience some inheritance using the given sample classes: