import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'xxx/x'
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    // StrictMode 该标签无实际用途 就是检查代码用错的地方 例如不推荐的 API 过时的代码等
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
