import NextAuth from "next-auth/next";

import { authOptions } from "@/lib/auth-options";
import { getUserByEmail, addUser, updateUser } from "@/actions/user";

const handler = NextAuth({
  ...authOptions,
  jwt: {
    // set the jwt expiry to 1 day
    maxAge: 60 * 60 * 24,
  },
  callbacks: {
    async signIn({ user }) {
      try {
        // check if user already exists
        const existingUser = await getUserByEmail(user.email!);

        if (existingUser) {
          await updateUser(user, existingUser.theme);

          return true;
        }

        // add user to database
        await addUser(user);

        return true;
      } catch (error) {
        console.error("Cannot save user to database.");

        return false;
      }
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }

      return token;
    },

    async session({ session }) {
      const user = await getUserByEmail(session.user?.email!);

      if (session.user) {
        session.user.theme = user.theme;
        session.user.userId = user.id;
      }

      return session;
    },
  },
});

export { handler as GET, handler as POST };
