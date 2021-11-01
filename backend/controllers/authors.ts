import { Request, Response } from 'express';
import { UserModel } from '../db';
import bcrypt from 'bcrypt';
import { responses } from '../responses'

interface PaginateData {
    page: number;
    limit: number;
    offset: number;
    total?: number
}

interface SuccesfullResult {
    success: boolean;
    message: string;
    paginationData?: PaginateData;
    data?: object
}

interface Author {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export const authors = async (req: Request, res: Response) => {
    const { page, limit, offset } : PaginateData = req.body
    const authors = await UserModel.find({ role: 'author' }).select({'books': 0, 'password': 0}).skip(offset).limit(limit)
    const authorCount = await UserModel.find({ role: "author" }).count()

    const resSuccess : SuccesfullResult = { 
        success: true,
        message: '',
        paginationData: { page: page, limit: limit, offset: offset, total: authorCount },
        data: authors 
    }

    res.send(resSuccess)
}

export const deleteAuthor = async (req: Request, res: Response) => {
    const id : string = req.params.id
    const author = await UserModel.deleteOne({ _id: id })

    const resSuccess : SuccesfullResult = { 
        success: true,
        message: responses.REMOVING_AUTHOR_SUCCEEDED,
        data: author 
    }

    res.send(resSuccess)
}

export const editAuthor = async (req: Request, res: Response) => {
    const id : string = req.params.id
    const { firstName, lastName, email, password } : Author = req.body

    const hash = bcrypt.hashSync(password.trim(), 12);

    const author = await UserModel.updateOne({ _id: id }, { firstName: firstName.trim(), lastName: lastName.trim(), email: email.trim(), password: hash })

    const resSuccess : SuccesfullResult = { 
        success: true,
        message: '',
        data: author 
    }

    res.send(resSuccess)
}

export const postAuthor = async (req: Request, res: Response) => {
    const id : string = req.params.id
    const { firstName, lastName, email, password } : Author = req.body

    const hash = bcrypt.hashSync(password.trim(), 12);

    const author = await new UserModel({ _id: id }, { firstName: firstName.trim(), lastName: lastName.trim(), email: email.trim(), password: hash })

    const resSuccess : SuccesfullResult = { 
        success: true,
        message: '',
        data: author 
    }

    res.send(resSuccess)
}