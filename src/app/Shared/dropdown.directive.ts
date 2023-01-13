import {Directive, ElementRef, HostBinding, HostListener, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') open: boolean = false;
  @HostListener('click') onClicking(){
    this.open = !this.open
  }

  constructor(private elRef: ElementRef, private vcRef: ViewContainerRef) { }

}
