import { Book } from '../../models/book';
import { Footer } from '../common/footer';
import { Header } from '../common/header';
import { ProductCards } from './ProductCards';

export function Catalog({ items }: CatalogProps) {
  return (
    <>
      <Header />
      <h1 className="text-3xl font-bold underline">Books Catalog page</h1>
      <ProductCards products={items}></ProductCards>
      <Footer />
    </>
  );
}

interface CatalogProps {
  items: Book[]
}