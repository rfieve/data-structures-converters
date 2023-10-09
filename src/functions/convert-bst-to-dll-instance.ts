import { BinarySearchTree } from '@romainfieve/binary-search-tree'
import { CompareFunction, DoublyLinkedList } from '@romainfieve/doubly-linked-list'

/**
 * Converts a binary search tree instance to a doubly linked list instance.
 * @param bst the binary search tree.
 * @param compare The compare function.
 * @returns the doubly linked list instance.
 */
export function convertBSTtoDLLInstance<T>(bst: BinarySearchTree<T>, compare?: CompareFunction<T>) {
    return new DoublyLinkedList(bst.toArrayInOrder(), compare)
}
