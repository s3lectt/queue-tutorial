export class Queue {

    constructor() {
        this.items = [];
    }

    enqueue(item) {

        this.items.push(item);

        return item;
    }

    dequeue() {
        if (this.isEmpty ()) throw new Error('The queue is empty!');

        return this.items.shift();
    }

    getFirst() {

        if (this.isEmpty ()) throw new Error('The queue is empty!');

        return this.items[0];

    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    clear() {
        this.items = [];
    }

}