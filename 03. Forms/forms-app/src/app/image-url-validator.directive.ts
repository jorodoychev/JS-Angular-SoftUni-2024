import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';
import {NgControl} from "@angular/forms";

@Directive({
  selector: '[appImageUrlValidator]'
})
export class ImageUrlValidatorDirective {

  constructor(private el: ElementRef,
              private renderer: Renderer2,
              private ngControl: NgControl) {
  }

  @HostListener('input', ['$event']) onInputChanged(event: Event) {
    const inputValue = (<HTMLInputElement>event.target).value;

    if (inputValue.startsWith('http') && (inputValue.endsWith('.jpg') || inputValue.endsWith('.png'))) {
      // Setting the border color to green if the URL is valid.
      this.renderer.setStyle(this.el.nativeElement, 'border-left', '5px solid green');
      // Clearing the errors on control if the input is valid
      if (this.ngControl.control != null) {
        this.ngControl.control.setErrors(null);
      }
    } else {
      // Setting the border color to red if the URL is invalid.
      this.renderer.setStyle(this.el.nativeElement, 'border-left', '5px solid red');
      // Setting errors to control
      if (this.ngControl.control != null) {
        this.ngControl.control.setErrors({'incorrect': true});
      }
    }
  }
}
