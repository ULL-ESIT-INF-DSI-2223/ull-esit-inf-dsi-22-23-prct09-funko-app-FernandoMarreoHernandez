import 'mocha';
import { expect } from 'chai';
import { DivMapReduce } from '../../src/mod/DivMapReduce';

describe('divMapReduce', () => {
    it('should return 1', () => {
        const divMapReduce = new DivMapReduce([1,2,3]);
        expect(divMapReduce.run([1,2,3])).to.eql(1);
    });
});