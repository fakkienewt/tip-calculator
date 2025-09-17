import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.html',
  styleUrl: './main.scss'
})
export class Main {

  amount: number = 0;
  amount_of_people: number = 0;
  select_data: number;
  quality_select: number = 20;
  for_person: number = 0;
  tip_total: number = 0;
  tip_for_one_person: number = 0;

  getData(input_amount: HTMLInputElement, input_amount_of_people: HTMLInputElement, input_quality_select: HTMLSelectElement): void {
    if (input_amount.value === '') return;
    if (input_amount_of_people.value === '') return;

    this.amount = parseInt(input_amount.value);
    this.amount_of_people = parseInt(input_amount_of_people.value);
    this.quality_select = parseInt(input_quality_select.value);
    this.select_data = this.quality_select;

    this.calculateData();
  }

  calculateData(): void {
    this.tip_total = (this.amount * this.quality_select) / 100; //считаем сколько всего чаевых;
    console.log('всего чаевых:', this.tip_total);
    this.tip_for_one_person = Math.round(this.tip_total / this.amount_of_people); //считаем сколько чаевых на одного;
    console.log('чаевых на одного человека:', this.tip_for_one_person);
    const total_amount = this.amount + this.tip_total; //вся сумма к оплате;
    console.log('вся сумма к оплате:', total_amount);
    this.for_person = Math.round(total_amount / this.amount_of_people); //вся сумма на человека;
    console.log('вся сумма на человека:', this.for_person);
  }

  onClickThrow(input_amount: HTMLInputElement, input_amount_of_people: HTMLInputElement, input_quality_select: HTMLSelectElement): void {
    this.for_person = 0;
    this.tip_for_one_person = 0;

    this.amount = 0;
    this.amount_of_people = 0;
    this.quality_select = 20;

    input_amount.value = '';
    input_amount_of_people.value = '';
    input_quality_select.value = '20';
  }
}
