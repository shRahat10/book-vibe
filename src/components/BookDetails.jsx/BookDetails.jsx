import { useLoaderData, useParams } from "react-router-dom";
import { getList, setReadList, setWishList } from "../../utility/localStorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookDetails = () => {
    const books = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const book = books.find(book => book.bookId === idInt);

    const handleReadList = () => {
        const added = setReadList(book.bookId);
        if (added) {
            toast("Added to Read List");
        } else {
            toast("Already Added");
        }
    }

    const handleWishList = () => {
        const added = setWishList(book.bookId);
        if (added) {
            toast("Added to Wish List");
        } else {
            toast("Already Added or Read");
        }
    }


    return (
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5">
            <figure className=" p-16 bg-[#1313130D] rounded-2xl"><img className=" h-full mx-auto" src={book.image} alt="" /></figure>
            <div className=" space-y-5">
                <h1 className=" text-2xl font-bold">{book.bookName}</h1>
                <p>By: {book.author}</p>
                <hr />
                <p>{book.category}</p>
                <hr />
                <p><span className=" font-bold">Review:</span> {book.review}</p>
                <div className=" flex gap-3 items-center">
                    <p className=" font-bold">Tag</p>
                    {
                        book.tags.map((tag, idx) => <span key={idx} className=" px-4 py-2 text-[#23BE0A] font-bold w-fit rounded-3xl bg-[#23BE0A0D]">{tag}</span>)
                    }
                </div>
                <hr />
                <table>
                    <tr>
                        <td>Number of Pages</td>
                        <td className=" w-10"></td>
                        <td className=" font-bold">{book.totalPages}</td>
                    </tr>
                    <tr>
                        <td>Publisher</td>
                        <td></td>
                        <td className=" font-bold">{book.publisher}</td>
                    </tr>
                    <tr>
                        <td>Year Of Publishing</td>
                        <td></td>
                        <td className=" font-bold">{book.yearOfPublishing}</td>
                    </tr>
                    <tr>
                        <td>Rating</td>
                        <td></td>
                        <td className=" font-bold">{book.rating}</td>
                    </tr>
                </table>
                <div className=" flex gap-4">
                    <button onClick={handleReadList} className=" btn bg-white w-24 border-[#1313134D]">Read</button>
                    <button onClick={handleWishList} className=" btn bg-[#50B1C9] w-24 text-white">Wishlist</button>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default BookDetails;