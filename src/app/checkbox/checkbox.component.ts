import {Component} from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  params: any;

  agInit(params: any) {
    this.params = params;
  }

  select({target}) {
    this.params.context.componentParent.setSelected(this.params.node, target.checked);
  }

  refresh(): boolean {
    return false;
  }
}
