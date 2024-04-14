// IMPORT NECESSARY PACKAGE
const axios = require('axios');  
// DEFINE NECESSARY REQUEST
const apiUrl = 'https://api.coze.com/open_api/v2/chat';  
const personalAccessToken = '{{pat_zI8DwjQpalyA0pGNdVAGlaxCt3nhOkuyFHri9eq7nhUc1aAxAu8Kg7TRMICkr1af}}'; // 个人访问令牌  
const botId = '{{7341645385049341953}}'; // bot ID  
const headers = {  
    'Authorization': `Bearer ${personalAccessToken}`,  
    'Content-Type': 'application/json',  
    'Accept': '*/*',  
    'Host': 'api.coze.com',  
    'Connection': 'keep-alive'  
};  
axios.post(apiUrl, {  
    bot_id: botId,  
    query: '{{橙子味巧克力蛋糕}}',  
    stream: false  
}, { headers: headers })  
.then(response => {  
    console.log('Response data:', response.data);  
    return response;  
})
.catch(error => {  
    console.error('Error:', error);  
    throw error; // 重新抛出错误以便调用者可以处理它  
}); 