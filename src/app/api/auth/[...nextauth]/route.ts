import NextAuth from "next-auth";
import type {NextApiHandler} from "next";
import CredentialsProvider from "next-auth/providers/credentials";
import user from "../registation/model";
import bcrypt from "bcrypt";
import {dbConnect} from "../../helpers";
import { AuthOptions } from "next-auth";


export const runtime = "nodejs";

export const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {label: "Email", type: "email", placeholder: "Enter your email"},
        password: {label: "Password", type: "password", placeholder: "Enter your password"},
      },
      async authorize(credentials) {
        await dbConnect() 
        const users = await user.findOne({email: credentials?.email});
        if (users && credentials) {
          const isPasswordValid = await bcrypt.compare(credentials.password, users.password);
          if (isPasswordValid) {
            return {id: users._id, name: users.name, email: users.email, type: users.type};
          }
        }
        throw new Error("Invalid email or password");
      },
    }),
  ],
  pages: {
    signIn: "/signin",
    error: "/auth/error",
    verifyRequest: "/auth/verify-request",
  },
  // callbacks: {
  //   async jwt({token, user}) {
  //     if (user) {
  //       token.type = user as {type: string}
  //     }
  //     return token;
  //   },
  //   async session({session, token}) {
  //     const customToken = token as {type: string};
  //     if (customToken.type) {
  //       session.user.type = customToken.type;
  //     }
  //     return session;
  //   },
  // },
  callbacks: {
    jwt: async ({ user, token, trigger, session }) => {
      if (trigger === "update") {
        return { ...token, ...session.user };
      }
      return { ...token, ...user };
    },
},
}
const handler: NextApiHandler = NextAuth(authOptions);

export { handler as GET, handler as POST };





