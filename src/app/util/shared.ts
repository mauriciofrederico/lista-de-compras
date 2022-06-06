import { Constants } from './constants';


export class Shared {
  constructor() {}

   public static initializeWebStorage(): void {
    if (localStorage.getItem(Constants.PRODUTOS_KEY) != null) {
      return;
    }



    localStorage.setItem(Constants.PRODUTOS_KEY, JSON.stringify([]));

  }
}
