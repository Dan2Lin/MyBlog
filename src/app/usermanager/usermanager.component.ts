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
  selectRoleType:any; // 存储新建用户的角色
  e_uid:string = "";      // 编辑用户的id
  e_username:string = ""; // 编辑用户名称
  e_password:string = ""; // 编辑用户的密码
  e_typename:string = ""; // 编辑用户的角色
  editRoleType:string = ""; // 编辑用户的新角色
  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getUsers();
    this.getAllUserType();
  }
  // 获取所有的用户
  getUsers() {
    this.userService.getUsers().then(res=>{
      this.superAdminArry = res.data.users.super_admin;
      this.adminArray = res.data.users.admin;
      this.operator = res.data.users.operator;
      this.temporary = res.data.users.tempory;
    });
  }
  // 获取所有的用户类型
  getAllUserType() {
    this.userService.getAllUserType().then(res=>{
      this.userRole = res.data.userRoles;
    });
  }
  // 添加用户时选择的用户类型
  selectUseRole(roletype,target) {
    const targetText = $(target).text();
    $("#user-role .utype-text").text(targetText);
    this.selectRoleType = roletype;
    $(".roleType-msg").addClass("hidden");
  }
  // 保存新用户
  saveUser() {
    const username = $("#username").val();
    const password = $("#password").val();
    const roleType = this.selectRoleType;
    const param = {
      username:username,
      password:password,
      role:roleType
    };
    if(!username){
      $(".username-msg").removeClass("hidden");
      return false;
    }
    if(!password){
      $(".password-msg").removeClass("hidden");
      return false;
    }
    if(!roleType){
      $(".roleType-msg").removeClass("hidden");
      return false;
    }
    this.userService.addUser(param)
      .then(res=> {
        if(res.code === 0){
          this.hideAddModal("#addUserModal");
          this.getUsers();
        }
      });
  }
  // 显示删除确认弹框
  showModal(uid){
    $('#deleteUserModal').on('show.bs.modal', function () {
      $(this).find('.user_id').text(uid);
    });
  }
  // 显示添加新用户弹框
  showAddModal(){
    $('#addUserModal').on('show.bs.modal', function () {
      $(this).find('#username').val("");
      $(this).find('#password').val("");
    });
  }
  hideAddModal(selector) {
    $(selector).modal('hide');
  }
  // 用户列表的删除操作
  deleteUser() {
     const uid = $(".user_id").text();
     this.userService.deleteUserById(uid)
       .then(res=> {
         if(res.code === 0){
           this.getUsers();
         }
       });
  }
  // 用户列表的编辑
  editUser(user) {
     this.e_uid = user.uid;
     this.e_username = user.username;
     this.e_password = user.password;
     this.e_typename = user.rName;
  }
  // 编辑弹出框中选择用户类型时的选中操作
  editUserRole(roletype,target) {
    const targetText = $(target).text();
    $(".edit-user-type").text(targetText);
    this.editRoleType = roletype;
  }
  // 更新用户
  updateUser(){
    const update_id = this.e_uid;
    const edit_uname = $("#edit-username").val();
    const edit_password = $("#edit-password").val();
    const edit_roleType = $(".edit-user-type").text().trim();
    const editRoleTypeId = this.editRoleType;
    if(edit_uname === this.e_username && edit_password === this.e_password && edit_roleType === this.e_typename){
      alert("用户内容没有进行任何更新呐~");
      return false;
    }else{
      if(!edit_uname){
        $(".edit-username-msg").removeClass("hidden");
        return false;
      }
      if(!edit_password){
        $(".edit-password-msg").removeClass("hidden");
        return false;
      }
      const param = {
        uid:update_id,
        username:edit_uname,
        password:edit_password,
        role:editRoleTypeId
      }
      this.userService.updateUser(param)
        .then(res=>{
          if(res.code === 0){
            this.hideAddModal("#editUserModal");
            this.getUsers();
          }
        });
    }
  }
  // 根据用户名或者用户类型搜索符合条件的用户
  searchUser() {
    const searchUserInput = $("#search-user-input").val();
    if(searchUserInput !== ""){
      this.userService.searchUser(searchUserInput)
        .then(res=>{
          this.superAdminArry = res.data.users.super_admin;
          this.adminArray = res.data.users.admin;
          this.operator = res.data.users.operator;
          this.temporary = res.data.users.tempory;
        });
    } else {
       this.getUsers();
    }
  }
}
