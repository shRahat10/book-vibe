import React, { useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { useLoaderData } from 'react-router-dom';
import BooksLists from '../BooksLists/BooksLists';
import { getList } from '../../utility/localStorage';

const ListedBooks = () => {
    const books = useLoaderData();
    const readList = getList('read-list');
    const readFiltered = books.filter(book => readList.includes(book.bookId));
    
    const wishList = getList('wish-list');
    const wishFiltered = books.filter(book => wishList.includes(book.bookId));

    const [sortedBooks, setSortedBooks] = useState(readFiltered);
    const [activeTab, setActiveTab] = useState(0);

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
    };

    const handleTabChange = (index) => {
        setActiveTab(index);

        if (index === 0) {
            setSortedBooks(readFiltered);
        }
        
        else if (index === 1) {
            setSortedBooks(wishFiltered);
        }
    };

    return (
        <div className="space-y-14 flex flex-col justify-center items-center">
            <h1 className="text-4xl text-center font-bold">Books</h1>
            <details className="dropdown">
                <summary className="m-1 btn bg-[#23BE0A] text-white">Sort By <IoMdArrowDropdown /></summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li><a onClick={() => handleSorting('rating')}>Rating</a></li>
                    <li><a onClick={() => handleSorting('totalPages')}>Number of Pages</a></li>
                    <li><a onClick={() => handleSorting('yearOfPublishing')}>Published Year</a></li>
                </ul>
            </details>

            <section className="w-full">
                <div className="mb-5">
                    <div role="tablist" className="tabs tabs-lifted">
                        <input
                            type="radio"
                            name="my_tabs_2"
                            role="tab"
                            className="tab"
                            aria-label="Read Books"
                            checked={activeTab === 0}
                            onChange={() => handleTabChange(0)}
                        />
                        <div
                            role="tabpanel"
                            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
                            style={{ display: activeTab === 0 ? 'block' : 'none' }}
                        >
                            <div className="flex flex-col gap-3">
                                {
                                    sortedBooks?.map((book, idx) => (<BooksLists key={idx} book={book}></BooksLists>))
                                }
                            </div>
                        </div>

                        <input
                            type="radio"
                            name="my_tabs_2"
                            role="tab"
                            className="tab"
                            aria-label="Wishlist Books"
                            checked={activeTab === 1}
                            onChange={() => handleTabChange(1)}
                        />
                        <div
                            role="tabpanel"
                            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
                            style={{ display: activeTab === 1 ? 'block' : 'none' }}
                        >
                            <div className="flex flex-col gap-3">
                                {
                                    sortedBooks?.map((book, idx) => (<BooksLists key={idx} book={book}></BooksLists>))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ListedBooks;
