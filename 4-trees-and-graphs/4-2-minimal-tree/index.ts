// Problem: Given a sorted (increasing order) array with unique integer elements, 
// write an algorithm to create a binary search tree with minimal height. 
import { BinarySearchTreeNode } from './../structures/binary-search-tree';

// Solution #1 (mine):
export function minimalTree(numbers: number[]): BinarySearchTreeNode {
    return _minimalTree(null, numbers);
}

function _minimalTree(node: BinarySearchTreeNode, numbers: number[]): BinarySearchTreeNode {
    if (numbers.length === 0) {
        return node;
    }

    if (numbers.length === 1) {
        node.add(numbers.pop());
        return node;
    }


    const left = numbers.splice(0, numbers.length / 2);

    if (node) {
        node.add(numbers.shift());
    } else {
        node = new BinarySearchTreeNode(numbers.shift());
    }

    const right = numbers;

    _minimalTree(node, left);
    return _minimalTree(node, right);
}
