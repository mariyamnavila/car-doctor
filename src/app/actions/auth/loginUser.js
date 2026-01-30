'use server'
import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import bcrypt from "bcrypt"

export const loginUser = async (payload) => {
    // validation
    const { email, password } = payload;
    if (!email || !password) {
        return null;
    }
    const userCollection = dbConnect(collectionNamesObj.userCollection)
    const user = await userCollection.findOne({ email: email });
    if (!user) return null;

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) return null;
    return {
        ...user,
        id: user._id.toString() // NextAuth needs an id field
    };

}