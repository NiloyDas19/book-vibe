import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveInWishList, saveReadBooks } from "../../utility/localStorage";

const BookDetails = () => {
    const books = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const book = books.find((book) => book.bookId === idInt);
    const handleReadBook = () => {
        const action  = saveReadBooks(idInt);
        if(action) toast.success("Wow! This book is added in the read list.")
        else toast.warning("This book has already in read list .");
    }

    const handleWishList = () => {
        const action = saveInWishList(idInt);
        if(action == 1){
            toast.info("This book has already in read list .");
        }
        else if(action == 2){
            toast.warning("This book has already in Wishlist.");
        }
        else{
            toast.success("Wow! This book is added in Wish List.");
        }
    }

    return (
        <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 bg-gray-100 flex items-center justify-center rounded-2xl py-12 px-8">
                <img src={book.image} className="w-[60%]" alt="" />
            </div>
            <div className="flex-1 space-y-6">
                <div className="space-y-4">
                    <h2 className="text-3xl md:text-5xl font-playfair-display font-bold">{book.bookName}</h2>
                    <p className="font-semibold">By: {book.author}</p>
                </div>
                <div className="border-t-2"></div>
                <div>
                    <p className="font-medium">{book.category}</p>
                </div>
                <div className="border-t-2"></div>
                <div className="space-y-4">
                    <p><span className="font-bold">Review: </span>{book.review}</p>
                    <div className="flex gap-5 md:gap-10">
                        <div className="font-bold">Tag</div>
                        {
                            book.tags.map((tag, index) => <div key={index} className="text-[#23BE0A]">#{tag}</div>)
                        }
                    </div>
                </div>
                <div className="border-t-2"></div>
                <div className="flex gap-10">
                    <div className="space-y-2">
                        <p>Number of Pages:</p>
                        <p>Publisher:</p>
                        <p>Year of Publishing:</p>
                        <p>Rating:</p>
                    </div>
                    <div className="font-bold space-y-2">
                        <p>{book.totalPages}</p>
                        <p>{book.publisher}</p>
                        <p>{book.yearOfPublishing}</p>
                        <p>{book.rating}</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <button onClick={handleReadBook} className="btn btn-outline border-[#23BE0A] font-bold text-black hover:bg-[#23BE0A]">Read</button>
                    <button onClick={handleWishList} className="btn bg-[#50B1C9] font-bold text-white">Wishlist</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDetails;