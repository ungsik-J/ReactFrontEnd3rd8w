import React, { useMemo, useState } from "react";

const initData = [
    { 이름: '존1', 국어: 90, 수학: 89, 영어: 95, 과학: 89 },
    { 이름: '존2', 국어: 1, 수학: 2, 영어: 3, 과학: 4 },
    { 이름: '존3', 국어: 5, 수학: 6, 영어: 7, 과학: 8 },
    { 이름: '존4', 국어: 9, 수학: 10, 영어: 11, 과학: 12 },
]

const Table = () => {

    const [data, setData] = useState(initData)

    const columns = useMemo(() => Object.keys(data[0] || {}), [data])

    return (
        <>
            <table>
                <thead>
                    <tr>
                        {columns.map((key) => (
                            <th key={key}>{key}</th>)
                        )}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.이름}>
                            {columns.map((key) => (
                                <td key={key}>{item[key]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )

}

export default Table