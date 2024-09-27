'use client';

import { useEffect, useState } from 'react';
import User from '@/types/user';

export default function Users() {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        async function fetchUsers() {
        const response = await fetch('/api/users');
        const data = await response.json();
        setUsers(data);
        }
        fetchUsers();
    }, []);

    return (
        <div>
        <h1>Users List</h1>
        <ul>
            {users.map((user) => (
            <li key={user.id}>id{user.id} : {user.name} - {user.email}</li>
            ))}
        </ul>
        </div>
    );
}
