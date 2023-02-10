import { Component, OnInit, Input } from '@angular/core';
import { IHomeStructure } from '../../../model/home.structure.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  @Input('data')
  data!: IHomeStructure

  constructor() { }

  ngOnInit(): void {
  }

}
