import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import 'Rxjs/Rx'; 
@Injectable({
  providedIn: 'root'
})
export class ServerServiceService {

  constructor(private http: HttpClient) { }

  getServer(){
    return this.http.get('https://img.adnerp.net/').map(res => res);
  }
}
