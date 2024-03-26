import { IoMdArrowDropdown } from "react-icons/io";
import { useLoaderData } from "react-router-dom";
import BooksLists from "../BooksLists/BooksLists";

const ListedBooks = () => {
    const books = useLoaderData();

    return (
        <div className=" space-y-14 flex flex-col justify-center items-center">
            <h1 className=" text-4xl text-center font-bold ">Books</h1>
            <details className="dropdown">
                <summary className="m-1 btn bg-[#23BE0A] text-white">Sort By <IoMdArrowDropdown /></summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li><a>Rating</a></li>
                    <li><a>Number of Pages</a></li>
                    <li><a>Published Year</a></li>
                </ul>
            </details>

            <section className=" w-full">
                <div className=" flex flex-col gap-3">
                    {
                        books.map((book, idx) => <BooksLists key={idx} book={book}></BooksLists>)
                    }
                </div>
            </section>
        </div>
    );
};

export default ListedBooks;