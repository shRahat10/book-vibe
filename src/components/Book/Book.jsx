import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Book = ({ book }) => {

    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;

    return (
        <div>
            <Link to={`/book-details/${bookId}`}>
                <div className="card w-full bg-base-100 shadow-xl p-4 border">
                    <figure className=" h-56 bg-[#F3F3F3]"><img src={image} alt="Loading..." /></figure>
                    <div className="card-body text-xs">
                        <div className=" flex gap-2">
                            {
                                tags.map((tag, idx) => <span key={idx} className=" px-4 py-2 text-[#23BE0A] font-bold w-fit rounded-3xl bg-[#23BE0A0D]">{tag}</span>)
                            }
                        </div>

                        <h1 className=" font-bold text-base h-14">{bookName}</h1>
                        <p>By: {author}</p>
                        <hr />
                        <div className=" flex">
                            <p>{category}</p>
                            <div className=" flex gap-2 items-center">
                                <p>{rating}</p>
                                <CiStar />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Book;