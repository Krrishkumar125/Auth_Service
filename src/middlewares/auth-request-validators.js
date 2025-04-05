const validateUserAuth = (req , res , next) =>{
    if(!req.body.password || !req.body.email){
        return res.status(400).json({
            success:false,
            message:"Something went wrong",
            data : {},
            err : "Email or Password missing"
        });
    }
    next();
}

module.exports = {
    validateUserAuth
}