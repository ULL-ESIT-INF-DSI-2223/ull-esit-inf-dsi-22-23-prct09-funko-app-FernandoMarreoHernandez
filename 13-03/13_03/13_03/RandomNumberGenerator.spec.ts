import 'mocha';
import {expect} from 'chai';
import {RandomNumberGenerator} from '../src//RandomNumberGenerator';

describe('RandomNumberGenerator', () => {
    const numero = RandomNumberGenerator.GetRandomNumberGeneratorInstance();
    it ('se comprueba que existe una instancia con GetRandomNumberGeneratorInstance', () => {
        expect(RandomNumberGenerator.GetRandomNumberGeneratorInstance()).to.be.an.instanceOf(RandomNumberGenerator);
    });
    it ('se crea una instancia de RandomNumberGenerator', () => {
        expect(numero).to.be.an.instanceOf(RandomNumberGenerator);
    });
    it ('se comprueba que el numero aleatorio entre 0 y 1 es un numero', () => {
        const numero = RandomNumberGenerator.GetRandomNumberGeneratorInstance();
        expect(RandomNumberGenerator.GetNumber0_1()).to.be.a('number');
    });
    
    it ('se comprueba que el numero aleatorio entre 0 y 1 es mayor que 0', () => {
        expect(RandomNumberGenerator.GetNumber0_1()).to.be.above(0);
    });
    it ('se comprueba que el numero aleatorio entre 0 y 1 es menor que 1', () => {
        expect(RandomNumberGenerator.GetNumber0_1()).to.be.below(1);
    });
    it ('se comprueba que el numero aleatorio entre 0 y 1 esta entre 0 y 1', () => {
        expect(RandomNumberGenerator.GetNumber0_1()).to.be.within(0,1);
    });
    it ('se comprueba que el numero aleatorio entre 5 y 10 es un numero flotante', () => {
        expect(RandomNumberGenerator.GetFloatNumber(5.5,10.2)).to.be.a('number');
    });
    it ('se comprueba que el numero aleatorio entre 5 y 10 es mayor que 5', () => {
        expect(RandomNumberGenerator.GetFloatNumber(5.5,10.2)).to.be.above(5.5);
    });
    it ('se comprueba que el numero aleatorio entre 5 y 10 es menor que 10', () => {
        expect(RandomNumberGenerator.GetFloatNumber(5.5,10.2)).to.be.below(10.2);
    });
    it ('se comprueba que el numero aleatorio entre 5 y 10 esta entre 5 y 10', () => {
        expect(RandomNumberGenerator.GetFloatNumber(5.5,10.2)).to.be.within(5,10);
    });
    it ('se comprueba que el numero aleatorio entre 5 y 10 es un numero entero', () => {
        expect(RandomNumberGenerator.GetIntNumber(20,100)).to.be.a('number');
    });
    it ('se comprueba que el numero aleatorio entre 5 y 10 es mayor que 5', () => {
        expect(RandomNumberGenerator.GetIntNumber(20,100)).to.be.above(20);
    });
    it ('se comprueba que el numero aleatorio entre 5 y 10 es menor que 10', () => {
        expect(RandomNumberGenerator.GetIntNumber(20,100)).to.be.below(100);
    });
    it ('se comprueba que el numero aleatorio entre 5 y 10 esta entre 5 y 10', () => {
        expect(RandomNumberGenerator.GetIntNumber(20,100)).to.be.within(20,100);
    });
});