/**
 * Methods Slide - Experimental approaches used in the study
 */

// HTML content of the slide
export const html = `
  <h2>Experimental Methods</h2>
  <div class="methods-container">
    <div class="method-item fragment">
      <h3>In Vivo Models</h3>
      <ul>
        <li>4-week swimming exercise in mice</li>
        <li>Cardiac I/R injury model</li>
        <li>AAV9-mediated gene delivery</li>
        <li>Cardiac myocyte-specific Hmbox1 knockout mice</li>
      </ul>
    </div>
    
    <div class="method-item fragment">
      <h3>In Vitro Models</h3>
      <ul>
        <li>Neonatal rat cardiomyocytes (NRCMs)</li>
        <li>Human embryonic stem cell-derived cardiomyocytes</li>
        <li>Oxygen glucose deprivation and reperfusion (OGDR) stress</li>
      </ul>
    </div>
    
    <div class="method-item fragment">
      <h3>Molecular & Functional Analyses</h3>
      <ul>
        <li>RNA sequencing & Chromatin immunoprecipitation</li>
        <li>Mitochondrial respiration & glycolysis assays</li>
        <li>Apoptosis detection (TUNEL)</li>
        <li>Echocardiography for cardiac function</li>
      </ul>
    </div>
  </div>

  <aside class="notes">
    Key methodology details:
    - The study used both in vivo and in vitro models to comprehensively evaluate HMBOX1's role in cardiac physiology
    - For in vivo experiments, they used swimming exercise to induce physiological cardiac growth and a cardiac I/R injury model to study pathological conditions
    - AAV9 vectors were used for gene delivery (knockdown or overexpression) in mice
    - Cardiac-specific Hmbox1 knockout mice were also generated to confirm findings
    - In vitro models included both rat and human cardiomyocytes to ensure translational relevance
    - OGDR stress was used to mimic I/R injury in cell culture
    - Functional analyses included RNA-seq for transcriptome analysis, ChIP to study protein-DNA interactions, and Seahorse assays to examine metabolism
    - Cardiac function was assessed by echocardiography in animal models
  </aside>
`;

// Add CSS for methods layout
export function initialize() {
  console.log('Methods slide initialized');
  
  const style = document.createElement('style');
  style.id = 'methods-slide-style';
  style.textContent = `
    .methods-container {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
    .method-item {
      background-color: rgba(240, 240, 240, 0.7);
      padding: 10px 15px;
      border-radius: 5px;
    }
    .method-item h3 {
      margin-top: 0;
      color: #333;
      border-bottom: 1px solid rgba(0,0,0,0.1);
      padding-bottom: 5px;
    }
    .method-item ul {
      margin-bottom: 0;
    }
  `;
  document.head.appendChild(style);
}

// Cleanup function
export function cleanup() {
  console.log('Methods slide cleaned up');
  
  const styleElement = document.getElementById('methods-slide-style');
  if (styleElement) {
    styleElement.remove();
  }
} 