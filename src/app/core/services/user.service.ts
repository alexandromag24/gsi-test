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
     
    if(user == 'sucursalhol' || user == 'sucursalstgo'  || user == 'sucursalhab' || user == 'sucursalmtz'  || user == 'santamarta' || user == 'sucursalesp'){
      return true;
    }else{
      return false;
    }
  }
  isRestaurant(user: string): boolean{     
    if(user ==  'restaurante1' || user ==  'masterpizza'){
      return true;
    }else{
      return false;
    }
  }
  returnMail(user: string): string{     
    if(user ==  'destinocuba'){
      return 'tonet@destinocubaagency.com';
    }
    if(user ==  'buttymaster'){
      return 'elikeen910911@gmail.com';
    }
    if(user ==  'villarejo'){
      return 'carlosrv1218@gmail.com';
    }
    if(user ==  'tushoponline'){
      return 'contacto@tsotienda.com';
    }   
    if(user ==  'raiko'){
      return 'bellomichel12@gmail.com';
    }
    if(user ==  'esencialpack'){
      return 'p.oriente@gmail.com';
    }    
    else{
      return 'false';
    }
  }

}
