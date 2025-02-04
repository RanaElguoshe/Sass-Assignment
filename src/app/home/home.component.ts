import { Component, inject, OnInit } from '@angular/core';
import { CallingApisService } from '../calling-apis.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  rr:string="/preview"
  resp:any=[]
  private readonly data=inject(CallingApisService)
  ngOnInit(): void {
    this.data.getRecepies('#').subscribe({
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
