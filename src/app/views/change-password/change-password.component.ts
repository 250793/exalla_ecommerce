import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {


  constructor(
    private location: Location,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit(): void {


  }
  voltar() {
    this.location.back()
    this.spinner.show()
    this.spinner.hide()

}
}



