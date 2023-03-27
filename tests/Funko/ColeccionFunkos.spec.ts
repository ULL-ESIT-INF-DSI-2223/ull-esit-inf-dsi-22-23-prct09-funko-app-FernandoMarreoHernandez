import 'mocha';
import { expect } from 'chai';
import { Funko,Tipo,Genero } from '../../src/Funko/Funko';
import { ColeccionFunkos } from '../../src/Funko/ColeccionFunkos';

describe('Test de la clase ColeccionFunkos', () => {
  const FunkoNaruto = new Funko(10, 'Naruto','es una figura de la serie Naruto (best anime ever)', Genero.Anime, Tipo.PopXXL,'Naruto', 534,
  false, 'cabeza bailona',15.99);
  it ('Debería crear una ColeccionFunkos y se comprueba que sea una instancia de ColeccionFunkos', () => {
    const ColeccionFunkos1 = new ColeccionFunkos([FunkoNaruto],'Fernando');
    expect(ColeccionFunkos1).to.be.an.instanceof(ColeccionFunkos);
  });
  it ('Debería crear una ColeccionFunkos y se comprueban los getters', () => {
    const ColeccionFunkos2 = new ColeccionFunkos([FunkoNaruto],'Fernando');
    expect(ColeccionFunkos2.getDuenioColeccion()).to.be.equal('Fernando');
    expect(ColeccionFunkos2.getFunkos()).to.be.eql([FunkoNaruto]);
    expect(ColeccionFunkos2.getFunko(10)).to.be.eql(FunkoNaruto);
  });
  it ('Debería crear una ColeccionFunkos y se comprueban los setters', () => {
    const ColeccionFunkos3 = new ColeccionFunkos([FunkoNaruto],'Fernando');
    ColeccionFunkos3.setDuenioColeccion('Fernando2');
    expect(ColeccionFunkos3.getDuenioColeccion()).to.be.equal('Fernando2');
  });
  it ('Debería crear una ColeccionFunkos y se comprueba que se añade un Funko', () => {
    const ColeccionFunkos3 = new ColeccionFunkos([FunkoNaruto],'Fernando');
    const FunkoNaruto2 = new Funko(20, 'Naruto','es una figura de la serie Naruto (best anime ever)', Genero.Anime, Tipo.PopXXL,'Naruto', 535,
    false, 'cabeza bailona',15.99);
    ColeccionFunkos3.aniadirFunko(FunkoNaruto2);
    expect(ColeccionFunkos3.getFunkos()).to.be.eql([FunkoNaruto,FunkoNaruto2]);
  });
  it ('Debería crear una ColeccionFunkos y se comprueba que se elimina un Funko', () => {
    const ColeccionFunkos4 = new ColeccionFunkos([FunkoNaruto],'Fernando');
    const FunkoNaruto2 = new Funko(30, 'Naruto','es una figura de la serie Naruto (best anime ever)', Genero.Anime, Tipo.PopXXL,'Naruto', 536,
    false, 'cabeza bailona',15.99);
    ColeccionFunkos4.aniadirFunko(FunkoNaruto2);
    ColeccionFunkos4.eliminarFunko(1);
    expect(ColeccionFunkos4.getFunkos()).to.be.eql([FunkoNaruto]);
    ColeccionFunkos4.eliminarFunko(-40);
    expect(ColeccionFunkos4.getFunkos()).to.be.eql([FunkoNaruto]);
  });
});
