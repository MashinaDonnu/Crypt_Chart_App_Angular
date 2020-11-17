import { Component } from '@angular/core'
import {GetDataService} from "../../services/getData.service"

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {
  text = 'Not found'
  constructor(private getDataService: GetDataService) {
    this.text = getDataService.error.message
  }
}
