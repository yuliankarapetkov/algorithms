export class BinarySearchTreeNode {
    left: BinarySearchTreeNode = null;
    right: BinarySearchTreeNode = null;

    constructor(public data: number) {}

    add(data: number): void {
        this._addNoteSimplified(data);
    }

    private _addNoteSimplified(data: number): void {
        if (data < this.data) {
            if (!this.left) {
                this.left = new BinarySearchTreeNode(data);
            } else {
                this.left._addNoteSimplified(data);
            }
        } else {
            if (!this.right) {
                this.right = new BinarySearchTreeNode(data);
            } else {
                this.right._addNoteSimplified(data);
            }
        }
    }

    private _addNode(node: BinarySearchTreeNode, data: number): void {
        if (data < node.data) {
            if (!node.left) {
                node.left = new BinarySearchTreeNode(data);
            } else {
                this._addNode(node.left, data);
            }
        } else {
            if (!node.right) {
                node.right = new BinarySearchTreeNode(data);
            } else {
                this._addNode(node.right, data);
            }
        }
    }
}