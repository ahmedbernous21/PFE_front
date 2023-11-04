import { PLATFORM_ID,Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
  })

export class UtilsService {
	constructor(
		@Inject(PLATFORM_ID) private platformId: object,
	){}
	getApiEndpoint() {
		let apiEndpoint: string;
		if (isPlatformBrowser(this.platformId)) {
		  apiEndpoint = environment.browserApiEndpoint;
		} else {
		  apiEndpoint = environment.serverApiEndpoint;
		}
		return apiEndpoint;
	  }
}