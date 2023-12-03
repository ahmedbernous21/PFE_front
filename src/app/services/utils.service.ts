import { PLATFORM_ID, Injectable, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
  ) {}

  getApiEndpoint() {
    let apiEndpoint: string;
    if (isPlatformBrowser(this.platformId)) {
      apiEndpoint = environment.serverApiEndpoint;
    } else {
      apiEndpoint = environment.serverApiEndpoint;
    }
    return apiEndpoint;
  }
}
