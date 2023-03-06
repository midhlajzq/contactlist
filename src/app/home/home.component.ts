import { Component, OnInit } from '@angular/core';
import { ContactServicesService } from '../services/contact-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allContacts:any
  searchKey:string=''
  constructor(private api:ContactServicesService){}
  getAllContact(){
this.api.allContacts()
     .subscribe((result:any)=>{
       this.allContacts=result
       console.log(this.allContacts);

     })
  }
  ngOnInit(): void {
      this.api.allContacts()
           .subscribe((result:any)=>{
             this.allContacts=result.users
             console.log(this.allContacts);
      
           })
  }

}
