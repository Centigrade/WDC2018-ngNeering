import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { PlaygroundModule } from 'angular-playground';

PlaygroundModule.configure({
  selector: 'momo-root',
  overlay: false,
});

platformBrowserDynamic().bootstrapModule(PlaygroundModule);
