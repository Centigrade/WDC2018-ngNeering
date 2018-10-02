import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { ElementZoneStrategyFactory } from 'elements-zone-strategy';
import { ExpanderComponent, MomoUiModule } from 'momo-ui';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, MomoUiModule],
  declarations: [AppComponent],
  entryComponents: [ExpanderComponent],
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    // NOTE: wuerfelda: We have to use a custom zone strategy in Angular Elements
    // see: https://github.com/angular/angular/issues/24577
    const strategyFactory = new ElementZoneStrategyFactory(ExpanderComponent, this.injector);
    const element = createCustomElement(ExpanderComponent, {
      injector: this.injector,
      strategyFactory,
    });
    customElements.define('momo-expander', element);
  }
}
