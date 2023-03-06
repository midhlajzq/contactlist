import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactServicesService  {

  constructor(private http:HttpClient) {}
  // to get all contacts from api
  allContacts(){
    return this.http.get('https://dummyjson.com/users')
  }

}
