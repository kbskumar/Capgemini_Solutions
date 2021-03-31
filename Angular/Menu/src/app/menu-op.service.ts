import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class MenuOPService {

  url = "http://localhost:3000/menu"

  constructor(private http:HttpClient) { }

  saveMenu(data:any)
  {
    return this.http.post(this.url,data)
  }

  getMenu()
  {
    return this.http.get(this.url);
  }
  deleteMenu(id:any)
  {
    return this.http.delete(`${this.url}/${id}`)
  }
  getCurrentMenu(id: any)
  {
    return this.http.get(`${this.url}/${id}`)
  }
  updateMenu(id: any,data: any)
  {
    return this.http.put(`${this.url}/${id}`,data)
  }

}
