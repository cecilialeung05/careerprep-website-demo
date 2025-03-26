import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { blogPosts, categories, tags, archives } from "../../data/blog-posts";
import { filterBySearchTerm } from "../../utils/fuzzySearch";

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  useEffect(() => {
    let result = blogPosts;

    if (searchTerm) {
      result = filterBySearchTerm(result, searchTerm, ["title", "content"]);
    }

    if (selectedCategory) {
      result = result.filter((post) => post.category === selectedCategory);
    }

    if (selectedTag) {
      result = result.filter((post) => post.tags.includes(selectedTag));
    }

    if (selectedMonth) {
      result = result.filter((post) => post.date.startsWith(selectedMonth));
    }

    setFilteredPosts(result);
  }, [searchTerm, selectedCategory, selectedTag, selectedMonth]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? "" : category);
  };

  const handleTagClick = (tag) => {
    setSelectedTag(tag === selectedTag ? "" : tag);
  };

  const handleMonthClick = (month) => {
    setSelectedMonth(month === selectedMonth ? "" : month);
  };

  return (
    <div className="container">
      <div className="blog__header">
        <h1 className="blog__title">Blog</h1>
        <p className="blog__description">
          Insights, tips, and strategies to help you succeed in your data science career
        </p>
      </div>

      <div className="blog__content">
        <div className="blog__sidebar">
          <div className="blog__search">
            <input
              type="text"
              placeholder="Search articles..."
              className="blog__search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="blog__search-icon" size={18} />
          </div>

          {(selectedCategory || selectedTag || selectedMonth) && (
            <div className="card blog__filters">
              <h3 className="blog__filters-title">Active Filters</h3>
              <div className="blog__filters-list">
                {selectedCategory && (
                  <button onClick={() => setSelectedCategory("")} className="blog__filter-tag blog__filter-tag--active">
                    Category: {selectedCategory} ×
                  </button>
                )}
                {selectedTag && (
                  <button onClick={() => setSelectedTag("")} className="blog__filter-tag blog__filter-tag--active">
                    Tag: {selectedTag} ×
                  </button>
                )}
                {selectedMonth && (
                  <button onClick={() => setSelectedMonth("")} className="blog__filter-tag blog__filter-tag--active">
                    Month: {archives.find((a) => a.month === selectedMonth)?.label} ×
                  </button>
                )}
                <button
                  onClick={() => {
                    setSelectedCategory("");
                    setSelectedTag("");
                    setSelectedMonth("");
                  }}
                  className="blog__filter-tag blog__filter-tag--clear"
                >
                  Clear All
                </button>
              </div>
            </div>
          )}

          <div className="card blog__categories">
            <h3>Categories</h3>
            <ul>
              {categories.map((category) => (
                <li key={category.name}>
                  <button
                    onClick={() => handleCategoryClick(category.name)}
                    className={`blog__categories-link ${selectedCategory === category.name ? "active" : ""}`}
                  >
                    {category.name} ({category.count})
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="card blog__tags">
            <h3>Popular Tags</h3>
            <div className="blog__tags-list">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  className={`blog__tag ${selectedTag === tag ? "active" : ""}`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="card blog__archives">
            <h3>Archives</h3>
            <ul>
              {archives.map((archive) => (
                <li key={archive.month}>
                  <button
                    onClick={() => handleMonthClick(archive.month)}
                    className={`blog__archives-link ${selectedMonth === archive.month ? "active" : ""}`}
                  >
                    {archive.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="blog__posts">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <div key={post.id} className="card blog-post">
                <div className="blog-post__image-container">
                  <img src={post.image || "/placeholder.svg"} alt={post.title} className="blog-post__image" />
                </div>
                <div className="blog-post__meta">
                  <button onClick={() => handleCategoryClick(post.category)} className="blog-post__category">
                    {post.category}
                  </button>
                  <span className="blog-post__date">{post.date}</span>
                </div>
                <h2 className="blog-post__title">{post.title}</h2>
                <p className="blog-post__content">{post.content}</p>
                <div className="blog-post__footer">
                  <Link to={`/blog/${post.id}`} className="button button--primary">
                    Read More
                  </Link>
                  <div className="blog-post__tags">
                    {post.tags.map((tag) => (
                      <button key={tag} onClick={() => handleTagClick(tag)} className="blog-post__tag">
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="blog__empty">
              <h3>No posts found</h3>
              <p>Try adjusting your search or filter criteria to find what you're looking for.</p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("");
                  setSelectedTag("");
                  setSelectedMonth("");
                }}
                className="button button--primary"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
