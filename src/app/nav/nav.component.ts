import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TabService } from '../tab.service';

@Component({
  selector: 'my-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'] ,
  changeDetection: ChangeDetectionStrategy.OnPush

})

export class NavComponent implements OnInit {

  constructor(public _coreService : TabService) {}


  ngOnInit() {

  }

 

  deleteTab(index: number, $event: MouseEvent) {
    this._coreService.removeTab(index);
    $event.preventDefault();
  }




}