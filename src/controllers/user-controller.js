const UserService = require("../services/user-service");

const userService = new UserService();

const create = async (req , res) => {
    try {
        const response = await userService.create({
            email : req.body.email,
            password : req.body.password
        })
        return res.status(201).json({
            data:{
                id : response.id,
                email : response.email,
                createdAt : response.createdAt,
                updatedAt : response.updatedAt
            },
            success:true,
            message:"User created successfully",
            err : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false, 
            message:"Not able to create the user",
            err : error,
        });
    }
}

const signIn = async (req,res) =>{
    try {
      const response = await userService.signIn(req.body.email , req.body.password);
      return res.status(200).json({
                success:true,
                data:response,
                err : {},
                message : "Successfully signed in"
      })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false, 
            message:"Not able to find the user",
            err : error,
        });
    }
}

module.exports = {
    create,
    signIn
}