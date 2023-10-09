import { BinarySearchTree, toBST } from '@romainfieve/binary-search-tree'
import { DoublyLinkedList, toDLL } from '@romainfieve/doubly-linked-list'

export function compare(a: number, b: number) {
    return a - b
}

export const mockedArray = [10, 32, 13, 2, 89, 5, 50],
             mockedDLL = toDLL(mockedArray, compare),
             mockedDLLInstance = new DoublyLinkedList(mockedArray, compare),
             mockedBST = toBST(mockedArray, compare),
             mockedBSTInstance = new BinarySearchTree(mockedArray, compare)
