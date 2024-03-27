import { Link } from "react-router-dom";
import bookImage from '../../../public/images/banner.png';

const Banner = () => {
    return (
        <div className="grid grid-cols-3 bg-gray-100 rounded-2xl py-5 px-10 md:py-16 md:px-20 items-center gap-2 md:gap-10">
            <div className="col-span-2 space-y-2 md:space-y-7">
                <h2 className="text-2xl lg:text-7xl font-bold font-playfair-display">Books to freshen up your bookshelf</h2>
                <Link className="btn bg-[#23BE0A] text-white font-semibold" to="/listed-books">View The List</Link>
            </div>
            <div>
                <img src={bookImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;