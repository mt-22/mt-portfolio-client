import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NavBar, NavItem } from '../components/NavBar';
import BlogCard from '../components/BlogCard';
import Footer from '../components/Footer';
import LandingPage from '../components/LandingPage';
import '../styles/BlogList.css';
import arrow from '../media/arrow.svg';
import BackgroundImage from '../media/homepagebackground.jpg';

interface BlogPost {
    title: string;
    date: string;
    category: string;
    slug: string;
    coverImage?: string;
}

interface BlogModule {
    metadata: BlogPost;
}

// Get all blog files from the blogs directory
const blogModules = import.meta.glob('../blogs/*.tsx');

const BlogList: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
    const postsPerPage = 6;

    useEffect(() => {
        // Dynamically import all blog posts
        const importBlogs = async () => {
            try {
                // Get all blog files from the blogs directory
                const posts = await Promise.all(
                    Object.entries(blogModules).map(async ([path, importFn]) => {
                        const module = await importFn() as BlogModule;
                        return module.metadata;
                    })
                );
                
                // Sort by date, newest first
                const sortedPosts = posts.sort((a: BlogPost, b: BlogPost) => 
                    new Date(b.date).getTime() - new Date(a.date).getTime()
                );
                setBlogPosts(sortedPosts);
            } catch (error) {
                console.error('Error loading blog posts:', error);
            }
        };

        importBlogs();
    }, []);

    const totalPages = Math.ceil(blogPosts.length / postsPerPage);
    const currentPosts = blogPosts.slice(
        (currentPage - 1) * postsPerPage,
        currentPage * postsPerPage
    );

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className="page blog-list-page">
            <div className="body">
                <LandingPage 
                    backgroundImage={BackgroundImage}
                    title="Blog"
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
                        <h2 className="section-heading">Blog Posts</h2>
                        <div className="blog-grid">
                            {currentPosts.map((post) => (
                                <BlogCard key={post.slug} post={post} />
                            ))}
                        </div>
                        {totalPages > 1 && (
                            <div className="pagination">
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                    <button
                                        key={page}
                                        onClick={() => handlePageChange(page)}
                                        className={`pagination-button ${currentPage === page ? 'active' : ''}`}
                                    >
                                        {page}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default BlogList; 