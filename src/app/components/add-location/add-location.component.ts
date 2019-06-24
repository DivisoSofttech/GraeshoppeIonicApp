import { Platform } from '@ionic/angular';
import { LocationService } from './../../services/location.service';
import { Component, OnInit } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapOptions,
  Marker,
  Environment,
  MyLocation,
  GoogleMapsAnimation,
  GoogleMapsEvent
} from '@ionic-native/google-maps';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.scss'],
})
export class AddLocationComponent implements OnInit {

  map: GoogleMap;

  places = [];

  constructor(
    private locationService: LocationService,
    private platform: Platform,
  ) { }

  async ngOnInit() {
    await this.platform.ready();
    await this.loadMap();
  }

  loadMap() {
    // This code is necessary for browser
    Environment.setEnv({
      API_KEY_FOR_BROWSER_RELEASE: 'AIzaSyBMiG49LE8jalJZrgYTKcauhhSGkZHfUcw',
      API_KEY_FOR_BROWSER_DEBUG: 'AIzaSyBMiG49LE8jalJZrgYTKcauhhSGkZHfUcw'
    });

    const mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 43.0741904,
          lng: -89.3809802
        },
        zoom: 14,
        tilt: 30
      }
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);
    this.map
      .getMyLocation()
      .then((location: MyLocation) => {
        console.log(JSON.stringify(location, null, 2));

        // Move the map camera to the location with animation
        this.map.animateCamera({
          target: location.latLng,
          zoom: 14,
          tilt: 30
        });
        const marker: Marker = this.map.addMarkerSync({
          position: location.latLng,
          animation: GoogleMapsAnimation.BOUNCE
        });
        marker.showInfoWindow();
      })
      .catch(err => {
        console.log(err)
      });
  }

  doPlaceSearch(event) {
    this.places = [];
    console.log(event.detail.value);
    const searchterm = event.detail.value;
    if (searchterm === '' || searchterm === null) {
      return;
    }
    this.locationService.getPredictions(searchterm).subscribe(res => {
      console.log(res);
      this.places = res;
    });
  }

  decodeLatLongByPlaceId(placeId) {
    this.places = [];
    this.map.remove();
    this.locationService.geocodeAddress(placeId).then(latlon => {
      console.log(latlon);
      Environment.setEnv({
        API_KEY_FOR_BROWSER_RELEASE: 'AIzaSyBMiG49LE8jalJZrgYTKcauhhSGkZHfUcw',
        API_KEY_FOR_BROWSER_DEBUG: 'AIzaSyBMiG49LE8jalJZrgYTKcauhhSGkZHfUcw'
      });
      const mapOptions: GoogleMapOptions = {
        camera: {
          target: {
            lat: latlon[0],
            lng: latlon[1]
          },
          zoom: 14,
          tilt: 30
        }
      };
      this.map = GoogleMaps.create('map_canvas', mapOptions);
      const marker: Marker = this.map.addMarkerSync({
        icon: 'red',
        animation: 'bounce',
        position: {
          lat: latlon[0],
          lng: latlon[1]
        }
      });
    });
  }

}
