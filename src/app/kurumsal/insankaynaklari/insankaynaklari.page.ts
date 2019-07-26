import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-insankaynaklari',
  templateUrl: './insankaynaklari.page.html',
  styleUrls: ['./insankaynaklari.page.scss'],
})
export class InsankaynaklariPage implements OnInit {

  form: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.form = new FormGroup({
      adSoyad: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      email: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      telefon: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(11)]
      }),
      progBil: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      })
    });
  }
  onSubmitForm() {
    console.log(this.form);
    this.form.reset();
  }

}

