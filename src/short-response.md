# Mod 1 Assessment - Short Response Section

Write your responses directly in this file. Follow markdown formatting guidelines.

---

## Section 1: Short Response

### Question 1

Kind of Error: This code throws a ReferenceError.

Why it's thrown: The variable currentStatus is declared using the keyword let inside the if and else blocks. Variables declared with let (and const) are block-scoped, therefore the variable currentStatus cannot be referenced outside of the if and else blocks. As a result, a ReferenceError is thrown when we write console.log(currentStatus) outside of the blocks.

Fix: Declare currentStatus before the conditional using let, and then assign values to it inside the blocks:

```js
const react = (isReuben) => {
  let currentStatus; // Declare outside the blocks
  if (isReuben) {
    currentStatus = 'Everything is just fine';
  } else {
    currentStatus = 'Time to panic.'
  }
  console.log(currentStatus);
}
```


### Question 2
The following code will log “Michael Jordan”. This happens because both bestPlayer and theGOAT hold a reference to the same object in memory. Even though bestPlayer was initially declared with the value "Lebron James", that value is stored as the name property of the object, not as a standalone primitive. When theGOAT modifies the object using .name = "Michael Jordan", it changes the shared referenced object itself. Since bestPlayer references that same object, bestPlayer.name also reflects the updated value.

This works because the variable was declared with let, which allows reassignment of the reference if needed. If the variable had been declared with const, you wouldn’t be able to reassign the variable to a new object—but you could still modify the properties of the existing referenced object. The error would only occur if you tried to reassign the const variable itself, not when modifying the object it references.


### Question 3

The following code will log `Paul is the hardest working person in the room.` and
`Laisha is also the hardest working person in the room.`

This happens because of scope. Inside the function, shout0ut declares its own local variable theHustler, which is scoped to that function. When the function runs, the console.log statement uses this inner theHustler, so it prints the sentence with `Paul`.

Outside the function, there is another variable also named theHustler, but it exists in the outer (global) scope. Since the function’s local variable does not affect variables outside of its scope, the second console.log uses the outer theHustler, printing the sentence with Laisha.

This demonstrates that variables with the same name can exist in different scopes, and each version is only accessible within its own scope.

### Question 4


### Question 5

A scope is the current context of execution in which values and expressions are "visible" or can be referenced.

In other words it is the area of code in which it can be accessed. It influences the way you structure your code, manage your data, and prevent conflicts between variables.

A helpful way to think about scope is like rooms in a house.
	- A global variable is like a piece of furniture in the living room—everyone in the house can see and use it.
	- A local variable is like something inside your bedroom—only you can access it while you’re inside that room. People outside the room cannot see or use it.


    ```js
let name = "Alex"; // global scope

function introduce() {
  let name = "Jordan"; // local scope (only inside the function)
  console.log("Inside the function:", Jordan);
}

introduce();
console.log("Outside the function:", Alex);

```
In this example, the inner name variable does not affect the outer one because each exists in its own scope.



### Question 6 

A module in JavaScript is a separate file that contains reusable code.


Modules help keep your programs organized, modular, and maintainable by splitting code into smaller parts.
Think of modules as containers — each file can export the code it wants to share and import (or require) code from other files.

require()
Used to import modules into another file
module.exports
Used to export code (functions, objects, variables) from a file

```javascript

require()
// Used to import modules into another file

module.exports
//Used to export code (functions, objects, variables) from a file
```

Example Usage:

To export a value in Node, assign that value to module.exports:

```js
// add.js
const add = (a, b) => {
  return a + b;
}

module.exports = add;

// To import that value, call the require() function and pass in a path to that file. require() will return the module.exports value:

const add = require('./add.js');
add(5,3); // returns 8
```

In these examples, the add function is exported and then imported into another file where it is used.





### Question 7

After this code runs, fruits and fruitMinusOne will hold the following values:

```js
['apple', 'banana', 'cherry', 'date'] // fruits
['apple', 'banana', 'cherry'] // fruitsMinusOne
```

Arrays are reference types. This means that the parameter `arr` will hold a reference to the input array's location in memory, not a copy of the array's data. If we were to use `arr.pop()` directly, we would be causing a side effect where the input array `fruits` would be mutated making the function impure. By making a copy of the array, we avoid the side effect of mutating the input array, keeping the function pure.

By keeping the function pure, we can avoid potentially causing bugs elsewhere in the program where that array is being used.


### Question 8

Single Item Data Type: I would use an object to represent a single item in the cart. Objects allow us to store multiple related properties about each item, such as the product name, price, quantity, and product ID.

Why: An object is ideal because each item has multiple attributes that need to be kept together. For example, we need to know not just what the item is, but also how many of them are in the cart and how much each costs. Objects let us access these properties by name (e.g., `item.quantity`), making our code more readable and maintainable.

Entire Shopping Cart Data Type: I would use an array to represent the entire shopping cart. The array would contain multiple item objects.

Why: An array is the best choice because a shopping cart is an ordered collection of items, and we need to be able to iterate through all items (for example, to calculate the total price). Arrays also make it easy to add new items `(.push())`, remove items `(.splice())`, and find specific items `(.find())`.

```js

const shoppingCart = [
  {
    id: 101,
    name: "Wireless Headphones",
    price: 79.99,
    quantity: 1
  },
  {
    id: 205,
    name: "USB-C Cable",
    price: 12.99,
    quantity: 3
  },
  {
    id: 310,
    name: "Laptop Stand",
    price: 45.00,
    quantity: 1
  }
];

```