import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// custom components
import ExampleButton from '../../components/ExampleButton/ExampleButton';

const ExamplePage = () => {
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([]);

  // Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        console.log(res);
        setPosts(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>ExamplePage screen</h1>
      <Link to="/">Home</Link>

      <p>You clicked {count} times</p>
      <ExampleButton onClick={() => setCount(count + 1)}>
        Click me!
      </ExampleButton>

      <ul>
        {
          posts.map(post => <li key={post.id}>{post.title}</li>)
        }
      </ul>
    </div>
  );
}

export default ExamplePage;
