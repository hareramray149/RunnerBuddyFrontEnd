import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
  constructor(private http : HttpClient) {
   }

   getRefData(){return this.http.get("http://localhost:8080/getRef");}
      
}
