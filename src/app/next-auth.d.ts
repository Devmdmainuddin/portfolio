// types/next-auth.d.ts

// import {DefaultUser} from "next-auth";
// import {DefaultSession} from "next-auth";


// declare module "next-auth" {
//   interface User extends DefaultUser {
//     type: string; 
//   }

//   interface Session extends DefaultSession {
//     user: {
//       type: string; 
//     };
//   }
// }

// src/types/next-auth.d.ts

import { DefaultJWT } from "next-auth/jwt";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      role:string;
      id:string;
      type?: string;
    } & DefaultSession["user"];
  }
  interface User{
    role:string;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    type?: string;
  }
}
