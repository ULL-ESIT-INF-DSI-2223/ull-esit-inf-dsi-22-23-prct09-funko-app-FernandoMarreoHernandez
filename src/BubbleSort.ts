import { Strategy } from "./Strategy";
import { Solver } from "./Solver";

/**
 * Clase que implementa la estrategia de ordenacion BubbleSort
 * @class BubbleSort
 * @implements {Strategy}
 */
export class BubbleSort implements Strategy {

    /**
     * ordena los datos de menor a mayor
     * @param data
     * @returns data 
     */
    BubbleSortOrder(data: number[]): number[]{
        let ayuda: number;
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data.length; j++) {
                if (data[i] < data[j]) {
                    ayuda = data[i];
                    data[i] = data[j];
                    data[j] = ayuda;
                }
            }
        }
        return data;
    }

    /**
     * ejecuta el algoritmo de ordenacion BubbleSort
     * @param data 
     */
    execute(data: number[]) {
        console.log("BubbleSort");
        return this.BubbleSortOrder(data);

    }
}
