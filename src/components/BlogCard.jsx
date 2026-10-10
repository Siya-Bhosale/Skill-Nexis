function BlogCard({ post }) {
  return (
    <article className="blog-card">
      <div className="card-image">
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
        />
        <span className="category-tag">
          {post.category}
        </span>
      </div>

      <div className="card-content">
        <p className="post-date">{post.date}</p>
        <h3>{post.title}</h3>
        <p className="post-description">
          {post.description}
        </p>

        <div className="card-footer">
          <div className="author-avatar">
            {post.author.charAt(0)}
          </div>
          <span>{post.author}</span>
          <span className="read-more">Read more ↗</span>
        </div>
      </div>
    </article>
  );
}

export default BlogCard;