import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/money">记账页面</Link>
            </li>
            <li>
              <Link to="/tags">标签页</Link>
            </li>
            <li>
              <Link to="/statistics">统计页</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/money" element={<Money/>}/>
          <Route path="/tags" element={<Tags/>}/>
          <Route path="/statistics" element={<Statistics/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function Statistics() {
  return <h2>统计页面</h2>;
}

function Money() {
  return <h2>记账页面</h2>;
}

function Tags() {
  return <h2>标签页面</h2>;
}

export default App;