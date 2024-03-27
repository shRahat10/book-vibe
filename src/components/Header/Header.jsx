import { NavLink } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";

const Header = () => {

    const links =
        <>
            <li><NavLink to="/" className={({ isActive }) =>
                isActive
                    ? " font-bold border-2 border-[#23BE0A] text-[#23BE0A]"
                    : " "
            }>Home</NavLink></li>
            <li><NavLink to="/listed-books" className={({ isActive }) =>
                isActive
                    ? " font-bold border-2 border-[#23BE0A] text-[#23BE0A]"
                    : " "
            }>Listed Books</NavLink></li>
            <li><NavLink to="/pages-to-read" className={({ isActive }) =>
                isActive
                    ? " font-bold border-2 border-[#23BE0A] text-[#23BE0A]"
                    : " "
            }>Pages to Read</NavLink></li>
            <li><NavLink to="/authors" className={({ isActive }) =>
                isActive
                    ? " font-bold border-2 border-[#23BE0A] text-[#23BE0A]"
                    : " "
            }>Authors</NavLink></li>
            <li><NavLink to="/subscription" className={({ isActive }) =>
                isActive
                    ? " font-bold border-2 border-[#23BE0A] text-[#23BE0A]"
                    : " "
            }>Subscription</NavLink></li>
            
        </>

    return (
        <>
            <div className="navbar bg-base-100 mb-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <FaBarsStaggered />
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="normal-case text-2xl font-bold"><NavLink to="/">Book Vibe</NavLink></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-[#23BE0A] text-white lg:w-24 mr-2">Sign In</a>
                    <a className="btn bg-[#59C6D2] text-white lg:w-24">Sign Up</a>
                </div>
            </div>
        </>
    );
};


export default Header;