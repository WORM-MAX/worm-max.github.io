/**
 * Results Slide 2 - HMBOX1 in Ischemia/Reperfusion Injury and Cardiomyocyte Apoptosis
 */

// HTML content of the slide
export const html = `
  <h2>Results II: HMBOX1 in Cardiac I/R Injury</h2>
  
  <div class="two-column">
    <div class="column">
      <div class="finding-box fragment">
        <h3>HMBOX1 Expression in Injured Myocardium</h3>
        <ul>
          <li>Upregulated in human post-infarct myocardium</li>
          <li>Elevated in mouse hearts after I/R injury (acute and chronic phases)</li>
          <li>Increased in cardiomyocytes under OGDR stress in vitro</li>
        </ul>
      </div>
      
      <div class="finding-box fragment">
        <h3>Effects on Cardiomyocyte Apoptosis</h3>
        <ul>
          <li>HMBOX1 knockdown: Reduced TUNEL+ cardiomyocytes, decreased Bax/Bcl2 ratio, diminished cleaved caspase-3</li>
          <li>HMBOX1 overexpression: Aggravated cardiomyocyte apoptosis</li>
          <li>Similar effects in human embryonic stem cell-derived cardiomyocytes</li>
        </ul>
      </div>
    </div>
    
    <div class="column">
      <div class="finding-box fragment">
        <h3>AAV9-Mediated HMBOX1 Knockdown in vivo</h3>
        <ul>
          <li>Reduced infarct size after I/R injury</li>
          <li>Inhibited myocardial apoptosis</li>
          <li>Preserved cardiac function (improved EF and FS)</li>
          <li>Reduced cardiac fibrosis and pathological remodeling markers</li>
        </ul>
      </div>
      
      <div class="finding-box fragment">
        <h3>Signaling Pathway</h3>
        <ul>
          <li>HMBOX1 knockdown activated the Akt/mTOR/P70S6K pathway</li>
          <li>Akt activation was necessary for promoting cardiomyocyte size and inhibiting apoptosis</li>
        </ul>
      </div>
    </div>
  </div>

  <p class="conclusion fragment">
    <strong>Conclusion:</strong> HMBOX1 is upregulated in injured myocardium, and its inhibition protects against cardiac I/R injury by reducing apoptosis and activating Akt signaling
  </p>

  <aside class="notes">
    Key findings about HMBOX1 in cardiac I/R injury:
    - While HMBOX1 is downregulated in exercise, it's significantly upregulated in injured myocardium
    - This upregulation was observed in human post-MI samples, mouse I/R models, and in vitro OGDR-stressed cardiomyocytes
    - Functionally, HMBOX1 knockdown reduced cardiomyocyte apoptosis markers including TUNEL staining, Bax/Bcl2 ratio, and cleaved caspase-3
    - Conversely, HMBOX1 overexpression increased apoptotic markers, suggesting it promotes cell death during stress
    - In vivo AAV9-mediated HMBOX1 knockdown protected mouse hearts from I/R injury, reducing infarct size and preserving cardiac function
    - Mechanistically, HMBOX1 inhibition led to activation of the pro-survival Akt/mTOR/P70S6K pathway
    - These findings suggest HMBOX1 inhibition could be a promising therapeutic strategy for protecting the heart against ischemic injury
  </aside>
`;

// Add CSS for results layout
export function initialize() {
  console.log('Results2 slide initialized');
  
  const style = document.createElement('style');
  style.id = 'results2-slide-style';
  style.textContent = `
    .two-column {
      display: flex;
      justify-content: space-between;
      gap: 10px;
      margin-bottom: 15px;
    }
    .column {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .finding-box {
      background-color: rgba(240, 240, 240, 0.7);
      padding: 6px 10px;
      border-radius: 5px;
      border-left: 4px solid #4285f4;
      height: 100%;
    }
    .finding-box h3 {
      margin-top: 0;
      color: #333;
      font-size: 0.95em;
      margin-bottom: 3px;
    }
    .finding-box ul {
      margin-bottom: 0;
      margin-top: 3px;
      font-size: 0.75em;
      padding-left: 15px;
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
  console.log('Results2 slide cleaned up');
  
  const styleElement = document.getElementById('results2-slide-style');
  if (styleElement) {
    styleElement.remove();
  }
} 