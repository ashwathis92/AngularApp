import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface WebAPITab{
  Id:number;
  Name:string;
  Age:number;
  Mark:number;
}

const endpoint = 'http://localhost:57090/api/API/';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private http:HttpClient) { }

  addWebAPITab(student: any):Observable<any> {
    return this.http.post(endpoint+'postwebapitab',student);
  }
  getAllWebAPITab():Observable<any> {
    return this.http.get<WebAPITab>(endpoint+'getwebapitab');
  }
  getWebAPITab(id:number):Observable<any> {
    return this.http.get<WebAPITab>(endpoint+'getwebapitab/'+id);
  }
  deleteWebAPITab(id:number):Observable<any> {
    return this.http.delete<WebAPITab>(endpoint+'deletewebapitab/'+id);
  }
  updateWebAPITab(id:number,student: WebAPITab):Observable<any> {
    return this.http.put<WebAPITab>(endpoint+'putwebapitab/'+id,student);
  }

}
