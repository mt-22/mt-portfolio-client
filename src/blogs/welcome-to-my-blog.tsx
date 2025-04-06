import React from 'react';
import '../styles/BlogPostPage.css';

export const metadata = {
  title: 'Welcome to My Blog',
  date: '2024-03-19',
  category: 'Introduction',
  slug: 'welcome-to-my-blog'
};

const WelcomeToMyBlog: React.FC = () => {
  return (
    <div className="blog-post">
      <h1>{metadata.title}</h1>
      <div className="blog-post-meta">
        <span className="blog-post-date">{metadata.date}</span>
        <span className="blog-post-category">{metadata.category}</span>
      </div>
      <div className="blog-post-content">
        <p>
          Welcome to my blog! I'm excited to share my thoughts, experiences, and insights about software development, technology, and more.
        </p>

        <h2>What to Expect</h2>
        <p>
          In this blog, you'll find:
        </p>
        <ul>
          <li>Technical tutorials and how-to guides</li>
          <li>Project walkthroughs and case studies</li>
          <li>Thoughts on software development best practices</li>
          <li>Updates on my latest projects and experiments</li>
        </ul>

        <h2>About Me</h2>
        <p>
          I'm a passionate software developer with experience in building web applications, working with various technologies, and solving complex problems. Through this blog, I hope to share my knowledge and learn from the community.
        </p>

        <h2>Stay Connected</h2>
        <p>
          Feel free to reach out through the contact form or connect with me on social media. I'm always open to discussions, feedback, and collaboration opportunities.
        </p>
      </div>
    </div>
  );
};

export default WelcomeToMyBlog; 