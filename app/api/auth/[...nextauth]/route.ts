import { authOptions } from "@/lib/authOptions";
import NextAuth from "next-auth/next";
import { getUserByEmail, addUser, updateUser } from "@/actions/user";

const handler = NextAuth({
  ...authOptions,
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

    async session({ session }) {
      const user = await getUserByEmail(session.user?.email!);
      if (session.user) session.user.theme = user.theme;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
