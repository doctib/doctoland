import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';



@Component({
  selector: 'app-search-resutl',
  templateUrl: './search-resutl.component.html',
  styleUrls: ['./search-resutl.component.css']
})
export class SearchResutlComponent implements OnInit {
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 37.75;
  lng = -122.41;

  constructor() { }

  ngOnInit() {


  }



}
