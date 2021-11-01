import { Schema, model, connect, ObjectId } from 'mongoose';

interface User {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
    books: [Book]
}

interface Book {
    name: string;
    year: number;
    author: ObjectId;
}

const userSchema = new Schema<User>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  books: [{ type: Schema.Types.ObjectId, require: true, ref: "Book" }]
});

export const UserModel = model<User>('User', userSchema);

const bookSchema = new Schema<Book>({
    name: { type: String, required: true },
    year: { type: Number, required: true },
    author: { type: Schema.Types.ObjectId, required: true, ref: 'User' }
  });
  
export const BookModel = model<Book>('Book', bookSchema);

connect('mongodb://mongodb:27017/bookaloo');