export declare namespace Authentication {
  export interface LoginPayload {
    username: string;
    password: string;
  }

  export interface SignupPayload {
    name: string;
    personalEmail: string;
    contact: string;
    password: string;
    cPassword: string;
  }

  export interface User {
    _id: string;
    name: string;
    emailVerified: boolean;
    emailHash: string;
    passwordLastUpdated?: any;
    lastLogin: Date;
    contact?: any;
    personalEmail: string;
    createdAt: Date;
    updatedAt: Date;
  }

  export interface Credentials {
    user: User;
    accessToken: string;
    session: string;
  }
  
}
