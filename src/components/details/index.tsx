import { useEffect, useState } from "react";
import { Footer } from "../common/footer";
import { Header } from "../common/header";
import { redirect, useParams } from "react-router-dom";
import { getBook } from "../../clients/books.api";
import { DetailedBook } from "../../models/detailed-book";

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
    <>
      <Header />
      {book ? <ValidBookDetails book={book} /> : <NoValidBookError />}
      <Footer />
    </>
  );
}

function NoValidBookError() {
  return <h1>No valid book details found</h1>;
}

function ValidBookDetails({ book }: ValidBookDetailsProbs) {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex-0 w-full md:w-1/3">
        <BookImages {...{ book }} />
      </div>
      <div className="flex-1">
        <BookDescription {...{ book }} />
      </div>
    </div>
  );
}
interface ValidBookDetailsProbs {
  book: DetailedBook;
}
function BookImages({ book }: BookImagesProbs) {
  return (
    <img
      className="py-4 h-48 w-full object-contain object-center"
      src={book.thumbnailUrl}
      alt={book.title}
    ></img>
  );
}
interface BookImagesProbs {
  book: DetailedBook;
}

function BookDescription({ book }: BookDescriptionProbs) {
  return <div>{book.title}</div>;
}
interface BookDescriptionProbs {
  book: DetailedBook;
}
