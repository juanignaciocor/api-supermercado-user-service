const userDao= require("../dao/users.dao")
const jwt= require("jsonwebtoken")
const LLAVE_SECRET="llavesecreta"
const axios = require("axios")
class authService{
    
    static async logIn(userName,password){
        const userFetch= await axios.get("http//localhost:3000/api/v1/users/login")
        const payload= {
          userName:userFetch[0].userName,
          firstName:userFetch[0].firstName,
          lastName: userFetch[0].lastName,
          role:userFetch[0].role
      }
      const token= jwt.sign(payload,LLAVE_SECRET,{
          expiresIn:60*60
      })
      
      return{
  
          message:"Successful login",
          token:token,
          user:payload
      }
      
    }
   

    


}

module.exports=authService