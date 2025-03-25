import User from "../model/UserModel.js";


const register = async(req,res) =>{
      
    console.log(req.body);
    const {name, email, password} = req.body
    try {
      

    const userExist = await User.findOne({email:email});
    if(userExist){
       return res.status(400).json({mssgs: "User already exist"})
    }

    const Userdata = await User.create({name, email, password})
        
        res.status(200)
        .json({ message: Userdata, //or "registration successfull"
        token: await Userdata.generateToken(), 
        userId: Userdata._id.toString() // to string is a best practice in jwt
        })

    // res.send({name,email,password})

    } catch (error) {
        console.error(error);
       res.status(404).json({ message:"internal server error", error: error.message})
    }
}


// login logic

const login = async (req,res)=>{

    try {
        
        const {email, password} = req.body

        const userExist = await User.findOne({email});

        if(!userExist){
            return res.status(404).json({mssgs: "Invalid credientials "})
        }

        const passCheck = await userExist.comparePassword(password)
        if(passCheck){
            res.status(200).json(
                {
                    messgs: "Login Successfull",
                    token: await userExist.generateToken(),
                    userId: userExist._id.toString()
                }
            )
        }else{
            res.status(400).json(
                {messgs:"Invalid credientials "}
            )
        }
    } catch (error) {
        res.status(400).json({messgs:"internal server error", error:error.message})
    }
}


// user profile logic

const user = (req,res)=>{
    try {
        
        const userData = req.user  // req.user will be created in middleware
        console.log(userData);

        return res.status(200).json({userData})
    } catch (error) {
        console.log("error in user logic", error);
    }
}


export default {register,login,user}