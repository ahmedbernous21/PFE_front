import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UtilsService } from './utils.service';
import { BackendService } from './backend.service';

@Injectable({
  providedIn: 'root',
})

export class UserService extends BackendService{
	override modelName = 'users';
}