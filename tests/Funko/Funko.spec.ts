import 'mocha';
import { expect } from 'chai';
import { Funko } from '../../src/Funko/Funko.js';
import { Genero } from '../../src/Funko/Funko.js';
import { Tipo } from '../../src/Funko/Funko.js';


describe('Se comprueba la clase Funko', () => {
  const FunkoPain = new Funko(1, 'Pain', Genero.Anime, Tipo.PopXXL,'Naruto', 934,
  false, 'es una figura de la serie Naruto (best anime ever)',15.99);
  it ('Debería crear un Funko y se comprueba que sea una instancia de Funko', () => {
    expect(FunkoPain).to.be.an.instanceof(Funko);
  });
  it ('Debería crear un Funko y se comprueban los getters', () => {
    expect(FunkoPain.GetId()).to.be.equal(1);
    expect(FunkoPain.GetNombre()).to.be.equal('Pain');
    expect(FunkoPain.GetGenero()).to.be.equal(Genero.Anime);
    expect(FunkoPain.GetTipo()).to.be.equal(Tipo.PopXXL);
    expect(FunkoPain.GetFranquicia()).to.be.equal('Naruto');
    expect(FunkoPain.GetIdFranquicia()).to.be.equal(934);
    expect(FunkoPain.GetExclusivo()).to.be.equal(false);
    expect(FunkoPain.GetCaracteristicas()).to.be.equal('es una figura de la serie Naruto (best anime ever)');
    expect(FunkoPain.GetValorNumerico()).to.be.equal(15.99);
  });
  it ('Se comprueban los mensajes de error', () => {
    expect(() =>{
      const FunkoMal = new Funko(1, 'Pain', Genero.Anime, Tipo.PopXXL,'Naruto', 934,
      false, 'es una figura de la serie Naruto (best anime ever)',15.99);
      }).to.throw('El id ya en uso');
    expect(() =>{
      const FunkoMal2 = new Funko(2, 'Pain', Genero.Anime, Tipo.PopXXL,'Naruto', 934,
      false, 'es una figura de la serie Naruto (best anime ever)',16.99);
      }).to.throw('El id de la franquicia ya en uso');
    expect(() =>{
      const FunkoMal3 = new Funko(3, 'Pain', Genero.Anime, Tipo.PopXXL,'Naruto', 935,
      false, 'es una figura de la serie Naruto (best anime ever)',-15.99);
      }).to.throw('El valor numerico no puede ser negativo');
    });
});

