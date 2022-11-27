import nextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

  export const authOptions = {
   
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: "74285919064-s7k3k4q5t5nmb9gr6kmrareqko4jvbha.apps.googleusercontent.com", // process.env.GOOGLE_CLIENT_ID,
            clientSecret: "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", //process.env.GOOGLE_CLIENT_SECRET,
          }),
          
    ],
    callbacks:{
        async signIn({ user, account, profile, email, credentials }) {
            return true
          },
          async session({ session, user, token }) {
            console.log(user)

            return session
          },
      },
    NEXTAUTH_URL:"http://localhost",
    secret:"hbuhyfytcdytfk"
  }
  export default nextAuth(authOptions)