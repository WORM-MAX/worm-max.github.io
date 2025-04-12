/**
 * Discussion Slide - Summary of key findings and implications
 */

// HTML content of the slide
export const html = `
  <h2>Discussion</h2>
  
  <div class="discussion-grid">
    <div class="point fragment">
      <h3>Exercise-Responsive Repressor</h3>
      <p>HMBOX1 downregulation is required for exercise-induced physiological cardiac hypertrophy</p>
    </div>
    
    <div class="point fragment">
      <h3>Pathological Regulation</h3>
      <p>HMBOX1 is upregulated in I/R injury. Inhibiting HMBOX1 protects against cardiac injury and preserves function</p>
    </div>
    
    <div class="point fragment">
      <h3>Mechanistic Insights</h3>
      <p>HMBOX1 functions as a transcriptional repressor of GCK, affecting glucose metabolism and cardiomyocyte survival</p>
    </div>
    
    <div class="point fragment">
      <h3>Regulatory Network</h3>
      <p>ETS1 → HMBOX1↓ → GCK↑ → ↑Metabolism & ↓Apoptosis → Cardioprotection</p>
    </div>
    
    <div class="point fragment">
      <h3>Translational Potential</h3>
      <ul>
        <li>Effective in human cardiomyocytes</li>
        <li>Post-injury therapeutics</li>
        <li>Target for cardiac I/R injury</li>
      </ul>
    </div>
    
    <div class="point fragment">
      <h3>Future Directions</h3>
      <ul>
        <li>Larger animal models</li>
        <li>Other cardiovascular diseases</li>
        <li>Specific HMBOX1 inhibitors</li>
      </ul>
    </div>
  </div>

  <aside class="notes">
    Key discussion points to emphasize:
    - This study is the first to elucidate the role of HMBOX1 in exercise-induced cardiac adaptation and ischemic injury
    - HMBOX1 has differential regulation in physiological versus pathological conditions
    - The identification of GCK as a direct target of HMBOX1 provides a novel mechanistic link between transcriptional regulation and cardiac metabolism
    - The study adds new insights into how exercise-responsive molecules can regulate myocardial glycolysis metabolism
    - The therapeutic potential of HMBOX1 inhibition is supported by:
      1. Effects on human cardiomyocytes (translational relevance)
      2. Post-injury efficacy (clinical applicability)
      3. Specific cardiac effects through cardiomyocyte-specific knockout models
    - The study establishes a complete regulatory axis from ETS1 to HMBOX1 to GCK, providing multiple potential intervention points
    - While promising, further studies in larger animal models and development of specific inhibitors are needed for clinical translation
  </aside>
`;

// Add CSS for discussion layout
export function initialize() {
  console.log('Discussion slide initialized');
  
  const style = document.createElement('style');
  style.id = 'discussion-slide-style';
  style.textContent = `
    .discussion-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 8px;
      margin-bottom: 10px;
    }
    .point {
      background-color: rgba(240, 240, 240, 0.7);
      padding: 6px 10px;
      border-radius: 5px;
      border-left: 4px solid #4285f4;
    }
    .point h3 {
      margin-top: 0;
      color: #333;
      font-size: 0.9em;
      margin-bottom: 3px;
    }
    .point p {
      margin: 0;
      font-size: 0.75em;
    }
    .point ul {
      margin: 0;
      padding-left: 15px;
      font-size: 0.75em;
    }
  `;
  document.head.appendChild(style);
}

// Cleanup function
export function cleanup() {
  console.log('Discussion slide cleaned up');
  
  const styleElement = document.getElementById('discussion-slide-style');
  if (styleElement) {
    styleElement.remove();
  }
} 