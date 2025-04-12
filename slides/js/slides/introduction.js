/**
 * Introduction Slide - Overview of the study
 */

// HTML content of the slide
export const html = `
  <h2>Introduction</h2>
  <div>
    <ul>
      <li class="fragment">Heart failure is a leading cause of mortality worldwide</li>
      <li class="fragment">Ischemic heart disease accounts for ~40% of heart failure cases</li>
      <li class="fragment">Cardiomyocyte death and metabolic dysfunction are key pathological mechanisms</li>
      <li class="fragment">HMBOX1 (Homeobox containing 1) is a newly identified regulator in this context</li>
    </ul>
  </div>

  <div class="fragment fade-up" style="margin-top: 20px;">
    <p><strong>Research Question:</strong> How does HMBOX1 affect cardiomyocyte survival and metabolism during ischemic injury?</p>
  </div>

  <aside class="notes">
    Key points to emphasize:
    - Heart failure has high morbidity and mortality rates globally
    - Ischemic heart disease (from coronary artery disease) is a primary cause
    - Cardiomyocyte death and impaired energy metabolism are critical factors in disease progression
    - This study investigates HMBOX1, which has not been well-characterized in this context before
    - The paper aims to understand the molecular mechanisms involving HMBOX1 in cardiomyocyte survival and metabolism
  </aside>
`;

// Initialization function - no special initialization needed for this simple slide
export function initialize() {
  console.log('Introduction slide initialized');
}

// Cleanup function - no special cleanup needed for this simple slide
export function cleanup() {
  console.log('Introduction slide cleaned up');
} 