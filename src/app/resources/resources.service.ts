import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resource } from './resource';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {
  public isLoading: boolean = false;
  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Resource[]>('http://127.0.0.1:8000/api/resource');
  }





}
