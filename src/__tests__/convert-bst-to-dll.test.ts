import { convertBSTtoDLL } from '../functions/convert-bst-to-dll';
import { compare, mockedBST, mockedDLL } from './_mocks';

describe('convertBSTtoDLL', () => {
    it('should convert a binary search tree to a doubly-linked-list correctly', () => {
        expect(convertBSTtoDLL(mockedBST, compare)).toEqual(mockedDLL);
    });
});
