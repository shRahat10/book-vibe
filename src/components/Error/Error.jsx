import { Link } from "react-router-dom";
import { CgArrowLongLeft } from "react-icons/cg";

const Error = () => {
    return (
        <div className=" flex flex-col m-10 lg:m-24">
            <h1 className=" text-2xl lg:text-5xl font-bold leading-[90px]">404 | Page Not Found</h1>
            <Link to="/" className=" flex gap-1 items-center text-xl mt-10"><CgArrowLongLeft />Back to Home</Link>
        </div>
    );
};

export default Error;