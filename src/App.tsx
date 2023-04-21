import React, { useEffect, useState } from "react";
import "./App.css";
import { Catalog } from "./components/catalog";
import { getBooks } from "./clients/books.api";
import { Book } from "./models/book";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { BookDetails } from "./components/details";

function App() {
  const emptyBooks = [] as Book[];
  const [books, setBooks] = useState<Book[]>(emptyBooks);

  useEffect(() => {
    getBooks().then(setBooks);
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/books/:isbn" element={<BookDetails />}></Route>
          <Route path="/books" element={<Catalog items={books}></Catalog>}></Route>
          <Route path="*" element={<Navigate to="/books" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
