import { HttpClient } from '@angular/common/http';
import { Component,  OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { User } from '../models/user';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  game: any  = {};
  createdUser: User;

  profileForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    userName: ['']
  });


  constructor(private fb: FormBuilder,private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  submit(){

    let user= this.profileForm.value;
      this.httpClient.post('http://localhost:3000/api/createUser',
      user).subscribe(data=>{
        this.game =  data;
      })
  }
}
