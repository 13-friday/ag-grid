import {Component, OnInit} from '@angular/core';
import {AppService} from './app.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {DatePipe} from '@angular/common';
import {ImageFormatterComponent} from './image-formatter/image-formatter.component';
import {LinkFormatterComponent} from './link-formatter/link-formatter.component';
import {ToolPanelComponent} from './tool-panel/tool-panel.component';
import {HeaderComponent} from './header/header.component';
import {CheckboxComponent} from './checkbox/checkbox.component';
import {AllModules} from '@ag-grid-enterprise/all-modules';
import {ColumnApi, GridApi} from 'ag-grid-community';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private service: AppService,
    private dateFormatter: DatePipe,
  ) {

  }

  gridApi: GridApi;
  gridColumnApi: ColumnApi;

  public modules = AllModules;

  columnDefs = [
    {
      colId: 'checkbox',
      headerName: '',
      cellRendererFramework: CheckboxComponent,
      headerComponentParams : {
        showHeaderCheckbox: true,
      }
    },
    {
      colId: '1',
      headerName: '',
      cellRendererFramework: ImageFormatterComponent,
    },
    {headerName: 'Published on', field: 'publishedAt'},
    {headerName: 'Video Title', cellRendererFramework: LinkFormatterComponent},
    {headerName: 'Description', field: 'description'}
  ];
  defaultColDef;
  rowData: Observable<any>;
  sideBar;
  frameworkComponents;
  icons;
  context;

  ngOnInit(): void {
    this.context = { componentParent: this };
    this.icons = {
      'custom-stats': '<span class="ag-icon ag-icon-custom-stats"></span>',
    };
    this.sideBar = {
      toolPanels: [
        {
          id: 'customStats',
          labelDefault: 'ToolBar',
          labelKey: 'customStats',
          toolPanel: 'toolPanelComponent',
        },
      ],
      defaultToolPanel: 'customStats',
    };

    this.frameworkComponents = {
      toolPanelComponent: ToolPanelComponent,
      agColumnHeader: HeaderComponent,
    };

    this.defaultColDef = {
      flex: 1,
      minWidth: 100,

      enableValue: true,
      enableRowGroup: true,
      enablePivot: true,
      sortable: true,
      filter: true,
    };
    this.rowData = this.service.getData().pipe(
      map(({items}) => {
        return items.map(item => {
          return {
            ...item.snippet,
            publishedAt: this.dateFormatter.transform(item.snippet.publishedAt, 'dd.MM.yy hh:mm'),
            videoId: item.id.videoId
          };
        });
      })
    );
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  setSelected(cell, value) {
    cell.setSelected(value);
  }

  setAllSelected(value) {
    value ? this.gridApi.selectAll() : this.gridApi.deselectAll();
  }

  hideColumn(value) {
    this.gridColumnApi.hideColumn('checkbox', value);
  }
}
