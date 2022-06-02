import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'
})
export class MayusculaPipe implements PipeTransform {
                          // enMayuscula siempre sera true a menos que lo manden en false
    transform(valor: String, enMayuscula: boolean = true): string {
        // if ( enMayuscula ) {
        //     return valor.toUpperCase();
        // } else
        //     return valor.toLocaleLowerCase();
        return (enMayuscula) 
            ? valor.toUpperCase()
            : valor.toLowerCase();
    }

}