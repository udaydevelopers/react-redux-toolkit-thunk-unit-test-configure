import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, postData } from '../features/apiSlice';

const ApiComponent = () => {
    const dispatch = useDispatch();
    const { data, newPost, loading, error } = useSelector((state) => state.api);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    const handlePost = () => {
        const newPostData = { title, body, userId: 1 };
        dispatch(postData(newPostData));
    };

    return (
        <div>
            <h1>Posts</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <ul>
                {data.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
            
            <h2>Create a New Post</h2>
            <input
                type="text"
                value={title}
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                value={body}
                placeholder="Body"
                onChange={(e) => setBody(e.target.value)}
            />
            <button onClick={handlePost}>Submit</button>

            {newPost.title && (
                <div>
                    <h3>New Post Added:</h3>
                    <p>{newPost.title}</p>
                    <p>{newPost.body}</p>
                </div>
            )}
        </div>
    );
};

export default ApiComponent;
