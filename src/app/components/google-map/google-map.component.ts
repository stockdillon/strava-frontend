import { Component, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GoogleMapsService } from 'src/app/services/google-map.service';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss'],
})
export class GoogleMapComponent implements OnInit {
  apiLoaded: Observable<boolean>;
  @ViewChild('map') mapElement;
  map: google.maps.Map;

  constructor(
    private googleMaps: GoogleMapsService,
  ) { }

  ngOnInit() {
    this.apiLoaded = this.googleMaps.buildMap();
    console.log('test');
    // const additionalOptions = {}; 
    // const loader = new Loader({
    //   apiKey: "AIzaSyDTzmqmTc7vy3WsjFiwcbNGl81hXxpZZyU",
    //   version: "weekly",
    //   ...additionalOptions,
    // });
    
    // loader.load().then(() => {
    //   this.map = new google.maps.Map(this.mapElement, {
    //     center: { lat: -34.397, lng: 150.644 },
    //     zoom: 8,
    //   });
    // });
  }

}
