import { hashPassword } from "@/lib/auth";
import connectDB from "@/lib/db"
export default async function handler(req, res) {

    if (req.method == "POST") {
        const { email, password } = req.body
        const client = await connectDB();
        const db = client.db()


        if (!email || !email.includes("@" || !password || password.length < 6)) {

            res.status(422).json({ msg: "Wrong credential" })
            return;
        }

        const hashPass = await hashPassword(password)
        const result = await db.collection("users").insertOne({
            email: email,
            password: hashPass
        })


        res.status(201).json({ msg: "Sign Up Successfull", result })
    }
}