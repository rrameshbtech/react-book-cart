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
  return <h1>{book.title}</h1>;
}

interface ValidBookDetailsProbs {
  book: DetailedBook;
}
