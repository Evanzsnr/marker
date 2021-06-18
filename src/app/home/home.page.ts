import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, LatLng, LatLngBounds, ILatLng, Marker, MarkerOptions, Polyline, Encoding, Geocoder, Spherical } from "@ionic-native/google-maps";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public map: GoogleMap;
  public marker: Marker;

  constructor(public platform: Platform) {

    this.platform.ready().then(() => {
      this.createMap();
    });

  }

  public createMap(){
    const coordinates: LatLng = new LatLng(0.3655151, 32.5844008);
      this.map = GoogleMaps.create('map', {
        camera: {
          target: coordinates,
          zoom: 16
        },
        controls: {
          compass: false,
          myLocationButton: false,
          myLocation: true
        }
      });
      this.map.on( GoogleMapsEvent.MAP_READY ).subscribe(() => {
        this.map.addMarker({
          position: coordinates,
          draggable: true,
          icon: {
            url: "./assets/icon/start-marker.png"
          },
        });
      });
  }

}
