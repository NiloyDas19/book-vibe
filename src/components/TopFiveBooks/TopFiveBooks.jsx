import { useEffect, useState } from "react";
import ReadORWishListBook from "../ReadORWishListBook/ReadORWishListBook";

const TopFiveBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('all-books.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, []);
    
    books.sort(function(a, b){return b.rating - a.rating});
    console.log(books);

    return (
        <div className="space-y-10">
            <div className="text-center space-y-5">
                <h2 className="text-3xl md:text-5xl font-bold">Top Five Books</h2>
                <p className="text-xl font-light">The "Top Five Books" feature on our website showcases the most highly-rated books by users, providing valuable insights into the most beloved and acclaimed titles within our community. Each book included in this curated selection has been chosen based on the ratings given by our users, reflecting their collective appreciation and enthusiasm for these literary works.</p>
            </div>
            <div className="space-y-10">
                {
                    books.slice(0, 5).map((book) => <ReadORWishListBook key={book.bookId} book = {book}></ReadORWishListBook>)
                }
            </div>
        </div>
    );
};

export default TopFiveBooks;