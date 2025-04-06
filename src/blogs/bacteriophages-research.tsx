import React from 'react';
import '../styles/BlogPostPage.css';
import bacteriophagesImage from '../media/bacteriophages_compressed.webp';
import BacteriophageDiagram from '../media/bacteriophage-diagram.png'
import '../styles/BacteriophageBlog.css'

export const metadata = {
  title: 'Exploring Bacteriophages: Nature\'s Tiny Warriors',
  date: '2024-03-20',
  category: 'Science',
  slug: 'bacteriophages-research',
  coverImage: bacteriophagesImage
};

const BacteriophagesResearch: React.FC = () => {
  return (
    <div className="blog-post">
      <div className="blog-content">
        <div className="blog-meta">
          <span className="blog-date">{metadata.date}</span>
          <span className="blog-category">{metadata.category}</span>
        </div>
        <h1>{metadata.title}</h1>
        <div className="blog-text">
          <p>
            We have been using <a href="https://www.sciencedirect.com/science/article/pii/S1369527419300190">antibiotics</a> to
            treat infections since the 1930s, and as such <a href="https://www.who.int/news-room/fact-sheets/detail/antimicrobial-resistance#:~:
            // text=The%20misuse%20and%20overuse%20of,development%20of%20drug%2Dresistant%20pathogens.">antibiotic-resistant bacteria</a>
            is becomming evermore of a common occurrence. But hold hope, becase for fighting bacteria antibiotics may have an
            alternative: <i><a href="https://www.britannica.com/science/bacteriophage">bacteriophages</a></i>.
          </p>
          
          <h2>What are <i>Bacteriophages</i>?</h2>
          <div className='about-phages'>
          <p>
            Bacteriophages are specialized <a href="https://www.britannica.com/science/virus">viruses</a> that only target bacteria. Given
             that they are viruses, they are technically not <i>alive</i>, and need a host to survive and replicate. 
             They inject their genetic information into a <i>specific</i> bacteria, forcing it to produce new phages until
             it dies. 
          </p>
          <img className='phage-diagram' src={BacteriophageDiagram} alt="bactiophage-diagram"/>
          </div> 
          <p>Due to their predatory relationship against bacteria, bacteriophages play a vital role in micribiome populations
            everywhere, including in your stomach.
          </p>

          <h2>So Whats the Big Deal?</h2>
          <h3><i>Bacteriophages as an Alternative to Antibiotics</i></h3>
          <p>Bacteriophages have undergone study for medical purposes for ~100 years with promising results. The <i>National Institute of Health</i> article <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5547374/">Phage therapy: An alternative to antibiotics in the age of multi-drug resistance</a> references 
          a number large number of studies that all show positive results for phage-therapy
          </p>
          <h2>Future Research Directions</h2>
          <p>
            Current research focuses on:
          </p>
          <ul>
            <li>Engineering phages for enhanced therapeutic properties</li>
            <li>Understanding phage-bacteria interactions</li>
            <li>Developing phage-based diagnostics</li>
            <li>Exploring phage applications in agriculture</li>
          </ul>

          <p>
            As we continue to explore the potential of bacteriophages, they may become 
            increasingly important tools in our fight against bacterial infections and 
            in maintaining microbial balance in various environments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BacteriophagesResearch; 