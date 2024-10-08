const jwt = require("jsonwebtoken");
const JWT_SECRRET = "This is Ishitha.";

const fetchuser = (req,res,next)=>{
    try {
        const token = req.header('auth-token');
        if(!token){
            res.status(401).send({error:"Please authenticate using a valid token"})

        }
        const data = jwt.verify(token, JWT_SECRRET)
        req.user = data.user;
        next()
    } catch (error) {
        res.status(401).send({error:"Please authenticate using a valid token"})
    }

}

module.exports =fetchuser;