import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import LinkedInProvider from "next-auth/providers/linkedin";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { SessionStrategy } from "next-auth";
import type { Adapter } from "next-auth/adapters";
import prisma from "@repo/db/client";
import bcrypt from "bcrypt";

export const authConfig = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "jsmith@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const user = await prisma.user.findFirst({
            where: { email: credentials?.email },
            select: { id: true, name: true, email: true, password: true },
          });
          if (!user || !credentials?.password) return null;
          const isValid = await bcrypt.compare(
            credentials.password,
            user.password as string
          );
          if (!isValid) return null;
          return {
            id: user.id,
            name: user.name,
            email: user.email,
          };
        } catch (error) {
          console.error("Error finding user:", error);
          return null;
        }
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),

    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID || "",
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET || "",
    }),

    GithubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET || "super-secret",

  session: {
    strategy: "jwt" as SessionStrategy,
  },

  callbacks: {
    // Customize JWT content
    async jwt({ token, user }: { token: any; user?: any }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },

    // Customize session data returned to client
    async session({ session, token }: { session: any; token: any }) {
      if (token) {
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.name = token.name;
        session.accessToken = token; // Optional: expose token to client
      }
      return session;
    },
  },
  // pages: {
  //   signIn: "/auth", // Optional: custom sign-in page
  // },
};
