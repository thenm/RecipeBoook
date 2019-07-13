import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public menuName: any;
  onNavigate(data) {
    console.log('-------------', data);
    this.menuName = data;
  }
}
