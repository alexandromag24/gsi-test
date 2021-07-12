import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/core/services/order.service';
import Swal from 'sweetalert2';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
import { AuthServices } from 'src/app/core/services/auth.service';
@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.scss']
})
export class ListOrdersComponent implements OnInit {
  orders: any;
  user: string;

  constructor(private orderService: OrderService,
              private au: AuthServices,
              private router: Router,
              public auth: AuthService,
                @Inject(DOCUMENT) public document: Document) {
                this.router.routeReuseStrategy.shouldReuseRoute = () => false;
               }

  ngOnInit(): void {        
    this.auth.user$.subscribe(user =>{
      this.user = user.nickname;   
      this.orderService.getOrder(this.user).then(res=>{
        this.orders = res;  
      }) 
    }) 
  }

  addOrder() {    
    this.router.navigate(['/b']);
    this.router.navigateByUrl('/list-product', { state: {who: "order"}});  
  };
  deleteOrder(order: any){
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
      
        
        this.orderService.deleteOrder(order.id);
        Swal.fire(
          'Borrado!',
          'El producto ha sido eliminado.',
          'success'
        )
        this.router.navigate(['/b']);
        this.router.navigateByUrl('/list-order');  
      }
    })
  }
  editOrder(order: any, orderId: String){  
    console.log(orderId);
        
    //this.productsEdit.push(product);
   // this.productsAttr.push(productsA);
    this.router.navigate(['/b']);
    this.router.navigateByUrl('/edit-order', { state: {order: order, orderId: orderId}});  
  }

}
