import { Strategy } from "./Strategy";

/**
 * Clase que implementa las estrategias de ordenacion
 * @class Solver
 */
export class Solver {
    constructor(private data: number[], private strategy: Strategy) {
    };

    SetStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    logic() {
        return this.strategy.execute(this.data);
    }
}