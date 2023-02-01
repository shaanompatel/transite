import { Component } from '@angular/core';
import { GlobalConstants } from '../common/global-constants';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  baseURL = GlobalConstants.apiURL;
}
