import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { map } from 'rxjs/operators';
import { Order } from 'src/app/core/models/order';
import { GetProvincesService } from 'src/app/core/services/get-provinces.service';
import { OrderService } from 'src/app/core/services/order.service';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { SucursalService } from 'src/app/core/services/sucursal.service';
@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.scss']
})
export class EditOrderComponent implements OnInit {  
  order: Order = new Order();
  orderId: string;
  user: string;
  admin: boolean;
  sucursal: boolean;
  sucursalName: any [] = [];
  products: Array<any> = [{}];
  subtotal: number;
  total:number = 0;
  img: string | ArrayBuffer =
  "https://bulma.io/images/placeholders/480x480.png";
  photosrc: String;
  filePath:String;
  file: File;
  constructor(
    private router: Router,
    private sucursalService: SucursalService,
    private orderService: OrderService
  ) { }

  ngOnInit(): void {    
    this.order = history.state.order;
    this.img=  history.state.order.orderAlbaran._url;    
    this.orderId = history.state.orderId;
    this.user = history.state.user;
    this.admin = history.state.admin;
    this.sucursal = history.state.sucursal;
    
    this.products = this.order.productArray;
     //this.order.orderProvince = this.products[0].province;
     console.log('Products');
     console.log(history.state.orderId);
     
     console.log(this.products[0].province);
     this.products.forEach(element => {
       this.subtotal = +element.price;
       this.total = this.total + this.subtotal
       console.log(this.total);       
       
     });
     this.sucursalService.getSucursal().then(res =>{
      this.sucursalName = res;   
      console.log('tests');        
      console.log(this.sucursalName);
    });
  }
 
  photo(event: any) {
    this.filePath = event.files;    
    console.log("Path");
    console.log(this.filePath);
    this.file = event[0];
      const reader = new FileReader();   
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = event => {
        this.img = reader.result;  
      };    
}
  onSubmit(form: NgForm){
    if(form.valid){
      this.orderService.updateOrder(this.order, this.orderId, this.img.toString());
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Pedido añadido',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(['/orders']);
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Complete todos los campos obligatorios!',        
      })
    }  
  }

  print(){
    this.router.navigate(['/b']);
    this.router.navigateByUrl('/print-view', { state: {order: this.order}}); 
  }

}
