import { Book } from "../../models/book";

export function BookCards({ books }: BookCardsProps) {
    return <>
        {books.map(book => <BookCard {...{ book }} />)}
    </>;
}

interface BookCardsProps {
    books: Book[]
}

function BookCard({ book }: BookCardProps) {
    return <div className="flex">
        <BookThumbnail title={book.title} url={book.thumbnailUrl} />
        <BookAuthors authors={book.authors} />
        <span>{book.rating}</span>
        <span>₹{book.price}</span>
    </div>
}

interface BookCardProps {
    book: Book
}

function BookThumbnail({ title, url }: BookThumbnailProps) {
    return <><img src={url} alt={title} ></img><span>{title}</span></>
}

interface BookThumbnailProps {
    url: string;
    title: string;
}

function BookAuthors({ authors }: BookAuthorsProps) {
    return <span>{authors.reduce((authors, author) => authors + ", " + author, "").slice(2)}</span>;
}

interface BookAuthorsProps {
    authors: string[];
}