import 'mocha';
import { expect } from 'chai';
import { ProdMapReduce } from '../../src/mod/ProdMapReduce';

describe('ProdMapReduce', () => {
    it('should return 1', () => {
        const prodMapReduce = new ProdMapReduce([1,2,3]);
        expect(prodMapReduce.run([1,2,3])).to.eql(1);
    });
});