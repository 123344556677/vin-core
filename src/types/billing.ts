export interface BillingDetails {
  vin: string;
  licensePlateNumber: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address:{
  country: string;
  state: string;
  fullAddress: string;
  city: string;
  zipCode:string;
  },
  paymentMethod:string,
  orderType:string,
  amount:number
  
}
export interface BillingDetailsResponse{
  status:string;
  order:{
   _id:string;
  vin: string;
  licensePlateNumber: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address:{
  country: string;
  state: string;
  fullAddress: string;
  city: string;
  zipCode:string;
  },
  paymentMethod:string,
  orderType:string,
  amount:number
  }
  message:string;
  
}