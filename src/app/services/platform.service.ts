import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class PlatformService {
  constructor(private platform: Platform) {}

  isMobile() {
    return this.platform.is('mobile') || this.platform.is('mobileweb');
  }

  isDesktop() {
    return this.platform.is('desktop');
  }
}
