import { FiStar } from "react-icons/fi";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const { bookId, image, tags, bookName, author, category, rating } = book;
    return (
        <Link to={`/book-details/${bookId}`} className="border-2 border-gray-200 rounded-2xl p-7 space-y-8 flex flex-col">
            <div className="flex justify-center bg-gray-100 rounded-2xl p-10">
                <img src={image} alt="" />
            </div>
            <div className="flex justify-around font-semibold">
                {
                    tags.map((tag, index) => <div key={index} className="text-[#23BE0A]" >{tag}</div>)
                }
            </div>
            <div className="flex-grow space-y-2">
                <h2 className="text-2xl font-bold font-playfair-display">{bookName}</h2>
                <p className="font-medium">By : {author}</p>
            </div>
            <div className="space-y-4">
                <div className="border-dashed border-t-2">
                </div>
                <div className="flex justify-between">
                    <div className="font-mid">{category}</div>
                    <div className="flex gap-2 items-center justify-center">
                        <p>{rating}</p>
                        <div className="text-2xl">
                            <FiStar className=""></FiStar>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

Book.propTypes = {
    book: PropTypes.object.isRequired,
}

export default Book;