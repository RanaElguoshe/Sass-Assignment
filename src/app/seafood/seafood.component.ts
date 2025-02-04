import { Component, inject } from '@angular/core';
import { CallingApisService } from '../calling-apis.service';
import { Recepies } from '../imeals';

@Component({
  selector: 'app-seafood',
  imports: [],
  templateUrl: './seafood.component.html',
  styleUrl: './seafood.component.scss'
})
export class SeafoodComponent {
  rr:string="/preview"
  resp:Recepies[]=[]
private readonly data=inject(CallingApisService);
ngOnInit():void{
  this.data.getRecepies('seafood').subscribe({
    next:(res)=>{
      this.resp=res.meals

    }
  })

}
}
