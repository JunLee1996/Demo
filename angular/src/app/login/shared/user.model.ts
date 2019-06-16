export interface User {
    id: number;
    name:string;
    username:string;
    password:string;
    roles:Roles
  }
  export interface Roles {
    id: number;
    content:string;
    
    
  }