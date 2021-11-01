import { Request, Response } from 'express';
import { BookModel, UserModel } from '../db';
import { responses } from '../responses'

interface PaginateData {
    page: number;
    limit: number;
    offset: number;
    total?: number
}

interface Book {
    name: string;
    year: number;
    author?: string
}

interface SuccesfullResult {
    success: boolean;
    message: string;
    paginationData?: PaginateData;
    data?: object
}

export const findBook = async (req: Request, res: Response) => {
    const id : string = req.params.id 
    const book = await BookModel.find({ _id: id }).populate('author')

    const resSuccess : SuccesfullResult = {
        success: true,
        message: '',
        data: book
    }

    res.send(resSuccess)
}

export const editBook = async (req: Request, res: Response) => {
    const { name, year } : Book = req.body
    const id : string = req.params.id 
    const book = await BookModel.updateOne({ _id: id }, { name, year })

    const resSuccess : SuccesfullResult = {
        success: true,
        message: '',
        data: book
    }

    res.send(resSuccess)
}

export const postBook = async (req: Request, res: Response) => {
    const { name, year, author } : Book = req.body
    const book = await new BookModel({ name: name.trim(), year: year, author })
    //const addBook = await new UserModel.updateOne({ _id: author }, { $push: {  } })

    console.log(book)

    res.send({ book: book })
}

export const deleteBook = async (req: Request, res: Response) => {
    const id : string = req.params.id 
    const book = await BookModel.deleteOne({ _id: id })
    
    await UserModel.update({  })

    const resSuccess : SuccesfullResult = {
        success: true,
        message: '',
        data: book
    }

    res.send(resSuccess)
}
