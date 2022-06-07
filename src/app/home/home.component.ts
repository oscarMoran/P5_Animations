import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import { URLLoader } from '../material/material.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends URLLoader implements OnInit {
  panelOpenState = false;
  color: ThemePalette = 'accent';
  constructor() {
    super();
  }

  ngOnInit(): void {
    super.loadScripts();
  
  }

}
