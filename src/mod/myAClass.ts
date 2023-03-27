/**
 * clase plantilla
 * @method run
 * @method myMap
 * @method myReduce
 * @method hookmap
 * @method hookreduce
 */
export abstract class myAClass {
    protected numero: number;
    constructor(
        protected mapedNumber: number[]) {
            this.numero = 0;
    }
    /**
     * metodo run
     * @param cadenaInicial secuencia de numeros
     * @returns numero
     */
    public run (cadenaInicial: number[]) {
      this.mapedNumber = this.myMap(cadenaInicial, (item: number) => item * 2);
      this.hookmap();
      this.numero = this.myReduce(this.mapedNumber);
      this.hookreduce();
    }
    
    /**
     * metodo reduce abstracto
     * @param arr secuencia de numeros mapeados
     */
    protected abstract myReduce<T, U>(arr: T[]) : number;

    /**
     * metodo map
     * @param arr secuencia de numeros
     * @param fn funcion que mapea
     * @returns secuencia de numeros mapeados
     */
    protected myMap<T, U>(arr: T[], fn: (item: T) => U): U[] {
        const result: U[] = [];
        for (let i = 0; i < arr.length; i++) {
            result.push(fn(arr[i]));
        }
        return result;  
    }

    /**
     * metodo hookmap abstracto
     */
    protected hookmap(): void {
        console.log("hookmap");
    }
    /**
     * metodo hookreduce abstracto
     */
    protected hookreduce(): void {
        console.log("hookreduce");
    }
}
