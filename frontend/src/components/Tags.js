import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Tags = () => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/flask/tags')
      .then(response => {
        setTags(response.data.tags);
      })
      .catch(error => {
        console.error('Error fetching tags:', error);
      });
  }, []);

  return (
    <div>
      <h2>Tags</h2>
      <div className="tags">
        {tags.map(tag => (
          <Link key={tag} to={`/tag/${tag}`} className="tag">
            {tag}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Tags;
