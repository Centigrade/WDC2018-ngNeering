import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MomoUiModule } from './momo-ui/momo-ui.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MomoUiModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
