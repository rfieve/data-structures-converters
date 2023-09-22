import { BinarySearchTree, CompareFunction } from '@romainfieve/binary-search-tree';
import { DoublyLinkedList } from '@romainfieve/doubly-linked-list';

/**
 * Converts a doubly linked list instance to a binary search tree instance.
 * @param dll the doubly linked list.
 * @param compare The compare function.
 * @returns the binary search tree instance.
 */
export function convertDLLtoBSTInstance<T>(dll: DoublyLinkedList<T>, compare: CompareFunction<T>) {
    return new BinarySearchTree(dll.toArrayInOrder(), compare);
}
