import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stuRegistrationModel } from '../../models/students/stuRegistrationModel';
import { classModel } from '../../models/classModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StuRegistrationService {

  result;
  url = 'http://127.0.0.1:8000/api/';
  errorMessage;
  private stuRegistrationModel = new stuRegistrationModel();

  constructor(private httpClient: HttpClient) {
   
  }

  public getClasses() {    
    return this.httpClient.get<classModel[]>(this.url+'get-classes');
  }

  public getAcademicYears() {    
    return this.httpClient.get<classModel[]>(this.url+'get-academic-years');
  }

  public save(data:stuRegistrationModel) { 
    
    this.httpClient.post(this.url+'register-student',data).subscribe({
      //next: data => this.postId = data.id,
      error: error => console.error('There was an error!', error)
    });
  }

  clear() {
  }

}
