import React, {useState, useEffect} from "react";
import Datatable from './components/Datatable'

const App = () => {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/')
            .then(response => response.json())
            .then(json => setData(json))
    }, []);


    function search(rows) {
        return rows.filter(row =>
            columns.some(column => row[column].toString().toLowerCase().indexOf(query.toLowerCase()) > -1)
        );
        // return rows.filter(row =>
        //     row.name.toLowerCase().indexOf(query) > -1 ||
        //     row.username.toLowerCase().indexOf(query) > -1 ||
        //     row.email.toLowerCase().indexOf(query) > -1 ||
        //     row.phone.toLowerCase().indexOf(query) > -1
        // )
    }

    const columns = data[0] && Object.keys(data[0]);
    const correctColumns = [
        {name: 'id', id: '43fw3ff'},
        {name: 'name', id: '234sef'},
        {name: 'username', id: 's3r5g4'},
        {name: 'email', id: 'uj8e5'},
        {name: 'phone', id: '20yh1d'}
    ];

    return (
        <div className={'container'}>
            <p className={'h2 d-flex justify-content-center pt-4 pb-2'}>Searching a Datatable in React</p>
            <div>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value)
                    }}
                    placeholder={'Search'}
                    className={'form-control w-25 m-3'}
                />
            </div>
            <Datatable
                data={search(data)}
                correctColumns={correctColumns}
            />
        </div>
    );
};

export default App;