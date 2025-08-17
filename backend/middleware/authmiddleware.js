const jwt = require("jsonwebtoken");
const User = require("../models/User");

//

const protect = async (req, res, next) =>{
    let token;


    if(
        req.headers.authorization && 
        req.headers.authorization.startWith("Bearer")
    ){
        try{
            token = req.headers.authorization.split("")[1];
            const decoded = jwt.verify(token, process.env.jwt_SECRET);
        }catch (error) {}
    }
};