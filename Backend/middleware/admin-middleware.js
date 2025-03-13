
export const adminMiddleware = async (req,res,next) =>{

    if( req.user && req.user.role ==="admin"){
        next()
    }else{
        res.status(404).json({messgs: "Access denied. "})
    }
}
