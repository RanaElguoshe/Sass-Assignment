import { Component, inject } from '@angular/core';
import { CallingApisService } from '../calling-apis.service';
import { Recepies } from '../imeals';

@Component({
  selector: 'app-dessert',
  imports: [],
  templateUrl: './dessert.component.html',
  styleUrl: './dessert.component.scss'
})
export class DessertComponent {
    rr:string="/preview"
  resp:Recepies[]=[]
    private readonly data=inject(CallingApisService)
    ngOnInit(): void {
      this.data.getRecepies('dessert').subscribe(
         {
    next:(res)=>{
  this.resp=res.meals; 
  console.log(this.resp)
    }
   
         }
       )
     }

}
