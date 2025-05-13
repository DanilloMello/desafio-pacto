import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appLoginButton]'
})
export class FormButtonDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.addClass(this.el.nativeElement, 'login-btn');
  }

}
