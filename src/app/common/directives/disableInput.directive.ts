import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({selector:'[disableInput]'})
export class disableInputDirective{

    @Input("disableInput")
    blockedWords:string;

    constructor(private element:ElementRef){

    }
    @HostListener("blur") m1(){
        console.log(this.blockedWords);
        let value = this.element.nativeElement.value;
        if(value==="chandra"){
            alert("dont allow this value");
        }
    }
}