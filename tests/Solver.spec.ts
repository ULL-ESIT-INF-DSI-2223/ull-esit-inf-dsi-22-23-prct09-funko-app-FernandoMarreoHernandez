import 'mocha';
import {expect} from 'chai';
import { Solver } from "../src/Solver";
import { BubbleSort } from "../src/BubbleSort";
import { MergeSort } from "../src/MergeSort";

describe('Solver', () => {
    let data: number[] = [5, 3, 1, 2, 4];
    let solver: Solver = new Solver(data, new BubbleSort());
    it ('se comprueba que existe una instancia de Solver', () => {
        expect(new Solver(data, new BubbleSort())).to.be.an.instanceOf(Solver);
    }
    );
    it ('se prueba el metodo de ordenacion BubbleSort invocado desde solve', () => {
        expect(solver.logic()).to.be.deep.equal([1, 2, 3, 4, 5]);
    }
    );

    it ('se prueba a cambiar el metodo de ordenacion a MergeSort y a ordenar por dicho metodo', () => {
        let data: number[] = [5, 3, 1, 2, 4];
        let solver: Solver = new Solver(data, new BubbleSort());
        solver.SetStrategy(new MergeSort());
        expect(solver.logic()).to.be.deep.equal([1, 2, 3, 4, 5]);
    }
    );

}
);