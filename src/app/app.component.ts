import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
   
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    // this.newsservice.getConfi().subscribe(dat => this.new = dat);
    iconRegistry
      .addSvgIcon('menu',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/svg/baseline-menu-24px.svg'))
      .addSvgIcon('account_circle',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/svg/baseline-account_circle-24px.svg'))
      .addSvgIcon('print',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/svg/baseline-print-24px.svg'))
      .addSvgIcon('swap_horiz',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/svg/baseline-swap_horiz-24px.svg'))
      .addSvgIcon('add_circle',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/svg/baseline-add_circle-24px.svg'))
      .addSvgIcon('lightbulb_outline',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/svg/lightbulb_outline_24px.svg'))
      .addSvgIcon('supervisor_account',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/svg/baseline-supervisor_account-24px.svg'))
      .addSvgIcon('cloud_done',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/svg/baseline-cloud_done-24px.svg'))
      .addSvgIcon('facebook',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/svg/facebook.svg'))
      .addSvgIcon('googleplus',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/svg/googleplus.svg'))
      .addSvgIcon('twitter',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/svg/twitter.svg'))
      .addSvgIcon('youtube',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/svg/youtube.svg'))
      .addSvgIcon('whatsapp',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/svg/whatsapp.svg'))
      .addSvgIcon('linkedin',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/svg/linkedin.svg'))
      .addSvgIcon('github',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/svg/github.svg'))
      .addSvgIcon('medium',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/svg/medium.svg'))
      .addSvgIcon('phone',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/svg/baseline-phone-24px.svg'))
      .addSvgIcon('email',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/svg/baseline-email-24px.svg'))
      .addSvgIcon('tree',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/svg/tree.svg'))
      .addSvgIcon('location_on',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/svg/baseline-location_on-24px.svg'))

      .addSvgIcon('about',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/svg/about.svg'))

      .addSvgIcon('house',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/svg/house.svg'))

      .addSvgIcon('service',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/svg/service.svg'))

      .addSvgIcon('technology',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/svg/technology.svg'))
      .addSvgIcon('contact',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/svg/contact.svg'))
      .addSvgIcon('carrier',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/svg/carrier.svg'));
  }


  ngOnInit() {


  }





}
