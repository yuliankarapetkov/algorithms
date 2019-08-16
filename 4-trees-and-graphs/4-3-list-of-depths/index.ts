// Problem: Given a binary tree, design an algorithm which creates a linked list of all the nodes at each depth 
// (e.g., if you have a tree with depth D, you'll have D linked lists). Hints
import { BinarySearchTreeNode } from './../structures/binary-search-tree';

// Solution #1 (mine):
// Although binary search trees are a specific case of binary trees, it works fine for our example.
// And the algorithm would work with just a binary tree too.
export function listOfDepths(node: BinarySearchTreeNode): number[][] {

    const depths = [[]];
    let depth = 0;
    const queue = [node, 's'];

    while (queue.length > 1) {

        const element = queue.shift();

        if (element !== 's') {
            const node = element as BinarySearchTreeNode;
            depths[depth].push(node.data);

            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }
        } else {
            queue.push('s');
            depth++;
            depths[depth] = [];
        }

    }

    return depths;
}