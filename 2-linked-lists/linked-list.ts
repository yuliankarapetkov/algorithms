// Note: In this implementation, we don't have a Linked List data structure. 
// We access the linked list through a reference to the head Node of the linked list. 
// When you implement the linked list this way, you need to be a bit careful. 
// What if multiple objects need a reference to the linked list, and then the head of the linked list changes? 
// Some objects might still be pointing to the old head.
export class Node {
    next: Node = null;

    constructor(public data: number = 0) {
        this.data = data;
    }

    appendToTail(data: number): void {
        const end = new Node(data);

        let n = this as Node;

        while (n.next !== null) {
            n = n.next;
        }

        n.next = end;
    }

    deleteNode(head: Node, data: number): any {
        let n = head;

        if (n.data === data) {
            return head.next;
        }

        while (n.next !== null) {
            if (n.next.data === data) {
                n.next = n.next.next;
                return head;
            }
            
            n = n.next;
        }

        return head;
    }
}
