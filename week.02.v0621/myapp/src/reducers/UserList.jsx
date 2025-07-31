import React, { useEffect, useReducer } from 'react';
import { Spin } from 'antd';
import { dataReducer, initialState } from '../reducers/dataReducer';

const UserList = () => {
    const [state, dispatch] = useReducer(dataReducer, initialState);

    const { loading, data: users, error } = state;

    useEffect(() => {
        const fetchUsers = async () => {
            dispatch({ type: 'FETCH_INIT' });

            try {
                const response = await fetch('http://localhost:3002/users');

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setTimeout(() => {
                    if (data.length > 0) {
                        dispatch({ type: 'FETCH_SUCCESS', payload: data });
                    }
                }, 3000);

            } catch (error) {
                console.error('Error:', error);
                dispatch({ type: 'FETCH_ERROR', error: error.message });
            }
        };

        fetchUsers();
    }, []);


    return (
        <div>
            <h1>사용자 목록</h1>

            {error && <p>🚨 에러 발생: {error}</p>}
            {!loading && users.length === 0 && <p>⚠️ 사용자 데이터가 없습니다.</p>}

            <Spin spinning={loading} tip="데이터 로딩 중...">
                {!loading && users.length > 0 && (
                    <ul>
                        {users.map((user, i) => (
                            <li key={user.name}>
                                <p>{user.age}</p>
                                <p>{user.email}</p>
                                <p>{user.city}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </Spin>
        </div>
    );
};

export default UserList;
