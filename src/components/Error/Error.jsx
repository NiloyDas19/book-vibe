import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="space-y-10 text-center">
                <h2 className="text-7xl font-bold text-red-600">Oops ! 404 Not Found</h2>
                <Link to="/" className="btn bg-[#23BE0A] font-bold text-white px-10 text-xl">Back to Home</Link>
            </div>
        </div>
    );
};

export default Error;