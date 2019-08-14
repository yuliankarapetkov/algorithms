import { TreeNode } from "../structures";

export function levelWidth(root: TreeNode) {

    let counters = [0];
    let level = 0;

    const queue = [];
    
    queue.push(root);
    queue.push('s');

    while (queue.length > 1) {
        const node = queue.shift();

        if (node === 's') {
            level++;
            counters[level] = 0;
            queue.push('s');
        } else {
            queue.push(...node.children);
            counters[level]++;
        }
    }

    return counters;
}