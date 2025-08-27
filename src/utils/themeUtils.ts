import { personalData } from '../data/personalData';

export const applyTheme = () => {
  const root = document.documentElement;
  const { mode, colors, fonts } = personalData.theme;

  // Apply theme mode
  if (mode === 'light') {
    root.style.setProperty('--bg-primary', '#ffffff');
    root.style.setProperty('--bg-secondary', '#f8f9fa');
    root.style.setProperty('--bg-tertiary', '#e9ecef');
    root.style.setProperty('--bg-card', 'rgba(255, 255, 255, 0.8)');
    root.style.setProperty('--bg-glass', 'rgba(255, 255, 255, 0.1)');
    root.style.setProperty('--text-primary', '#212529');
    root.style.setProperty('--text-secondary', '#6c757d');
    root.style.setProperty('--text-muted', '#adb5bd');
    root.style.setProperty('--border-primary', 'rgba(0, 0, 0, 0.1)');
    root.style.setProperty('--border-secondary', 'rgba(0, 0, 0, 0.05)');
    root.style.setProperty('--shadow-primary', 'rgba(0, 0, 0, 0.1)');
    root.style.setProperty('--navbar-bg', 'rgba(255, 255, 255, 0.8)');
    root.style.setProperty('--navbar-bg-scrolled', 'rgba(255, 255, 255, 0.95)');
  } else {
    // Dark mode (default)
    root.style.setProperty('--bg-primary', '#0a0a0a');
    root.style.setProperty('--bg-secondary', '#111111');
    root.style.setProperty('--bg-tertiary', '#1a1a1a');
    root.style.setProperty('--bg-card', 'rgba(26, 26, 26, 0.8)');
    root.style.setProperty('--bg-glass', 'rgba(26, 26, 26, 0.1)');
    root.style.setProperty('--text-primary', '#ffffff');
    root.style.setProperty('--text-secondary', '#b3b3b3');
    root.style.setProperty('--text-muted', '#808080');
    root.style.setProperty('--border-primary', 'rgba(255, 255, 255, 0.1)');
    root.style.setProperty('--border-secondary', 'rgba(255, 255, 255, 0.05)');
    root.style.setProperty('--shadow-primary', 'rgba(0, 0, 0, 0.3)');
    root.style.setProperty('--navbar-bg', 'rgba(0, 0, 0, 0.8)');
    root.style.setProperty('--navbar-bg-scrolled', 'rgba(0, 0, 0, 0.95)');
  }

  // Apply custom colors
  root.style.setProperty('--accent-primary', colors.primary);
  root.style.setProperty('--accent-secondary', colors.secondary);
  root.style.setProperty('--accent-tertiary', colors.tertiary);
  root.style.setProperty('--accent-gradient', `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 50%, ${colors.tertiary} 100%)`);
  root.style.setProperty('--shadow-accent', `${colors.primary}33`); // 20% opacity

  // Apply custom fonts
  root.style.setProperty('--font-primary', fonts.primary);
  root.style.setProperty('--font-secondary', fonts.secondary);
};

export const getThemeColors = () => {
  return personalData.theme.colors;
};

export const getThemeMode = () => {
  return personalData.theme.mode;
};

// Function to load Google Fonts dynamically
export const loadGoogleFonts = () => {
  const { fonts } = personalData.theme;
  
  // Create font loading link
  const link = document.createElement('link');
  link.rel = 'preconnect';
  link.href = 'https://fonts.googleapis.com';
  document.head.appendChild(link);
  
  const link2 = document.createElement('link');
  link2.rel = 'preconnect';
  link2.href = 'https://fonts.gstatic.com';
  link2.crossOrigin = 'anonymous';
  document.head.appendChild(link2);
  
  // Build Google Fonts URL
  const fontFamilies = [
    `${fonts.primary}:wght@300;400;500;600;700`,
    `${fonts.secondary}:wght@400;500;600`
  ].join('&family=');
  
  const fontLink = document.createElement('link');
  fontLink.href = `https://fonts.googleapis.com/css2?family=${fontFamilies}&display=swap`;
  fontLink.rel = 'stylesheet';
  document.head.appendChild(fontLink);
};
