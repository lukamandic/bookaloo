import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { UserModel } from '../db'
import jwt from 'jsonwebtoken'
import uuid4 from 'uuid4';
import client from '../redis'
import { responses } from '../responses'

interface LoginData {
    email: string;
    password: string;
}

const login = async (req: Request, res: Response) => {
    const { email, password } : LoginData = req.body

    const foundUser = await UserModel.findOne({ email: email.trim() }).select({ "role": 1, "email": 1,  "password": 1, "firstName": 1, "lastName": 1 })

    if (foundUser) {
        const match = await bcrypt.compare(password.trim(), foundUser.password)

        if (match) {console.log(foundUser)

            const accessToken = jwt.sign({ data: foundUser }, 'privateKey', { expiresIn: 60*60 })
            const refreshId = uuid4()
            const refreshToken = jwt.sign({ refreshId }, 'privateKey', { expiresIn: 604800 })

            try {

                const insertRedis = await client.setex(refreshId, 60*60*24*7, refreshId)

                return res.send({ success: true, message: responses.LOGIN_SUCCEEDED, accessToken, refreshToken, firstName: foundUser.firstName, lastName: foundUser.lastName, role: foundUser.role })

            } catch(e) {

                return res.send({ success: false, message: responses.SOMETHING_WENT_WRONG })

            }

        }

        return res.send({ success: false, message: responses.WRONG_PASSWORD })
    
    } else {

        return res.send({ success: false, message: responses.WRONG_EMAIL })

    }
}

export default login