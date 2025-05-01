import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { HomeCards } from '../../shared/interfaces/HomeCards';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  imports: [CardModule, ChartModule],
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  pieChartData: any;
  homeCardsInfo: HomeCards[] = [];

  constructor() {
    this.homeCardsInfo = [
      {
        header: 'Food',
        value: '$ 123.33',
      },
      {
        header: 'Housing',
        value: '$ 723.75',
      },
      {
        header: 'Transport',
        value: '$ 1233.00',
      },
      {
        header: 'Leisure',
        value: '$ 235.32',
      },
    ]

    this.pieChartData = {
      labels: ['Food', 'Rent', 'Transport', 'Others'],
      datasets: [{
        data: [44, 32, 16, 8],
        backgroundColor: ['#9c27b0', '#f06292', '#ffb74d', '#4db6ac']
      }]
    };
  }

  ngOnInit() {
    
  }
}
