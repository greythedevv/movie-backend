import { object } from "zod"


export const validateRequest = (schema) =>{
    return (req, res, next) =>{
        const result = schema.safeParse(req.body)

        if(!result.success){
            const formatted =result.error.format()

            const flatErrors = object.values(formatted)
            .flat()
            .filter(Boolean)
            .map((err)=> err._errors)
            .flat();
            console.log(flatErrors)
            return res.status(400).json({message: flatErrors.join(", ") })

            // const errorMessages = result.error.errors.map((err)=>{err.message})
            // const error = errorMessages.join(",")
            // return res.status(400).json({message: error })
        }

        next()
    }
}