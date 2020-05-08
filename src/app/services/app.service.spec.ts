import {TestBed} from '@angular/core/testing';

import {AppService} from './app.service';
import {of} from 'rxjs';
import {youtubeRecordItems, youtubeRecordsApi} from './testData';
import {HttpClient} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {DatePipe} from '@angular/common';

describe('AppService', () => {
  let service: AppService;
  let httpTestingController: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AppService, HttpClient, DatePipe],
    });
    service = TestBed.inject(AppService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#transformRecords should return transformed records',
    (done: DoneFn) => {
      service.transformRecords(of(youtubeRecordsApi)).subscribe(value => {
        expect(value).toEqual(youtubeRecordItems);
        done();
      });
    });
});
