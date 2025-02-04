import { Component, inject } from '@angular/core';
import { CallingApisService } from '../calling-apis.service';
import { Recepies } from '../imeals';

@Component({
  selector: 'app-beef',
  imports: [],
  templateUrl: './beef.component.html',
  styleUrl: './beef.component.scss'
})
export class BeefComponent {
  rr:string="/preview"
  resp:Recepies[]=[]
  private readonly data=inject(CallingApisService)
  ngOnInit(): void {
    this.data.getRecepies('beef').subscribe(
       {
  next:(res)=>{
this.resp=res.meals; 
  }
 
       }
     )
   }

}
