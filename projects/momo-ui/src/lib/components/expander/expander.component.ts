import { Component, HostBinding, Input, OnChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'momo-expander',
  templateUrl: './expander.component.html',
  styleUrls: ['./expander.component.scss'],
})
export class ExpanderComponent implements OnChanges {
  @Input()
  title: string;

  @Input()
  icon: string;

  @Input()
  @HostBinding('class.disabled')
  disabled = false;

  @Input()
  content: string;

  public htmlContent;

  constructor(private sanitizer: DomSanitizer) {}

  public expanded = false;

  public toggle() {
    this.expanded = !this.expanded;
  }

  ngOnChanges() {
    this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(this.content);
  }
}
