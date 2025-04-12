/**
 * Conclusion Slide - Key takeaways from the study
 */

// HTML content of the slide
export const html = `
  <h2>Conclusions</h2>
  
  <div class="model-container fragment" style="margin-top: 10px; margin-bottom: 15px;">
    <div class="model-diagram">
      <div class="node exercise">
        <p>Exercise</p>
        <span class="arrow up">↑</span>
      </div>
      <div class="node ets1">
        <p>ETS1</p>
        <span class="arrow up">↑</span>
      </div>
      <div class="node hmbox1">
        <p>HMBOX1</p>
        <span class="arrow down">↓</span>
      </div>
      <div class="node gck">
        <p>GCK</p>
        <span class="arrow up">↑</span>
      </div>
      <div class="node-group">
        <div class="node metabolism">
          <p>Metabolism</p>
          <span class="arrow up">↑</span>
        </div>
        <div class="node survival">
          <p>Survival</p>
          <span class="arrow up">↑</span>
        </div>
      </div>
      <div class="node protection">
        <p>Cardioprotection</p>
      </div>
    </div>
  </div>
  
  <div class="conclusion-points">
    <div class="point fragment">
      <p>HMBOX1 downregulation is required for exercise-induced physiological cardiac hypertrophy</p>
    </div>
    
    <div class="point fragment">
      <p>HMBOX1 inhibition protects against cardiac I/R injury and heart failure</p>
    </div>
    
    <div class="point fragment">
      <p>HMBOX1 directly represses GCK transcription, affecting glucose metabolism and cardiomyocyte survival</p>
    </div>
    
    <div class="point fragment">
      <p>Targeting HMBOX1 represents a promising therapeutic strategy for cardiac ischemic injury</p>
    </div>
  </div>

  <aside class="notes">
    Summary points for conclusion:
    - This study identifies HMBOX1 as a key transcriptional repressor involved in both physiological and pathological cardiac adaptation
    - HMBOX1 shows differential regulation: downregulated during exercise (beneficial) and upregulated during ischemic injury (detrimental)
    - The study provides a comprehensive mechanistic pathway from ETS1 to HMBOX1 to GCK, linking transcriptional regulation to metabolic function
    - The protective effects of HMBOX1 inhibition were demonstrated in multiple models:
      1. In vitro cardiomyocyte models (including human cells)
      2. In vivo cardiac I/R injury models
      3. Genetic models with cardiac-specific HMBOX1 ablation
    - Both preventive and therapeutic approaches targeting HMBOX1 showed cardioprotective effects
    - The findings suggest HMBOX1 inhibition could be developed as a novel therapeutic strategy for ischemic heart disease
    - Future studies should focus on larger animal models and development of specific HMBOX1 inhibitors for clinical translation
  </aside>
`;

// Add CSS for conclusion layout
export function initialize() {
  console.log('Conclusion slide initialized');
  
  const style = document.createElement('style');
  style.id = 'conclusion-slide-style';
  style.textContent = `
    .model-container {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 15px;
    }
    .model-diagram {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      position: relative;
      transform: scale(0.8);
    }
    .node {
      background-color: rgba(66, 133, 244, 0.1);
      border: 2px solid #4285f4;
      border-radius: 50px;
      padding: 4px 12px;
      min-width: 90px;
      text-align: center;
      position: relative;
    }
    .node p {
      margin: 0;
      font-weight: bold;
      color: #333;
      font-size: 0.9em;
    }
    .node-group {
      display: flex;
      gap: 15px;
    }
    .arrow {
      position: absolute;
      font-size: 20px;
      font-weight: bold;
    }
    .arrow.up {
      color: #34A853;
    }
    .arrow.down {
      color: #EA4335;
    }
    .node .arrow {
      top: -5px;
      right: 8px;
    }
    .model-diagram::before {
      content: '';
      position: absolute;
      width: 2px;
      height: calc(100% - 60px);
      background-color: #4285f4;
      z-index: -1;
      top: 30px;
    }
    .conclusion-points {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .conclusion-points .point {
      background-color: rgba(240, 240, 240, 0.8);
      padding: 5px 10px;
      border-radius: 5px;
      border-left: 4px solid #4285f4;
    }
    .conclusion-points .point p {
      margin: 0;
      font-size: 0.75em;
    }
  `;
  document.head.appendChild(style);
}

// Cleanup function
export function cleanup() {
  console.log('Conclusion slide cleaned up');
  
  const styleElement = document.getElementById('conclusion-slide-style');
  if (styleElement) {
    styleElement.remove();
  }
} 