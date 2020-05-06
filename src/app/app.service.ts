import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private url = 'https://www.googleapis.com/youtube/v3/search?' +
    'key=AIzaSyD3xdmFf5_aiBYe90HJp5PbcUrOTdv5b1M&maxResults=50&type=video&part=snippet&q=john';

  constructor(
    private http: HttpClient,
  ) {
  }

  getData(): Observable<any> {
    return this.http.get(this.url);
  }
}
