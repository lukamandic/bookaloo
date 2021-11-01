import { Request, Response, NextFunction, response } from 'express';
import { responses } from '../responses'

const adminCheck = async (req: Request, res: Response, next: NextFunction) => {
    const role = req.body.userJWTData

    if (role.data.role == 'admin') return next()

    res.send({ success: false, message: responses.YOU_SHALL_NOT_PASS })
    
}

export default adminCheck