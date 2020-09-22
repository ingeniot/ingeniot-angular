import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  public page_title: string;
  public user: User;
  public status: string;
  public token;
  public identity;

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.page_title = 'Login';
    this.user = new User(1, 1, '', '', '', '', '', '', '');
  }

  ngOnInit(): void {
    //se ejecuta siempre y cierra sesion cuando llega el valor sure
    this.logout();
  }

  onSubmit(form): void {
    console.log(this.user);
    this._userService.login(this.user).subscribe(
      response => {
        console.log(response);
        if (response.status != 'error') {
          this.status = 'success';
          this.token = response;
          //obtener objeto usuario identificado
          this._userService.login(this.user, true).subscribe(
            response => {
              console.log(response);
              this.identity = response;
              console.log(this.token);
              console.log(this.identity);
              //Persistir datos usuarios
              localStorage.setItem('token', this.token);
              localStorage.setItem('identity', JSON.stringify(this.identity));
              //redireccion a inicio
              this._router.navigate(['inicio'])
            },
            error => {
              this.status = 'error';
              console.log(<any>error);
            }
          );
        }
        else {
          this.status = 'error';
        }
      },
      error => {
        this.status = 'error';
        console.log(<any>error);
      }
    );
  }

  logout() {
    console.log('cerrar sesion iniciado');
    this._route.params.subscribe(params => {
      let logout = +params['sure'];
      if (logout == 1) {
        console.log('cerrar sesion ejecutado');
        localStorage.removeItem('identity');
        localStorage.removeItem('tokens');
        this.identity = null;
        this.token = null;

        //redireccion a inicio
        this._router.navigate(['inicio'])
      }
    });

  }

}
