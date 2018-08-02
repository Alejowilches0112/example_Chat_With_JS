import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Server } from './server';
import 'Rxjs/Rx'; 
@Injectable({
  providedIn: 'root'
})
export class ServerServiceService {
  domain : string = "http://localhost:3000";
  constructor(private http: HttpClient) { }

  getServer(){
    return this.http.get(`${this.domain}/api/server`).map(res => res);
  }

  getLogErrServer(){
    return this.http.get<Server[]>(`${this.domain}/api/logs_error/server`).map(res => res)
  }

  getLogOutServer(){
    return this.http.get<Server[]>(`${this.domain}/api/logs_out/server`).map(res => res)
  }

  getLogErrApi(){
    return this.http.get<Server[]>(`${this.domain}/api/logs_error/server_api`).map(res => res)
  }

  getLogOutApi(){
    return this.http.get<Server[]>(`${this.domain}/api/logs_out/server_api`).map(res => res)
  }

  getLogErrSpa(){
    return this.http.get<Server[]>(`${this.domain}/api/logs_error/server_spa`).map(res => res)
  }

  getLogOutSpa(){
    return this.http.get<Server[]>(`${this.domain}/api/logs_out/server_spa`).map(res => res)
  }
}
