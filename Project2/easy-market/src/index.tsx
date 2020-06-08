import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
// 引入antd全局样式
// import 'antd-mobile/dist/antd-mobile.css';
import styles from './index.module.scss';
import App from './App';


ReactDOM.render(
  <Suspense fallback={<div>Loading...</div>}>
    <div className={styles.cls1}>
      <App />
      <p className="cls2"></p>
    </div>
  </Suspense>,
  document.getElementById('root')
);