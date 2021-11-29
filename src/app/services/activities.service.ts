import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivitiesResponse, Activity } from '../dto/activities.dto';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  constructor(
    private http: HttpClient
  ) { }

  get(): Observable<Activity[]> {
    return this.http.get<ActivitiesResponse>(`/api/activities`).pipe(
      tap((resp) => {console.log(`resp: `, resp)}),
      map((response: ActivitiesResponse) => response.activities ?? [])
    );
  }
}
