import { CiStar } from "react-icons/ci";

const Book = ({ book }) => {

    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;

    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl p-6">
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
        </div>
    );
};

export default Book;