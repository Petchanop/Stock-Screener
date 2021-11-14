import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-navigation-panel',
  templateUrl: './navigation-panel.component.html',
  styleUrls: ['./navigation-panel.component.scss']
})
export class NavigationPanelComponent implements OnInit {
  @Input() title: string | undefined;

  stockQuote = new FormControl('')

  constructor() { }

  ngOnInit(): void {

  }

  QuoteSubmit() {
    console.log(this.stockQuote.value)
  }

}
