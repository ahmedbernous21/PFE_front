import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
	apiEndpoint: any = null;
	constructor(
		public httpClient: HttpClient,
		private utilsService: UtilsService
	  ) {
		this.apiEndpoint = this.utilsService.getApiEndpoint();
	  }
}