'use client';

import { useEffect, useState } from 'react';
import Post from '@/types/post';

export default function Posts() {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {

        async function fetchPosts() {
        const response = await fetch('/api/posts');
        const data = await response.json();
        setPosts(data);
        }

        fetchPosts();

    }, []);

    return (
        <div>
        <h1>All Posts</h1>
        <ul>
            {posts.map((post) => (
                <li key={post.id}>
                    id{post.id} : title:{post.title}, content: {post.content}, published: {post.published}, author: {post.authorId}
                </li>
            ))}
        </ul>
        </div>
    );
}