import { Request, Response } from 'express';
import { UserModel } from '../db'
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

export const authors_books = async (req: Request, res: Response) => {
    const { page, limit, offset } : PaginateData = req.body

    try {
        const author_books = await UserModel.find({}).select({ "password": 0 }).populate('books').skip(offset).limit(limit)
        const authorCount = await UserModel.find({ role: "author" }).count()

        const resSuccess : SuccesfullResult = {
            success: true,
            message: responses.FETCHING_AUTHORS_SUCCEEDED,
            paginationData: { page: page, limit: limit, offset: offset, total: authorCount },
            data: author_books 
        }

        res.send(resSuccess)

    } catch(e) {

        const resFail : SuccesfullResult = {
            success: false,
            message: responses.FETCHING_AUTHORS_FAILED
        }

        res.send(resFail)

    }

}

export const author_books = async (req: Request, res: Response) => {
    const id : string = req.params.id

    try {

        const author_books = await UserModel.find({ _id: id }).select({ "password": 0 }).populate('books')

        const resSuccess : SuccesfullResult = {
            success: true,
            message: responses.FETCHING_AUTHOR_SUCCEEDED,
            data: author_books 
        }

        return res.send(resSuccess)

    } catch(e) {

        const resFail : SuccesfullResult = {
            success: false,
            message: responses.FETCHING_AUTHOR_FAILED
        } 
    
        return res.send(resFail)

    }

}
