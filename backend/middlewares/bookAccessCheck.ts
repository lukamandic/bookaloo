import { Request, Response, NextFunction } from 'express';
import { BookModel } from '../db';
import { responses } from '../responses'

const bookAccessCheck = async (req: Request, res: Response, next: NextFunction) => {
    const role = req.body.userJWTData
    const bookId = req.params.id

    try {

        const foundRecord = await BookModel.findById(bookId)

        console.log(foundRecord)
        if (foundRecord != null) {
            
            if (foundRecord.author.toString() === role.data._id) return next()

            return res.send({ success: false, message: responses.YOU_CAN_NOT_ACCESS_THIS_RESOURCE })

        }

        next()


    } catch(e) {
        console.log(e)

        res.send({ success: false, message: responses.SOMETHING_WENT_WRONG })

    }
    
}

export default bookAccessCheck