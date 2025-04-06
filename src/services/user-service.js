const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const UserRepository = require("../repository/user-repository");
const {JWT_KEY} = require("../config/serverConfig");

class UserService{
    constructor(){
        this.userRepository = new UserRepository();
    }

    async create(data){
         try {
            const user = await this.userRepository.create(data);
            return user;
         } catch (error) {
            console.log("error in user-service");
            throw {error};
         }
    }

    async delete(data){
        try {
           await this.userRepository.destroy(data);
           return true;
        } catch (error) {
           console.log("error in user-service");
           throw {error};
        }
   }
   
   async signIn(email,plainPassword){
      try {
         //step 1 => fetch the user using the email
         const user = await this.userRepository.getByEmail(email);
         // step 2 => compare the passwords 
         const passwordMatch = this.checkPassword(plainPassword,user.password);
         if(!passwordMatch){
            console.log("password does not match");
            throw {error: "Incorrect password"};
         }
         // step 3 => if passwords match return the jwt token
         const newJWT = this.createToken({
            email :user.email,
            id:user.id,
         });
         return newJWT;
      } catch (error) {
         console.log("something went wrong in signin process");
         throw {error};
      }
   }

   async isAuthenticated(token){
      try {
         const response = this.verifyToken(token);
         if(!response){
            throw {error: 'invalid token'};
         }
         const user = await this.userRepository.getById(response.id);
         if(!user){
            throw {error : 'user not found'};
         }
         return user.id;
      } catch (error) {
         console.log("something went wrong in auth process");
         throw {error};
      }
   }

   createToken(user) {
      try {
         const result = jwt.sign(user, JWT_KEY , {expiresIn: '1h'});
         return result;
      } catch (error) {
         console.log("error in token creation");
         throw {error};
      }
   }

   verifyToken(token) {
      try {
         const response = jwt.verify(token,JWT_KEY);
         return response;
      } catch (error) {
         console.log("Something went wrong in token validation" , error);
         throw {error};
      }
   }

   checkPassword(userInputPlainPassword , encryptedPassword){
          try {
            return bcrypt.compareSync(userInputPlainPassword, encryptedPassword);
          } catch (error) {
            console.log("Something went wrong in password comparison");
            throw {error};
          }
   }

   async isAdmin(userId){
      try {
         const response = await this.userRepository.isAdmin(userId);
         return response;
      } catch (error) {
         console.log("Something went wrong in service layer");
         throw {error};
      }
   }
}

module.exports = UserService;