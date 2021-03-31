import { Component, OnInit } from '@angular/core';
import {AdverService} from '../adver.service';


@Component({
  selector: 'app-advertisement-table',
  templateUrl: './advertisement-table.component.html',
  styleUrls: ['./advertisement-table.component.css']
})
export class AdvertisementTableComponent implements OnInit {

  constructor(private ad:AdverService) { }

  
  
  collections:any = [];
  nameSearch: string = "";
  ngOnInit(): void {
    this.ad.getList()
    .subscribe((result) =>{
      this.collections = result;
    })
  }

  deleteAdd(item: any)
  {
    this.collections.splice(item.id,1)
    this.ad.deleteAd(item).subscribe((result)=>{
    })
    
  }

}
