import React from 'react';

const blogs = [
  {
    id: 'r1',
    heading: 'React Learning',
    author: 'Stephen Biz',
    description: 'Welcome to learning React!',
    featured: true,
  },
  {
    id: 'r2',
    heading: 'Installation',
    author: 'Schewzdnier',
    description: 'You can install React from npm.',
    featured: false,
  },
];

const BlogDetails = ({ viewMode }) => {
  // switch for heading
  let heading;
  switch (viewMode) {
    case 'featured':
      heading = <h3>Featured Blogs</h3>;
      break;
    case 'all':
      heading = <h3>All Blogs</h3>;
      break;
    default:
      heading = <h3>Recent Blogs</h3>;
  }

  return (
    <div>
      <h2 style={{ marginBottom: 8 }}>Blog Details</h2>
      {heading}

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {blogs.map(blog => (
          <li key={blog.id} style={{ marginBottom: 14 }}>
            <div style={{ fontSize: 22, fontWeight: 600 }}>{blog.heading}</div>
            <div style={{ fontWeight: 600, marginTop: 4 }}>{blog.author}</div>
            <div style={{ marginTop: 4, color: '#555' }}>{blog.description}</div>
            {/* ternary and short-circuit combined */}
            <div>
              {viewMode === 'featured'
                ? blog.featured
                  ? <span style={{ color: 'green' }}>(Featured)</span>
                  : null
                : blog.featured && <span style={{ fontSize: 12, color: '#555' }}>(Featured)</span>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogDetails;
