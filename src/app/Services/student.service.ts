import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  GetStudentData():Observable<any>{
    return this.http.get('https://www.jsonblob.com/api/jsonblob/e14c0803-8836-11eb-96ff-19505eeef271');
  }

  GetWeatherData():Observable<any>{
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?id=2964180&appid=d6b5d34a9022bee6f2e5e6dbfe8dbb18');
  }
}
