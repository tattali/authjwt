import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

import './styles/app.scss';

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
