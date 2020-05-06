import {Component, OnInit} from '@angular/core';
import {AppService} from './app.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {DatePipe} from '@angular/common';
import {ImageFormatterComponent} from './image-formatter/image-formatter.component';
import {LinkFormatterComponent} from './link-formatter/link-formatter.component';

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

  columnDefs = [
    {headerName: '', cellRendererFramework: ImageFormatterComponent},
    {headerName: 'Published on', field: 'publishedAt'},
    {headerName: 'Video Title', cellRendererFramework: LinkFormatterComponent},
    {headerName: 'Description', field: 'description'}
  ];

  rowData: Observable<any>;

  ngOnInit(): void {
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
