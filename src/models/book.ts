export class Book {
    id: number;
    isbn: string;
    title: string;
    authors: string[];
    thumbnailUrl: string;

    constructor(id: number,
        isbn: string,
        title: string,
        authors: string[],
        thumbnailUrl: string) {
        this.id = id;
        this.isbn = isbn;
        this.title = title;
        this.authors = authors;
        this.thumbnailUrl = thumbnailUrl;
    }
}