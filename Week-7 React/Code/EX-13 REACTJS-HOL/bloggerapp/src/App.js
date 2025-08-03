import React, { useState } from 'react';
import BookDetails from './Components/BookDetails';
import BlogDetails from './Components/BlogDetails';
import CourseDetails from './Components/CourseDetails';

function App() {
  const [showBooks, setShowBooks] = useState(true);
  const [showBlogs, setShowBlogs] = useState(true);
  const [showCourses, setShowCourses] = useState(true);
  const [bookMode, setBookMode] = useState('available'); // 'available' or 'all'
  const [blogView, setBlogView] = useState('recent'); // 'recent' | 'featured' | 'all'
  const [onlyLiveCourses, setOnlyLiveCourses] = useState(true);

  return (
    <div style={{ padding: 30, fontFamily: 'Arial, sans-serif' }}>
      <div style={{ textAlign: 'center', marginBottom: 10 }}>
        <small>React App</small>
      </div>

      {/* Controls demonstrating conditional rendering decisions */}
      <div style={{ marginBottom: 24, display: 'flex', gap: 20, flexWrap: 'wrap' }}>
        <div>
          <label>
            <input
              type="checkbox"
              checked={showCourses}
              onChange={() => setShowCourses(f => !f)}
            />{' '}
            Show Course Details
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" checked={showBooks} onChange={() => setShowBooks(f => !f)} /> Show Book Details
          </label>
          <div>
            <select value={bookMode} onChange={e => setBookMode(e.target.value)}>
              <option value="available">Available Only (if)</option>
              <option value="all">All Books (if/else)</option>
            </select>
          </div>
        </div>
        <div>
          <label>
            <input type="checkbox" checked={showBlogs} onChange={() => setShowBlogs(f => !f)} /> Show Blog Details
          </label>
          <div>
            <select value={blogView} onChange={e => setBlogView(e.target.value)}>
              <option value="recent">Recent (switch default)</option>
              <option value="featured">Featured (switch)</option>
              <option value="all">All (switch)</option>
            </select>
          </div>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={onlyLiveCourses}
              onChange={() => setOnlyLiveCourses(f => !f)}
            />{' '}
            Only Live Courses (short-circuit / early return)
          </label>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 30, alignItems: 'flex-start' }}>
        {showCourses && (
          <div style={{ flex: 1, position: 'relative', paddingRight: 20 }}>
            <CourseDetails showOnlyLive={onlyLiveCourses} />
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: 4,
                height: '100%',
                backgroundColor: 'green',
              }}
            />
          </div>
        )}

        {showBooks && (
          <div style={{ flex: 1, position: 'relative', paddingRight: 20 }}>
            <BookDetails showUnavailable={bookMode === 'all'} />
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: 4,
                height: '100%',
                backgroundColor: 'green',
              }}
            />
          </div>
        )}

        {showBlogs && (
          <div style={{ flex: 1, position: 'relative' }}>
            <BlogDetails viewMode={blogView} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
