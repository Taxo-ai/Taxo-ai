// IMPORT NECESSARY PACKAGE
const express = require('express');  
const bodyParser = require('body-parser');  
const multer = require('multer');  
const fs = require('fs');  
const https = require('https');  
const http = require('http');  
const path = require('path'); 
const COZE = require('./coze');
const FORMATRESPONSE = require('./FormatResponse');

// DEFINE SERVER
const CA = {  
    key: fs.readFileSync('./Cert/server.key'),  
    cert: fs.readFileSync('./Cert/server.pem')  
}; // CA FILE PATH (MAYBE IMPORTANT)
const SERVER = express(); 
const HTTPSERVER = http.createServer(SERVER);  
const HTTPSSERVER = https.createServer(CA, SERVER); 
const PUBLICPATH = path.join(__dirname, 'public');  
HTTPSERVER.listen(80, () => {  
  console.log('HTTP Server is running on port 80');  
}); // NEW HTTP SERVER ON PORT 80  
HTTPSSERVER.listen(443, () => {  
  console.log('HTTPS Server is running on port 443');  
}); // NEW HTTP SERVER ON PORT 443 
SERVER.use(bodyParser.urlencoded({ extended: true }));  
SERVER.use(bodyParser.json());
SERVER.use(express.static(PUBLICPATH));  
  
// 设置根路径的路由，默认返回 index.html  
SERVER.get('/', (req, res) => {  
    res.sendFile(path.join(publicPath, 'index.html'));  
});
// POST P_NAME 
SERVER.post('/P_NAME', (req, res) => {  
    const P_NAME = req.body.INPUT_P_NAME; // <input name="INPUT_P_NAME" />
    COZE.POST_P_NAME(P_NAME)
        .then(response => {
            // 如果请求成功，将响应发送回客户端
            res.json(response);
        })
        .catch(error => {
            // 如果请求失败，发送错误信息回客户端
            res.status(500).json({ error: error.message });
        });
});




