# Queue Tutorial

## What is a Queue?

* A **Queue** is a data structure that follows the **First-In-First-Out (FIFO)** principle. The first element added to the queue will be the first one to be removed.

## Attributes:

* `items` (An array to store the elements of the queue)

## Methods:

* `enqueue`: Adds an item to the end of the queue
* `dequeue`: Removes and returns the item at the front of the queue
* `getFirst`: Returns the item at the front of the queue without removing it
* `isEmpty`: Checks if the queue is empty
* `size`: Returns the number of items in the queue
* `clear`: Removes all items from the queue

## Example:

```js
import { Queue } from './queue.js'; // Import the Queue class

const queue = new Queue (); // Create a new instance of the Queue

queue.enqueue ('First'); // Add the item 'First' to the end of the queue
queue.enqueue ('Second'); // Add the item 'Second' to the end of the queue

console.log (queue.getFirst ()); // Get the item at the front of the queue without removing it. Output: 'First'
console.log (queue.dequeue ());  // Remove and return the item at the front of the queue. Output: 'First'

console.log (queue.size ()); // Return the number of items in the queue. Output: 1
queue.clear (); // Remove all items from the queue
console.log (queue.isEmpty ()); // Check if the queue is empty. Output: true
```