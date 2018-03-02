import { Component, OnInit } from '@angular/core';
import {UserService} from "../service/user-service/user.service";

@Component({
  selector: 'app-usermanager',
  templateUrl: './usermanager.component.html',
  styleUrls: ['./usermanager.component.css']
})
export class UsermanagerComponent implements OnInit {
  superAdminArry:string[];
  adminArray:string[];
  operator:string[];
  temporary:string[];
  userRole:any;
  selectRoleType:any;
  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getUsers();
    this.getAllUserType();
  }

  getUsers() {
    this.userService.getUsers().then(res=>{
      console.log("------all users-------");
      console.log(res);
      this.superAdminArry = res.data.users.super_admin;
      this.adminArray = res.data.users.admin;
      this.operator = res.data.users.operator;
      this.temporary = res.data.users.tempory;
    });
  }
  getAllUserType() {
    this.userService.getAllUserType().then(res=>{
      this.userRole = res.data.userRoles;
    });
  }
  selectUseRole(roletype,target) {
    const targetText = $(target).text();
    $("#user-role .utype-text").text(targetText);
    this.selectRoleType = roletype;
  }

  saveUser() {
    const username = $("#username").val();
    const password = $("#password").val();
    const roleType = this.selectRoleType;
    const param = {
      username:username,
      password:password,
      role:roleType
    };
    this.userService.addUser(param)
      .then(res=> {
        if(res.code === 0){
          this.getUsers();
        }
      });
  }

  showModal(uid){
    $('#deleteUserModal').on('show.bs.modal', function () {
      $(this).find('.user_id').text(uid);
    });
  }

  deleteUser() {
     const uid = $(".user_id").text();
     this.userService.deleteUserById(uid)
       .then(res=> {
         if(res.code === 0){
           this.getUsers();
         }
       });
  }
}
