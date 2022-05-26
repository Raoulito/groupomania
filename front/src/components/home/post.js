import { useState } from "react";

export const Post = () => {
    const [posts, setPosts] = useState([
        {
            title: "Post 1",
        },
        {
            title: "Post 2",
        },
    ]);

    return (
        <>
            <input />
            {posts.map((post, index) => (
                <p key={index} >{post.title}</p>
            ))}
        </>
    );
};