import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Listing } from '../types';

@Component({
  selector: 'app-listing-data-form',
  templateUrl: './listing-data-form.component.html',
  styleUrls: ['./listing-data-form.component.css']
})
export class ListingDataFormComponent implements OnInit {
  @Input() buttonText;
  @Input() currentName = '';
  @Input() currentDescription = '';
  @Input() currentPrice = '';
  nombreCompleto: string = '';
  email: string = '';
  telefonos: string = '';
  @Output() onSubmit = new EventEmitter<any> ();

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.nombreCompleto = this.currentName;
    this.email = this.currentDescription;
    this.telefonos = this.currentPrice;
  }

  onButtonClicked(): void {
    this.onSubmit.emit(
      {
        id: null,
        nombreCompleto: this.nombreCompleto,
        email: this.email,
        telefonos: Number(this.telefonos),
      }
    );
  }

}
