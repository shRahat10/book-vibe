const AuthorDetails = ({ book }) => {
    const { author, authorImage, authorBio } = book;
    
    return (
        <div className=" border rounded-2xl p-4 mb-4 grid lg:grid-cols-4 gap-5">
            <figure className=" rounded-2xl"><img className="rounded-2xl mx-auto " src={authorImage} alt="" /></figure>
            <div className=" col-span-3">
                <h1 className=" font-bold text-xl">{author}</h1>
                <p><span className=" font-bold text-lg">Bio:</span> {authorBio}</p>
            </div>
        </div>
    );
};

export default AuthorDetails;