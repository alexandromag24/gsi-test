import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    user: string;

  constructor(private auth: AuthService) {
    this.auth.user$.subscribe(user=>{
      this.user = user.nickname;
    })
  }

  get getUser(){
    return this.user;
  }

  isAdmin(user: string): boolean{      
    if(user == 'buttymanager' || user == 'buttycomercial'  || user == 'buttyoperaciones' || user == 'buttyekonomico' || user == 'comercial'){
      return true;
    }else{
      return false;
    }
  }

  isSucursal(user: string): boolean{
     
    if(user == 'sucursalhol' || user == 'sucursalstgo'  || user == 'sucursalhab' || user == 'sucursalmtz' || user == 'restaurante1' || user == 'santamarta'){
      return true;
    }else{
      return false;
    }
  }

}
