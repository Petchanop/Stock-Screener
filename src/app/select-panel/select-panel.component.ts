import { Component, OnInit } from '@angular/core';


import { FinancialMatrics,metric } from '../app.model';
import exchange_list from '/src/database/appDB/exchanges.json';

@Component({
  selector: 'app-select-panel',
  templateUrl: './select-panel.component.html',
  styleUrls: ['./select-panel.component.scss']
})
export class SelectPanelComponent implements OnInit {

  exchanges = exchange_list;
  Exchangename: string = 'Exchanges';


  selectboxError = false;


  constructor() { }

  ngOnInit(): void {
  }


  ExchangeSelected(name: string){
    this.Exchangename = name
    this.selectboxError = false;
  }
}
