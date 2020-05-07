import {Component} from '@angular/core';
import {IToolPanelParams} from 'ag-grid-community';
import {ImageFormatterComponent} from '../image-formatter/image-formatter.component';
import {LinkFormatterComponent} from '../link-formatter/link-formatter.component';

@Component({
  selector: 'app-tool-panel',
  templateUrl: './tool-panel.component.html',
  styleUrls: ['./tool-panel.component.scss']
})
export class ToolPanelComponent {
  public params: IToolPanelParams;
  showCheckbox = true;

  agInit(params: IToolPanelParams): void {
    this.params = params;
  }

  changeSelectionMode() {
    this.showCheckbox = !this.showCheckbox;
    if (!this.showCheckbox) {
      this.params.api.deselectAll();
    }
    this.params.api.setColumnDefs([
      {
        colId: '1',
        headerName: '',
        cellRendererFramework: ImageFormatterComponent,
        checkboxSelection: this.showCheckbox,
      },
      {headerName: 'Published on', field: 'publishedAt'},
      {headerName: 'Video Title', cellRendererFramework: LinkFormatterComponent},
      {headerName: 'Description', field: 'description'}
    ]);

    console.log(this.params.api.getDisplayedRowCount());
    console.log(this.params.api.getSelectedRows().length);
    console.log(this.showCheckbox);
  }
}
