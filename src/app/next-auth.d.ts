// types/next-auth.d.ts

import {DefaultUser} from "next-auth";
import {DefaultSession} from "next-auth";

// Extend User and Session types
declare module "next-auth" {
  interface User extends DefaultUser {
    type: string; // Add the `type` property to the `User` type
  }

  interface Session extends DefaultSession {
    user: {
      type: string; // Add the `type` property to the `Session.user` object
    };
  }
}
