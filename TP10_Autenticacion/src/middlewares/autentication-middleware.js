

export default class AutenticationMiddleware {    
    requireAutentication = async (req, res, next) =>{
        console.log(req.path.toLowerCase());
        next();            
    }    
}

