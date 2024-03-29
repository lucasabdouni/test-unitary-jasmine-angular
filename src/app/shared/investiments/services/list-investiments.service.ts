import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Investiments } from '../model/investiments';

@Injectable({
  providedIn: 'root',
})
export class ListInvestimentsService {
  private url: string =
    'https://raw.githubusercontent.com/troquatte/fake-server/main/investiments-all.json';
  constructor(private http: HttpClient) {}

  public list(): Observable<Investiments> {
    return this.http.get<Investiments>(this.url).pipe(map((res) => res));
  }
}
