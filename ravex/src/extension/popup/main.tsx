import { createRoot } from 'react-dom/client';
import '@fontsource-variable/inter/index.css';
import '../../styles/global.css';
import PopupApp from './App';

const mountPoint = document.getElementById('ravex-popup-root');

if (mountPoint) {
  createRoot(mountPoint).render(<PopupApp />);
} else {
  console.error('Ravex popup root element not found');
}
