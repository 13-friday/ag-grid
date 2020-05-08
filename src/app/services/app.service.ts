import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {DatePipe} from '@angular/common';
import {YoutubeRecordsApi} from '../interfaces/youtube-records-api';
import {YoutubeRecordItem} from '../interfaces/youtube-record-item';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(
    private http: HttpClient,
    public dateFormatter: DatePipe,
  ) {
  }
  private url = 'https://www.googleapis.com/youtube/v3/search?' +
    'key=AIzaSyD3xdmFf5_aiBYe90HJp5PbcUrOTdv5b1M&maxResults=50&type=video&part=snippet&q=john';

  transformRecords(records: Observable<YoutubeRecordsApi>): Observable<YoutubeRecordItem[]> {
    return records.pipe(
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

  getYoutubeRecords(): Observable<YoutubeRecordItem[]> {
    return this.transformRecords(this.http.get<YoutubeRecordsApi>(this.url));
  }
}
