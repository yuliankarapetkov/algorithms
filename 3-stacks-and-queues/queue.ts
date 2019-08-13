export class QueueNode {
    next: QueueNode;
    constructor(public data: number) {
    }
}

export class Queue {
    first: QueueNode;
    last: QueueNode;

    get isEmpty(): boolean {
        return !this.first;
    }

    add(item: number): void {
        const node = new QueueNode(item);

        // my approach
        if (this.isEmpty) {
            this.first = node;
            this.last = this.first;
        } else {
            this.last.next = node;
            this.last = node;
        }

        // book
        // if (this.last) {
        //     this.last.next = node;
        // }

        // this.last = node;

        // if (this.isEmpty) {
        //     this.first = this.last;
        // }
    }

    remove(): number {
        if (this.isEmpty) {
            throw new Error('Queue is empty.');
        }

        const { data } = this.first;
        this.first = this.first.next;

        if (this.isEmpty) {
            this.last = null;
        }

        return data;
    }

    peek(): number {
        if (this.isEmpty) {
            throw new Error('Queue is empty.');
        }

        return this.last.data;
    }
}