import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';


@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit { //Exporta la clase GraficaBarraComponent para poder usarla en otros componentes

  @Input() horizontal: boolean = false; // @Input() es para recibir datos desde el componente padre. El componente padre es el que tiene el selector de este componente con nombre grafica-barra y se encuentra en el archivo src\app\graficas\pages\barras\barras.component.html.

  public barChartOptions: ChartOptions = {  // public es para que sea accesible desde cualquier parte de la clase. barChartOptions es una variable de tipo ChartOptions que se encuentra en el archivo node_modules\chart.js\dist\chart.esm.js y hace referencia a las opciones de la grafica.
    responsive: true, // responsive es para que la grafica se adapte al tamaño de la pantalla
  };

  @Input() barChartLabels: Label[] = [ // @Input() es para recibir datos desde el componente padre.
    // '2020', '2021', '2022', '2023', '2024', '2025', '2026'
  ];

  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  @Input() barChartData: ChartDataSets[] = [  // @Input() es para recibir datos desde el componente padre.html.
    // { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor: '#ED5F76', hoverBackgroundColor: 'red' },
    // { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B', backgroundColor: '#F763C4', hoverBackgroundColor: 'red' },
    // { data: [ 8, 38, 70, 59, 66, 80, 100 ], label: 'Series C', backgroundColor: '#D665E0', hoverBackgroundColor: 'red' },
  ];

  constructor() {}

  ngOnInit(): void {  // ngOnInit() es un metodo que se ejecuta cuando se crea el componente
    if ( this.horizontal ){ // si horizontal es true
      this.barChartType = 'horizontalBar';  // barChartType es una variable de tipo ChartType que se encuentra en el archivo node_modules\chart.js\dist\chart.esm.js y hace referencia al tipo de grafica. En este caso es horizontalBar
    }
  }

}
