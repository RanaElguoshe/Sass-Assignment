import { Component, inject } from '@angular/core';
import { Recepies } from '../imeals';
import { CallingApisService } from '../calling-apis.service';

@Component({
  selector: 'app-goat',
  imports: [],
  templateUrl: './goat.component.html',
  styleUrl: './goat.component.scss'
})
export class GoatComponent {
   rr:string="/preview"
    resp:Recepies[]=[]
      private readonly data=inject(CallingApisService)
      ngOnInit(): void {
        this.data.getRecepies('goat').subscribe(
           {
      next:(res)=>{
    this.resp=res.meals; 
    console.log(this.resp)
      }
     
           }
         )
       }
  

}
