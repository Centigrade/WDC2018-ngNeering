import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { ExpanderComponent, MomoUiModule } from 'dist/momo-ui/momo-ui';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, MomoUiModule],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [],
  entryComponents: [AppComponent],
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const elm = createCustomElement(ExpanderComponent, { injector: this.injector });
    customElements.define('momo-expander', elm);
  }
}
