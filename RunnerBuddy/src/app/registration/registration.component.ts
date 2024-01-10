import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxCsvParser } from 'ngx-csv-parser';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  @ViewChild('fileImportInput') fileImportInput: any;
  myForm!: FormGroup;
  constructor(private fb: FormBuilder, private ngxCsvParser: NgxCsvParser, private router: Router) {}

  ngOnInit() {
    this.myForm = new FormGroup({
      name : new FormControl(''),
      phone : new FormControl(''),
      password: new FormControl('')
    });
  }

onSubmit(form: FormGroup) {
  console.log('Valid?', form.valid); // true or false
  console.log('phone', form.value.phone);
  console.log('password', form.value.password);
}

}
