import { Book } from "../models/book";

const serverURL = "http://localhost:3001";
const booksPath = "/books"

export function getBooks():Promise<Book[]> {
    return fetch(`${serverURL}${booksPath}`).then((response)=>response.json());
}