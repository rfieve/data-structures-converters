import { convertDLLtoBST } from '../functions/convert-dll-to-bst';
import { compare, mockedBST, mockedDLL } from './_mocks';

describe('convertDLLtoBST', () => {
    it('should convert a doubly-linked-list to a binary search tree correctly', () => {
        expect(convertDLLtoBST(mockedDLL, compare)).toEqual(mockedBST);
    });
});
