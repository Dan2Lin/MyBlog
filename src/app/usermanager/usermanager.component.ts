import { Component, OnInit } from '@angular/core';
import {UserService} from "../service/user-service/user.service";

@Component({
  selector: 'app-usermanager',
  templateUrl: './usermanager.component.html',
  styleUrls: ['./usermanager.component.css']
})
export class UsermanagerComponent implements OnInit {
  superAdminArry:String[];
  adminArray:String[];
  operator:String[];
  temporary:String[];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().then(res=>{
      this.superAdminArry = res.data.users.super_admin;
      this.adminArray = res.data.users.admin;
      this.operator = res.data.users.operator;
      this.temporary = res.data.users.tempory;
    });
  }
}
