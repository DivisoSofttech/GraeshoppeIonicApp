import { LocationService } from './../../services/location.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.scss'],
})
export class AddLocationComponent implements OnInit {

  places = [];

  placeName;

  cLocation;

  constructor(
    private locationService: LocationService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.getCurrentPlacesName();
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

  decodeLatLongByPlaceId(place) {
    this.places = [];
    this.locationService.geocodeAddress(place.place_id).then(latlon => {
      this.placeName = place.description;
      this.modalCtrl.dismiss(latlon);
    });
  }

  getCurrentLocation() {
    this.locationService.getCurrentLocation()
    .then(data => {
      this.modalCtrl.dismiss(data);
    })
  }


  getCurrentPlacesName() {
    if (this.cLocation != undefined) {
      console.log('Getting Current Location' , this.cLocation);
      this.locationService.getLocationName(
        parseFloat(this.cLocation.split(',')[0]),
        parseFloat(this.cLocation.split(',')[1])
      ).then(data => {
        if(data != undefined)
        this.places = data;
      });
    }
  }

}
