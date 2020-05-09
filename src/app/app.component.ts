import {Component, OnInit} from '@angular/core';
import {AppService} from './services/app.service';
import {Observable, of} from 'rxjs';
import {ImageFormatterComponent} from './image-formatter/image-formatter.component';
import {LinkFormatterComponent} from './link-formatter/link-formatter.component';
import {ToolPanelComponent} from './tool-panel/tool-panel.component';
import {HeaderComponent} from './header/header.component';
import {CheckboxComponent} from './checkbox/checkbox.component';
import {ColumnApi, GridApi} from '@ag-grid-community/core';
import {YoutubeRecordItem} from './interfaces/youtube-record-item';
import {ClientSideRowModelModule} from '@ag-grid-community/client-side-row-model';
import {MenuModule} from '@ag-grid-enterprise/menu';
import {ClipboardModule} from '@ag-grid-enterprise/clipboard';
import {catchError} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private service: AppService,
  ) {

  }

  modules = [ClientSideRowModelModule, MenuModule, ClipboardModule];
  gridApi: GridApi;
  gridColumnApi: ColumnApi;

  columnDefs = [
    {
      colId: 'checkbox',
      headerName: '',
      cellRendererFramework: CheckboxComponent,
      headerComponentParams: {
        showHeaderCheckbox: true,
      }
    },
    {
      headerName: '',
      cellRendererFramework: ImageFormatterComponent,
    },
    {headerName: 'Published on', field: 'publishedAt'},
    {
      headerName: 'Video Title',
      colId: 'Video',
      cellRendererFramework: LinkFormatterComponent
    },
    {headerName: 'Description', field: 'description'}
  ];
  defaultColDef;
  youtubeRecords: Observable<YoutubeRecordItem[]>;
  sideBar;
  frameworkComponents;
  context;
  errorLoading;

  ngOnInit(): void {
    this.context = {componentParent: this};
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
    };
    this.youtubeRecords = this.service.getYoutubeRecords().pipe(
      catchError(({error}) => {
        this.errorLoading = error.error;
        return of(null);
      })
    );
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridColumnApi.autoSizeColumn('checkbox');
  }

  getContextMenuItems(params) {
    if (params.column.colId === 'Video') {
      return [
        ...params.defaultItems,
        {
          name: 'Open in new tab',
          action: () => {
            window.open('https://www.youtube.com/watch?v=' + params.node.data.videoId);
          },
        },
      ];
    } else {
      return params.defaultItems;
    }
  }
}
