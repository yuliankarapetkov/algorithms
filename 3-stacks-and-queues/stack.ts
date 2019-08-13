export class StackNode<T> {
    next: StackNode<T>;
    constructor(public data: T) {}
}

export class Stack<T> {
    private top: StackNode<T>;

    get isEmpty(): boolean {
        return !this.top;
    }

    pop(): T {
        if (this.isEmpty) {
            throw new Error('Empty Stack');
        }

        const item = this.top.data;
        this.top = this.top.next;

        return item;
    }

    push(data: T): void {
        const item = new StackNode(data);
        item.next = this.top;
        this.top = item;
    }

    peek(): T {
        if (this.isEmpty) {
            throw new Error('Empty Stack');
        }

        return this.top.data;
    }
}