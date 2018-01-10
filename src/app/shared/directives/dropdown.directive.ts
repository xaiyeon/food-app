import { Directive, HostListener, HostBinding, HostDecorator, Input, ElementRef } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
} )

export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;

    @HostListener('click') tpggleOpen() {
        this.isOpen = !this.isOpen;
    }
}