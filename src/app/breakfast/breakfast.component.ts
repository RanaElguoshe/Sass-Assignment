import { Component, inject } from '@angular/core';
import { CallingApisService } from '../calling-apis.service';
import { Recepies } from '../imeals';

@Component({
  selector: 'app-breakfast',
  imports: [],
  templateUrl: './breakfast.component.html',
  styleUrl: './breakfast.component.scss'
})
export class BreakfastComponent {

    rr:string="/preview"
  resp:Recepies[]=[]
    private readonly data=inject(CallingApisService)
    ngOnInit(): void {
      this.data.getRecepies('breakfast').subscribe({
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
