import { useEffect, useState } from "react";

const Home = () => {

    const [books, setBooks] = useState([]);

    useEffect(()=>{
        fetch('book.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])

    return (
        <div>
            <section className=" flex flex-col lg:flex-row justify-between items-center px-20 bg-[#1313130D] rounded-3xl h-fit lg:h-[500px] py-4">
                <div>
                    <h1 className=" text-5xl font-bold leading-[70px]">Books to freshen<br />up your bookshelf</h1>
                    <a className="btn bg-[#23BE0A] text-white w-32 mt-10">View The List</a>
                </div>
                <img src="./public/images/pngwing 1.png" alt="" />
            </section>
        </div>
    );
};

export default Home;