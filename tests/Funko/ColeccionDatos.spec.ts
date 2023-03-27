import 'mocha';
import { expect } from 'chai';
import { Funko,Tipo,Genero } from '../../src/Funko/Funko';
import { ColeccionFunkos } from '../../src/Funko/ColeccionFunkos';
import { ColeccionDatos } from '../../src/Funko/ColeccionDatos';

describe('Test de la clase ColeccionDatos', () => {
  it ('Debería crear una ColeccionDatos y se comprueba que sea una instancia de ColeccionDatos', () => {
    const ColeccionDatos1 = new ColeccionDatos([]);
    expect(ColeccionDatos1).to.be.an.instanceof(ColeccionDatos);
  });
  it ('Debería crear una ColeccionDatos y se comprueba que se añade una ColeccionFunkos', () => {
    const ColeccionDatos2 = new ColeccionDatos([]);
    const FunkoSasuke = new Funko(11, 'Sasuke','es una figura de la serie Sasuke (best anime ever)', Genero.Anime, Tipo.PopXXL,'Sasuke', 435,
    false, 'cabeza bailona',15.99);
    const ColeccionFunkos1 = new ColeccionFunkos([FunkoSasuke],'Fernando');
    ColeccionDatos2.aniadirDatos(ColeccionFunkos1);
    expect(ColeccionDatos2.getDatos()).to.be.eql([ColeccionFunkos1]);
  });
  it ('Debería crear una ColeccionDatos y se comprueba que se elimina una ColeccionFunkos', () => {
    const ColeccionDatos3 = new ColeccionDatos([]);
    const FunkoSasuke = new Funko(12, 'Sasuke','es una figura de la serie Sasuke (best anime ever)', Genero.Anime, Tipo.PopXXL,'Sasuke', 436,
    false, 'cabeza bailona',15.99);
    const ColeccionFunkos1 = new ColeccionFunkos([FunkoSasuke],'Fernando');
    ColeccionDatos3.aniadirDatos(ColeccionFunkos1);
    ColeccionDatos3.eliminarDatos('Fernando');
    expect(ColeccionDatos3.getDatos()).to.be.eql([]);
  });
});
