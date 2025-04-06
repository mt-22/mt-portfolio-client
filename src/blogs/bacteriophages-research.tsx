import React from 'react';
import '../styles/BlogPost.css';
import bacteriophagesImage from '../media/bacteriophages_compressed.webp';
import BacteriophageDiagram from '../media/bacteriophage-diagram.webp'
import '../styles/BacteriophageBlog.css'

export const metadata = {
  title: 'Exploring Bacteriophages: Nature\'s Tiny Warriors',
  date: '2025-04-02',
  category: 'Biology',
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
            // text=The%20misuse%20and%20overuse%20of,development%20of%20drug%2Dresistant%20pathogens.">antibiotic-resistant bacteria</a> is
             becoming increasingly common. But hold hope, becase for fighting bacteria antibiotics may have an
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

          <h2>So What's the Big Deal?</h2>
          <h3><i>Bacteriophages as an Alternative to Antibiotics</i></h3>
          <p>Bacteriophages have undergone study for medical purposes for ~100 years with promising results.
            Phage therapy can work to aid, or replace antibiotics as means for fighting bacteria. 
            The <i>National Institute of Health</i> article, <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5547374/">
            Phage therapy: An alternative to antibiotics in the age of multi-drug resistance</a>, references
            a large number of studies that all show positive results for phage-therapy, as summarized in the following table:
          </p>
          
          <div className="table-container">
            <table className="comparison-table">
              <caption>Table 1: Published findings on phage therapy in human and animal studies</caption>
              <thead>
                <tr>
                  <th>Causative Agent</th>
                  <th>Model</th>
                  <th>Condition</th>
                  <th>Route</th>
                  <th>Result Summary</th>
                  <th>Ref</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Shigella dysenteriae</td>
                  <td>Human</td>
                  <td>Dysentery</td>
                  <td>Oral</td>
                  <td>All four treated individuals recovered after 24 h</td>
                  <td><a href="https://doi.org/10.1016/B978-0-12-394438-2.00001-3" target="_blank" rel="noopener noreferrer">[1]</a></td>
                </tr>
                <tr>
                  <td>Vibrio cholerae</td>
                  <td>Human</td>
                  <td>Cholera</td>
                  <td>Oral</td>
                  <td>68 of 73 survived in treatment group and only 44 of 118 in control group</td>
                  <td><a href="https://doi.org/10.1016/B978-0-12-394438-2.00001-3" target="_blank" rel="noopener noreferrer">[1]</a></td>
                </tr>
                <tr>
                  <td>Pseudomonas aeruginosa</td>
                  <td>Murine</td>
                  <td>Sepsis</td>
                  <td>Oral</td>
                  <td>66.7% reduced mortality</td>
                  <td><a href="https://doi.org/10.1128/AAC.00635-06" target="_blank" rel="noopener noreferrer">[38]</a></td>
                </tr>
                <tr>
                  <td>Clostridium difficile</td>
                  <td>Hamster</td>
                  <td>Ileocecitis</td>
                  <td>Oral</td>
                  <td>Co-administration with C. difficile prevented infection</td>
                  <td><a href="https://scholar.google.com/scholar_lookup?journal=Anaerobe&title=Prevention%20of%20Clostridium%20difficile-induced%20ileocecitis%20with%20bacteriophage&author=V%20Ramesh&author=JA%20Fralick&author=RD%20Rolfe&volume=5&publication_year=1999&pages=69-78&" target="_blank" rel="noopener noreferrer">[39]</a></td>
                </tr>
                <tr>
                  <td>Clostridium difficile</td>
                  <td>Hamster</td>
                  <td>Ileocecitis</td>
                  <td>Oral</td>
                  <td>Dose every 8 h for 72 h; 92% reduced mortality</td>
                  <td><a href="https://scholar.google.com/scholar_lookup?journal=Anaerobe&title=Prevention%20of%20Clostridium%20difficile-induced%20ileocecitis%20with%20bacteriophage&author=V%20Ramesh&author=JA%20Fralick&author=RD%20Rolfe&volume=5&publication_year=1999&pages=69-78&" target="_blank" rel="noopener noreferrer">[39]</a></td>
                </tr>
                <tr>
                  <td>Vancomycin-resistant Enterococcus faecium</td>
                  <td>Murine</td>
                  <td>Bacteremia</td>
                  <td>i.p.</td>
                  <td>100% reduced mortality</td>
                  <td><a href="https://doi.org/10.1128/IAI.70.1.204-210.2002" target="_blank" rel="noopener noreferrer">[41]</a></td>
                </tr>
                <tr>
                  <td>β-lactamase producing Escherichia coli</td>
                  <td>Murine</td>
                  <td>Bacteremia</td>
                  <td>i.p.</td>
                  <td>100% reduced mortality</td>
                  <td><a href="https://scholar.google.com/scholar_lookup?journal=Int%20J%20Mol%20Med&title=Therapeutic%20effectiveness%20of%20bacteriophages%20in%20the%20rescue%20of%20mice%20with%20extended%20spectrum%20beta-lactamase-producing%20Escherichia%20coli%20bacteremia&author=J%20Wang&author=B%20Hu&author=M%20Xu&author=Q%20Yan&author=S%20Liu&volume=17&publication_year=2006&pages=347-355&pmid=16391836&" target="_blank" rel="noopener noreferrer">[42]</a></td>
                </tr>
                <tr>
                  <td>Imipenem-resistant Pseudomonas aeruginosa</td>
                  <td>Murine</td>
                  <td>Bacteremia</td>
                  <td>i.p.</td>
                  <td>100% reduced mortality</td>
                  <td><a href="https://scholar.google.com/scholar_lookup?journal=Int%20J%20Mol%20Med&title=Therapeutic%20effectiveness%20of%20bacteriophages%20in%20the%20rescue%20of%20mice%20with%20extended%20spectrum%20beta-lactamase-producing%20Escherichia%20coli%20bacteremia&author=J%20Wang&author=B%20Hu&author=M%20Xu&author=Q%20Yan&author=S%20Liu&volume=17&publication_year=2006&pages=347-355&pmid=16391836&" target="_blank" rel="noopener noreferrer">[43]</a></td>
                </tr>
                <tr>
                  <td>Acinetobacter baumannii, Pseudomonas aeruginosa and Staphylococcus aureus</td>
                  <td>Murine</td>
                  <td>Sepsis</td>
                  <td>i.p.</td>
                  <td>Animals protected against fatal dose of A. baumannii and P. aeruginosa but not S. aureus</td>
                  <td><a href="https://doi.org/10.1099/00222615-37-4-258" target="_blank" rel="noopener noreferrer">[44]</a></td>
                </tr>
                <tr>
                  <td>Escherichia coli</td>
                  <td>Murine</td>
                  <td>Meningitis and Sepsis</td>
                  <td>i.p. or s.c.</td>
                  <td>100% and 50% reduced mortality for meningitis and sepsis, respectively</td>
                  <td><a href="https://doi.org/10.1128/AAC.06330-11" target="_blank" rel="noopener noreferrer">[45]</a></td>
                </tr>
                <tr>
                  <td>MDR Vibrio parahaemolyticus</td>
                  <td>Murine</td>
                  <td>Sepsis</td>
                  <td>i.p. and oral</td>
                  <td>92% and 84% reduced mortality for i.p. and oral routes, respectively</td>
                  <td><a href="https://doi.org/10.1093/infdis/jiu059" target="_blank" rel="noopener noreferrer">[46]</a></td>
                </tr>
                <tr>
                  <td>S. aureus</td>
                  <td>Rabbit</td>
                  <td>Wound infection</td>
                  <td>s.c.</td>
                  <td>Co-administration with S. aureus prevented infection</td>
                  <td><a href="https://doi.org/10.1128/AAC.49.3.1220-1221.2005" target="_blank" rel="noopener noreferrer">[47]</a></td>
                </tr>
                <tr>
                  <td>MDR S. aureus</td>
                  <td>Human</td>
                  <td>Diabetic foot ulcer</td>
                  <td>Topical</td>
                  <td>All 6 treated patients recovered</td>
                  <td><a href="https://scholar.google.com/scholar_lookup?journal=J%20Wound%20Care&title=Bacteriophage%20treatment%20of%20intransigent%20diabetic%20toe%20ulcers:%20a%20case%20series&author=R%20Fish&author=E%20Kutter&author=G%20Wheat&author=B%20Blasdel&author=M%20Kutateladze&volume=25%20Suppl%207&publication_year=2016&pages=S27-S33&" target="_blank" rel="noopener noreferrer">[50]</a></td>
                </tr>
                <tr>
                  <td>Unclassified bacterial dysentery</td>
                  <td>Human</td>
                  <td>Dysentery</td>
                  <td>Oral</td>
                  <td>Phage cocktail improved symptoms in 74% of 219 patients</td>
                  <td><a href="https://scholar.google.com/scholar_lookup?journal=Microbiol%20Australia&title=Bacteriophage%20therapy:%20experience%20from%20the%20Eliava%20Institute,%20Georgia&author=N%20Chanishvili&author=R%20Sharp&volume=29&publication_year=2008&pages=96-101&" target="_blank" rel="noopener noreferrer">[51]</a></td>
                </tr>
                <tr>
                  <td>Salmonella typhi</td>
                  <td>Human</td>
                  <td>Typhoid</td>
                  <td>Oral</td>
                  <td>In a cohort of 18,577 children, phage treatment was associated with a 5-fold decrease in typhoid incidence compared to placebo</td>
                  <td><a href="https://doi.org/10.1016/j.medmal.2008.06.023" target="_blank" rel="noopener noreferrer">[49]</a></td>
                </tr>
                <tr>
                  <td>Antibiotic-resistant Pseudomonas aeruginosa</td>
                  <td>Human</td>
                  <td>Chronic Otitis</td>
                  <td>Oral</td>
                  <td>Phage treatment safe and symptoms improved in a double-blind, placebo-controlled Phase I/II trial</td>
                  <td><a href="https://doi.org/10.1111/j.1749-4486.2009.01973.x" target="_blank" rel="noopener noreferrer">[61]</a></td>
                </tr>
              </tbody>
            </table>
            <div className="table-citation">
              Source: Adapted from <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5547374/" target="_blank" rel="noopener noreferrer">
              "Phage therapy: An alternative to antibiotics in the age of multi-drug resistance"</a>, National Institutes of Health (NIH).
            </div>
          </div>
          <p>
            The data in the table above illustrates just how powerful, and versatile phage therapy can be. Across both
            human and animal studies, phage therapy has shown effective results. However, we still face some
            challenges: long-term stability of phage preparations, effective screening, <a href='https://pubmed.ncbi.nlm.nih.gov/32576653/#:~:text=Our%20results%20provide%20a%20clear,;%20resistance%20evolution;%20spatial%20simulation.'>biofilm phage-resistance</a>,
             and more (see <a href='https://pmc.ncbi.nlm.nih.gov/articles/PMC9550173/#s0010'>here</a> for more information). 
          </p>
          <h3><i>Phage Therapy Driven by AI</i></h3>
          <p>
            As AI systems become more powerful, the way in which we <i>find, classify, and optimize</i> bacteriophages
            does as well. A study from <i>BioMed Central</i>: <a href='https://bmcmicrobiol.biomedcentral.com/articles/10.1186/s12866-021-02256-5#Abs1'>
            Phage therapy: An alternative to antibiotics in the age of multi-drug resistance</a> discusses how we are
            able to use machine-learning technology to predict how a given phage might interact with hosts. As such,
            we are able to predict which phages could potentially kill a given bacteria, as well as predict the host-range
            of a particular phage.
          </p>
          <p>AI has other uses in phage-therapy, particularly when integrated with <a href='https://www.sciencedirect.com/science/article/abs/pii/S2214799325000049?utm_source=chatgpt.com'>
          synthetic biology</a> applications. A study found at <i>Science Direct</i>, <a href='https://www.sciencedirect.com/science/article/abs/pii/S2214799325000049?utm_source=chatgpt.com'>
          Phage engineering using synthetic biology and artificial intelligence to enhance phage applications in
          food industry</a>, discusses leveraging AI with synthetic biology to modify phages to achieve a set of desired
          characteristics. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default BacteriophagesResearch; 