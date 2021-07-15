import { Product } from "./product";

export class Order {    
    orderId: string;
    orderAgency: string;
    orderClientName: string;
    orderRecieverName: string;
    orderProvince: string;
    orderMunicipio: string;
    orderAddress: string;
    orderReference: string;
    orderPhone: string;
    orderMobile: string;
    orderSucursal: string;
    orderPrice: number;
    productArray: Product[];  
    state: string;
  }
  