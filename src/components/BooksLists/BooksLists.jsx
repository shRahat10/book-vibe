import { CiLocationOn } from "react-icons/ci";


const BooksLists = ({ book }) => {
    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;

    return (
        <div className=" rounded-3xl border p-6 flex flex-col lg:flex-row gap-5">
            <figure className=" lg:w-56 h-56 bg-[#1313130D] rounded-xl flex justify-center items-center"><img src={image} alt="" /></figure>
            <div className=" space-y-3">
                <h1 className=" font-bold text-base">{bookName}</h1>
                <p>By: {author}</p>
                <div className=" flex flex-col lg:flex-row gap-3">
                    <div className=" flex gap-3 items-center justify-center">
                        <p className=" font-bold">Tag</p>
                        {
                            tags.map((tag, idx) => <span key={idx} className=" px-4 py-2 text-[#23BE0A] font-bold w-fit rounded-3xl bg-[#23BE0A0D]">{tag}</span>)
                        }
                    </div>
                    <div className=" flex gap-2 items-center">
                        <CiLocationOn />
                        <p>Year of Publishing: {yearOfPublishing}</p>
                    </div>
                </div>

                <div className=" flex flex-col lg:flex-row gap-5 lg:items-center">
                    <div className=" flex gap-3 items-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">

                            <defs>
                                <clipPath id="clip15_12346">
                                    <rect id="Frame" width="24" height="24" fill="white" fillOpacity="0" />
                                </clipPath>
                            </defs>
                            <rect id="Frame" width="24" height="24" fill="#FFFFFF" fillOpacity="0" />
                            <g clipPath="url(#clip15_12346)">
                                <path id="Vector" d="M15 19.12C15.85 19.37 16.73 19.5 17.62 19.5C19.05 19.5 20.46 19.17 21.74 18.54C21.78 17.65 21.52 16.76 21.01 16.02C20.5 15.29 19.77 14.73 18.92 14.45C18.06 14.17 17.14 14.17 16.29 14.46C15.44 14.75 14.71 15.31 14.21 16.05M15 19.12C15 18.01 14.71 16.96 14.21 16.05C13.53 14.81 12.45 13.83 11.15 13.27C9.85 12.7 8.41 12.59 7.03 12.94C5.66 13.29 4.45 14.09 3.58 15.21C2.71 16.33 2.24 17.7 2.24 19.12L2.25 19.23C4.11 20.35 6.29 21 8.62 21C10.87 21 13.07 20.39 15 19.23L15 19.12L15 19.12ZM11.01 8.76C10.37 9.39 9.52 9.75 8.62 9.75C7.72 9.75 6.87 9.39 6.23 8.76C5.6 8.12 5.25 7.27 5.25 6.37C5.25 5.47 5.6 4.62 6.23 3.98C6.87 3.35 7.72 3 8.62 3C9.52 3 10.37 3.35 11.01 3.98C11.64 4.62 12 5.47 12 6.37C12 7.27 11.64 8.12 11.01 8.76ZM19.48 10.48C18.98 10.97 18.32 11.25 17.62 11.25C16.92 11.25 16.26 10.97 15.76 10.48C15.27 9.98 15 9.32 15 8.62C15 7.92 15.27 7.26 15.76 6.76C16.26 6.27 16.92 6 17.62 6C18.32 6 18.98 6.27 19.48 6.76C19.97 7.26 20.25 7.92 20.25 8.62C20.25 9.32 19.97 9.98 19.48 10.48Z" stroke="#131313" strokeOpacity="0.6" strokeWidth="1.5" strokeLinejoin="round" />
                            </g>
                        </svg>
                        {publisher ? (
                            <p>Publisher: {publisher}</p>
                        ) : (
                            <p>Publisher: Unknown</p>
                        )}
                    </div>
                    <div className=" flex gap-3 items-center">
                        <svg width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">

                            <path id="Vector" d="M15.5 12.25L15.5 9.62C15.5 8.72 15.14 7.87 14.51 7.23C13.87 6.6 13.02 6.25 12.12 6.25L10.62 6.25C10.32 6.25 10.04 6.13 9.82 5.92C9.61 5.7 9.5 5.42 9.5 5.12L9.5 3.62C9.5 2.72 9.14 1.87 8.51 1.23C7.87 0.6 7.02 0.25 6.12 0.25L4.25 0.25M5 14.5L5 15.25M8 12.25L8 15.25M11 10L11 15.25M1.62 0.25C1 0.25 0.5 0.75 0.5 1.37L0.5 18.62C0.5 19.24 1 19.75 1.62 19.75L14.37 19.75C14.99 19.75 15.5 19.24 15.5 18.62L15.5 9.25C15.5 6.86 14.55 4.57 12.86 2.88C11.17 1.19 8.88 0.25 6.5 0.25L1.62 0.25Z" stroke="#131313" strokeOpacity="0.6" strokeWidth="1.5" strokeLinejoin="round" />
                        </svg>
                        <p>Page {totalPages}</p>
                    </div>
                </div>

                <hr />

                <div className=" flex flex-wrap gap-4">
                    <div className=" px-4 py-2 text-[#328EFF] w-fit rounded-3xl bg-[#328EFF26] flex gap-2 items-center">
                        <p>Category: {category}</p>
                    </div>
                    <div className=" px-4 py-2 text-[#FFAC33] w-fit rounded-3xl bg-[#FFAC3326] flex gap-2 items-center">
                        <p>Rating: {rating}</p>
                    </div>
                    <button className=" px-4 py-2 text-white w-fit rounded-3xl bg-[#23BE0A] flex gap-2 items-center">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default BooksLists;