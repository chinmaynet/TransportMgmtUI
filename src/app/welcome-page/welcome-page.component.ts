import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})

export class WelcomePageComponent {
  sharedData: any;
  constructor(private sharedService: SharedService) {
    this.sharedData = this.sharedService.getSharedVariable();
  }
}
