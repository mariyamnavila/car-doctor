import { loginUser } from "@/app/actions/auth/loginUser";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';
import { signIn } from "next-auth/react";
import dbConnect, { collectionNamesObj } from "./dbConnect";

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({

            name: "Credentials",

            credentials: {
                email: { label: "Email", type: "text", placeholder: "Enter Email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                console.log(credentials)
                // Add logic here to look up the user from the credentials supplied
                const user = await loginUser(credentials)
                console.log(user)
                if (user) {
                    // Any object returned will be saved in `user` property of the JWT
                    return user
                } else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    return null

                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
    pages: {
        signIn: "/login"
    },
    callbacks: {
        async signIn({ user, account }) {
            // Only run for OAuth providers
            if (!account || account.provider === "credentials") {
                return true;
            }

            const userCollection = dbConnect(collectionNamesObj.userCollection);

            const provider = account.provider; // "google" | "github"
            const providerId = account.providerAccountId;

            const existingUser = await userCollection.findOne({
                provider,
                providerId,
            });

            if (!existingUser) {
                const payload = {
                    name: user.name,
                    email: user.email,
                    image: user.image || null,
                    provider,
                    providerId,
                    createdAt: new Date(),
                };

                await userCollection.insertOne(payload);
            }

            return true;
        },
    },
}