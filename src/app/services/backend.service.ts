import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
	apiEndpoint: any = null;
	modelName: any = null;

	constructor(
		public httpClient: HttpClient,
		private utilsService: UtilsService
	  ) {
		this.apiEndpoint = this.utilsService.getApiEndpoint();
	  }
	retrieveObjects(params = {}) {
		const url = this.apiEndpoint + this.modelName + '/';
		console.log(url)
		return this.httpClient.get(url, { params, withCredentials: true });
	  }

}