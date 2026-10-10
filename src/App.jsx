import { useState } from 'react';
import posts from './data/posts.json';
import BlogCard from './components/BlogCard';
import './App.css';

function App() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const categories = [
    'All',
    ...new Set(posts.map((post) => post.category)),
  ];

  const filteredPosts = posts.filter((post) => {
    const text = `${post.title} ${post.description} ${post.author}`;

    const matchesSearch = text
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === 'All' || post.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="app">
      <header className="navbar">
        <a className="logo" href="#">
          BlogSpace<span>.</span>
        </a>
        <span className="nav-text">Ideas worth sharing</span>
      </header>

      <main>
        <section className="hero">
          <p className="eyebrow">WELCOME TO BLOGSPACE</p>
          <h1>
            Stories that inspire <span>you.</span>
          </h1>
          <p className="hero-description">
            Discover fresh ideas, practical tips, and stories
            from curious minds.
          </p>

          <div className="search-box">
            <span>⌕</span>
            <input
              type="text"
              placeholder="Search articles, authors..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <button onClick={() => setSearch('')}>
                Clear
              </button>
            )}
          </div>
        </section>

        <section className="blog-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">THE BLOG</p>
              <h2>Explore articles</h2>
            </div>
            <span className="post-count">
              {filteredPosts.length} articles
            </span>
          </div>

          <div className="filters">
            {categories.map((item) => (
              <button
                key={item}
                className={`filter-button ${
                  category === item ? 'active' : ''
                }`}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          {filteredPosts.length > 0 ? (
            <div className="blog-grid">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <h3>No articles found</h3>
              <p>Try another search or category.</p>
              <button
                className="reset-button"
                onClick={() => {
                  setSearch('');
                  setCategory('All');
                }}
              >
                Reset filters
              </button>
            </div>
          )}
        </section>
      </main>

      <footer>
        <p>© 2026 BlogSpace. Made with React.</p>
      </footer>
    </div>
  );
}

export default App;