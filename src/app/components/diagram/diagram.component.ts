import {Component, ElementRef, OnInit, ViewChild} from '@angular/core'
import {Chart} from 'node_modules/chart.js'
import {GetDataService} from "../../services/getData.service"
import { switchesArr } from './shared'
import { themes } from  './shared'
import {Data} from "../../interfaces"


@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.scss']
})
export class DiagramComponent implements OnInit {
  data: Data
  switches = switchesArr
  themes = ['blue', 'green', 'grey']

  activeSwitch = 'percent'
  activeTheme = 'blue'

  @ViewChild('diagram', {static: true}) diagram: ElementRef;
  constructor(private dataService: GetDataService) { }


  ngOnInit(): void {
    this.diagram.nativeElement.height = 210
    this.data = this.dataService.data
    this.drawDiagram()
  }

  drawDiagram() {
    const items = this.data.data[0].entries

    // получаем названия
    const names = items.map(item => item.name)
    // отбираем по нужному фильтру
    const values = items.map(item => +item[this.activeSwitch])
    const maxIndex = values.indexOf(Math.max.apply(null, [...values]))

    // рисуем график
    new Chart(this.diagram.nativeElement, {
      type: 'bar',
      data: {
        labels: names,
        datasets: [{
          label: 'Diagram',
          data: values,
          backgroundColor: new Array(names.length).fill(themes[this.activeTheme].backgroundColor),
          borderColor: new Array(names.length).fill(themes[this.activeTheme].borderColor),
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        },
        legend: {
          labels: {
            fontColor: '#303030'
          }
        },
        events: [],
        animation: {
            onComplete() {
              const chartInstance = this.chart,
                ctx = chartInstance.ctx;

              ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
              ctx.textAlign = 'center';
              ctx.textBaseline = 'bottom';

              this.data.datasets.forEach(function (dataset, i) {
                const meta = chartInstance.controller.getDatasetMeta(i);

                meta.data.forEach(function (bar, index) {
                  let posY = 5
                  if (maxIndex === index) {
                    posY = -20
                    bar._model.backgroundColor = 'red'
                  }
                  const data = dataset.data[index]
                  ctx.fillText(data, bar._model.x, bar._model.y - posY);
                });
              });
          }
        }
      }
    });
  }

  switchValueHandler(event) {
    this.activeSwitch = event.target.value
    this.drawDiagram()
  }

  switchThemeHandler(event) {
    this.activeTheme = event.target.value
    this.drawDiagram()
  }

  bustHeightHendler() {
    this.diagram.nativeElement.height = 500
    this.drawDiagram()
  }
}
