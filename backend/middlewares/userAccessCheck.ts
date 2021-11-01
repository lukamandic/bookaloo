import { Request, Response, NextFunction } from 'express';
import { responses } from '../responses'

const userAccessCheck = async (req: Request, res: Response, next: NextFunction) => {
    const role = req.body.userJWTData
    const userId = req.params.id

    if (role.data._id == userId) return next()

    res.send({ success: false, message: responses.YOU_CAN_NOT_ACCESS_THIS_RESOURCE })

}

export default userAccessCheck