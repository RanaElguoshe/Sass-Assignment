import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CallingApisService {
  constructor(private httpClient:HttpClient){ }
  getRecepies(meal:string):Observable<any>{
    return this.httpClient.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
  }

//   constructor(private httpClient:HttpClient) { }
// getRecepies(meal:string):Observable<any>{
//    return this.httpClient.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`);

// }

}
