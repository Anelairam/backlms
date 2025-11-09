export const userCheck = async(req, res) => {
    try{
        const {sub,name,email,picture}=req.auth
        let user = await User.findOne({auth0Id: sub});
    }catch(error){}
}