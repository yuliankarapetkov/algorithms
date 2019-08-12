// Problem: You have two numbers represented by a linked list, where each node contains a single digit. 
// The digits are stored in reverse order, such that the 1 's digit is at the head of the list.
//  Write a function that adds the two numbers and returns the sum as a linked list. 
import { Node } from '../linked-list';

// Solution #1 (mine):
export function toNumber(head: Node): number {
    let current = head;
    let power = 0;
    let number = 0;

    while (current !== null) {
        number += current.data * 10 ** power++;
        current = current.next;
    }

    return number;
}

export function toList(data: number): Node {
    let current: Node;
    let power = 0;

    while (data !== 0) {
        const digit = data % 10;
        data = (data - digit) / 10; 
        
        if (!current) {
            current = new Node(digit);
        } else {
            current.appendToTail(digit);
        }
    }

    return current;
}

export function sumLists(list1: Node, list2: Node): Node {
    const num1 = toNumber(list1);
    const num2 = toNumber(list2);

    return toList(num1 + num2);
}

// Solution #2 (mine):
export function optimizedSumLists(list1: Node, list2: Node): Node {
    let current1 = list1;
    let current2 = list2;

    let carryOver = 0;

    let sumList: Node;

    while (current1 !== null && current2 !== null) {
        const sum = current1.data + current2.data + carryOver;
        carryOver = Math.floor(sum / 10) // 1 or 0
        const digit = sum % 10;

        if (!sumList) {
            sumList = new Node(digit);
        } else {
            sumList.appendToTail(digit);
        }

        current1 = current1.next;
        current2 = current2.next;
    }

    let rest = current1 || current2;

    while (rest !== null) {
        const sum = rest.data + carryOver;
        carryOver = Math.floor(sum / 10) // 1 or 0
        const digit = sum % 10;

        sumList.appendToTail(digit);

        rest = rest.next;
    }

    if (carryOver === 1) {
        sumList.appendToTail(1);
    }

    return sumList;
}

// Solution #3 (book):
export function sumListsRecursive(list1: Node, list2: Node): Node {
    return _sumListsRecursive(list1, list2, 0);
}

function _sumListsRecursive(list1: Node, list2: Node, carry: number): Node {
    if (list1 === null && list2 === null && carry === 0) {
        return null;
    }

    let value = carry;

    if (list1 !== null) {
        value += list1.data;
    }

    if (list2 !== null) {
        value += list2.data;
    }

    let result = new Node(value % 10);

    if (list1 !== null || list2 !== null) {
        const more = _sumListsRecursive(list1 && list1.next, list2 && list2.next, value >= 10 ? 1 : 0);
        result.next = more;
    }

    return result;
}