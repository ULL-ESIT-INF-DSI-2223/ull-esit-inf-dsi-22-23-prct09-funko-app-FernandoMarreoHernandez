import { Strategy } from "./Strategy";
import { Solver } from "./Solver";

export class MergeSort implements Strategy {
    /**
     * metodo de ayuda que une los datos de menor a mayor
     * @param zonaIzq 
     * @param zonaDer 
     * @return la cadena ordenada
     */
    Merge(zonaIzq: number[], zonaDer: number[]): number[] {
        let resultado:number[] = [];
        let i = 0;
        let j = 0;
        while (i < zonaIzq.length && j < zonaDer.length) {
            if (zonaIzq[i] < zonaDer[j]) {
                resultado.push(zonaIzq[i]);
                i++;
            } else {
                resultado.push(zonaDer[j]);
                j++;
            }
        }
        return resultado.concat(zonaIzq.slice(i)).concat(zonaDer.slice(j));
    }
    
    /**
     * metodo recursivo que separa los datos
     * @param data 
     * @returns primero separa invocando al otro metodo, al final retorna la cadena ordenada
     */
    MergeSortOrder(data: number[]): number[]{
        if (data.length < 2) {
            return data;
        }
        const mitad = Math.floor(data.length / 2);
        const zonaIzq = data.slice(0, mitad);
        const zonaDer = data.slice(mitad);
        return this.Merge(this.MergeSortOrder(zonaIzq), this.MergeSortOrder(zonaDer));
    }

    /**
     * ejecuta el algoritmo de ordenacion BubbleSort
     * @param data 
     */
    execute(data: number[]) {
        console.log("MergeSort");
        return this.MergeSortOrder(data);
    }
}