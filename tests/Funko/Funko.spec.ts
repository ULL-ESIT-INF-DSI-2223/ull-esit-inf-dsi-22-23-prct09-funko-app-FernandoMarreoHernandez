import 'mocha';
import { expect } from 'chai';
import { Funko } from '../../src/Funko/Funko';
import { Genero } from '../../src/Funko/Funko';
import { Tipo } from '../../src/Funko/Funko';


describe('Se comprueba la clase Funko', () => {
  const FunkoPain = new Funko(1, 'Pain','es una figura de la serie Naruto (best anime ever)', Genero.Anime, Tipo.PopXXL,'Naruto', 934,
  false, 'cabeza bailona',15.99);
  it ('Debería crear un Funko y se comprueba que sea una instancia de Funko', () => {
    expect(FunkoPain).to.be.an.instanceof(Funko);
  });
  it ('Debería crear un Funko y se comprueban los getters', () => {
    expect(FunkoPain.GetId()).to.be.equal(1);
    expect(FunkoPain.GetNombre()).to.be.equal('Pain');
    expect(FunkoPain.GetDescripcion()).to.be.equal('es una figura de la serie Naruto (best anime ever)');
    expect(FunkoPain.GetGenero()).to.be.equal(Genero.Anime);
    expect(FunkoPain.GetTipo()).to.be.equal(Tipo.PopXXL);
    expect(FunkoPain.GetFranquicia()).to.be.equal('Naruto');
    expect(FunkoPain.GetIdFranquicia()).to.be.equal(934);
    expect(FunkoPain.GetExclusivo()).to.be.equal(false);
    expect(FunkoPain.GetCaracteristicas()).to.be.equal('cabeza bailona');
    expect(FunkoPain.GetValorNumerico()).to.be.equal(15.99);
  });

  it ('Se comprueban los setters', () => {
    FunkoPain.SetId(99);
    FunkoPain.SetNombre('Pain2');
    FunkoPain.SetDescripcion('es una figura de la serie Naruto (best anime ever)2');
    FunkoPain.SetGenero(Genero.Videojuegos);
    FunkoPain.SetTipo(Tipo.PopVinilo);
    FunkoPain.SetFranquicia('Naruto2');
    FunkoPain.SetIdFranquicia(935);
    FunkoPain.SetExclusivo(true);
    FunkoPain.SetCaracteristicas('cabeza bailona2');
    FunkoPain.SetValorNumerico(16.99);
    expect(FunkoPain.GetId()).to.be.equal(99);
    expect(FunkoPain.GetNombre()).to.be.equal('Pain2');
    expect(FunkoPain.GetDescripcion()).to.be.equal('es una figura de la serie Naruto (best anime ever)2');
    expect(FunkoPain.GetGenero()).to.be.equal(Genero.Videojuegos);
    expect(FunkoPain.GetTipo()).to.be.equal(Tipo.PopVinilo);
    expect(FunkoPain.GetFranquicia()).to.be.equal('Naruto2');
    expect(FunkoPain.GetIdFranquicia()).to.be.equal(935);
    expect(FunkoPain.GetExclusivo()).to.be.equal(true);
    expect(FunkoPain.GetCaracteristicas()).to.be.equal('cabeza bailona2');
    expect(FunkoPain.GetValorNumerico()).to.be.equal(16.99);
  });
  it ('Se comprueban los mensajes de error', () => {
    expect(() =>{
      const FunkoMal = new Funko(1, 'Pain','es una figura de la serie Naruto (best anime ever)', Genero.Anime, Tipo.PopXXL,'Naruto', 934,
      false, 'cabeza bailona',15.99);
      }).to.throw('El id ya en uso');
    expect(() =>{
      const FunkoMal2 = new Funko(2, 'Pain','es una figura de la serie Naruto (best anime ever)', Genero.Anime, Tipo.PopXXL,'Naruto', 934,
      false, 'cabeza bailona',16.99);
      }).to.throw('El id de la franquicia ya en uso');
    expect(() =>{
      const FunkoMal3 = new Funko(3, 'Pain','es una figura de la serie Naruto (best anime ever)', Genero.Anime, Tipo.PopXXL,'Naruto', 935,
      false, 'cabeza bailona',-15.99);
      }).to.throw('El valor numerico no puede ser negativo');
    });
});

