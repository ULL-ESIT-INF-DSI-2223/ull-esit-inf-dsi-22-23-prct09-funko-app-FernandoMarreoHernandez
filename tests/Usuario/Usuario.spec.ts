import 'mocha';
import { expect } from 'chai';
import { Usuario } from '../../src/Usuario/Usuario';

describe('Se comprueba la clase Usuario', () => {
  const UsuarioFernando = new Usuario('Fernando');
  it ('Debería crear un Usuario y se comprueba que sea una instancia de Usuario', () => {
    expect(UsuarioFernando).to.be.an.instanceof(Usuario);
  }
  );
  it ('Debería crear un Usuario y se comprueban los getters', () => {
    expect(UsuarioFernando.GetNombre()).to.be.equal('Fernando');
  }
  );
});
