import { Component, inject } from '@angular/core';
import { CallingApisService } from '../calling-apis.service';
import { Recepies } from '../imeals';

@Component({
  selector: 'app-chicken',
  imports: [],
  templateUrl: './chicken.component.html',
  styleUrl: './chicken.component.scss'
})
export class ChickenComponent {
    rr:string="/preview"
  resp:Recepies[]=[]
    private readonly data=inject(CallingApisService)
    ngOnInit(): void {
      this.data.getRecepies('chicken').subscribe({
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
