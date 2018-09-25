import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MomoUiModule } from 'momo-ui';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MomoUiModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
