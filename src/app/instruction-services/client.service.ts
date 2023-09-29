import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //imported
import {Observable } from 'rxjs';
import { ClientList } from '../client-list';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  // private basePath = 'https://localhost:44326'; 
  private basePath = 'https://localhost:44382'; 
  constructor(private http : HttpClient) { }

  getClientNames(): Observable<ClientList[]>{
    return this.http.get<ClientList[]>(this.basePath + '/api/clients');
  }
}
