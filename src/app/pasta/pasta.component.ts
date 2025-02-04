import { Component, inject } from '@angular/core';
import { CallingApisService } from '../calling-apis.service';

@Component({
  selector: 'app-pasta',
  imports: [],
  templateUrl: './pasta.component.html',
  styleUrl: './pasta.component.scss'
})
export class PastaComponent {
      rr:string="/preview"
        resp:any=[]
        private readonly data=inject(CallingApisService)
        ngOnInit(): void {
          this.data.getRecepies('pasta').subscribe({
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
