import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { Coords } from 'dto/';
import { Observable } from 'rxjs';
import { GoogleMapsService } from 'src/app/services/google-map.service';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss'],
})
export class GoogleMapComponent implements OnInit, AfterViewInit {
  apiLoaded: Observable<boolean>;
  // @ViewChild(GoogleMap) map: GoogleMap;
  map: GoogleMap;
  @ViewChild(GoogleMap, { static: false }) set Map(map: GoogleMap) {
    if (!map) { 
      return;
    } else if (!this.map) {
      this.map = map;
      // this.initMapSearch(map);
    }
  };  
  options: google.maps.MapOptions = {
    center: {
      lat: 0,
      lng: 0
    },
    zoom: 9,
    minZoom: 2,
    maxZoom: 15,
    // styles: darkStyle,
  };  

  constructor(
    private googleMaps: GoogleMapsService,
  ) { }

  ngOnInit() {
    this.apiLoaded = this.googleMaps.buildMap();
    console.log('test');
    navigator.geolocation.getCurrentPosition((pos: GeolocationPosition) => this.setCenter(pos.coords));
  }

  ngAfterViewInit(): void {
    // this.map.center = this.center;
  }

  setCenter(coords: GeolocationCoordinates) {
    console.log('center coords: ', coords);
    this.options.center.lat = coords.latitude;
    this.options.center.lng = coords.longitude;
  }  

}
