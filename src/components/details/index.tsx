import {useEffect, useState} from "react";
import {Footer} from "../common/footer";
import {Header} from "../common/header";
import {redirect, useParams} from "react-router-dom";
import {getBook} from "../../clients/books.api";
import {DetailedBook} from "../../models/detailed-book";
import {BookAuthors, BookPriceAndRating} from "../catalog/book-cards";

export function BookDetails() {
    let {isbn} = useParams();
    const [book, setBook] = useState<DetailedBook>();
    useEffect(() => {
        if (!isbn) {
            redirect("/");
            return;
        }
        getBook(isbn).then((books) => setBook(books[0]));
    }, []);

    return (
        <div className="flex flex-col h-screen justify-between">
            <Header/>
            {book ? <ValidBookDetails book={book}/> : <NoValidBookError/>}
            <Footer/>
        </div>
    );
}

function NoValidBookError() {
    return <h1>No valid book details found</h1>;
}

function ValidBookDetails({book}: ValidBookDetailsProbs) {
    return (
        <div className="container mx-auto">
            <div className="flex flex-wrap">
                <BookImages book={book}></BookImages>
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 text-left">
                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 m-4">{book.title}</h1>
                    <BookAuthors authors={book.authors}/>
                    <BookPriceAndRating price={book.price} rating={book.rating}/>
                    <BookDescription book={book}/>
                </div>
            </div>
        </div>

    );
}

interface ValidBookDetailsProbs {
    book: DetailedBook;
}

function BookImages({book}: BookImagesProps) {
    return (
        <img
            className="w-1/4 object-contain"
            src={book.thumbnailUrl}
            alt={book.title}
        ></img>
    );
}

interface BookImagesProps {
    book: DetailedBook;
}

function BookDescription({book}: BookDescriptionProps) {
    return (<div className="m-4">
            <h3 className="text-lg font-medium text-gray-900 mb-2">About the Book</h3>
            <p className="leading-relaxed mb-4">{book.shortDescription}</p>
            <div className="flex items-center mb-4">
                <span className="text-gray-700 font-medium mr-2">Category:</span>
                <span className="text-gray-600"> {book.categories
                    .reduce((categories, category) => categories + ", " + category, "")
                    .slice(2)}</span>
            </div>
            <div className="flex items-center mb-4">
                <span className="text-gray-700 font-medium mr-2">Pages:</span>
                <span className="text-gray-600">{book.pageCount}</span>
            </div>
            <div className="flex items-center mb-4">
                <span className="text-gray-700 font-medium mr-2">Published Date:</span>
                <span className="text-gray-600">{book.publishedDate.split("T")[0]}</span>
            </div>
        </div>
    );
}

interface BookDescriptionProps {
    book: DetailedBook;
}
