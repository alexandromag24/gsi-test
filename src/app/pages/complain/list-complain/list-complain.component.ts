import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { ComplainService } from 'src/app/core/services/complain.service';
import { UserService } from 'src/app/core/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-complain',
  templateUrl: './list-complain.component.html',
  styleUrls: ['./list-complain.component.scss']
})
export class ListComplainComponent implements OnInit {
  complains: any;
  user: string;
  admin: boolean;
  constructor(
    private router: Router,
    private auth: AuthService,
    private complainService: ComplainService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(user =>{
      this.user = user.nickname;   
      this.complainService.getComplain(this.user).then(res=>{
        this.complains = res;  
        console.log(this.complains);
        
      }) 
      this.isAdmin();
    }) 
  }
  isAdmin(){    
    this.admin = this.userService.isAdmin(this.user);
  }

  addComplain() {    
    this.router.navigate(['/b']);
    this.router.navigateByUrl('/add-complain');  
  };

  editComplain(complain: any, complainId: String){
    this.router.navigate(['/b']);
    this.router.navigateByUrl('/edit-complain', { state: {complain: complain, complainId: complainId, user: this.user}});  
  }
 

  deleteComplain(complain: any){
    Swal.fire({
      title: 'Estás seguro?',
      text: "No serás capaz de revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borralo!'
    }).then((result) => {
      if (result.isConfirmed) {
      
        
        this.complainService.deleteComplain(complain.id);
        Swal.fire(
          'Borrado!',
          'La queja ha sido eliminada.',
          'success'
        )
        this.router.navigate(['/orders']);
      }
    })
  }
}
