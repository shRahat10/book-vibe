import { useLoaderData } from "react-router-dom";
import { getList } from "../../utility/localStorage";
// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const PageToRead = () => {
    const books = useLoaderData();
    const readList = getList('read-list');
    const filteredList = books.filter(book => readList.includes(book.bookId));
    const data = filteredList.map(book => {
        return {
            bookName: book.bookName,
            totalPages: book.totalPages,
        };
    });
    
    // const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    // const getPath = (x, y, width, height) => {
    //     return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    //     ${x + width / 2}, ${y}
    //     C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    //     Z`;
    // };

    // const TriangleBar = (props) => {
    //     const { fill, x, y, width, height } = props;

    //     return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    // };

    return (
        <div>
            {/* <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bookName" />
                <YAxis />
                <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                </Bar>
            </BarChart> */}
        </div>
    );
};

export default PageToRead;
