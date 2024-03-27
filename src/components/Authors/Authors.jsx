import { useLoaderData } from "react-router-dom";
import AuthorDetails from "../Author Details/AuthorDetails";

const Authors = () => {
    const books = useLoaderData()

    return (
        <div>
            <h1 className="text-4xl text-center font-bold mb-5">Authors</h1>
            {
                books.map((book, idx) => <AuthorDetails key={idx} book={book}></AuthorDetails>)
            }
        </div>
    );
};

export default Authors;