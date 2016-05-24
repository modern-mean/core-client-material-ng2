import { Component, OnInit } from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import { MdToolbar } from '@angular2-material/toolbar';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { MdButton } from '@angular2-material/button';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';

@Component({
  moduleId: module.id,
  selector: 'app-rightnav',
  templateUrl: 'rightnav.component.html',
  styleUrls: ['rightnav.component.css'],
  directives: [ MdToolbar, MdIcon, MdButton, MD_LIST_DIRECTIVES ],
  providers: [HTTP_PROVIDERS, MdIconRegistry]
})
export class RightnavComponent implements OnInit {

  constructor() {}

  ngOnInit() {

  }

}
