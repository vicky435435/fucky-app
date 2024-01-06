import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { GenericApi } from './generic.api';
import { ApiUrls } from './constant';
@Injectable()
export class CommonApi extends GenericApi {
  
  private headers = new HttpHeaders({
    skip: 'true',
  });
  private skipHttpCall = { headers: this.headers };

  constructor(http: HttpClient) {
    super(http);
  }
  
}
