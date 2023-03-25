import { Funko } from './Funko.js';

export class ColeccionFunkos {
  private static ColeccionFunkos: ColeccionFunkos;
  private static funkos: Funko[] = [];
  private static idDuenio: number;
  constructor(Funkos: Funko[], idDuenio: number) {
    ColeccionFunkos.funkos = Funkos;
    ColeccionFunkos.idDuenio = idDuenio;
  }

  /**
   * Método que devuelve un array de funkos
   * @method getFunkos
   * @returns Funko[]
   */
  getFunkos(): Funko[] {
    return ColeccionFunkos.funkos;
  }

  /**
   * Método que añade un funko al array de funkos
   * @method aniadirFunko
   * @param funko
   * @returns void
   */
  aniadirFunko(funko_entrada: Funko) {
    ColeccionFunkos.funkos.push(funko_entrada);
    return funko_entrada;
  }

  /**
   * Método que elimina un funko del array de funkos
   * @method eliminarFunko
   * @param indice
   * @returns void
   */
  eliminarFunko(indice: number): void {
    if (indice < 0 || indice >= ColeccionFunkos.funkos.length) {
      return;
    }
    ColeccionFunkos.funkos.splice(indice, 1);
  }

  /**
   * Método que devuelve un funko a partir de su id
   * @method getFunko
   * @param id
   * @returns Funko
   */
  getFunko(id: number): Funko | undefined {
    const funko = ColeccionFunkos.funkos.find(funko => funko.GetId() === id);
    return funko;
  }


}
