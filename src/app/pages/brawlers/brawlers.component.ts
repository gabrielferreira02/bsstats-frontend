import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-brawlers',
  imports: [],
  templateUrl: './brawlers.component.html',
  styles: ``
})
export class BrawlersComponent {
  brawlers: Array<any> = [];

  constructor(private apiService: ApiService) {
    this.apiService.getBrawlers().subscribe({
      next: response => {
        console.log(response);
        this.brawlers = response.list;
      }
    })
  }
}
