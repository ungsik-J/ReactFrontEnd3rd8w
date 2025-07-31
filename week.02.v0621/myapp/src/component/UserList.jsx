import React, { useEffect, useState } from 'react';

const UserList = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost:3002/users')
                if (!response.ok) {
                    throw new Error(`Http error! status : ${response.status}`)
                }

                const data = await response.json();
                setUsers(data)



            } catch (error) {
                console.error(`사용자 데이터를 불러오는 중 오류가 발생했습니다 :  ${error}`)
                setUsers([])
            }
        }
        fetchUsers();
    }, [])

    return (
        <>
            <div>
                <h1>사용자 목록</h1>
                {Array.isArray(users) && users.length > 0 ? (
                    <ul>
                        {users.map((user) => (
                            <li key={user.id}>
                                <strong>{user.name}</strong>({user.age}세, {user.city})-{user.email}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>{users.length === 0 ? '사용자가 데이터가 없습니다.' : '사용자가 데이터를 불러오는 중 ...'}</p>
                )}
            </div>
        </>
    );
};

export default UserList;