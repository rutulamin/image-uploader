import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appImageUpload]'
})
export class ImageUploadDirective {

  constructor(private render: Renderer2, private elementRef:ElementRef) { }
  
  @HostListener('change', ['$event']) onchange(event: any){
    if (this.elementRef.nativeElement.contains(event.target)) { 
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = () => {
          this.render.setAttribute(this.elementRef.nativeElement.querySelector("img"), "src", reader.result.toString());
          //this.elementRef.nativeElement.querySelector("img").setAttribute("src", reader.result.toString());
        }; 
      }
    }
}