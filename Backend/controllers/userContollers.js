import User from "../model/UserModel.js";


const register = async(req,res) =>{
    
    try {
        
        console.log(req.body);
        const {name, email, password} = req.body

    const userExist = await User.findOne({email:email});
    if(userExist){
       return res.status(400).json({mssgs: "User already exist"})
    }

    // const Userdata = await User.create({name, email, password })
        
    //     res.status(200)
    //     .json({ message: Userdata, //or "registration successfull"
    //     // token: await Userdata.generateToken(), 
    //     // userId: Userdata._id.toString() // to string is a best practice in jwt
    //     })

    res.send({name,email,password})

    } catch (error) {
       res.status(404).json("internal server error")
    }
}


export default {register}