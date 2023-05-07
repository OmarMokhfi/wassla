import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import prisma from "src/lib/Prisma";
import { comparePassword } from "src/services/password.service";
import { User } from "src/types/Models";
import { ROLE } from "src/types/roles";

const getUser = (email: string) => {
  return new Promise<User | null>(async (resolve, reject) => {
    const user = email
      ? await prisma.user.findFirst({
          where: {
            email: email,
          },
        })
      : null;
    resolve(user);
  });
};

const getUserProfileOrCreate: any = (profile: any) => {
  return new Promise(async (resolve, reject) => {
    const foundUser = await getUser(profile.email);
    if (foundUser) {
      resolve({
        id: profile.password,
        firstname: foundUser.firstname,
        lastname: foundUser.lastname,
        email: foundUser.email,
        role: foundUser.role,
      });
    } else {
      try {
        let createdUser = await prisma.user.create({
          data: {
            email: profile.email,
            password: profile.password,
            firstname: profile.firstname,
            lastname: profile.lastname,
            role: ROLE.STUDENT,
          },
        });
        return resolve({
          id: profile.password,
          firstname: createdUser.firstname,
          lastname: createdUser.lastname,
          email: createdUser.email,
          role: createdUser.role,
        });
      } catch (error) {
        resolve(null);
      }
    }
  });
};

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials: any) => {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        const user = await getUser(email);
        if (user !== null) {
          let isPasswordCorrect = await comparePassword(
            password,
            user.password
          );
          if (isPasswordCorrect) {
            return {
              id: user.id,
              email: user.email,
              firstname: user.firstname,
              lastname: user.lastname,
              role: user.role,
            };
          } else return null;
        } else {
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      async profile(profile: any) {
        let result = await getUserProfileOrCreate({
          password: profile.sub,
          firstName: profile.given_name,
          lastName: profile.family_name,
          email: profile.email,
        });
        return result;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      token = { ...token, ...user, ...account };
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          email: token.email,
          firstname: token.firstname,
          lastname: token.lastname,
          role: token.role,
        },
      };
    },
    async signIn(data: any) {
      const { account, profile } = data;
      if (account && account.provider === "google") {
        return profile && profile.email_verified;
      }
      return true;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
