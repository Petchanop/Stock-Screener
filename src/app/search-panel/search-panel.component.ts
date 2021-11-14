import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';

import { FinancialMatrics,metric } from '../app.model';
import exchange_list from '/src/database/appDB/exchanges.json';
import FinancialMetrics_group_list from '/src/database/appDB/financial_metrics.json';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss']
})
export class SearchPanelComponent implements OnInit {

  exchanges = exchange_list;
  groups: FinancialMatrics[] = []
  selectedExchange = new FormControl();
  Exchangename: string = 'Exchanges';
  form!: FormGroup;
  panelOpenState = false;
  checkboxError = false;
  selectboxError = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = new FormGroup({
      selectedExchange : new FormControl('', [Validators.required]),
      checkArray: this.fb.array([], [Validators.required])
    })
    this.groups = this.CheckedMappingToMetric()
  }

  CheckedMappingToMetric() {
    const MatricsInput: FinancialMatrics[] = [];
    for (let group of FinancialMetrics_group_list){
      const map : FinancialMatrics = {
        group: group.group,
        metrics: []
      }
      const metric_list: metric[] = [];
      for (let metric of group.metrics){
        const mapmetric = {
          name: metric,
          checked: false
        }
        metric_list.push(mapmetric)
      }
      map.metrics = metric_list;
      MatricsInput.push(map)
    }
    return MatricsInput
  }

  onCheckboxChange(event: MatCheckboxChange, metric: metric) {
    metric.checked = event.checked
    this.checkboxError = false;
  }

  ExchangeSelected(name: string){
    this.Exchangename = name
    this.selectboxError = false;
  }

  addRatio(metrics: any) {
    const checkArray: FormArray = this.form.get('checkArray') as FormArray;
    for (let data of metrics) {
      for (let FinancialMetric of data.metrics){
        if (FinancialMetric.checked) {
        const checkedMetric = this.fb.group({
          name: new FormControl([FinancialMetric.name, Validators.required]),
          checked: new FormControl([FinancialMetric.checked, Validators.requiredTrue])
        });
        checkArray.push(checkedMetric);
        }
      }
    }
  }

  onSubmit() {
    console.log(this.form.value);
    if (this.form.valid) {
      this.checkboxError = false;
      this.selectboxError = false;

    } else {
      if (!this.form.value.selectedExchange){
        this.selectboxError = true;
      }
      if (!this.form.value.checkArray.length){
        this.checkboxError = true;
      }
    }
    const checkArray: FormArray = this.form.get('checkArray') as FormArray;
      while (checkArray.length !== 0) {
        checkArray.removeAt(0)
      }
  }
}
