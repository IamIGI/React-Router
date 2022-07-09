import Post from './Post';

const Feed = ({ posts }) => {
    return (
        <>
            {posts.map((post) => (
                <Post ket={post.id} post={post} />
            ))}
        </>
    );
};

export default Feed;
