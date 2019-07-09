import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appImageUpload]'
})
export class ImageUploadDirective {

  constructor(private elementRef:ElementRef) { }
  @HostListener('change', ['$event']) onchange(event: any){
    if (this.elementRef.nativeElement.contains(event.target)) { 
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = () => {
          this.elementRef.nativeElement.querySelector("img").setAttribute("src", reader.result.toString());
        }; 
      }
    }
}