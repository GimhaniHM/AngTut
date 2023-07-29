import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextComponentComponent } from './text-component/text-component.component';
import { ImagecomponentComponent } from './imagecomponent/imagecomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    TextComponentComponent,
    ImagecomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
