
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { GrLocation } from "react-icons/gr";
import { FaRegFilePdf } from "react-icons/fa";


const ReadORWishListBook = ({ book }) => {
    const { bookId, image, tags, bookName, author, category, rating, totalPages, publisher, yearOfPublishing } = book;
    return (
        <div className='flex flex-col md:flex-row gap-10 p-5 rounded-xl border-2'>
            <div className='bg-gray-100 py-5 px-10 rounded-2xl  flex justify-center'>
                <img src={image} alt="" />
            </div>
            <div className='space-y-5 w-full md:w-[80%]'>
                <div className='space-y-5'>
                    <h2 className='text-3xl font-playfair-display font-bold'>{bookName}</h2>
                    <p className='font-semibold'>By: {author}</p>
                    <div className='flex flex-col md:flex-row gap-4'>
                        <div className='flex gap-5'>
                            <p className='font-bold'>Tag</p>
                            {
                                tags.map((tag, index) => <div key={index} className="text-[#23BE0A]" >#{tag}</div>)
                            }
                        </div>
                        <div className='flex gap-1 items-center'>
                            <GrLocation />
                            <p>Year of Publishing: {yearOfPublishing}</p>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row gap-5'>
                        <div className='flex gap-1 items-center'>
                            <img src="/public/images/person-icon.png" alt="" />
                            <p>Publisher: {publisher}</p>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <FaRegFilePdf />
                            <p>Page: {totalPages}</p>
                        </div>
                    </div>
                </div>
                <div ><hr /></div>
                <div className='flex flex-col md:flex-row gap-5'>
                    <button className='btn rounded-full bg-[#328EFF26] text-[#328EFF]'>Category : {category}</button>
                    <button className='btn rounded-full bg-[#FFAC3326]  text-[#FFAC33]'>Rating : {rating}</button>
                    <Link to={`/book-details/${bookId}`} className='btn bg-[#23BE0A] text-white font-bold rounded-full'>View Details</Link>
                </div>
            </div>
        </div>
    );
};

ReadORWishListBook.propTypes = {
    book: PropTypes.object.isRequired,
}

export default ReadORWishListBook;