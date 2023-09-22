import { BST, toArrayInOrder } from '@romainfieve/binary-search-tree';
import { CompareFunction, toDLL } from '@romainfieve/doubly-linked-list';

/**
 * Converts a binary search tree to a doubly linked list.
 * @param bst the binary search tree.
 * @param compare The compare function.
 * @returns the doubly linked list.
 */
export function convertBSTtoDLL<T>(bst: BST<T>, compare?: CompareFunction<T>) {
    return toDLL(toArrayInOrder(bst), compare);
}
