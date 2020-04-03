import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stuRegistrationModel } from '../../models/students/stuRegistrationModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StuRegistrationService {

  result;
  url;
  errorMessage;
  private stuRegistrationModel = new stuRegistrationModel();

  constructor(private httpClient: HttpClient) {
   
  }

  public add(name: string) {    
    this.httpClient.get(this.url).subscribe(data => {
      return this.result = data;
    });

  }

  public save(data:stuRegistrationModel) { 
    this.url = 'http://127.0.0.1:8000/api/add-book';
    this.httpClient.post(this.url,data).subscribe({
      //next: data => this.postId = data.id,
      error: error => console.error('There was an error!', error)
    });
  }

  clear() {
  }

}
