import { sandboxOf } from 'angular-playground';
import { ExpanderComponent } from './expander.component';

export default sandboxOf(ExpanderComponent)
  .add('default', {
    template: `
    <momo-expander
        title="Stunden"
        icon="../assets/icons/Time.svg">
        <ul>
          <li>Montag 00:28</li>
          <li>Freitag 06:02</li>
          <li>...</li>
        </ul>
    </momo-expander>
  `,
  })
  .add('disabled', {
    template: `
    <momo-expander
        title="Am am disabled"
        [disabled]="false"
        icon="../assets/icons/Time.svg">
        <ul>
          <li>Montag 00:28</li>
          <li>Freitag 06:02</li>
          <li>...</li>
        </ul>
    </momo-expander>
  `,
  });
