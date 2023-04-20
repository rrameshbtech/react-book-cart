import {Book} from '../../models/book';
import {Footer} from '../common/footer';
import {Header} from '../common/header';
import {BookCards} from './BookCards';

export function Catalog({items}: CatalogProps) {
    return (
        <>
            <Header/>
                <h1 className="text-3xl font-bold py-8 px-4">Books Catalog</h1>
                <BookCards books={items}></BookCards>
            <Footer/>
        </>
    );
}

interface CatalogProps {
    items: Book[]
}