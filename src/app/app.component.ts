import { Component } from '@angular/core';
import { GlobalConstants } from './common/global-constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tran';
  baseURL = GlobalConstants.apiURL;

  ngOnInit(){
    console.log(this.baseURL);
  }
}
