import { compare, mockedBST, mockedBSTInstance, mockedDLL, mockedDLLInstance } from './_mocks'
import { convertDLLtoBST } from '../functions/convert-dll-to-bst'
import { convertDLLtoBSTInstance } from '../functions/convert-dll-to-bst-instance'

describe('convertDLLtoBST', () => {
    it('should convert a doubly linked list to a binary search tree correctly', () => {
        expect(convertDLLtoBST(mockedDLL, compare)).toEqual(mockedBST)
    })
})

describe('convertDLLtoBSTInstance', () => {
    it('should convert a doubly linked list to a binary search tree correctly', () => {
        const bst = convertDLLtoBSTInstance(mockedDLLInstance, compare)

        expect(bst.tree).toEqual(mockedBSTInstance.tree)
    })
})
