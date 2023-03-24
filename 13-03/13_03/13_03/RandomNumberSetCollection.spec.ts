import 'mocha';
import {expect} from 'chai';
import {RandomNumberGenerator} from '../src/RandomNumberGenerator';
import {RandomNumberSetCollection} from '../src/RandomNumberSetCollection';

describe('RandomNumberSetCollection', () => {
    it('se crea una instancia de RandomNumberSetCollection', () => {
        const randomNumberSetCollection = new RandomNumberSetCollection();
        expect(randomNumberSetCollection).to.be.an.instanceof(RandomNumberSetCollection);
    });
});