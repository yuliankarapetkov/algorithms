// Problem: Write code to remove duplicates from an unsorted linked list. 

import { Node } from '../linked-list';

// Solution #1 (mine):
export function removeDups(head: Node) {
    let data = { [head.data]: true };

    let n = head;

    while (n.next !== null) {
        if (data[n.next.data]) {
            n.next = n.next.next;
        } else {
            data[n.next.data] = true;
            n = n.next;
        }
    }

    return head;
}

// How would you solve this problem if a temporary buffer is not allowed? 
// Solution #2 (book):
export function removeDupsNoBuffer(head: Node) {

    let current = head;

    while (current !== null) {
        let runner = current;

        while (runner.next !== null) {
            if (runner.next.data === current.data) {
                runner.next = runner.next.next;
            } else {
                runner = runner.next;
            }
        }

        current = current.next;
    }

    return head;
}
