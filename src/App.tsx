import React, { useEffect, useState } from "react";
import "./App.css";
import { Catalog } from "./components/catalog";
import { getBooks } from "./clients/books.api";
import { Book } from "./models/book";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { BookDetails } from "./components/details";
import { Header } from "./components/common/header";
import { Footer } from "./components/common/footer";
import { CartPreview } from "./components/cart";
import { DetailedBook } from "./models/detailed-book";

function App() {
  const emptyBooks = [] as Book[];
  const emptyCart = [] as DetailedBook[];
  const [books, setBooks] = useState<Book[]>(emptyBooks);
  const [cart, setCart] = useState<DetailedBook[]>(emptyCart);
  const [isCartVisible, setIsCartVisible] = useState(false);
  useEffect(() => {
    getBooks().then(setBooks);
  }, []);

  return (
    <Router>
      <div className="App">
        <CartPreview isVisible={isCartVisible} onCartCloseClick={hideCart} items={cart} />
        <Header onCartClick={showCart} />
        <Routes>
          <Route
            path="/books/:isbn"
            element={<BookDetails onAddToCart={addBookToCart} />}
          ></Route>
          <Route
            path="/books"
            element={<Catalog items={books}></Catalog>}
          ></Route>
          <Route path="*" element={<Navigate to="/books" replace />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );

  function addBookToCart(book: DetailedBook) {
    setCart([...cart, book]);
  }

  function showCart() {
    setIsCartVisible(true);
  }
  function hideCart() {
    setIsCartVisible(false);
  }
}

export default App;
