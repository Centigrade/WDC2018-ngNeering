import { Component, Input } from '@angular/core';

@Component({
  selector: 'momo-expander',
  templateUrl: './expander.component.html',
  styleUrls: ['./expander.component.scss'],
})
export class ExpanderComponent {
  @Input()
  title: string;

  @Input()
  icon: string;

  public expanded = false;

  public toggle() {
    this.expanded = !this.expanded;
  }
}
