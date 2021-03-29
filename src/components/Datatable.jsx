import React from 'react';

const Datatable = (props) => {
    const {data, correctColumns} = props;

    return (
        <table className="table">
            <thead className="table-dark" style={{cursor: "pointer"}}>
            <tr>
                {data[0] && correctColumns.map((heading) =>
                    <th key={heading.id}>
                        {heading.name}
                    </th>)}
            </tr>
            </thead>
            <tbody>
            {data.map(row =>
                <tr key={row.username}>
                    {correctColumns.map(column => <td key={column.id}>{row[column.name]}</td>)}
                </tr>
            )}

            </tbody>
        </table>
    );
};

export default Datatable;