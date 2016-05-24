import { Component, OnInit, Output, Input } from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import { MdToolbar } from '@angular2-material/toolbar';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { MdButton } from '@angular2-material/button';
import { ModernMeanCoreClientMaterialNg2AppComponent } from '../';
import { MdSidenavLayout, MdSidenav } from '@angular2-material/sidenav';


@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
  directives: [MdToolbar, MdButton, MdIcon],
  providers: [HTTP_PROVIDERS, MdIconRegistry]
})
export class HeaderComponent implements OnInit {
  @Input('leftnav') leftnav;
  @Input('rightnav') rightnav;


  constructor() {

  }

  ngOnInit() {

  }

  rightToggle() {
    this.rightnav.toggle();
  }

  leftToggle() {
    this.leftnav.toggle();
  }

}
