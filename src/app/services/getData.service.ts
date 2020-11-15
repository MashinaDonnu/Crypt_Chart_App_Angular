import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Data} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  data:Data
  loading = false
  constructor(private http: HttpClient) {}

  getData() {
    this.loading = true
    this.http.get<Data>(environment.apiUrl).subscribe(data => {
      console.log('Data:', data)
      this.data = data
      this.loading = false
    })
  }

}
