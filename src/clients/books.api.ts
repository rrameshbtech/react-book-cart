import { Book } from "../models/book";
import { DetailedBook } from "../models/detailed-book";

const serverURL = "http://localhost:3001";
const booksPath = "/books"

export function getBooks():Promise<Book[]> {
    return fetch(`${serverURL}${booksPath}`).then((response)=>response.json());
}

export function getBook(isbn: string):Promise<DetailedBook[]> {
    return fetch(`${serverURL}${booksPath}/?isbn=${isbn}`).then((response)=>response.json());
}