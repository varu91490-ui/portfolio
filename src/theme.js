/**
 * Varshini Portfolio — Central Theme Configuration
 * Selected Palette: Arctic Blue (Ice White & Cobalt)
 * 
 * Edit these values whenever you wish to customize the site's colors.
 */

export const THEME = {
  name: "Arctic Blue",
  palette: {
    iceWhite: "#F8FAFC",      // Main canvas & overall background
    cobaltBlue: "#1D4ED8",    // Primary brand colour (buttons, active navigation, key highlights)
    skyBlue: "#3882F6",       // Secondary interactive colour (hover states, link interactions)
    aquaBlue: "#0EA5E9",      // Decorative accents (pills, badges, small highlights)
    charcoalSlate: "#1F2937", // Main text, headings, high-contrast readable elements
    softBlue: "#DBEAFE",      // Subtle card borders, tinted surfaces, backdrop chips
    cardWhite: "#FFFFFF",     // Primary card backgrounds
  },
  typography: {
    fontSans: '"Plus Jakarta Sans", system-ui, sans-serif',
    fontMono: '"JetBrains Mono", monospace',
  },
  animation: {
    duration: 0.45,           // Standard PowerPoint-style reveal duration (seconds)
    stagger: 0.12,            // Stagger delay between sequential cards
    ease: [0.16, 1, 0.3, 1],  // Clean slide & reveal easing curve
  }
};

export default THEME;
