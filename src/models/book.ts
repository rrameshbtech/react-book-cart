export class Book {
    id: number;
    isbn: string;
    title: string;
    author: string;

    constructor(id: number,
        isbn: string,
        title: string,
        author: string) {
        this.id = id;
        this.isbn = isbn;
        this.title = title;
        this.author = author;
    }
}