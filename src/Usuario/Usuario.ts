/**
 * Clase que representa un usuario
 * @param id id del usuario
 * @param nombre nombre del usuario
 * @method GetId() getter que retorna el id del usuario
 * @method GetNombre() getter que retorna el nombre del usuario
 */
export class Usuario{
  constructor(private id: number, private nombre: string){};

  /**
   * Getter que retorna el id de usuario
   * @returns id
   */
  GetId(): number{
    return this.id;
  }

  /**
   * Getter que retorna el nombre de usuario
   * @returns nombre
   */
  GetNombre(): string{
    return this.nombre;
  }
}
