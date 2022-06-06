import { Categoria } from './../model/categoria';

export class Constants {
  public static readonly PRODUTOS_KEY = 'produtos';

  public static readonly CATEGORIAS:Categoria[] = new Array(new Categoria("1","Bebidas"),new Categoria("2","Frios"));

}
