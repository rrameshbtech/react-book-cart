import { useEffect, useState } from "react";
import { redirect, useParams } from "react-router-dom";
import { getBook } from "../../clients/books.api";
import { DetailedBook } from "../../models/detailed-book";
import { BookAuthors, BookPriceAndRating } from "../catalog/book-cards";
import { Thumbnail } from "../common/book-thumbnail";
import { BookTitle } from "../common/book-title";

export function BookDetails({ onAddToCart }: BookDetailsProps) {
  let { isbn } = useParams();
  const [book, setBook] = useState<DetailedBook>();
  useEffect(() => {
    if (!isbn) {
      redirect("/");
      return;
    }
    getBook(isbn).then((books) => setBook(books[0]));
  }, [isbn]);

  if (!book) {
    return <NoValidBookError />;
  }
  return (
    <div className="flex flex-col justify-between">
      <ValidBookDetails book={book} onAddToCart={onAddToCart} />
    </div>
  );
}
interface BookDetailsProps {
  onAddToCart: Function;
}

function NoValidBookError() {
  return <h1>No valid book details found</h1>;
}

function ValidBookDetails({ book, onAddToCart }: ValidBookDetailsProbs) {
  return (
    <div className="container mx-auto flex flex-wrap">
      <div className="flex flex-wrap flex-col px-16 pt-16 pb-4 md:p-4 w-full md:w-1/4 ">
        <Thumbnail url={book.thumbnailUrl} title={book.title} size="large" ></Thumbnail>
        <AddToCartButton onAdd={() => onAddToCart(book)} />
      </div>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 text-left">
        <BookTitle title={book.title} size="large" />
        <BookAuthors authors={book.authors} />
        <BookPriceAndRating price={book.price} rating={book.rating} />
        <BookDescription book={book} />
      </div>
    </div>
  );
}

interface ValidBookDetailsProbs {
  book: DetailedBook;
  onAddToCart: Function;
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
}: BookDescriptionLineItemProps) {
  return (
    <div className="flex items-center mb-4">
      <span className="text-gray-700 font-medium mr-2">{property}:</span>
      <span className="text-gray-600">{content}</span>
    </div>
  );
}

interface BookDescriptionLineItemProps {
  property: string;
  content: string;
}

function AddToCartButton({ onAdd }: AddToCartButtonProps) {
  return (
    <button
      onClick={() => {
        onAdd();
      }}
      className="w-full p-4 bg-orange-600 text-white text-xl font-bold hover:bg-orange-500 active:bg-orange-600 hover:text-gray-800 hover:outline hover:outline-orange-600"
      title="Add To Cart"
    >
      Add To Cart
    </button>
  );
}
interface AddToCartButtonProps {
  onAdd: Function;
}
