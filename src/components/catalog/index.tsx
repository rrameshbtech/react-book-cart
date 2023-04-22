import { Book } from "../../models/book";
import { BookCards } from "./book-cards";

export function Catalog({ items }: CatalogProps) {
  return (
    <>
      <h1 className="text-3xl font-bold py-8 px-4">Books Catalog</h1>
      <BookCards books={items}></BookCards>
    </>
  );
}

interface CatalogProps {
  items: Book[];
}
