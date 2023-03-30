[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-8d59dc4de5201274e310e4c54b9627a8934c3b88527886e3b421487c677d23eb.svg)](https://classroom.github.com/a/fmDo8ROl)
# Practica 9: Aplicación de FunkoPops!

[![Coveralls](https://github.com/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct09-funko-app-FernandoMarreoHernandez/actions/workflows/coveralls.yml/badge.svg)](https://github.com/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct09-funko-app-FernandoMarreoHernandez/actions/workflows/coveralls.yml)

[![SonarCloud](https://github.com/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct09-funko-app-FernandoMarreoHernandez/actions/workflows/sonarcloud.yml/badge.svg)](https://github.com/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct09-funko-app-FernandoMarreoHernandez/actions/workflows/sonarcloud.yml)

[![Tests](https://github.com/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct09-funko-app-FernandoMarreoHernandez/actions/workflows/node.js.yml/badge.svg)](https://github.com/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct09-funko-app-FernandoMarreoHernandez/actions/workflows/node.js.yml)

## Indice

- [Practica 9: Aplicación de FunkoPops!](#practica-9-aplicación-de-funkopops)
  - [Indice](#indice)
  - [Introducción](#introducción)
  - [Clase Funko](#clase-funko)
  - [Clase ColeccionFunkos](#clase-coleccionfunkos)
  - [Clase ColeccionDatos](#clase-colecciondatos)
  - [Fichero Index](#fichero-index)
  - [Practica Presencial](#practica-presencial)
  - [Conclusiones](#conclusiones)


## Introducción

En esta practica teniamos que hacer una base de datos para almacenar los datos de los FunkoPops, para ello teniamos que crear una clase Funko, una clase ColeccionFunkos, una clase Usuario, una clase ColeccionDatos y un fichero index. En el fichero index teniamos que usar node js y yargs para que los ususarios interactuaran con la base de datos por comandos de manera sincrona por comandos, pues la base de datos se almacenaba en directorios con ficheros json. Tambien teníamos que usar chalk para darle color a los mensajes que se mostraban por pantalla en distintas ocaciones.

## Clase Funko

Lo primero que se necesita para almacenar a los FunkoPops, es una clase Funko, que es la que va a almacenar los datos de cada FunkoPop. Para ello creamos una clase Funko con los siguientes atributos:

```typescript

export enum Genero {
  Animacion = 'Animacion',
  PeliculasYTv = 'Peliculas y TV',
  Videojuegos = 'Videojuegos',
  Deportes = 'Deportes',
  Musica = 'Musica',
  Anime = 'Anime',
  Otros = 'Otros',
}

export enum Tipo {
  Pop = 'Pop!',
  PopVinilo = 'Pop! Vinilo',
  PopRides = 'Pop! Rides',
  PopVinilGold = 'Pop! Vinilo Gold',
  PopXXL = 'Pop! XXL',
}

export class Funko{
  static id = new Set<number>();
  static idFranquicia = new Set<number>();
  static Franquicia = new Set<string>();
  static nombre = new Set<string>();
  private id: number;
  private nombre: string;
  private descripcion: string;
  private Genero: Genero;
  private Tipo: Tipo;
  private Franquicia: string;
  private idFranquicia: number;
  private exclusivo: boolean;
  private caracteristicas: string;
  private valorNumerico: number;
  constructor(
    id: number,
    nombre: string,
    descripcion: string,
    Genero: Genero,
    Tipo: Tipo,
    Franquicia: string,
    idFranquicia: number,
    exclusivo: boolean,
    caracteristicas: string,
    valorNumerico: number,
  ){
    try{
      //comprueba si existe otro funko con el mismo id
      if (Funko.id.has(id)) {
        throw new Error('El id ya en uso');
      }
      //comprueba si con la misma franquicia existe otro funko con el mismo id de franquicia
      if (Funko.idFranquicia.has(idFranquicia) && Funko.Franquicia.has(Franquicia)) {
        //comprueba si existe otro funko con el mismo nombre y distinto idfranquicia
        if (!Funko.nombre.has(nombre) && Funko.idFranquicia.has(idFranquicia)) {
          throw new Error('El id de la franquicia ya en uso');
        }
      }
      if (valorNumerico < 0) {
        throw new Error('El valor numerico no puede ser negativo');
      }
    }catch(error){
      console.log(chalk.red(error.message));
      exit(1);
    }
    //funcion que comprueba si el objeto tiene el id de la franquicia y el nombre de la franquicia
    this.id = id;
    Funko.id.add(id);
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.Genero = Genero;
    this.Tipo = Tipo;
    this.Franquicia = Franquicia;
    Funko.Franquicia.add(Franquicia);
    this.idFranquicia = idFranquicia;
    Funko.idFranquicia.add(idFranquicia);
    this.exclusivo = exclusivo;
    this.caracteristicas = caracteristicas;
    this.valorNumerico = valorNumerico;
  }
}

```
Como podemos ver en el constructor, tenemos que comprobar que no exista otro Funko con el mismo id, y que si son de la misma franquicia no tenga el mismo numero. Tambien tenemos que comprobar que el valor numerico no sea negativo. Si se cumple alguna de estas condiciones, se lanza un error y se muestra por pantalla el mensaje de error. Si no se cumple ninguna de estas condiciones, se crea el objeto. Tambien la clase tiene los tradicionales
getters y setters.

## Clase ColeccionFunkos

La siguiente clase que se creo fue la de colección de Funkos, que es la que va a almacenar los objetos de la clase Funko. Para ello creamos una clase ColeccionFunkos con los siguientes atributos:

```typescript
export class ColeccionFunkos {
  constructor(private funkos: Funko[], private Duenio:string) {
    this.funkos = funkos;
    this.Duenio = Duenio;
  }

  getFunkos(): Funko[] {
    return this.funkos;
  }

  aniadirFunko(funko_entrada: Funko) {
    this.funkos.push(funko_entrada);
    return funko_entrada;
  }

  eliminarFunko(indice: number): void {
    const funko = this.funkos.find(funko => funko.GetId() === indice);
    if (funko) {
      const indiceFunko = this.funkos.indexOf(funko);
      this.funkos.splice(indiceFunko, 1);
    }
    else{
      throw new Error('No existe el funko con ese id');
    }
  }

  getFunko(id: number): Funko | undefined {
    const funko = this.funkos.find(funko => funko.GetId() === id);
    return funko;
  }

  getDuenioColeccion(): string {
    return this.Duenio;
  }

  setDuenioColeccion(duenio: string): void {
    this.Duenio = duenio;
  }
}
```
Como podemos ver, la clase tiene un constructor que recibe un array de objetos de la clase Funko y un string que es el nombre del dueño de la colección. Tambien tiene los getters y setters de los atributos. Por otro lado, tiene los metodos necesarios para añadir, eliminar y buscar un Funko en la colección en funcion de su id ya que es el atributo unico que los diferencia.

##Clase Usuario

cambiamos un momento de directorio para explicar la clase Usuario. Esta clase es la que va a almacenar los datos de los usuarios que se registren en la aplicación. Para ello creamos una clase Usuario con los siguientes atributos:

```typescript

export class Usuario{
  constructor(private nombre: string){};

  GetNombre(): string{
    return this.nombre;
  }
}

```

Como podemos ver, la clase tiene un constructor que recibe un string que es el nombre del usuario. Tambien tiene el getter del atributo nombre. Esta clase es muy sencilla ya que solo tiene un atributo y se crea para cumplir los principios SOLID.

## Clase ColeccionDatos

Para terminar con las clases, creamos la clase coleccionDatos que es la que va a almacenar los objetos de las clases ColeccionFunkos y Usuario. Para ello creamos una clase ColeccionDatos con los siguientes atributos:

```typescript
export class ColeccionDatos {
  constructor(private datos: ColeccionFunkos[]) {

    this.datos = datos;
  }

  getDatos(): ColeccionFunkos[] {
    return this.datos;
  }

  getDatosUsuario(nombre: string): ColeccionFunkos | undefined {
    const datos = this.datos.find((c) => c.getDuenioColeccion() === nombre);
    return datos;
  }

  aniadirDatos(coleccion: ColeccionFunkos): void {
    this.datos.push(coleccion);
  }

  eliminarDatos(nombre : string): void {
    this.datos = this.datos.filter((c) => c.getDuenioColeccion() !== nombre);
  }
}

```
En este caso, el objeto de la clase va a contener un array el cual, cada posicion va a almacenar un objeto de la clase ColeccionFunkos y un nombre (el del dueño de la colección). Como podemos ver, la clase tiene un constructor que recibe un array de objetos de la clase ColeccionFunkos. Tambien tiene los getters y setters de los atributos. Por otro lado, tiene los metodos necesarios para añadir, eliminar y buscar una colección en la clase en funcion del nombre del dueño ya que es el atributo unico que los diferencia.

## Fichero Index

Ya con todo creado toca montar el programa, lo primero que haremos tras importar todo los archivos e instalar las dependencias necesarias, es crear un objeto de la clase ColeccionDatos, que es la que va a almacenar los objetos de las clases ColeccionFunkos y Usuario. Estos datos para almacenar los va
a sacar de la base de datos formada por los distintos json de las distintas carpetas de la coleccion. Para leer esos datos y montar la coleccion de datos, creamos una funcion:

```typescript
function crearBaseDatos(){
  if(!fs.existsSync('./datos')){
    fs.mkdirSync('./datos');
  }
  fs.readdirSync('./datos').forEach(folder => {
    let usuario = new Usuario(folder);
    let ColeccionFunkos1 = new ColeccionFunkos([],usuario.GetNombre());
    fs.readdirSync('./datos/'+folder).forEach(file => {
      let funko = fs.readFileSync('./datos/'+folder+'/'+file);
      let funkoJson = JSON.parse(funko.toString());
      const tipo = funkoJson.Tipo as Tipo;
      const genero = funkoJson.Genero as Genero;
      let funkoObjeto = new Funko(parseInt(funkoJson.id),funkoJson.nombre,funkoJson.descripcion,genero,tipo,funkoJson.Franquicia,parseInt(funkoJson.idFranquicia),funkoJson.exclusivo,funkoJson.caracteristicas,parseInt(funkoJson.valorNumerico));
      ColeccionFunkos1.aniadirFunko(funkoObjeto);
    });
    ColeccionDatos1.aniadirDatos(ColeccionFunkos1);
  });
}
```

Como podemos ver, la funcion recorre la carpeta datos y para cada carpeta que encuentra crea un objeto de la clase Usuario y un objeto de la clase ColeccionFunkos. Despues, recorre la carpeta del usuario y para cada fichero que encuentra crea un objeto de la clase Funko y lo añade a la coleccion de Funkos del usuario. Por ultimo, añade la coleccion de Funkos del usuario a la coleccion de datos.

Y como tenemos una funcion que lee los datos, se necesita otra para escribir los datos en la base de datos. Para ello creamos la siguiente funcion:

```typescript
function guardarBaseDatos(){
  ColeccionDatos1.getDatos().forEach(coleccion => {
    fs.readdirSync('./datos').forEach(folder => {
      if(folder == coleccion.getDuenioColeccion()){
        coleccion.getFunkos().forEach(funko => {
          fs.writeFileSync('./datos/'+folder+'/'+funko.GetId()+'.json',JSON.stringify(funko));
        });
      }
    });
  });
}
```
Esta clase es mas sencilla, recorre la coleccion de datos y para cada coleccion de datos, recorre la carpeta del usuario y para cada fichero que encuentra, escribe los datos del funko en el fichero. Aclarar que al escribir, sobreescribe los ficheros con los datos nuevos y si no existe el directorio lo crea.

Ya con estas 2 funciones, toca crear los comandos y que van a hacer cada uno de ellos. El primer comando es el de añadir un funko a la coleccion de datos. Para ello creamos la siguiente funcion:

```typescript

crearBaseDatos();
  const tipo = argv.tipo as Tipo;
  const genero = argv.genero as Genero;
  //crea el objeto funko con los datos del comando
  let usuario = new Usuario(argv.usuario);
  let funko = new Funko(argv.id,argv.nombre,argv.descripcion,
    genero,tipo,argv.franquicia,argv.numero,argv.exclusivo,
    argv.caracteristicas,argv.valor);
  //comprueba si existe el usuario y si no lo crea
  if(!fs.existsSync('./datos/'+argv.usuario)){
    fs.mkdirSync('./datos/'+argv.usuario);
    let NuevaColeccionFunkos = new ColeccionFunkos([funko],usuario.GetNombre());
    ColeccionDatos1.aniadirDatos(NuevaColeccionFunkos);
  }
  else{
    //si el usuario ya existe añade el funko a su coleccion
    ColeccionDatos1.getDatosUsuario(argv.usuario)?.aniadirFunko(funko);
  }
  console.log(chalk.green('Funko añadido'));
  //guarda todos los datos en los archivos json
  guardarBaseDatos();
```
Tras pedir todos los comandos necesarios, creamos un objeto de la clase Funko con los datos del comando. Despues, comprobamos si existe el usuario y si no existe lo creamos y creamos un directorio para su coleccion antes de añadir el funko a la base. Si existe, añadimos el funko a la coleccion de datos del usuario. Por ultimo, guardamos los datos en los archivos json.

El siguiente comando es el de eliminar un funko de la coleccion de datos. Para ello creamos la siguiente funcion:

```typescript
//llama al metodo para crear la base de datos
    crearBaseDatos();
    //comprueba si existe el usuario
    if(fs.existsSync('./datos/'+argv.usuario)){
      //compueba si existe el funko con ese id
      if(!ColeccionDatos1.getDatosUsuario(argv.usuario)?.getFunko(argv.id)){
        console.log(chalk.red('El funko no existe'));
        return;
      }
      //si existe borra el funko de la coleccion de funkos del usuario
      ColeccionDatos1.getDatosUsuario(argv.usuario)?.eliminarFunko(argv.id);
      //borra el archivo json del funko
      fs.unlink('./datos/'+argv.user+'/'+argv.id+'.json', (err) => {
        if (err) {
          console.error(err);
        }
      })
      console.log(chalk.green('Funko borrado'));
    }
    else{
      console.log(chalk.red('El usuario no existe'));
    }
    //guarda todos los datos en los archivos json
    guardarBaseDatos();
```
Tras llamar a la funcion para crear la base de datos, comprobamos si existe el usuario y si existe, comprobamos si existe el funko con ese id. Si no existe, mostramos un mensaje de error y si existe, lo borramos de la coleccion de datos del usuario y del archivo json. Por ultimo, guardamos los datos en los archivos json.

ya pudiendo añadir y borrar un funko, creamos un comando para editar alguno de sus datos

```typescript
    crearBaseDatos();
    if(!fs.existsSync('./datos/'+argv.user)){
      let usuario = new Usuario(argv.usuario);
      if(ColeccionDatos1.getDatosUsuario(usuario.GetNombre())?.getFunko(argv.id)){
        ColeccionDatos1.getDatosUsuario(usuario.GetNombre())?.getFunko(argv.id)?.SetNombre(argv.nombre);
        ColeccionDatos1.getDatosUsuario(usuario.GetNombre())?.getFunko(argv.id)?.SetDescripcion(argv.descripcion);
        ColeccionDatos1.getDatosUsuario(usuario.GetNombre())?.getFunko(argv.id)?.SetTipo(argv.tipo as Tipo);
        ColeccionDatos1.getDatosUsuario(usuario.GetNombre())?.getFunko(argv.id)?.SetGenero(argv.genero as Genero);
        ColeccionDatos1.getDatosUsuario(usuario.GetNombre())?.getFunko(argv.id)?.SetFranquicia(argv.franquicia);
        ColeccionDatos1.getDatosUsuario(usuario.GetNombre())?.getFunko(argv.id)?.SetIdFranquicia(argv.numero);
        ColeccionDatos1.getDatosUsuario(usuario.GetNombre())?.getFunko(argv.id)?.SetExclusivo(argv.exclusivo);
        ColeccionDatos1.getDatosUsuario(usuario.GetNombre())?.getFunko(argv.id)?.SetCaracteristicas(argv.caracteristicas);
        ColeccionDatos1.getDatosUsuario(usuario.GetNombre())?.getFunko(argv.id)?.SetValorNumerico(argv.valor);
        console.log(chalk.green('Funko editado'));
      }
      else{
        console.log(chalk.red('El funko no existe'));
      }
    }
    else{
      console.log(chalk.red('El usuario no existe'));
    }
    guardarBaseDatos();
```

Como podemos ver, es muy similar al comando de añadir un funko, pero en vez de crear un nuevo funko, editamos los datos del funko que ya existe usando los metodos Set de la clase Funko.

el siguiente comando es para mostrar todos los funkos en una lista y los muestra con colores en funcion de su valor en el mercado. Para ello creamos la siguiente funcion:

```typescript
crearBaseDatos();
    ColeccionDatos1.getDatos()?.forEach((usuario) => {
      console.log(chalk.blue('Usuario: '+usuario.getDuenioColeccion()));
      usuario.getFunkos()?.forEach((funko) => {
        if(funko.GetValorNumerico() <= 10){
          console.log(chalk.green('Funko: '+funko.GetNombre()));
        }
        else if(funko.GetValorNumerico() <= 20 && funko.GetValorNumerico() > 10){
          console.log(chalk.yellow('Funko: '+funko.GetNombre()));
        }
        else if(funko.GetValorNumerico() <= 30 && funko.GetValorNumerico() > 20){
          console.log(chalk.magenta('Funko: '+funko.GetNombre()));
        }
        else{
          console.log(chalk.white('Funko: '+funko.GetNombre()));
        }
      })
    })
```
Como podemos ver, recorremos la coleccion de datos y mostramos el nombre del usuario y el nombre de cada funko con un color en funcion de su valor en el mercado. La rubrica de colores es la siguiente:
1.- Verde: 0-10
2.- Amarillo: 10-20
3.- Magenta: 20-30
4.- Blanco: 30-40

El ultimo comando es para mostrar los datos de un funko en concreto. Para ello creamos la siguiente funcion:

```typescript
//llama al metodo para crear la base de datos
    crearBaseDatos();
    //comprueba si existe el usuario
    if(fs.existsSync('./datos/'+argv.usuario)){
      let usuario = new Usuario(argv.usuario);
      //compueba si existe el funko con ese id
      ColeccionDatos1.getDatos()?.forEach((usuario) => {
        usuario.getFunkos()?.forEach((funko) => {
          if(funko.GetId() == argv.id){
            if(funko!= undefined){
              if(funko.GetValorNumerico() <= 10){
                console.log(chalk.green('id: '+funko.GetId()));
                console.log(chalk.green('Nombre: '+funko.GetNombre()));
                console.log(chalk.green('Descripcion: '+funko.GetDescripcion()));
                console.log(chalk.green('Tipo: '+funko.GetTipo()));
                console.log(chalk.green('Genero: '+funko.GetGenero()));
                console.log(chalk.green('Franquicia: '+funko.GetFranquicia()));
                console.log(chalk.green('Numero de la franquicia: '+funko.GetIdFranquicia()));
                console.log(chalk.green('Exclusivo: '+funko.GetExclusivo()));
                console.log(chalk.green('Caracteristicas: '+funko.GetCaracteristicas()));
                console.log(chalk.green('Valor: '+funko.GetValorNumerico()));
              }
              else if(funko.GetValorNumerico() <= 20 && funko.GetValorNumerico() > 10){
                console.log(chalk.yellow('id: '+funko.GetId()));
                console.log(chalk.yellow('Nombre: '+funko.GetNombre()));
                console.log(chalk.yellow('Descripcion: '+funko.GetDescripcion()));
                console.log(chalk.yellow('Tipo: '+funko.GetTipo()));
                console.log(chalk.yellow('Genero: '+funko.GetGenero()));
                console.log(chalk.yellow('Franquicia: '+funko.GetFranquicia()));
                console.log(chalk.yellow('Numero de la franquicia: '+funko.GetIdFranquicia()));
                console.log(chalk.yellow('Exclusivo: '+funko.GetExclusivo()));
                console.log(chalk.yellow('Caracteristicas: '+funko.GetCaracteristicas()));
                console.log(chalk.yellow('Valor: '+funko.GetValorNumerico()));
              }
              else if(funko.GetValorNumerico() <= 30 && funko.GetValorNumerico() > 20){
                console.log(chalk.magenta('id: '+funko.GetId()));
                console.log(chalk.magenta('Nombre: '+funko.GetNombre()));
                console.log(chalk.magenta('Descripcion: '+funko.GetDescripcion()));
                console.log(chalk.magenta('Tipo: '+funko.GetTipo()));
                console.log(chalk.magenta('Genero: '+funko.GetGenero()));
                console.log(chalk.magenta('Franquicia: '+funko.GetFranquicia()));
                console.log(chalk.magenta('Numero de la franquicia: '+funko.GetIdFranquicia()));
                console.log(chalk.magenta('Exclusivo: '+funko.GetExclusivo()));
                console.log(chalk.magenta('Caracteristicas: '+funko.GetCaracteristicas()));
                console.log(chalk.magenta('Valor: '+funko.GetValorNumerico()));
              }
              else{
                console.log(chalk.white('id: '+funko.GetId()));
                console.log(chalk.white('Nombre: '+funko.GetNombre()));
                console.log(chalk.white('Descripcion: '+funko.GetDescripcion()));
                console.log(chalk.white('Tipo: '+funko.GetTipo()));
                console.log(chalk.white('Genero: '+funko.GetGenero()));
                console.log(chalk.white('Franquicia: '+funko.GetFranquicia()));
                console.log(chalk.white('Numero de la franquicia: '+funko.GetIdFranquicia()));
                console.log(chalk.white('Exclusivo: '+funko.GetExclusivo()));
                console.log(chalk.white('Caracteristicas: '+funko.GetCaracteristicas()));
                console.log(chalk.white('Valor: '+funko.GetValorNumerico()));
              }
            }
            else{
              console.log(chalk.red('No existe el funko con ese id'));
            }
          }
        })
      })
    }
    else{
      console.log(chalk.red('No existe el usuario'));
    }
```
Como podemos ver, recorremos la coleccion de datos y mostramos los datos del funko con el id que le hemos pasado por parametro. La rubrica de colores es la misma que en el comando anterior.

## Practica Presencial

En esta semana teniamos que implementar con el patron **Template Method** un algoritmo con nuestro propio map y nuestro propio Reduce abstracto donde en las clases hijas tengan distintos reduces. En mi caso, consegui sacar el map el reduce y hacerlo con el patron **Template Method** incluyendo actions, pero no me dio tiempo a hacer pruebas.

## Conclusiones

Con esta practica ,pese a sufrir con Node .js, me ha gustado mucho hacerla. Me parece super util todo lo nuevo que nos tocó implementar en esta practica, en especial el yargs a la hora de poder hacer codigos de una manera distinta y que haga cosas especificas. Chalk pese a solo ser algo estetico si me parece que de cara a los usuarios es algo vistoso y que para los usuarios, a la hora de ver los mensajes, sepan que tipo de mensaje son me parece muy util.

