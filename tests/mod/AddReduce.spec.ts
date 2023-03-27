import 'mocha';
import { expect } from 'chai';
import { myAClass } from '../../src/mod/myAClass';
import { AddMapReduce } from '../../src/mod/AddReduce';

describe('addMapReduce', () => {
    it('should return 6', () => {
        const addMapReduce = new AddMapReduce([1,2,3]);
        expect(addMapReduce.run([1,2,3])).to.eql(6);
    });
});
