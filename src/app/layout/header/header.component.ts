import { Component } from '@angular/core';
import { pages } from 'src/app/app.data'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
pages = pages;

}
