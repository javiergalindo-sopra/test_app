import { TestBed } from '@angular/core/testing';
import { Platform } from '@ionic/angular';

import { PlatformService } from './platform.service';

describe('PlatformService', () => {
  let service: PlatformService;
  let platform: Platform;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlatformService);
    platform = TestBed.inject(Platform);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be able to check if current device is mobile', () => {
    spyOn(platform, 'is').and.callFake(
      (platform: string) => platform === 'mobile'
    );
    expect(service.isDesktop()).toBeFalsy();
    expect(service.isMobile()).toBeTruthy();
  });

  it('should be able to check if current device is desktop', () => {
    spyOn(platform, 'is').and.callFake(
      (platform: string) => platform === 'desktop'
    );
    expect(service.isDesktop()).toBeTruthy();
    expect(service.isMobile()).toBeFalsy();
  });
});
