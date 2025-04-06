import React from 'react';
import '../styles/BlogPostPage.css';

export const metadata = {
  title: 'Environmental Factors Affecting Trees',
  date: '2024-03-20',
  category: 'Environment',
  slug: 'environmental-factors-trees',
  coverImage: 'https://treenewal.com/wp-content/uploads/2020/11/environmental_factors_affecting_trees.png'
};

const EnvironmentalFactorsTrees: React.FC = () => {
  return (
    <div className="blog-post">
      <h1>{metadata.title}</h1>
      <div className="blog-post-meta">
        <span className="blog-post-date">{metadata.date}</span>
        <span className="blog-post-category">{metadata.category}</span>
      </div>
      <div className="blog-post-content">
        <p>
          Trees are vital components of our ecosystem, but they face numerous environmental challenges that can affect their health and growth. Understanding these factors is crucial for proper tree care and conservation.
        </p>

        <h2>Key Environmental Factors</h2>
        <p>
          Several environmental factors can significantly impact tree health:
        </p>
        <ul>
          <li>Soil quality and composition</li>
          <li>Water availability and drainage</li>
          <li>Air quality and pollution levels</li>
          <li>Temperature fluctuations</li>
          <li>Wind exposure and patterns</li>
        </ul>

        <h2>Impact on Tree Health</h2>
        <p>
          These environmental factors can affect trees in various ways, from stunted growth to increased susceptibility to diseases. Proper monitoring and management of these factors are essential for maintaining healthy urban and natural forests.
        </p>

        <h2>Conservation Efforts</h2>
        <p>
          Understanding these environmental factors helps us develop better strategies for tree conservation and urban planning. By considering these factors, we can create more sustainable environments that support healthy tree growth.
        </p>
      </div>
    </div>
  );
};

export default EnvironmentalFactorsTrees; 