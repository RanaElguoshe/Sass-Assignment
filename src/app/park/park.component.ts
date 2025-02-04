import { Component, inject } from '@angular/core';
import { CallingApisService } from '../calling-apis.service';
import { Recepies } from '../imeals';

@Component({
  selector: 'app-park',
  imports: [],
  templateUrl: './park.component.html',
  styleUrl: './park.component.scss'
})
export class ParkComponent {
  rr:string="/preview"

  resp:Recepies[]=[]
  private readonly data=inject(CallingApisService);
ngOnInit():void{
  this.data.getRecepies('park').subscribe({
    next:(res)=>{
      this.resp=res.meals;
    },
    error:(err)=>{
     
    }

  })
 
  }

}



