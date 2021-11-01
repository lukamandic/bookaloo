import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express';
import { responses } from '../responses'

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
	const authHeader: string | undefined = req.headers['authorization']
    const token : string | undefined = authHeader && authHeader.split(' ')[1]

    if(typeof token !== 'undefined') {
        jwt.verify(token, 'privateKey', function(err, decoded) {
            
            req.body.userJWTData = decoded
            if (!err) return next()
            return res.status(404).send({success: false, message: responses.TOKEN_HAS_EXPIRED})
        })
    } else {
        res.send({success: false, message: responses.TOKEN_NOT_PRESENT})
    }
}

export default verifyToken