import { useEffect, useState } from "react";
import { getStoredReadBooks, getStoredWishList } from "../../utility/localStorage";
import ReadORWishListBook from "../ReadORWishListBook/ReadORWishListBook";

const ListedBooks = () => {
    const [readBooks, setReadBooks] = useState([]);
    const [wiseListBooks, setWiseListBooks] = useState([]);

    useEffect(()=>{
        const booksId1 = getStoredReadBooks();
        const booksId2 = getStoredWishList();
        fetch('all-books.json')
        .then(res => res.json())
        .then(data => 
            {
                const books1 = [];
                const books2 = [];
                for(let book of data){
                    const isTake1 = booksId1.find((bookId) => bookId === book.bookId);
                    const isTake2 = booksId2.find((bookId) => bookId === book.bookId);
                    if(isTake1){
                        books1.push(book);
                    }
                    if(isTake2){
                        books2.push(book);
                    }
                }
                setReadBooks(books1);
                setWiseListBooks(books2);
            }
        )
    },[setReadBooks]);
    
    console.log(readBooks);

    return (
        <div className="space-y-8">
            <div className="p-10 rounded-2xl bg-gray-100">
                <h2 className="text-4xl font-bold text-center">Books</h2>
            </div>
            <div className="">
                <div role="tablist" className="tabs tabs-lifted">
                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" checked />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6 space-y-8">
                        {
                            readBooks.map((book)=><ReadORWishListBook key={book.bookId} book={book}></ReadORWishListBook>)
                        }
                    </div>

                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist Books" />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6 space-y-8">
                        {
                            wiseListBooks.map((book)=><ReadORWishListBook key={book.bookId} book={book}></ReadORWishListBook>)
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ListedBooks;