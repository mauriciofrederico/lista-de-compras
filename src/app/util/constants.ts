import { Categoria } from './../model/categoria';

export class Constants {
  public static readonly PRODUTOS_KEY = 'produtos';

  public static readonly CATEGORIAS: Categoria[] = new Array(
    new Categoria('1', 'Acougue'),
    new Categoria('2', 'Bebidas'),
    new Categoria('3', 'Congelados'),
    new Categoria('4', 'Enlatados'),
    new Categoria('5', 'Farinhas e Graos'),
    new Categoria('6', 'Frios'),
    new Categoria('7', 'Higiene'),
    new Categoria('8', 'Hortifruti'),
    new Categoria('9', 'Laticinios'),
    new Categoria('10', 'Limpeza'),
    new Categoria('11', 'Mercearia'),
    new Categoria('12', 'Molhos e Temperos'),
    new Categoria('13', 'Outros')
  );
}
