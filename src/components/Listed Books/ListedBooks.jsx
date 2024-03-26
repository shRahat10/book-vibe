import { IoMdArrowDropdown } from "react-icons/io";
import { useLoaderData } from "react-router-dom";
import BooksLists from "../BooksLists/BooksLists";
import { useState } from "react";
import { getList, setReadList, setWishList } from "../../utility/localStorage";

const ListedBooks = () => {
    const books = useLoaderData();
    const [sortedBooks, setSortedBooks] = useState(books);

    const handleSorting = (sortBy) => {
        let sorted;
        switch (sortBy) {
            case 'rating':
                sorted = [...sortedBooks].sort((a, b) => b.rating - a.rating);
                break;
            case 'totalPages':
                sorted = [...sortedBooks].sort((a, b) => b.totalPages - a.totalPages);
                break;
            case 'yearOfPublishing':
                sorted = [...sortedBooks].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
                break;
            default:
                sorted = [...sortedBooks];
        }
        setSortedBooks(sorted);
    }

    const handleReadList = () => {
        const readList = getList('read-list');
        const filtered = books.filter(book => readList.includes(book.bookId));
        if (filtered.length > 0) {
            setSortedBooks(filtered);
        }
        else setSortedBooks([]);
    }

    const handleWishList = () => {
        const wishList = getList('wish-list');
        const filtered = books.filter(book => wishList.includes(book.bookId));
        if (filtered.length > 0) {
            setSortedBooks(filtered);
        }
        else setSortedBooks([]);
    }

    return (
        <div className=" space-y-14 flex flex-col justify-center items-center">
            <h1 className=" text-4xl text-center font-bold ">Books</h1>
            <details className="dropdown">
                <summary className="m-1 btn bg-[#23BE0A] text-white">Sort By <IoMdArrowDropdown /></summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li><a onClick={() => handleSorting('rating')}>Rating</a></li>
                    <li><a onClick={() => handleSorting('totalPages')}>Number of Pages</a></li>
                    <li><a onClick={() => handleSorting('yearOfPublishing')}>Published Year</a></li>
                </ul>
            </details>

            <button onClick={handleReadList}>Read List</button>
            <button onClick={handleWishList}>Wish List</button>

            <section className=" w-full">
                <div className=" flex flex-col gap-3">
                    {
                        sortedBooks?.map((book, idx) => <BooksLists key={idx} book={book}></BooksLists>)
                    }
                </div>
            </section>
        </div>
    );
};

export default ListedBooks;