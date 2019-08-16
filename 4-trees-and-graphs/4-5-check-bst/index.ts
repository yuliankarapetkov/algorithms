// Problem:  Implement a function to check if a binary tree is a binary search tree. 
import { BinarySearchTreeNode } from './../structures/binary-search-tree';

// Solution #1 (book):
export function checkBst(node: BinarySearchTreeNode): boolean {
    return _checkBst(node, null, null);
}

function _checkBst(node: BinarySearchTreeNode, min: number, max: number): boolean {
    if (!node) {
        return true;
    }

    if ((min && node.data <= min) || (max && node.data > max)) {
        return false;
    }

    if (!_checkBst(node.left, min, node.data) || !_checkBst(node.right, node.data, max)) {
        return false;
    }

    return true;
}
