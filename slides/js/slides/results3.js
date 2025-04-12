/**
 * Results Slide 3 - HMBOX1 and GCK in Metabolism Regulation
 */

// HTML content of the slide
export const html = `
  <h2>Results III: HMBOX1 as a Transcriptional Repressor of GCK</h2>
  
  <div class="result-container">
    <div class="finding-row fragment">
      <div class="finding-box">
        <h3>GCK as a HMBOX1 Target</h3>
        <ul>
          <li>RNA-seq identified GCK (glucokinase) as a downstream target</li>
          <li>HMBOX1 directly binds to GCK promoter (ChIP-PCR)</li>
          <li>HMBOX1 knockdown upregulated GCK expression</li>
        </ul>
      </div>
      <div class="finding-box">
        <h3>GCK Mediates HMBOX1 Functions</h3>
        <ul>
          <li>GCK knockdown reversed effects of HMBOX1 inhibition (cell size, anti-apoptosis)</li>
          <li>GCK activation counteracted effects of HMBOX1 overexpression</li>
        </ul>
      </div>
    </div>
    
    <div class="finding-row fragment">
      <div class="finding-box metabolism">
        <h3>Effects on Cardiomyocyte Metabolism</h3>
        <div class="metabolism-columns">
          <div>
            <p><strong>OGDR stress:</strong></p>
            <ul>
              <li>↓ Mitochondrial respiration & ATP</li>
              <li>↑ Glycolysis (adaptive response)</li>
            </ul>
          </div>
          <div>
            <p><strong>HMBOX1 inhibition:</strong></p>
            <ul>
              <li>↑ Mitochondrial respiration</li>
              <li>↑ Glycolysis in stressed cells</li>
              <li>These benefits required GCK</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    <div class="finding-row fragment">
      <div class="finding-box">
        <h3>Cardiac-Specific HMBOX1 Knockout</h3>
        <ul>
          <li>Preserved cardiac function after I/R</li>
          <li>Reduced cardiac remodeling/fibrosis</li>
          <li>↑ GCK expression & Akt activation</li>
        </ul>
      </div>
      <div class="finding-box">
        <h3>ETS1 as an Upstream Regulator</h3>
        <ul>
          <li>ETS1 negatively regulates HMBOX1</li>
          <li>↓ in I/R injury, ↑ in exercised hearts</li>
          <li>ETS1 overexpression: ↓ HMBOX1, ↑ GCK, protected against I/R</li>
        </ul>
      </div>
    </div>
  </div>

  <p class="conclusion fragment">
    <strong>Conclusion:</strong> HMBOX1 acts as a transcriptional repressor of GCK, and inhibition of HMBOX1 improves cardiomyocyte metabolism and survival through GCK activation
  </p>

  <aside class="notes">
    Key mechanistic findings:
    - Through RNA-seq and ChIP analyses, GCK (glucokinase) was identified as a direct transcriptional target of HMBOX1
    - GCK catalyzes the first step of glycolysis (phosphorylation of glucose to glucose-6-phosphate)
    - HMBOX1 negatively regulates GCK expression by binding to its promoter region
    - Functionally, GCK is required for HMBOX1's effects on cardiomyocyte size and survival
    - Metabolic studies revealed that HMBOX1 inhibition improves both mitochondrial respiration and glycolysis in stressed cardiomyocytes
    - These metabolic benefits required GCK, highlighting its essential role
    - Cardiac-specific HMBOX1 knockout confirmed the protective effects and upregulation of GCK in vivo
    - The study also identified ETS1 as an upstream regulator that negatively controls HMBOX1 expression
    - ETS1 was downregulated in I/R injury but upregulated with exercise, mirroring the inverse pattern of HMBOX1
    - ETS1 overexpression protected against I/R injury, supporting the ETS1→HMBOX1↓→GCK↑ pathway
  </aside>
`;

// Add CSS for results layout
export function initialize() {
  console.log('Results3 slide initialized');
  
  const style = document.createElement('style');
  style.id = 'results3-slide-style';
  style.textContent = `
    .result-container {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-bottom: 10px;
    }
    .finding-row {
      display: flex;
      gap: 10px;
    }
    .finding-box {
      flex: 1;
      background-color: rgba(240, 240, 240, 0.7);
      padding: 5px 10px;
      border-radius: 5px;
      border-left: 4px solid #4285f4;
    }
    .finding-box.metabolism {
      flex: 2;
    }
    .finding-box h3 {
      margin-top: 0;
      color: #333;
      font-size: 0.9em;
      margin-bottom: 3px;
    }
    .finding-box ul {
      margin-bottom: 0;
      margin-top: 3px;
      font-size: 0.7em;
      padding-left: 15px;
    }
    .finding-box p {
      font-size: 0.75em;
      margin: 0 0 3px 0;
    }
    .metabolism-columns {
      display: flex;
      gap: 15px;
      justify-content: space-between;
    }
    .metabolism-columns > div {
      flex: 1;
    }
    .conclusion {
      background-color: rgba(66, 133, 244, 0.1);
      padding: 6px 10px;
      border-radius: 5px;
      text-align: center;
      font-size: 0.8em;
      margin-bottom: 0;
    }
  `;
  document.head.appendChild(style);
}

// Cleanup function
export function cleanup() {
  console.log('Results3 slide cleaned up');
  
  const styleElement = document.getElementById('results3-slide-style');
  if (styleElement) {
    styleElement.remove();
  }
} 