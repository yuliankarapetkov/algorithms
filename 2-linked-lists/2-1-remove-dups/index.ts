import { Node } from '../linked-list';

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