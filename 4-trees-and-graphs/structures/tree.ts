export class TreeNode {
    children: TreeNode[] = [];

    constructor(public data: number) {}

    add(data: number): TreeNode {
        const node = new TreeNode(data);
        this.children.push(node);
        
        return node;
    }

    remove(data: number): void {
        this.children = this.children.filter(child => child.data !== data);
    }
}

export class Tree {
    root: TreeNode = null;

    traverseBF(fn: (TreeNode) => (void)): void {
        const queue = [];
        queue.push(this.root);

        while (queue.length) {
            const node = queue.shift();

            queue.push(...node.children);

            fn(node);
        }
    }

    traverseDF(fn: (TreeNode) => (void)): void {
        const queue = [];
        queue.push(this.root);

        while (queue.length) {
            const node = queue.shift();

            queue.unshift(...node.children);

            fn(node);
        }
    }
}
