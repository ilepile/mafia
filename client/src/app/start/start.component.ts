import { Component,  OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { User } from '../models/user';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  users: Array<User> = [];


  profileForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    userName: ['']
  });


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  submit(){

      console.log("ustpeads asd ")
  }
}
