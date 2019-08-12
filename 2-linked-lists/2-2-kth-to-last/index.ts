// Problem: Implement an algorithm to find the kth to last element of a singly linked list. 
import { Node } from '../linked-list';

// Solution #1 (mine):
export function returnKthToLast(head: Node, k: number): Node {
    let current = head;
    let count = 1;

    while (current !== null) {
        if (count === k) {
            return current;
        }

        current = current.next;
        count++;
    }

    return null;
}

// Solution #2 (book):
export function returhKthToLastRecursive(head: Node, k: number, index: number): Node {
    if (head === null) {
        return null;
    }

    let node = returhKthToLastRecursive(head.next, k, index);
    index++;

    if (index === k) {
        return head;
    }

    return node;
}