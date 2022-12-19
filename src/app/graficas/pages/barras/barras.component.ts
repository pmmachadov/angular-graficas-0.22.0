import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-barras', // selector es para que se pueda usar este componente en otros componentes
  templateUrl: './barras.component.html', // templateUrl es para indicar la ruta del archivo html que se va a usar en este componente
  styles: [
  ]
})
export class BarrasComponent implements OnInit {  // Exporta la clase BarrasComponent para poder usarla en otros componentes

  public barChartOptions: ChartOptions = {  // public es para que sea accesible desde cualquier parte de la clase. barChartOptions es una variable de tipo ChartOptions que se encuentra en el archivo node_modules\chart.js\dist\chart.esm.js y hace referencia a las opciones de la grafica.
    responsive: true,
  };
  public barChartLabels: Label[] = ['2020', '2021', '2022', '2023', '2024', '2025', '2026'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [  // public es para que sea accesible desde cualquier parte de la clase. barChartData es una variable de tipo ChartDataSets que se encuentra en el archivo node_modules\chart.js\dist\chart.esm.js y hace referencia a los datos de la grafica.
    { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor: '#ED5F76', hoverBackgroundColor: 'red' },
    { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B', backgroundColor: '#F763C4', hoverBackgroundColor: 'red' },
    { data: [ 8, 38, 70, 59, 66, 80, 100 ], label: 'Series C', backgroundColor: '#D665E0', hoverBackgroundColor: 'red' },
  ];

  constructor() { } // constructor es para inicializar las variables de la clase

  ngOnInit(): void { // ngOnInit es para inicializar los metodos de la clase despues de que se inicialicen las variables de la clase y despues de que se inicialice el constructor.
  }

  public randomize(): void {  // public es para que sea accesible desde cualquier parte de la clase. randomize() es un metodo para cambiar los valores de la grafica

    // Only Change 3 values
    this.barChartData[0].data = [
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
    ];

    this.barChartData[1].data = [
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
    ];

    this.barChartData[2].data = [
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
    ];
  }

}
