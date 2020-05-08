import {Component} from '@angular/core';

@Component({
  selector: 'app-tool-panel',
  templateUrl: './tool-panel.component.html',
  styleUrls: ['./tool-panel.component.scss']
})
export class ToolPanelComponent {
  public params;
  showCheckbox = true;

  agInit(params): void {
    this.params = params;
  }

  changeSelectionMode() {
    this.showCheckbox = !this.showCheckbox;
    if (!this.showCheckbox) {
      this.params.api.deselectAll();
    }
    this.params.columnApi.setColumnVisible('checkbox', this.showCheckbox);
  }
}
