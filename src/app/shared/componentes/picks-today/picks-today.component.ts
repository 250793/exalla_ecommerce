import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picks-today',
  templateUrl: './picks-today.component.html',
  styleUrls: ['./picks-today.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PicksTodayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
