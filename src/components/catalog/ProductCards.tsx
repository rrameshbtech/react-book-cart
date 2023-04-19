import { Book } from "../../models/book";

export function ProductCards({ products }: ProductCardsProps) {
    return <>
        {products.map(product => <h1>{product.title}</h1>)}
    </>;
}

interface ProductCardsProps {
    products: Book[]
}