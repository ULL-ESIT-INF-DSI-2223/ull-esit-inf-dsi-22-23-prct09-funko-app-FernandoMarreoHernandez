/*import {Funko, Tipo, Genero} from './Funko/Funko.js';
import {ColeccionFunkos} from './Funko/ColeccionFunkos.js';
import { Usuario } from './Usuario/Usuario.js';
import chalk from 'chalk';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { read } from 'fs';
import {createReadStream} from 'fs';
import {createWriteStream} from 'fs';
import { writeFile } from 'fs';
import { readFile } from 'fs';
import { ColeccionDatos } from './Funko/ColeccionDatos.js';
import fs from 'fs';
import {watchFile} from 'fs';
import {spawn} from 'child_process';
//let jsondata = require('datos.json');
const log = console.log;
let ColeccionFunkos1 = new ColeccionFunkos([],'');
let ColeccionDatos1 = new ColeccionDatos([]);*/

interface ColeccionDeDatos {
  funkos: Funko[];
  Duenio: string;
}

yargs(hideBin(process.argv))
  .command('add', 'Adds a funko', {
  usuario: {
    description: 'Usuario', //descripcion del campo
    type: 'string', //tipo de dato del campo
    demandOption: true //dice si el campo es obligatorio o no
  },
  id: {
   description: 'Funko ID', //descripcion del campo
   type: 'number', //tipo de dato del campo
   demandOption: true //dice si el campo es obligatorio o no
  },
  nombre: {
    description: 'Funko Nombre', //descripcion del campo
    type: 'string', //tipo de dato del campo
    demandOption: true //dice si el campo es obligatorio o no
  },
  descripcion: {
    description: 'Funko Descripcion', //descripcion del campo
    type: 'string', //tipo de dato del campo
    demandOption: true //dice si el campo es obligatorio o no
  },
  tipo: {
    description: 'Funko Tipo', //descripcion del campo
    type: 'string', //tipo de dato del campo
    demandOption: true //dice si el campo es obligatorio o no
  },
  genero: {
    description: 'Funko Genero', //descripcion del campo
    type: 'string', //tipo de dato del campo
    demandOption: true //dice si el campo es obligatorio o no
  },
  franquicia: {
    description: 'Funko Franquicia', //descripcion del campo
    type: 'string', //tipo de dato del campo
    demandOption: true //dice si el campo es obligatorio o no
  },
  numero: {
    description: 'Funko Numero Franquicia', //descripcion del campo
    type: 'number', //tipo de dato del campo
    demandOption: true //dice si el campo es obligatorio o no
  },
  exclusivo: {
    description: 'Funko Exclusivo', //descripcion del campo
    type: 'boolean', //tipo de dato del campo
    demandOption: true //dice si el campo es obligatorio o no
  },
  caracteristicas: {
    description: 'Funko Caracteristicas', //descripcion del campo
    type: 'string', //tipo de dato del campo
    demandOption: true //dice si el campo es obligatorio o no
  },
  valor: {
    description: 'Funko Precio', //descripcion del campo
    type: 'number', //tipo de dato del campo
    demandOption: true //dice si el campo es obligatorio o no
  },
 }, (argv) => { 
  
  watchFile('datos.json', (curr, prev) => {
    console.log(`File was ${prev.size} bytes before it was modified.`);
    console.log(`Now file is ${curr.size} bytes.`);
  
    const wc = spawn('wc', ['./datos.json']);
  
    let wcOutput = '';
    wc.stdout.on('data', (piece) => wcOutput += piece);
  
    wc.on('close', () => {
      const wcOutputAsArray = wcOutput.split(/\s+/);
      console.log(`File ./datos.json has ${wcOutputAsArray[1]} lines`);
      console.log(`File ./datos.json has ${wcOutputAsArray[2]} words`);
      console.log(`File ./datos.json has ${wcOutputAsArray[3]} characters`);
    });
  });
  const tipo = argv.tipo as Tipo;
  const genero = argv.genero as Genero;
  let DatosPrueba = new ColeccionDatos([]);
  console.log(DatosPrueba);
  console.log (DatosPrueba);
  let data = fs.readFile('datos.json', 'utf8', (err, data) => {
    if (err) throw err;
    let jsonData: ColeccionDatos = JSON.parse(data);
    console.log(jsonData);
  });
  writeFile('datos.json', JSON.stringify(DatosPrueba), (err) => {
    console.log('Datos guardados');
  });

  
  /*
  let usuario = new Usuario(argv.usuario);
  //let data = fs.readFileSync('datos.json', 'utf-8');
  let DatosPrueba = new ColeccionDatos([]);
  //Guarda DatosPrueba en el archivo datos.json
  fs.writeFileSync('datos.json', JSON.stringify(DatosPrueba));
  //Lee el archivo datos.json y lo guarda en data
  let data = fs.readFileSync('datos.json', 'utf8');
  //Parsea el archivo datos.json y lo guarda en jsonData
  let jsonData: ColeccionDatos = JSON.parse(data);
  console.log(DatosPrueba);
  console.log(jsonData);
  /*
  PREGUNTAR AL PROFE:
  1.- ¿Por qué no me guarda los datos en el archivo datos.json igual y al cargar me carga distinto?
  2.- ¿por que al cargar los datos no los puedo registrar como objetos ColeccionDatos si los guardo asi?
  3.- ¿Por qué no me deja usar el metodo de la clase ColeccionDatos?
  4.- ¿Por qué no puedo hacer los test si en el package.json tengo el type: module?
  5.- Formato json o todo en 1 linea?
*/
})

 .help()
 .argv;

