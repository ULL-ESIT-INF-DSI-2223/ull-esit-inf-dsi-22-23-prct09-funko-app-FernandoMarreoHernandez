import { myAClass } from "./myAClass";
/**
 * @class ProdMapReduce
 * @extends myAClass
 * @method myReduce
 * @method hookmap
 * @method hookreduce
 */
export class  ProdMapReduce extends myAClass {
    constructor(
        protected mapedNumber: number[]) {
        super(mapedNumber);
    }
    /**
     * metodo reduce
     * @param arr secuencia de numeros mapeados
     * @returns
     */
    protected myReduce<T, U>(arr: T[]): number{
        let acc = 1;
        for (let i = 0; i < arr.length; i++) {
            acc *= arr[i] as number;
        }
        return acc;
    }
    /**
     * metodo hookmap
     * @returns
     */
    protected hookmap(): void {
        console.log("hookmap");
    }
    /**
     * metodo hookreduce
     * @returns
     */
    protected hookreduce(): void {
        console.log("hookreduce");
    }
}