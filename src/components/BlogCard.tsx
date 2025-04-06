import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/BlogCard.css';

interface BlogPost {
  title: string;
  date: string;
  category: string;
  slug: string;
  coverImage?: string;
}

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <div className="blog-card-wrapper blog-card-wrapper-try">
      <a href={`/blog/${post.slug}`} className="blog-card-link">
        <div className="blog-card">
          {post.coverImage && (
            <div 
              className="blog-card-image" 
              style={{ 
                backgroundImage: `url(${post.coverImage})`,
              }}
            />
          )}
          <div className="blog-card-info">
            <h3 className="blog-card-title">{post.title}</h3>
            <div className="blog-card-meta">
              <span className="blog-card-date">
                {new Date(post.date).toLocaleDateString()}
              </span>
              <span className="blog-card-category">{post.category}</span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default BlogCard; 