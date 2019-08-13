// Problem:  Implement a MyQueue class which implements a queue using two stacks.
import { Stack } from "../stack";

// Solution #1 (book):
export class StackQueue {
    private _oldest = new Stack<number>();
    private _newest = new Stack<number>();

    get isEmpty(): boolean {
        return this._oldest.isEmpty && this._newest.isEmpty;
    }

    add(data: number): void {
        this._newest.push(data);
    }

    remove(): number {
        this._shiftElements();
        return this._oldest.pop();
    }

    peek(): number {
        this._shiftElements();
        return this._oldest.peek();
    }

    private _shiftElements(): void {
        if (this._oldest.isEmpty) {
            while (!this._newest.isEmpty) {
                this._oldest.push(this._newest.pop());
            }
        }
    }
}