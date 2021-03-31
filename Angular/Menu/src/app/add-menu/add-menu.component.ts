import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {MenuOPService} from '../menu-op.service'
@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {

  addmenu = new FormGroup({
    
    name: new FormControl(''),
    price: new FormControl('')
  })

  collection:any = [];

  constructor(private me:MenuOPService) { }

  ngOnInit(): void {

    this.me.getMenu().subscribe((res) =>{
      this.collection = res;
    })

  }

  collectMenu()
  {
    this.me.saveMenu(this.addmenu.value).subscribe((res) => {
      this.addmenu.reset({})
      this.me.getMenu().subscribe((res) =>{
        this.collection = res;
      })
    })
  }

  deleteMenu(id:any)
  {
    this.me.deleteMenu(id).subscribe((res) => {
      this.me.getMenu().subscribe((res) =>{
        this.collection = res;
      })
    })
  }

}
