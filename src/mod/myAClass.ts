 export abstract class myAClass {
    protected numero: number;
    constructor(
        protected mapedNumber: number[]) {
            this.numero = 0;
    }
    public run (cadenaInicial: number[]) {
      this.mapedNumber = this.myMap(cadenaInicial, (item: number) => item * 2);
      this.hookmap();
      this.numero = this.myReduce(this.mapedNumber);
      this.hookreduce();
    }
    //clase abastacta my Reduce que solo recibe la cadena inicial
    protected abstract myReduce<T, U>(arr: T[]) : number;
    protected myMap<T, U>(arr: T[], fn: (item: T) => U): U[] {
        const result: U[] = [];
        for (let i = 0; i < arr.length; i++) {
            result.push(fn(arr[i]));
        }
        return result;  
    }
    protected hookmap(): void {
        console.log("hookmap");
    }
    protected hookreduce(): void {
        console.log("hookreduce");
    }
}
