import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status',
})
export class StatusPipe implements PipeTransform {
  transform(isAtivo: boolean): string {
    if (isAtivo) {
      return 'Ativo';
    } else {
      return 'Desativado';
    }
  }
}
