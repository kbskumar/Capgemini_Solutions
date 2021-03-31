import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AdverService {
  url = "http://localhost:3000/adver"


  constructor( private http:HttpClient ) {}


  getList()
  {
    return this.http.get(this.url);
  }

  saveAd(data:any)
  {
    return this.http.post(this.url,data);
  }

  deleteAd(id: any)
  {
    return this.http.delete(`${this.url}/${id}`)
  }

  updateAd(id:any,data:any)
  {
    return this.http.put(`${this.url}/${id}`,data)
  }

  getCurrentAd(id: any)
  {
    return this.http.get(`${this.url}/${id}`)
  }

  




}
