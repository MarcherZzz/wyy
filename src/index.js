// 引入核心库
import React from 'react';
// 引入DOM库
import ReactDOM from 'react-dom';
// 全局引入rem.js文件
import './assets/js/rem'
// 引入重置样式
import './assets/css/reset.css'
// 引入要渲染的组件
import App from './App';
// 引入路由模式，让浏览器解析路由所有属性标签
import {BrowserRouter} from 'react-router-dom';
// 执行渲染函数 把组件名称当做标签去渲染
ReactDOM.render(
    <BrowserRouter>
    <React.StrictMode>
        <App/>
    </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
)