export interface SignupUser {
  fname:string,
  lname:string,
  email: string,
  password: string,
}
export interface LoginUser {
  email: string,
  password: string,
}
export interface LoginUserResponse {
  data:{
    token: string,
    _id:string
  },
  status: string,
}

export interface UserDetails {
  fname:string,
  lname:string,
  email: string,
  _id: string,
  subscription:boolean,
  createdAt:Date,
  upatedAt:Date
  subscriptionEndDate?:Date|string,
  availableReports?:number
}