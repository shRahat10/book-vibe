const AuthorDetails = ({ book }) => {
    const { author, authorImage, authorBio } = book;
    
    return (
        <div>
            <figure className=" w-80 h-80 mt-5"><img src={authorImage} alt="" /></figure>
        </div>
    );
};

export default AuthorDetails;