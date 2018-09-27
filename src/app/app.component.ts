import { Component } from '@angular/core';

@Component({
  selector: 'momo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'momo';

  private themeToggled = false;

  public toggleTheme() {
    if (!this.themeToggled) {
      this.setDarkTheme();
    } else {
      this.setLightTheme();
    }

    this.themeToggled = !this.themeToggled;
  }

  private setDarkTheme() {
    window.document.body.style.setProperty(
      '--brush-bg-highlight',
      'linear-gradient(45deg, #2b7c42, #a3a524)',
    );
    window.document.body.style.setProperty('--brush-bg-light', '#000');
    window.document.body.style.setProperty('--brush-fg-dark-bg', '#fff');
  }

  private setLightTheme() {
    window.document.body.style.setProperty(
      '--brush-bg-highlight',
      'linear-gradient(45deg, #2b307c, #a72574)',
    );
    window.document.body.style.setProperty('--brush-bg-light', '#fff');
    window.document.body.style.setProperty('--brush-fg-dark-bg', '#000');
  }
}
