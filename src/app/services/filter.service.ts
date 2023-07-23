import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DtLog, LogSeverity } from '../model/dtlog-model';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private dtLogEndpoint = "https://tyk57033.live.dynatrace.com/api/v2/logs/ingest";
  private apiToken = "dt0c01.LYI7Y2XWN2KVVT3LGELADBCY.246BUOLXRWQZF4YHKEROSG6Y3AIF6PTNISIUPJROP3FP2V4QFIKAXEYFSBYUJTZR";
  private headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    'Authorization': "Api-Token " + this.apiToken
  });


  filterquery = {
    brands: [],
    price: [],
    categories: [],
    ratings: []
  }

  productFilter = new BehaviorSubject(this.filterquery);

  constructor(private http: HttpClient) { }

  // getdummydata() {
  //   return this.http.get("https://jsonplaceholder.typicode.com/todos/2");

  // }

  // sendLogsToDynatrace() {
  //   return this.http.post("https://tyk57033.live.dynatrace.com/api/v2/logs/ingest",
  //     {
  //       "content": "ERRRRRRRRRRRRRRRRRRRRRRRR test Generic Log Ingest",
  //       "log.source": "/var/log/syslog",
  //       // "timestamp": "2022-07-26T22:12:31.0000",
  //       "severity": LogSeverity.Error,
  //       "custom.attribute": "attribute value"
  //     },
  //     { headers: this.headers }
  //   )
  // }

  dtLog(log: string, severity: LogSeverity = LogSeverity.Info) {
    const data = new DtLog(log, severity)
    return this.http.post(this.dtLogEndpoint, data, { headers: this.headers }
    )
  }
}
