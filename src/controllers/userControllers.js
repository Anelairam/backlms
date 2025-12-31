import { User } from "../models/User.js"   

export const userValidation = async(req,res)=>{

    const accessData = req.auth.payload['https://api.myapp.com/user'];
    const user = await User.findOne({auth0Id: req.auth.payload.sub})

    if(!user){
       const newUser = await User.create({
            auth0Id: req.auth.payload.sub,
            email: accessData.email,
            first_name: accessData.given_name,
            last_name: accessData.family_name,
            role: "student",
            validatedData: accessData.email_verified,
            classroom: undefined, 
            notes: undefined })

        res.status(201).json({
            email: newUser.email,
            first_name: newUser.first_name,
            last_name: newUser.last_name,
            role: newUser.role,
        })
    }else{
        const returnedUser= {
            first_name: user.first_name,
            last_name: user.last_name,
            classroom: user.classroom,
            notes: user.notes  
        }
       res.status(200).json(returnedUser)
    }

}