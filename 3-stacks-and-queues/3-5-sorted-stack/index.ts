// Problem:  Write a program to sort a stack such that the smallest items are on the top. 
// You can use an additional temporary stack, but you may not copy the elements into any other data structure 
 // (such as an array). The stack supports the following operations: push, pop, peek, and is Empty. 
 import { Stack } from './../stack';

 // Solution #1 (mine):
 export class SortedStack {
     private _sorted = new Stack<number>();
     private _temp = new Stack<number>();

     get isEmpty(): boolean {
         return this._sorted.isEmpty;
     }

     push(data: number): void {
        if (!this._sorted.isEmpty && data > this._sorted.peek()) {
            this._sort(data);
        } else {
            this._sorted.push(data);
        }
     }

     pop(): number {
         if (this._sorted.isEmpty) {
             throw new Error('Stack is empty.');
         }

         return this._sorted.pop();
     }

     peek(): number {
        if (this._sorted.isEmpty) {
            throw new Error('Stack is empty.');
        }

        return this._sorted.peek();
     }

     private _sort(data: number): void {
        while (!this._sorted.isEmpty && data > this._sorted.peek()) {
            this._temp.push(this._sorted.pop());
        }

        this._sorted.push(data);

        while (!this._temp.isEmpty) {
            this._sorted.push(this._temp.pop());
        }
     }
 }