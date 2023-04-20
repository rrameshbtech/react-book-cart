export class Book {
    id: number;
    isbn: string;
    title: string;
    authors: string[];
    thumbnailUrl: string;
    price: number;
    rating: number;

    constructor(id: number,
        isbn: string,
        title: string,
        authors: string[],
        thumbnailUrl: string,
        price: number,
        rating: number) {
        this.id = id;
        this.isbn = isbn;
        this.title = title;
        this.authors = authors;
        this.thumbnailUrl = thumbnailUrl;
        this.price = price;
        this.rating = rating;
    }
}