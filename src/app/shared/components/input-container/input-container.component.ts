import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'pm-input-container',
  templateUrl: './input-container.component.html'
})
export class InputContainerComponent {
  @Input() public label: string = 'Campo';
  @Input() public control!: FormControl;
  @Input() public showMessageError: boolean = true;

  constructor() { }
}
