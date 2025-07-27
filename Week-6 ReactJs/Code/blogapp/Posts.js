import React from 'react';
import Post from './Post';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false
    };
  }

  // Load data using Fetch API
  loadPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => this.setState({ posts: data.slice(0, 5) }))  // Load only first 5
      .catch(error => {
        console.error("Error fetching posts:", error);
        this.setState({ hasError: true });
      });
  }

  // Called once after component is mounted
  componentDidMount() {
    this.loadPosts();
  }

  // Error boundary to catch child component errors
  componentDidCatch(error, info) {
    alert("Something went wrong while rendering the posts.");
    console.error("Error caught in componentDidCatch:", error, info);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h2 style={{ color: 'red' }}>Failed to load posts.</h2>;
    }

    return (
      <div>
        <h2>Blog Posts</h2>
        {this.state.posts.map(post => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;
