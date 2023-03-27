import { myAClass } from "./myAClass";

/**
 * @class SubMapReduce
 * @extends myAClass
 * @method myReduce
 * @method hookmap
 * @method hookreduce
 */
export class  SubMapReduce extends myAClass {
    constructor(
        protected mapedNumber: number[]) {
        super(mapedNumber);
    }
    /**
     * 
     * @param arr 
     * @returns 
     */
    protected myReduce<T, U>(arr: T[]): number{
        let acc = 0;
        for (let i = 0; i < arr.length; i++) {
            acc -= arr[i] as number;
        }
        return acc;
    }
    /**
     * metodo hookmap
     */
    protected hookmap(): void {
        console.log("hookmap");
    }
    /**
     * metodo hookreduce
     */
    protected hookreduce(): void {
        console.log("hookreduce");
    }
}
