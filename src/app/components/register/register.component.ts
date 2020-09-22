import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})

export class RegisterComponent implements OnInit {
  public page_title: string;
  public user: User;
  public status: string;
  constructor(
    private _userService: UserService
  ) {

    this.page_title = 'Register';
    this.user = new User(1, 1, '', '', '', '', '', '', '');
    /* public id:number,
 public customer_id:number,
 public email:sring,
 public password:string,
 public name:string,
 public surname:string,
 public role:string,
 public description:string,
 public image:string*/
  }

  ngOnInit(): void {
    console.log('Componente ejecutado');
    console.log(this._userService.test());
  }

  onSubmit(form) {
    console.log(this.user);
    this._userService.register(this.user).subscribe(
      response => {
        if (response.status == 'success') {
          this.status = response.status;
          form.reset();
        }
        else {
            this.status = 'error';
          }
        console.log(response);
      },
      error => {
        this.status = 'error';
        console.log(<any>error);
      }
    );
  }
}
