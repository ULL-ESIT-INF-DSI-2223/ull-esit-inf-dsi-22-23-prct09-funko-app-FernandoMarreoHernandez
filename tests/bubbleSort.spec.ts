import 'mocha';
import {expect} from 'chai';
import { BubbleSort } from "../src/BubbleSort";

describe('BubbleSort', () => {
    it ('se comprueba que existe una instancia de BubbleSort', () => {
        expect(new BubbleSort()).to.be.an.instanceOf(BubbleSort);
    }
    );
    it ('se prueba el metodo de ordenacion BubbleSort', () => {
        let data: number[] = [5, 4, 3, 2, 1];
        let bubbleSort: BubbleSort = new BubbleSort();
        expect(bubbleSort.BubbleSortOrder(data)).to.be.deep.equal([1, 2, 3, 4, 5]);
    }
    );
}
);