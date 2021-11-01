import { Request, Response } from 'express';
import client from '../redis'
import jwt from 'jsonwebtoken'
import { responses } from '../responses'

interface RefreshToken {
    refreshToken: string;
}

const refresh = async (req: Request, res: Response) => {
    const { refreshToken } : RefreshToken = req.body

    const verified = await jwt.verify(refreshToken, 'privateKey')

    /*client.get(verified, async (err, data) => {

        if (err) return res.send({ succes: false, message: responses.SOMETHING_WENT_WRONG })

        const verified = await jwt.sign(refreshToken, 'privateKey')

        console.log(verified)

        res.send({data})
    })*/
}

export default refresh