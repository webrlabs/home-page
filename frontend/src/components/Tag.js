import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const Tag = () => {
  const { tag_name } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/flask/posts/tag/${tag_name}`)
      .then(response => {
        setPosts(response.data.posts);
      })
      .catch(error => {
        console.error(`Error fetching posts for tag ${tag_name}:`, error);
      });
  }, [tag_name]);

  return (
    <div>
      <h2>Posts tagged with "{tag_name}"</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>
              <h4>{post.title}</h4>
              <p>{post.summary}</p>
              <div className="tags">
                {post.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tag;
