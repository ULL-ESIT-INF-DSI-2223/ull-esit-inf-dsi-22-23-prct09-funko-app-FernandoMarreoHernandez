/**
 * RandomNumberGenerator
 * @class RandomNumberGenerator
 * @method GetRandomNumberGeneratorInstance
 * @method GetNumber0_1
 * @method GetFloatNumber
 * @method GetIntNumber
 */
export class RandomNumberGenerator{
    private static RandomNumberGenerators:RandomNumberGenerator;
    private constructor(){}

    /**
     * comprueba si existe una instancia de RandomNumberGenerator, si no existe la crea
     * @returns RandomNumberGenerator
     */
    public static GetRandomNumberGeneratorInstance():RandomNumberGenerator{
        if(!RandomNumberGenerator.RandomNumberGenerators){
            RandomNumberGenerator.RandomNumberGenerators = new RandomNumberGenerator();
        }
        return RandomNumberGenerator.RandomNumberGenerators;
    }

    /**
     * saca un numero aleatorio entre 0 y 1
     * @returns number
     */
     static GetNumber0_1():number{
        return Math.random();
    }

    /**
     * saca un numero aleatorio flotante entre min y max
     * @param min
     * @param max
     * @returns number
     */
     static GetFloatNumber(min:number, max:number):number{
        return min + (max - min) * this.GetNumber0_1();
    }

    /**
     * saca un numero aleatorio entero entre min y max
     * @param min
     * @param max
     * @returns number
     */
     static GetIntNumber(min:number, max:number):number{
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
}