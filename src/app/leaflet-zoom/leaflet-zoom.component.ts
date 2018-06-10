import { Component, Input, OnInit, OnChanges } from '@angular/core';

import { CRS, latLng, LatLngBounds, Map, Point, TileLayer } from 'leaflet';

@Component({
  selector: 'app-leaflet-zoom',
  templateUrl: './leaflet-zoom.component.html',
  styleUrls: ['./leaflet-zoom.component.scss']
})
export class LeafletZoomComponent implements OnInit, OnChanges {

  // @Input()
  // imageConfig: any;
  //
  // @Input()
  // imageHeight: number;
  //
  // @Input()
  // imageWidth: number;

  @Input()
  tileBase: string;

  map: Map;
  tileLayer: TileLayer;
  simpleCRS: CRS = CRS.Simple;
  center = latLng(-125, 80);
  constructor() { }

  ngOnInit() {
    // console.log(this.imageConfig);
    // console.log(this.imageConfig.sourceTile.tileUrl);
    this.tileLayer = new TileLayer(
      `./assets/tiles/${this.tileBase}/{z}/{x}/{y}.png`,
      {
        updateWhenIdle: true,
        updateInterval: 10,
        tms: true
      }
    );
    this.map = new Map('zoom-source', {
      crs: this.simpleCRS,
      center: latLng(0,0),
      zoom: 1,
      minZoom: 1,
      maxZoom: 4,
      maxBoundsViscosity: 0.7,
      attributionControl: false
    });

    this.map.on('click', (evt: any) => {
      console.log(evt);
      console.log(evt.latlng);
    });
    this.map.addLayer(this.tileLayer);

    // let imageDim = this.imageConfig.imageDim;
    // let maxZoom = this.imageConfig.maxZoom;
    let southWest = latLng(-250, 0);
    let northEast = latLng(0, 160.0);
    // let southWest = this.map.unproject(new Point(0, 1192), maxZoom);
    // let northEast = this.map.unproject(new Point(imageDim[0] * 1.5, 0), maxZoom);
    let maxBounds = new LatLngBounds(southWest, northEast);
    this.map.setMaxBounds(maxBounds);

    this.map.setView(this.center, 1);
  }

  ngOnChanges(changes: any) {
    console.log("CHANGES");
    console.log(changes);
    if (changes.tileBase) {
      if (!changes.tileBase.firstChange) {
        this.tileLayer.setUrl(`./assets/tiles/${changes.tileBase.currentValue}/{z}/{x}/{y}.png`);
        this.map.setView(this.center, 1);
      }

    }
  }
}
