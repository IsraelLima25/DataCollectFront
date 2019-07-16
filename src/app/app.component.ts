import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DataCollectFront';

  private exibir: number = 0

  private iniciar(): void {
    if (this.exibir !== 0) {
      this.exibir = 0
    }
  }

}
