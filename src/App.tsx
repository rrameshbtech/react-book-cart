import React, { useEffect, useState } from 'react';
import './App.css';
import { Catalog } from './components/catalog';
import { getBooks } from './clients/catalog.api';
import { Book } from './models/book';

function App() {
  const emptyBooks = [] as Book[];
  const [books, setBooks] = useState<Book[]>(emptyBooks);

  useEffect(() => {
    getBooks().then(setBooks);
  },[]);

  return (
    <div className="App">
      <Catalog items={books}></Catalog>
    </div>
  );
}

export default App;
