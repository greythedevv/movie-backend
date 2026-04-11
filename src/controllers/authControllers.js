
import {prisma} from "../config/db.js"
import bcrypt from "bcryptjs";

const register = async(req, res)=>{
    const body = req.body;
    const {name, email, password} = body

    // check if user already exist 
    const userExist = await prisma.user.findUnique({
        where:{email:email}
    })

    if (userExist){
        return res.status(400).json({error: "user already exists with this email"})
    }

    // hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // create user
    const user = await prisma.user.create({
        data:{
            name,
            email,
            password: hashedPassword,
        }
        
    });

    res.status(201).json({
        status: "success",
        data: {
            user:{
                id: user.id,
                name:name,
                email:email,
        }
    }})
}


export {register}