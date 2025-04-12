/**
 * Background Slide - Overview of HMBOX1 and its role
 */

// HTML content of the slide
export const html = `
  <h2>Background: HMBOX1</h2>
  <div class="two-column">
    <div class="column">
      <ul>
        <li class="fragment">HMBOX1 (Homeobox containing 1) belongs to the homeobox family</li>
        <li class="fragment">Functions as a transcriptional repressor</li>
        <li class="fragment">Also involved in telomere maintenance</li>
        <li class="fragment">Previously identified as a downstream target of microRNA-222 (miR-222)</li>
        <li class="fragment">miR-222 plays a key role in exercise-induced physiological cardiac growth</li>
      </ul>
    </div>
    <div class="column fragment">
      <div style="background-color: rgba(66, 133, 244, 0.1); border-left: 4px solid #4285f4; padding: 15px; border-radius: 0 4px 4px 0;">
        <h3 style="margin-top: 0;">Research Gaps</h3>
        <ul style="margin-bottom: 0;">
          <li>Role of HMBOX1 in exercise-induced cardiac growth unclear</li>
          <li>Function in cardiac I/R injury unknown</li>
          <li>Molecular mechanisms not elucidated</li>
        </ul>
      </div>
    </div>
  </div>

  <aside class="notes">
    Key points about HMBOX1:
    - HMBOX1 is a member of the homeobox family of transcription factors
    - It's a transcriptional repressor that can negatively regulate gene expression
    - It also functions as a telomere-associated protein involved in telomere maintenance
    - Previously, it was identified as a target of miR-222, which is important in exercise-induced cardiac adaptations
    - However, the specific role of HMBOX1 in cardiac physiology and pathology was largely unknown before this study
    - This research aimed to fill these knowledge gaps and explore HMBOX1's function in both exercise-induced cardiac adaptation and ischemic injury
  </aside>
`;

// Add CSS for two-column layout
export function initialize() {
  console.log('Background slide initialized');
  
  const style = document.createElement('style');
  style.id = 'background-slide-style';
  style.textContent = `
    .two-column {
      display: flex;
      justify-content: space-between;
      gap: 20px;
    }
    .column {
      flex: 1;
    }
  `;
  document.head.appendChild(style);
}

// Cleanup function
export function cleanup() {
  console.log('Background slide cleaned up');
  
  const styleElement = document.getElementById('background-slide-style');
  if (styleElement) {
    styleElement.remove();
  }
} 