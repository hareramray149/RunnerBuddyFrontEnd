import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxCsvParser } from 'ngx-csv-parser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild('fileImportInput') fileImportInput: any;
  myForm!: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.myForm = new FormGroup({
      phone : new FormControl(''),
      password: new FormControl('')
    });
  }

onSubmit(form: FormGroup) {
  console.log('Valid?', form.valid); // true or false
  console.log('phone', form.value.phone);
  console.log('password', form.value.password);
  
    this.router.navigateByUrl("/csv");
}

}
