import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { StuRegistrationService } from '../../services/students/stuRegistration.service';
import { stuRegistrationModel } from '../../models/students/stuRegistrationModel';
import { classModel } from '../../models/classModel';
import {DlDateTimeDateModule} from 'angular-bootstrap-datetimepicker';


import {Observable} from 'rxjs';

@Component({
  selector: 'app-tree',
  templateUrl: './registration.component.html',
  styleUrls: ['../../styles/style.component.css']
})

export class RegistrationComponent implements OnInit {

  public items;
  public registerForm: FormGroup;
  public submitted = false;
  public StudentRegistration: stuRegistrationModel;
  public dd_class = [];
  public dd_academic_years = [];
  
  constructor(private StuRegistrationService: StuRegistrationService,private formBuilder: FormBuilder) {

    this.StudentRegistration = new stuRegistrationModel();
    this.StuRegistrationService.getClasses().subscribe(data => { this.dd_class = data; });
    this.StuRegistrationService.getAcademicYears().subscribe(data => { this.dd_academic_years = data; });
    
  }

  addBook(): void {

    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    this.StudentRegistration = <stuRegistrationModel> this.registerForm.value;
    this.StuRegistrationService.save(this.StudentRegistration);
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      class_id: [' ', Validators.required], //, Validators.required
      academic_year: [' ', Validators.required],
      name: [this.StudentRegistration.name, Validators.required],
      gender: ['', Validators.required],
      father_name: ['', Validators.required], // , [Validators.required, Validators.email]
      mother_name: ['', Validators.required], // , [Validators.required, Validators.minLength(6)]
      dob: [''],
      status: ['', Validators.required],
      image: [''],
      address: ['', Validators.required],
      check: ['', Validators.required]
    }, {
      //validator: MustMatch('password', 'confirmPassword')
    });

  }

      // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

}
