import { Book } from "../../models/book";

export function BookCards({ books }: BookCardsProps) {
  return (
    <div className="flex flex-wrap overflow-y-auto justify-center">
      {books.map((book) => (
        <BookCard {...{ book }} />
      ))}
    </div>
  );
}

interface BookCardsProps {
  books: Book[];
}

function BookCard({ book }: BookCardProps) {
  return (
    <div className="w-80 mx-10 my-11 transform rounded-lg bg-white duration-300 hover:scale-105 hover:shadow-lg">
      <BookThumbnail url={book.thumbnailUrl} title={book.title} />
      <BookAuthors authors={book.authors} />
      <BookPriceAndRating price={book.price} rating={book.rating} />
    </div>
  );
}

interface BookCardProps {
  book: Book;
}

function BookThumbnail({ title, url }: BookThumbnailProps) {
  return (
    <>
      <img
        className="py-4 h-48 w-full object-contain object-center"
        src={url}
        alt={title}
      ></img>
      <h2 className="mb-2 text-lg font-medium text-gray-900">{title}</h2>
    </>
  );
}

interface BookThumbnailProps {
  url: string;
  title: string;
}

function BookAuthors({ authors }: BookAuthorsProps) {
  return (
    <span className="m-4 text-base text-gray-700">
      {authors
        .reduce((authors, author) => authors + ", " + author, "")
        .slice(2)}
    </span>
  );
}

interface BookAuthorsProps {
  authors: string[];
}

function BookPriceAndRating({ price, rating }: BookPriceAndRatingProps) {
  return (
    <div className="flex m-4">
      <p className="text-base font-medium text-gray-500">₹{price}</p>
      <div className="ml-auto flex items-center">
        <RatingStar rating={rating} />
      </div>
    </div>
  );
}

interface BookPriceAndRatingProps {
  price: number;
  rating: number;
}

function RatingStar({ rating }: ratingStarProps) {
  return <>{Array.from({ length: rating }).map(StarImage)}</>;
}

interface ratingStarProps {
  rating: number;
}

function StarImage(): JSX.Element {
  return (
    <svg
      aria-hidden="true"
      className="w-5 h-5 text-yellow-300"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    </svg>
  );
}
