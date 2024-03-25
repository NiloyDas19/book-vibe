import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('all-books.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, []);


    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-center font-bold text-5xl font-playfair-display">Books</h2>
            </div>
            <div className="grid gird-cols-1 md:grid-cols-3 gap-5">
                {
                    books.map((book) => <Book key={book.id} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;