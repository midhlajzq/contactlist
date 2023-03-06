import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {
  fullname:string=''

  transform(allContacts:any,searchKey:string,propertyName:string):any {
    const result:any = []
    if(!allContacts||searchKey=='' ||propertyName== ''){
      return allContacts
    }
    allContacts.forEach((contact:any)=>{
   let text1= contact.firstName;
   let text2= contact.lastName;
   this.fullname=text1.concat(text2)
   if(this.fullname.trim().toLowerCase().includes(searchKey.trim().toLowerCase())){
    result.push(contact)
   }
    })
    return result
  }

}
