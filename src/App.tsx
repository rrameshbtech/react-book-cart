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

function App() {
  const emptyBooks = [] as Book[];
  const [books, setBooks] = useState<Book[]>(emptyBooks);
  const [isCartVisible, setIsCartVisible] = useState(false);
  useEffect(() => {
    getBooks().then(setBooks);
  }, []);

  return (
    <Router>
      <div className="App">
        <CartPreview isVisible={isCartVisible} onCartCloseClick={hideCart} />
        <Header onCartClick={showCart} />
        <Routes>
          <Route path="/books/:isbn" element={<BookDetails />}></Route>
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

  function showCart() {
    setIsCartVisible(true);
  }
  function hideCart() {
    setIsCartVisible(false);
  }
}

export default App;
