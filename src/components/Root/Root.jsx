import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Root = () => {
    return (
        <div className=" max-h-[1440px] p-5 work-sans ">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;