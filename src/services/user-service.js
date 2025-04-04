const UserRepository = require("../repository/user-repository");

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
}

module.exports = UserService;