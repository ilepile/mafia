import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WebsocketService } from './services/websocket';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WebsocketService]
})
export class AppComponent {
  title = 'luka`s Mafia Gang';

  constructor(httpClient: HttpClient) {

    httpClient.get<string>('http://localhost:3000/api/test')
      .subscribe(arg => this.title = arg);

  }
}
