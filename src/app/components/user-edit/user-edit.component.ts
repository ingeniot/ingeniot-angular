import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { global } from '../../services/global';

@Component({
  selector: 'user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
  providers: [UserService]
})

export class UserEditComponent implements OnInit {
  public page_title: string;
  public user: User;
  public status: string;
  public identity: User;
  public token; 
  public url;
  public resetVar;
  public afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png,.gif,.jpeg",
    maxSize: "50",
    uploadAPI:  {
      url:global.url+'user/upload',
      //method:"POST",
      headers: {
     //"Content-Type" : "text/plain;charset=UTF-8",
     "Authorization" : this._userService.getToken()
      },
      /*params: {
        'page': '1'
      },*/
      //responseType: 'blob',
    },
    //theme: "dragNDrop",
    theme: "attachPin",
    hideProgressBar: false,
    hideResetBtn: true,
    hideSelectBtn: false,
    fileNameIndex: false,
    attachPinText: 'Sube tu imagen de usuario',
   /* replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',

      attachPinBtn: 'Sube tu imagen de usuario',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !',
      sizeLimit: 'Size Limit'
    }*/
  };

  constructor(
    private _userService: UserService
  ) {
    this.page_title = 'Ajustes de usuario';
    this.user = new User(1, 1, '', '', '', '', '', '', '');
    this.identity = _userService.getIdentity();
    this.token = _userService.getToken();
    this.url = global.url;
    //Rellenar objeto de usuario
    this.user = new User(
      this.identity.id,
      this.identity.customer_id, 
      this.identity.email, 
      '',
      this.identity.name, 
      this.identity.surname, 
      this.identity.role,
      this.identity.description, 
      this.identity.image
    )};

  ngOnInit(): void {

  }

  onSubmit(form) {
    //console.log(this.user);
    console.log('submit');
    this._userService.update(this.user,this.token).subscribe(
      response => {
        console.log('respuesta'+response);
        if(response.status=='success'){
          this.status = 'success';   
          //Actuaizar ususario en sesión
          this.identity =response.changes;
          localStorage.setItem('identity',JSON.stringify(this.identity))   ;   
        }else{
        this.status = 'error';
        }

      },
      error=>{
        console.log(<any>error);
        this.status = 'error';
      }

    );
  }
  imageUpload(datos)
  {
   // console.log("respuesta"+datos);
    //console.log("respuesta"+JSON.parse(datos.response));
      let data = JSON.parse(datos.response);//convierte el JSON en un objeto de JS
      this.user.image = data.image;
  }

}
