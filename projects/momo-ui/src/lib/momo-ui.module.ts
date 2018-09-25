import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExpanderComponent } from './components/expander/expander.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ExpanderComponent],
  exports: [ExpanderComponent],
})
export class MomoUiModule {}
