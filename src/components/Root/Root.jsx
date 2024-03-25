import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Root = () => {
    return (
        <div className="container mx-auto p-3 space-y-10">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;