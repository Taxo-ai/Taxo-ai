// FILENAME : server.js
// STATUS   : DEVELOPING

// 导入必要的模块
const express = require('express');
const path = require('path');
const COZE = require('./Controller/coze'); // 导入包含 POST_P_NAME 的模块

// 创建 Express 应用
const app = express();
const port = 80; // 使用端口 80

// 设置静态文件目录
app.use(express.static(path.join(__dirname, 'public')));

// 定义根路由，返回 HTML 页面
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 设置 /query 路由，处理 AJAX 请求
app.get('/query', (req, res) => {
  const query = req.query.query;
  COZE.POST_P_NAME(query)
    .then(response => {
      res.json(response);
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

// 启动服务器
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
