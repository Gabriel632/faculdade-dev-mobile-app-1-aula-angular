import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    standalone: true,
    name: 'appuppercase'
})
export class CustomUpperCasePipe implements PipeTransform {
    transform(value: string) {
        return value.toLocaleUpperCase();
    }

}