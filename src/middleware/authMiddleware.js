import jwt from "jsonwebtoken";
import { prisma } from "../prisma/client.js";

// read the token frm the request and verify it
export const authMiddleware = async (req, res, next) => {
 console.log("authMiddleware called")
 let token;

 if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
    token = req.headers.authorization.split(" ")[1] 

} else if ( req.cookies.jwt){
    token = req.cookies.jwt
}
if(!token){
    return res.status(401).json({error: "not authorized, no token"})
}

try {
    // verify the token is valid and extract the user id from the token payload
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const user = await prisma.user.findUnique({where: {id: decoded.id}}) 
    
    if (!user){
        return res.status(401).json({error: "not authorized, user not found"})  }

        req.user = user
        next()
    } catch (err){
        console.error("Token verification failed:", err)
        return res.status(401).json({error: "not authorized, invalid token"})
    }
}
