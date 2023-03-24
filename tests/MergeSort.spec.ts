import 'mocha';
import {expect} from 'chai';
import { MergeSort } from '../src/MergeSort';

describe('MergeSort', () => {
    it ('se comprueba que existe una instancia de MergeSort', () => {
        expect(new MergeSort()).to.be.an.instanceOf(MergeSort);
    }
    );
    it ('se prueba el metodo de ordenacion MergeSort', () => {
        let data: number[] = [5, 4, 3, 2, 1];
        let mergeSort: MergeSort = new MergeSort();
        expect(mergeSort.MergeSortOrder(data)).to.be.deep.equal([1, 2, 3, 4, 5]);
    }
    );
}
);