import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {ActivatedRoute,Router} from '@angular/router';
import {MenuOPService} from '../menu-op.service'

@Component({
  selector: 'app-update-menu',
  templateUrl: './update-menu.component.html',
  styleUrls: ['./update-menu.component.css']
})
export class UpdateMenuComponent implements OnInit {

  menu:string = "menu"

  editmenu = new FormGroup({
    
    name: new FormControl(''),
    price: new FormControl('')
  })

  constructor(private router:ActivatedRoute,private me:MenuOPService,private ro:Router) { }

  ngOnInit(): void {

    this.me.getCurrentMenu(this.router.snapshot.params.id).subscribe((res:any) => {
      this.editmenu = new FormGroup({

        name: new FormControl(res['name']),
        price: new FormControl(res['price'])
      })
    })

  }

  collectMenu()
  {
    this.me.updateMenu(this.router.snapshot.params.id,this.editmenu.value)
    .subscribe((res) => {
      this.ro.navigateByUrl("/menu")
    })
  }

}
