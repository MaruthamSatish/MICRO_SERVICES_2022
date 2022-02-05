import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.css']
})
export class AddressesComponent implements OnInit {
  validatingForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.validatingForm = new FormGroup({
      contactFormModalName: new FormControl('', Validators.required),
      contactFormModalEmail: new FormControl('', Validators.email),
      contactFormModalSubject: new FormControl('', Validators.required),
      contactFormModalMessage: new FormControl('', Validators.required)
    });
  }
  get contactFormModalName() {
    return this.validatingForm.get('contactFormModalName');
  }

  get contactFormModalEmail() {
    return this.validatingForm.get('contactFormModalEmail');
  }

  get contactFormModalSubject() {
    return this.validatingForm.get('contactFormModalSubject');
  }

  get contactFormModalMessage() {
    return this.validatingForm.get('contactFormModalMessage');
  }

}
