import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    const links = <>
        <li><NavLink to="/" className={({ isActive }) => (isActive ? 'is-active' : 'not-active')}>Home</NavLink></li>
        <li><NavLink to="/listed-books" className={({ isActive }) => (isActive ? 'is-active' : 'not-active')}>Listed Books</NavLink></li>
        <li><NavLink to="/pages-to-read" className={({ isActive }) => (isActive ? 'is-active' : 'not-active')}>Pages to Read</NavLink></li>
        <li><NavLink to="/top-five-books" className={({ isActive }) => (isActive ? 'is-active' : 'not-active')}>Top Five Books</NavLink></li>
        <li><NavLink to="/faq" className={({ isActive }) => (isActive ? 'is-active' : 'not-active')}>FAQ</NavLink></li>
    </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                links
                            }
                            <li><a className="btn bg-[#23BE0A] text-white font-bold">Sign In</a></li>
                            <li><a className="btn bg-[#59C6D2] text-white font-bold">Sign Up</a></li>
                        </ul>
                    </div>
                    <a className="text-xl md:text-3xl font-bold">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-2">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="hidden navbar-end md:flex gap-2">
                    <a className="btn bg-[#23BE0A] text-white font-bold">Sign In</a>
                    <a className="btn bg-[#59C6D2] text-white font-bold">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Header;