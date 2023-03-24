import { RandomNumberGenerator } from './RandomNumberGenerator';

/**
 * RandomNumberSetCollection
 * @class RandomNumberSetCollection
 * @method addRandomNumber
 * @method [Symbol.iterator]
 */
export class RandomNumberSetCollection<T extends RandomNumberGenerator> implements Iterable<number>{
    private numeros: Set<number>;
    constructor(){
        this.numeros = new Set<number>();
        this.numeros.add(RandomNumberGenerator.GetNumber0_1());
        this.numeros.add(RandomNumberGenerator.GetFloatNumber(5.5,10.2));
        this.numeros.add(RandomNumberGenerator.GetIntNumber(20,100));
    }

    /**
     * addRandomNumber
     * @method addRandomNumber
     * @returns void
     */
    addRandomNumber(){
        this.numeros.add(RandomNumberGenerator.GetNumber0_1());
        
    }

    /**
     * [Symbol.iterator]
     * @method [Symbol.iterator]
     * @returns Iterator<RandomNumberGenerator>
    */
    [Symbol.iterator](): Iterator<number> {
        return this.numeros.values();
    }
}   