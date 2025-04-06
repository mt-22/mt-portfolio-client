import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { NavBar, NavItem } from '../components/NavBar';
import Footer from '../components/Footer';
import LandingPage from '../components/LandingPage';
import '../styles/BlogPostPage.css';

interface BlogPost {
  title: string;
  date: string;
  category: string;
  slug: string;
  coverImage?: string;
}

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<React.ComponentType | null>(null);
  const [metadata, setMetadata] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPost = async () => {
      try {
        setLoading(true);
        // Dynamically import the blog post component
        const module = await import(`../blogs/${slug}`);
        setPost(() => module.default);
        setMetadata(module.metadata);
        setError(null);
      } catch (err) {
        console.error('Error loading blog post:', err);
        setError('Blog post not found');
        setPost(null);
        setMetadata(null);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      loadPost();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="page blog-post-page">
        <div className="body">
          <LandingPage 
            backgroundImage=""
            title="Loading..."
            scrollToId="blog-view"
          />
        </div>
      </div>
    );
  }

  if (error || !post || !metadata) {
    return (
      <div className="page blog-post-page">
        <div className="body">
          <LandingPage 
            backgroundImage=""
            title="Page Not Found"
            scrollToId="blog-view"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="page blog-post-page">
      <div className="body">
        <LandingPage 
          backgroundImage={metadata.coverImage || ""}
          title={metadata.title}
          scrollToId="blog-view"
        />
        <div className="main-view" id="main-view">
          <NavBar>
            <NavItem text="Home" link="/"/>
            <NavItem text="Contact" link="/contact" right={true}/>
            <NavItem text="Projects" link="/projects"/>
            <NavItem text="Blog" link="/blog"/>
          </NavBar>
          <div className="section-view" id="blog-view">
            {React.createElement(post)}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPostPage; 