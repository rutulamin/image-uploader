import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  imgSrc: string = '';
  constructor() { }

  ngOnInit() {
  }
  // onSelected(event: any){
  //   var reader = new FileReader();
  //   reader.readAsDataURL(event.target.files[0]);
  //   reader.onload = () => {
  //     var dataURL = reader.result;
  //     this.imgSrc = dataURL.toString();
  //   }; 
  // }
}
