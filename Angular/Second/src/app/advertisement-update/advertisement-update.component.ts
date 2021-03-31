import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdverService } from '../adver.service';

@Component({
  selector: 'app-advertisement-update',
  templateUrl: './advertisement-update.component.html',
  styleUrls: ['./advertisement-update.component.css']
})
export class AdvertisementUpdateComponent implements OnInit {

  editform = new FormGroup({
    title: new FormControl(''),
    name: new FormControl(''),
    category: new FormControl(''),
    description: new FormControl(''),
  })

  constructor(private router: ActivatedRoute, private ad: AdverService) { }

  ngOnInit(): void {

    this.ad.getCurrentAd(this.router.snapshot.params.id).subscribe((result: any) => {

      this.editform = new FormGroup({
        title: new FormControl(result['title']),
        name: new FormControl(result['name']),
        category: new FormControl(result['category']),
        description: new FormControl(result['description']),
      })

    })

  }

  collection()
  {
    this.ad.updateAd(this.router.snapshot.params.id,this.editform.value)
    .subscribe((result) => {
    })
  }

}
