import { Component, OnInit } from '@angular/core';
import { MdToolbar } from '@angular2-material/toolbar';

@Component({
  moduleId: module.id,
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css'],
  directives: [MdToolbar]
})
export class FooterComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
