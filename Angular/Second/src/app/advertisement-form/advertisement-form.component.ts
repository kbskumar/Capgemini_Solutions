import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import {AdverService} from '../adver.service';

@Component({
  selector: 'app-advertisement-form',
  templateUrl: './advertisement-form.component.html',
  styleUrls: ['./advertisement-form.component.css']
})
export class AdvertisementFormComponent implements OnInit {

  adform = new FormGroup({
    title: new FormControl(''),
    name: new FormControl(''),
    category: new FormControl(''),
    description: new FormControl(''),
  })

  constructor(private ad:AdverService) { }
  collection = <any>[];
  ngOnInit(): void {
    this.ad.getList()
    .subscribe((result) =>{
      this.collection = result;
    })
  }

  submitAd()
  {

    this.ad.saveAd(this.adform.value)
    .subscribe((result) => {
      console.log("DONE");
    })

    console.warn(this.adform.value);
  }

}
