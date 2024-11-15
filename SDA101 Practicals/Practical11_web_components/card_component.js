// Define a class for the custom element
class CustomCard extends HTMLElement {
  constructor() {
      super();

      // Attach shadow DOM to encapsulate styles and structure
      this.attachShadow({ mode: 'open' });

      // Create the card structure with slots for header, content, and footer
      this.shadowRoot.innerHTML = `
          <style>
              /* Styles using CSS custom properties for easy customization */
              :host {
                  display: block;
                  background-color: var(--card-background, #ffffff);
                  border-radius: var(--card-border-radius, 8px);
                  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                  overflow: hidden;
                  padding: var(--card-padding, 16px);
                  font-size: 16px;
                  color: #333;
                  max-width: 300px;
                  box-sizing: border-box;
              }

              /* Header slot styling */
              ::slotted([slot="header"]) {
                  font-size: 1.25em;
                  font-weight: bold;
                  color: var(--header-color, #333333);
                  margin-bottom: 8px;
              }

              /* Content slot styling */
              ::slotted([slot="content"]) {
                  font-size: 1em;
                  color: var(--content-color, #555555);
                  margin-bottom: 12px;
              }

              /* Footer slot styling */
              ::slotted([slot="footer"]) {
                  font-size: 0.875em;
                  color: var(--footer-color, #777777);
                  text-align: right;
              }
          </style>

          <!-- Slots to allow customizable content insertion -->
          <slot name="header"></slot>
          <slot name="content"></slot>
          <slot name="footer"></slot>
      `;
  }
}

// Register the custom element with a unique name
customElements.define('custom-card', CustomCard);