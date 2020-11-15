import {Component, OnInit} from '@angular/core';
import {GetDataService} from "./services/getData.service";
import {Data} from "./interfaces";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Test task'
  constructor(public getDataService: GetDataService) {}

  ngOnInit(): void {
    this.getDataService.getData()
  }
}
