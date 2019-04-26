import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'DwSelectModalSearchPipe'
})
@Injectable()
export class DwSelectModalSearchPipe implements PipeTransform {
  transform(datas: any, args?: string): any {
    if (args) {
      return datas.filter(item => {
        return Object.values(item).find(param => {
          if (!param) {
            return;
          }
          return param.toString().indexOf(args) >= 0;
        });
      });
    }

    return datas;
  }
}
