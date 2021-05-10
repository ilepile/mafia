import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';
import { IGame } from '../models/Game';
import { User } from '../models/user';
import { WebsocketService } from '../services/websocket';
 

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  
  game: any  = {};
  gameSubject: Subject<IGame>;
  createdUser: User;

  profileForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    userName: ['']
  });


  constructor(private fb: FormBuilder, private httpClient: HttpClient,private ws : WebsocketService) { }

  ngOnInit(): void {

    this.gameSubject = <Subject<IGame>>this.ws.connect('ws://localhost:3000/').map(
      (response: MessageEvent): IGame => {
       return JSON.parse(response.data);
         
      }
    ); 
    // let socket = new WebSocket('ws://localhost:3000/');

    // socket.onopen = function() {

    //   console.log('Socket open.');
    //   socket.send(JSON.stringify({message: 'What is the meaning of life, the universe and everything?'}));
    //   console.log('Message sent.')
    // };
    // socket.onmessage = function(message) {

    //   console.log('Socket server message', message);
    //   //let data = JSON.parse(message.data); 
    //   //document.getElementById('response').innerHTML = JSON.stringify(data, null, 2);
    // };
  }

  submit() {

    let user = this.profileForm.value;
    this.httpClient.post('http://localhost:3000/api/createUser',user).subscribe(data => {
        this.game = data; 
        this.gameSubject.next(user)
    })
      

  }
}