import { CompareFunction, toBST } from '@romainfieve/binary-search-tree'
import { DLL, toArrayInOrder } from '@romainfieve/doubly-linked-list'

/**
 * Converts a doubly linked list to a binary search tree.
 * @param dll the doubly linked list.
 * @param compare The compare function.
 * @returns the binary search tree.
 */
export function convertDLLtoBST<T>(dll: DLL<T>, compare: CompareFunction<T>) {
    return toBST(toArrayInOrder(dll), compare)
}
