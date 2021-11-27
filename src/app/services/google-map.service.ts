import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleMapsService {
  isMapLoaded: boolean = false;
  constructor(private http: HttpClient) { }

  buildMap() {
    if(this.isMapLoaded){
      return of(true);
    }
    return this.http.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyDTzmqmTc7vy3WsjFiwcbNGl81hXxpZZyU', 'callback')
    .pipe(
      tap(() => this.isMapLoaded = true),
      map(() => true),
      catchError(() => of(false)),
    );
  }
}
