import { myAClass } from "./myAClass";

export class  AddMapReduce extends myAClass {
    constructor(
        protected mapedNumber: number[]) {
        super(mapedNumber);
    }
    //funcion que hace un reduce con un + y retorna el valor
    protected myReduce<T, U>(arr: T[]): number{
        let acc = 0;
        for (let i = 0; i < arr.length; i++) {
            acc += arr[i] as number;
        }
        return acc;
    }
    protected hookmap(): void {
        console.log("hookmap");
    }
    protected hookreduce(): void {
        console.log("hookreduce");
    }
}
