/**
 * enumerable que contiene los generos de los Funkos
 */
export enum Genero {
  Animacion = 'Animacion',
  PeliculasYTv = 'Peliculas y TV',
  Videojuegos = 'Videojuegos',
  Deportes = 'Deportes',
  Musica = 'Musica',
  Anime = 'Anime',
  Otros = 'Otros',
}

/**
 * enumerable que contiene los tipos de los Funkos
 */
export enum Tipo {
  Pop = 'Pop!',
  PopVinilo = 'Pop! Vinilo',
  PopRides = 'Pop! Rides',
  PopVinilGold = 'Pop! Vinilo Gold',
  PopXXL = 'Pop! XXL',
}

/**
 * Clase Funko
 * @param id id del Funko
 * @param nombre nombre del Funko
 * @param Genero genero del Funko
 * @param Tipo tipo del Funko
 * @param Franquicia franquicia del Funko
 * @param idFranquicia id de la franquicia del Funko
 * @param exclusivo si el Funko es exclusivo o no
 * @param caracteristicas caracteristicas del Funko
 * @param valorNumerico valor numerico del Funko en el mercado
 * @method GetId() devuelve el id del Funko
 * @method GetNombre() devuelve el nombre del Funko
 * @method GetGenero() devuelve el genero del Funko
 * @method GetTipo() devuelve el tipo del Funko
 * @method GetFranquicia() devuelve la franquicia del Funko
 * @method GetIdFranquicia() devuelve el id de la franquicia del Funko
 * @method GetExclusivo() devuelve si el Funko es exclusivo o no
 * @method GetCaracteristicas() devuelve las caracteristicas del Funko
 * @method GetValorNumerico() devuelve el valor numerico del Funko en el mercado
 */
export class Funko{
  static id = new Set<number>();
  static idFranquicia = new Set<number>();
  static Franquicia = new Set<string>();
  private id: number;
  private idFranquicia: number;
  private Franquicia: string;
  constructor(
    id: number,
    private nombre: string,
    private Genero: Genero,
    private Tipo: Tipo,
    Franquicia: string,
    idFranquicia: number,
    private exclusivo: boolean,
    private caracteristicas: string,
    private valorNumerico: number,
  ){
    if (Funko.id.has(id)) {
      throw new Error('El id ya en uso');
    }
    //funcion que comprueba si el objeto tiene el id de la franquicia y el nombre de la franquicia
    if (Funko.idFranquicia.has(idFranquicia) && Funko.Franquicia.has(Franquicia)) {
      throw new Error('El id de la franquicia ya en uso');
    }
    if (valorNumerico < 0) {
      throw new Error('El valor numerico no puede ser negativo');
    }
    this.id = id;
    this.idFranquicia = idFranquicia;
    this.Franquicia = Franquicia;
    Funko.id.add(id);
    Funko.idFranquicia.add(idFranquicia);
    Funko.Franquicia.add(Franquicia);
  }
  /**
   * Funcion que devuelve el id del Funko
   * @returns id
   */
  GetId(): number {
    return this.id;
  }
  /**
   * Funcion que devuelve el id de la franquicia del Funko
   * @returns idFranquicia
   */
  GetIdFranquicia(): number {
    return this.idFranquicia;
  }
  /**
   * Funcion que devuelve el nombre del Funko
   * @returns nombre
   * */
  GetNombre(): string {
    return this.nombre;
  }
  /**
   * Funcion que devuelve el genero del Funko
   * @returns genero
   * */
  GetGenero(): Genero {
    return this.Genero;
  }
  /**
   * Funcion que devuelve el tipo del Funko
   * @returns tipo
   * */
  GetTipo(): Tipo {
    return this.Tipo;
  }
  /**
   * Funcion que devuelve la franquicia del Funko
   * @returns franquicia
   * */
  GetFranquicia(): string {
    return this.Franquicia;
  }
  /**
   * Funcion que devuelve si el Funko es exclusivo o no
   * @returns exclusivo
   * */
  GetExclusivo(): boolean {
    return this.exclusivo;
  }
  /**
   * Funcion que devuelve las caracteristicas del Funko
   * @returns caracteristicas
   * */
  GetCaracteristicas(): string {
    return this.caracteristicas;
  }
  /**
   * Funcion que devuelve el valor numerico del Funko
   * @returns valorNumerico
   * */
  GetValorNumerico(): number {
    return this.valorNumerico;
  }
}
