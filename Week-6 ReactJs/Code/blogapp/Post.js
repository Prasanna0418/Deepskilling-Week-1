import React from 'react';

class Post extends React.Component {
  render() {
    return (
      <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
        <h3>{this.props.title}</h3>
        <p>{this.props.body}</p>
      </div>
    );
  }
}

export default Post;
