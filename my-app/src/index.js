import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import './SideBar.css';
import './SideBarRow.css';
import './Recommended.css';
import './VideoCard.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Header';
import SideBar from './SideBar';
import Recommended from './Recommended';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<Header/>
   <div className='Page'>

    <div className="grid-container">
        <div className="sidebar-column">
          <SideBar />
        </div>
        <div className="recommended-column">
          <Recommended />
        </div>
      </div>
  
   </div>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
