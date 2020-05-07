import {Component, OnInit} from '@angular/core';
import {AppService} from './app.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {DatePipe} from '@angular/common';
import {ImageFormatterComponent} from './image-formatter/image-formatter.component';
import {LinkFormatterComponent} from './link-formatter/link-formatter.component';
import {ToolPanelComponent} from './tool-panel/tool-panel.component';
import { AllCommunityModules } from '@ag-grid-community/all-modules';

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
  public modules = AllCommunityModules;

  columnDefs = [
    {
      colId: '1',
      headerName: '',
      cellRendererFramework: ImageFormatterComponent,
      checkboxSelection: true,
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
  ngOnInit(): void {
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

    this.frameworkComponents = { toolPanelComponent: ToolPanelComponent };

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
}
