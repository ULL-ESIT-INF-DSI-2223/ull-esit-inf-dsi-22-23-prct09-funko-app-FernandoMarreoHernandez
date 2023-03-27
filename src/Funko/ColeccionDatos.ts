import { ColeccionFunkos } from "./ColeccionFunkos.js";
import { Funko,Genero,Tipo } from "./Funko";
let Funko1 = new Funko(1, 'Pain','es una figura de la serie Naruto (best anime ever)', Genero.Anime, Tipo.PopXXL,'Naruto', 934,
false, 'cabeza bailona',15.99);
let Funko2 = new Funko(2, 'Pain','es una figura de la serie Naruto (best anime ever)', Genero.Anime, Tipo.PopXXL,'Naruto', 935,
false, 'cabeza bailona',15.99);
let Funko3 = new Funko(3, 'Pain','es una figura de la serie Naruto (best anime ever)', Genero.Anime, Tipo.PopXXL,'Naruto', 936,
false, 'cabeza bailona',15.99);
export class ColeccionDatos {
  constructor(private datos: ColeccionFunkos[]) {
    datos.push(new ColeccionFunkos([Funko1,Funko2], 'Fernando'));
    datos.push(new ColeccionFunkos([Funko3], 'Pablo'));
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
