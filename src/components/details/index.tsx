import { useEffect, useState } from "react";
import { redirect, useParams } from "react-router-dom";
import { getBook } from "../../clients/books.api";
import { DetailedBook } from "../../models/detailed-book";
import { BookAuthors, BookPriceAndRating } from "../catalog/book-cards";

export function BookDetails() {
  let { isbn } = useParams();
  const [book, setBook] = useState<DetailedBook>();
  useEffect(() => {
    if (!isbn) {
      redirect("/");
      return;
    }
    getBook(isbn).then((books) => setBook(books[0]));
  }, []);

  return (
    <div className="flex flex-col justify-between">
      {book ? <ValidBookDetails book={book} /> : <NoValidBookError />}
    </div>
  );
}

function NoValidBookError() {
  return <h1>No valid book details found</h1>;
}

function ValidBookDetails({ book }: ValidBookDetailsProbs) {
  return (
    <div className="container mx-auto flex flex-wrap">
      <BookImages book={book}></BookImages>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 text-left">
        <BookTitle book={book} />
        <BookAuthors authors={book.authors} />
        <BookPriceAndRating price={book.price} rating={book.rating} />
        <BookDescription book={book} />
      </div>
    </div>
  );
}

interface ValidBookDetailsProbs {
  book: DetailedBook;
}

function BookTitle({ book }: BookTitleProbs) {
  return (
    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 m-4">
      {book.title}
    </h1>
  );
}
interface BookTitleProbs {
  book: DetailedBook;
}

function BookImages({ book }: BookImagesProps) {
  return (
    <div className="px-16 pt-16 pb-4 md:p-4 w-full md:w-1/4 ">
      <img
        className="w-full object-contain"
        src={book.thumbnailUrl}
        alt={book.title}
      ></img>
    </div>
  );
}

interface BookImagesProps {
  book: DetailedBook;
}

function BookDescription({ book }: BookDescriptionProps) {
  return (
    <div className="m-4">
      <h3 className="text-lg font-medium text-gray-900 mb-2">About the Book</h3>
      <p className="leading-relaxed mb-4">{book.longDescription}</p>
      <BookDescriptionLineItem property="Category" content={getCategories()} />
      <BookDescriptionLineItem
        property="Pages"
        content={book.pageCount.toString()}
      />
      <BookDescriptionLineItem
        property="Published Date"
        content={book.publishedDate.split("T")[0]}
      />
    </div>
  );

  function getCategories() {
    return book.categories
      .reduce((categories, category) => `${categories}, ${category}`, "")
      .slice(2);
  }
}

interface BookDescriptionProps {
  book: DetailedBook;
}

function BookDescriptionLineItem({
  property,
  content,
}: BookDescriptionLineItem) {
  return (
    <div className="flex items-center mb-4">
      <span className="text-gray-700 font-medium mr-2">{property}:</span>
      <span className="text-gray-600">{content}</span>
    </div>
  );
}

interface BookDescriptionLineItem {
  property: string;
  content: string;
}
