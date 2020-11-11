import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cols = 8;
  tiles: any = [
    { text: 'Delhi', "href": "assets/images/delhi.jpg" },
    { text: 'Gurugram', "href": "assets/images/gurgaon.jpg" },
    { text: 'Noida', "href": "assets/images/noida.jpg" },
    { text: 'Mumbai', "href": "assets/images/mumbai.jpg" },
    { text: 'Bangalore', "href": "assets/images/delhi.jpg" },
    { text: 'Hydrabad', "href": "assets/images/hydrabad.jpg" },
    { text: 'Pune', "href": "assets/images/pune.jpeg" },
    { text: 'Chennai', "href": "assets/images/delhi.jpg" },
    { text: 'Jaipur', "href": "assets/images/delhi.jpg" },
    { text: 'Ahemdabad', "href": "assets/images/delhi.jpg" },
    { text: 'Chandigarh', "href": "assets/images/delhi.jpg" },
    { text: 'Kolkata', "href": "assets/images/kolkata.jpeg" },
  ];

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      '(max-width: 599px)'
    ]).subscribe(result => {
      // console.log(result);
      this.cols = result.matches ? 2 : 8;
    });
  }

  ngOnInit() {
  }

}
