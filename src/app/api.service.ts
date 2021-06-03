import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAllData(){
return this.http.get('http://localhost:8082/get/tasks')
  }

  addDetails(data){
    this.http.post('http://localhost:8082/add/task', data).subscribe({
      error: error => console.error('There was an error!', error)
    });
  }
}
