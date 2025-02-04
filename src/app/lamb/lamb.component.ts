import { Component, inject } from '@angular/core';
import { CallingApisService } from '../calling-apis.service';
import { Recepies } from '../imeals';

@Component({
  selector: 'app-lamb',
  imports: [],
  templateUrl: './lamb.component.html',
  styleUrl: './lamb.component.scss'
})
export class LambComponent {

    rr:string="/preview"
    resp:Recepies[]=[]
    private readonly data=inject(CallingApisService)
    ngOnInit(): void {
      this.data.getRecepies('lamb').subscribe({
  next:(res)=>{
   this.resp=res.meals
  },
  error:(err)=>{
    console.log(err)
  }
      })
    }
}
