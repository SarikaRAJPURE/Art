const jwt = require("jsonwebtoken");

//verify access token
const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;
    //console.log(authHeader);
    if (authHeader) {
        //token : Bearer tokennumber
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SECRETE, (err, user) => {
            if (err) res.status(403).json("Token is not valid!");//either expired or wrong
            req.user = user;
            //console.log(req.user);
            next();
        });
    } else {
        return res.status(401).json("You are not authenticated");
    }  
}

const verifyTokenAndAutherisation = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next();
        }else{
            res.status(403).json("You are not allowed to do that!");
        }
    })
}

const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        console.log(req.user.isAdmin);
        if (req.user.isAdmin) {
            next();
        }else{
            res.status(403).json("You are not allowed to do that!");
        }
    })
}
module.exports = { verifyToken,verifyTokenAndAutherisation,verifyTokenAndAdmin };