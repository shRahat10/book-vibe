import { useLoaderData } from "react-router-dom";
import { getList } from "../../utility/localStorage";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

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

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    return (
        <div>
            <ResponsiveContainer width='100%' height={500}>
                <BarChart
                    data={data}
                    margin={{
                        top: 50,
                        right: 10,
                        left: 10,
                        bottom: 50,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="bookName" interval={0} angle={-65} textAnchor="end" tick={{ fontSize: 12 }} height={100} tickFormatter={(value) => value.split(' ').map((word, index) => index % 2 === 0 ? word : '\n' + word)} />
                    <YAxis />
                    <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer >
        </div>
    );
};

export default PageToRead;
