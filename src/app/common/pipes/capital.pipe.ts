import { Pipe,PipeTransform} from "@angular/core";
@Pipe({
    name:"capital"
})
export class CapitalPipe implements PipeTransform{
    transform(value:string):any{
        return value.charAt(0).toUpperCase()+value.substr(1).toLowerCase();
    }
}