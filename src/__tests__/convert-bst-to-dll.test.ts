import { convertBSTtoDLLInstance } from 'src/functions/convert-bst-to-dll-instance'

import { convertBSTtoDLL } from '../functions/convert-bst-to-dll'
import { compare, mockedBST, mockedBSTInstance, mockedDLL, mockedDLLInstance } from './_mocks'

describe('convertBSTtoDLL', () => {
    it('should convert a binary search tree to a doubly linked list correctly', () => {
        expect(convertBSTtoDLL(mockedBST, compare)).toEqual(mockedDLL)
    })
})

describe('convertBSTtoDLLInstance', () => {
    it('should convert a doubly linked list to a binary search tree correctly', () => {
        const dll = convertBSTtoDLLInstance(mockedBSTInstance, compare)

        expect(dll.length).toEqual(mockedDLLInstance.length)
        expect(dll.head).toEqual(mockedDLLInstance.head)
        expect(dll.tail).toEqual(mockedDLLInstance.tail)
    })
})
