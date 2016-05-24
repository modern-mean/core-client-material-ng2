import { Component } from '@angular/core';
import { HeaderComponent } from './header';
import { FooterComponent } from './footer';
import { LeftnavComponent } from './leftnav';
import { RightnavComponent } from './rightnav';
import { MdSidenav, MdSidenavLayout } from '@angular2-material/sidenav';



@Component({
  moduleId: module.id,
  selector: 'modern-mean-core-client-material-ng2-app',
  templateUrl: 'modern-mean-core-client-material-ng2.component.html',
  styleUrls: ['modern-mean-core-client-material-ng2.component.css'],
  directives: [HeaderComponent, FooterComponent, LeftnavComponent, RightnavComponent, MdSidenavLayout, MdSidenav]
})
export class ModernMeanCoreClientMaterialNg2AppComponent {
  title = 'modern-mean-core-client-material-ng2 works!';
}
