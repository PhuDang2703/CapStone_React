import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store';

//provider giúp kết nối với redux
import { Provider } from 'react-redux';
import 'antd/dist/reset.css';

//Cấu hình realtime (websocket với signalR)
import * as signalR from '@aspnet/signalr'
import { DOMAIN } from './util/setting/config';

//React Slick 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

//Đoạn code để kết nối đến server lắng nghe sự kiện từ server
export const connection = new signalR.HubConnectionBuilder().withUrl(`${DOMAIN}/DatVeHub`).configureLogging(signalR.LogLevel.Information).build();

connection.start().then(()=>{
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
}).catch(error=>{
  console.log(error)
})



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
