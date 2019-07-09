import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UploadComponent } from './upload/upload.component';
import { ImageUploadDirective } from './image-upload.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UploadComponent,
    ImageUploadDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
