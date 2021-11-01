import { Request, Response, NextFunction } from 'express';
import { responses } from '../responses'

const authorCheck = (req: Request, res: Response, next: NextFunction) => {
    const role = req.body.userJWTData
    
    if (role.data.role == 'author') return next()

    res.send({ success: false, message: responses.YOU_SHALL_NOT_PASS })

    next()
    
}

export default authorCheck