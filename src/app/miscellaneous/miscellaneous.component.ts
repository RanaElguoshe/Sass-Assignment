import { Component, inject } from '@angular/core';
import { CallingApisService } from '../calling-apis.service';
import { Recepies } from '../imeals';

@Component({
  selector: 'app-miscellaneous',
  imports: [],
  templateUrl: './miscellaneous.component.html',
  styleUrl: './miscellaneous.component.scss'
})
export class MiscellaneousComponent {
  
      rr:string="/preview"
      resp:Recepies[]=[]
      private readonly data=inject(CallingApisService)
      ngOnInit(): void {
        this.data.getRecepies('Miscellaneous').subscribe({
    next:(res)=>{
     this.resp=res.meals
     console.log(this.resp)
    },
    error:(err)=>{
      console.log(err)
    }
        })
      }

}
