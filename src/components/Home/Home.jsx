import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Home = () => {

    const [books, setBooks] = useState([]);

    useEffect(()=>{
        fetch('book.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])

    return (
        <div className=" space-y-14">
            <section className=" flex flex-col lg:flex-row justify-between items-center px-20 bg-[#1313130D] rounded-3xl h-fit lg:h-[500px] py-4">
                <div>
                    <h1 className=" text-5xl font-bold leading-[70px]">Books to freshen<br />up your bookshelf</h1>
                    <a className="btn bg-[#23BE0A] text-white w-32 mt-10">View The List</a>
                </div>
                <img src="./public/images/pngwing.png" alt="" />
            </section>

            <section>
                <h1 className=" text-4xl text-center font-bold mb-6">Books</h1>
                <div className=" grid grid-cols-1 lg:grid-cols-3 gap-3">
                    {
                        books.map((book, idx) => <Book key={idx} book={book}></Book>)
                    }
                </div>
            </section>
        </div>
    );
};

export default Home;