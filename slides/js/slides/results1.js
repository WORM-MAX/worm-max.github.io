/**
 * Results Slide 1 - HMBOX1 in Exercise-Induced Physiological Cardiac Hypertrophy
 */

// HTML content of the slide
export const html = `
  <h2>Results I: HMBOX1 in Physiological Cardiac Growth</h2>
  
  <div class="results-container">
    <div class="finding-box fragment">
      <h3>HMBOX1 Regulation During Exercise</h3>
      <ul>
        <li>Significantly downregulated in hearts from swimming-trained mice</li>
        <li>Conversely, upregulated in pathological cardiac hypertrophy models</li>
        <li>Preferentially expressed in cardiomyocytes vs. cardiac fibroblasts</li>
      </ul>
    </div>
    
    <div class="finding-box fragment">
      <h3>Effects on Cardiomyocyte Size</h3>
      <ul>
        <li>HMBOX1 knockdown increased cardiomyocyte size</li>
        <li>HMBOX1 overexpression decreased cardiomyocyte size</li>
        <li>No effect on cardiomyocyte proliferation</li>
        <li>No change in pathological hypertrophy markers (ANP, BNP)</li>
      </ul>
    </div>
    
    <div class="finding-box fragment">
      <h3>In Vivo Validation</h3>
      <ul>
        <li>HMBOX1 overexpression abolished exercise-induced:</li>
        <li>- Increase in heart weight/tibia length ratio</li>
        <li>- Enlargement of cardiomyocyte cross-sectional area</li>
        <li>HMBOX1 doesn't affect exercise-induced increase in Ki67+ cardiomyocytes</li>
      </ul>
    </div>
  </div>

  <p class="conclusion fragment">
    <strong>Conclusion:</strong> HMBOX1 downregulation is required for exercise-induced physiological cardiac hypertrophy, but not for exercise-induced cardiomyocyte proliferation
  </p>

  <aside class="notes">
    Key findings about HMBOX1 in physiological cardiac growth:
    - HMBOX1 is downregulated in the hearts of mice that underwent swimming exercise
    - This downregulation is specific to physiological hypertrophy, as it's upregulated in pathological conditions
    - In isolated cardiomyocytes, HMBOX1 knockdown promotes cell enlargement while overexpression reduces cell size
    - Importantly, reducing HMBOX1 doesn't induce pathological markers like ANP and BNP
    - In vivo studies confirmed that HMBOX1 overexpression prevented the increase in heart weight and cardiomyocyte size that normally occurs with exercise
    - Unlike other exercise-responsive factors, HMBOX1 doesn't affect cardiomyocyte proliferation (Ki67 expression)
    - These findings establish HMBOX1 as a key regulator of physiological cardiac hypertrophy specifically
  </aside>
`;

// Add CSS for results layout
export function initialize() {
  console.log('Results1 slide initialized');
  
  const style = document.createElement('style');
  style.id = 'results1-slide-style';
  style.textContent = `
    .results-container {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-bottom: 20px;
    }
    .finding-box {
      background-color: rgba(240, 240, 240, 0.7);
      padding: 8px 15px;
      border-radius: 5px;
      border-left: 4px solid #4285f4;
    }
    .finding-box h3 {
      margin-top: 0;
      color: #333;
      font-size: 1.1em;
      margin-bottom: 5px;
    }
    .finding-box ul {
      margin-bottom: 0;
      margin-top: 5px;
    }
    .conclusion {
      background-color: rgba(66, 133, 244, 0.1);
      padding: 10px 15px;
      border-radius: 5px;
      text-align: center;
    }
  `;
  document.head.appendChild(style);
}

// Cleanup function
export function cleanup() {
  console.log('Results1 slide cleaned up');
  
  const styleElement = document.getElementById('results1-slide-style');
  if (styleElement) {
    styleElement.remove();
  }
} 