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

  constructor(private httpClient: HttpClient) {}

  books: string[] = [];

  public add(name: string) {    
    this.httpClient.get(this.url).subscribe(data => {
      return this.result = data;
    });

  }

  public save(): Observable<stuRegistrationModel[]> { 

    this.url = 'http://127.0.0.1:8000/api/add-book';
    console.log(stuRegistrationModel.get(),'MODEL');
    this.httpClient.post(this.url, data).subscribe({
      //next: data => this.postId = data.id,
      error: error => console.error('There was an error!', error)
    });
  }

  clear() {
    this.books = [];
  }

}
