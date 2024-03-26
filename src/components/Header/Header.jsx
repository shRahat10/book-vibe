import { NavLink } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";

const Header = () => {

    const links =
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/listed-books">Listed Books</NavLink></li>
            <li><NavLink to="/pages-to-read">Pages to Read</NavLink></li>
            {/* <li><NavLink to="/"></NavLink></li>
            <li><NavLink to="/"></NavLink></li> */}
        </>

    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <FaBarsStaggered />
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl font-bold">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-[#23BE0A] text-white">Sign In</a>
                    <a className="btn bg-[#59C6D2] text-white">Sign Up</a>
                </div>
            </div>
        </>
    );
};


export default Header;