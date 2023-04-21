export class DetailedBook {
  id: number;
  isbn: string;
  title: string;
  authors: string[];
  thumbnailUrl: string;
  price: number;
  rating: number;
  shortDescription: string;
  longDescription: string;
  categories: string[];
  pageCount: number;
  publishedDate: string;

  constructor(
    id: number,
    isbn: string,
    title: string,
    authors: string[],
    thumbnailUrl: string,
    price: number,
    rating: number,
    shortDescription: string,
    longDescription: string,
    categories: string[],
    pageCount: number,
    publishedDate: string
  ) {
    this.id = id;
    this.isbn = isbn;
    this.title = title;
    this.authors = authors;
    this.thumbnailUrl = thumbnailUrl;
    this.price = price;
    this.rating = rating;
    this.shortDescription = shortDescription;
    this.longDescription = longDescription;
    this.categories = categories;
    this.pageCount = pageCount;
    this.publishedDate = publishedDate;
  }
}
