import { BinarySearchTree, toBST } from '@romainfieve/binary-search-tree';
import { DoublyLinkedList, toDLL } from '@romainfieve/doubly-linked-list';

export function compare(a: number, b: number) {
    return a - b;
}

export const mockedArray = [10, 32, 13, 2, 89, 5, 50];

export const mockedDLL = toDLL(mockedArray, compare);
export const mockedDLLInstance = new DoublyLinkedList(mockedArray, compare);

export const mockedBST = toBST(mockedArray, compare);
export const mockedBSTInstance = new BinarySearchTree(mockedArray, compare);
