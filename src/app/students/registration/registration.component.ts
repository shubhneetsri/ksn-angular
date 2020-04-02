import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { StuRegistrationService } from '../../services/students/stuRegistration.service';
import { stuRegistrationModel } from '../../models/students/stuRegistrationModel';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-tree',
  templateUrl: './registration.component.html',
  styleUrls: ['../../styles/bootstrap.component.scss']
})

export class RegistrationComponent implements OnInit {

  public items;
  public registerForm: FormGroup;
  public submitted = false;
  public StudentRegistration: stuRegistrationModel;
  
  constructor(private StuRegistrationService: StuRegistrationService,private formBuilder: FormBuilder) {

    this.StudentRegistration = new stuRegistrationModel();
    console.log(this.StudentRegistration.name,'Constructure');
    
  }

  addBook(): void {

    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    this.StudentRegistration = <stuRegistrationModel> this.registerForm.value;
    console.log(this.StudentRegistration,'xsx');
    this.StuRegistrationService.save(this.StudentRegistration);
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      class_id: [''], //, Validators.required
      academic_year: [''],
      name: [this.StudentRegistration.name],
      gender: [''],
      father_name: [''], // , [Validators.required, Validators.email]
      mother_name: [''], // , [Validators.required, Validators.minLength(6)]
      dob: [''],
      status: [''],
      image: [''],
      address: [''],
      check: ['']
    }, {
      //validator: MustMatch('password', 'confirmPassword')
    });

  }

      // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

}
