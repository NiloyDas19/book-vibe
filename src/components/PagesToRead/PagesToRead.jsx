
import { BarChart, Bar, XAxis, YAxis, Label, Cell, CartesianGrid, ResponsiveContainer } from 'recharts';
import TriangleBar from '../TriangleBar/TriangleBar';
import { getStoredReadBooks } from '../../utility/localStorage';
import { useLoaderData } from 'react-router-dom';

const PagesToRead = () => {
    const readData = getStoredReadBooks();
    const allBooks = useLoaderData();
    const data = [];
    for (let i = 0; i < readData.length; i++) {
        const exist = allBooks.find((book) => book.bookId === readData[i]);
        if (exist) data.push(exist);
    }
    console.log(data);

    const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
        return <text x={x + width / 2} y={y} fill="#8884d8" textAnchor="middle" dy={-6}>{`${value}`}</text>;
    };

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];


    const renderBarChart = (
        <ResponsiveContainer width="100%" height={500}>
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bookName" />
                <YAxis />
                <Bar dataKey="totalPages" fill={`${colors[Math.floor(Math.random() * 10) + 1]}`}
                    shape={<TriangleBar />} label={renderCustomBarLabel}>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );

    return (
        <div>
            {
                renderBarChart
            }
        </div>
    );
};

export default PagesToRead;