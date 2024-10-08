// FILENAME : coze.js
// STATUS   : DONE,DO-NOT-CHANGE-UNLESS-NECESSARY

// IMPORT NECESSARY PACKAGE
const axios = require('axios');  
// DEFINE NECESSARY REQUEST
const apiUrl = 'https://api.coze.com/open_api/v2/chat';  
const personalAccessToken = '{AccessToken}'; // 个人访问令牌  
const botId = '7341645385049341953'; // bot ID  
const headers = {  
    'Authorization': `Bearer ${personalAccessToken}`,  
    'Content-Type': 'application/json',  
    'Accept': '*/*',  
    'Host': 'api.coze.com',  
    'Connection': 'keep-alive'  
};  

// DEFINE API REQUEST FUNCTIONS
// POST P_NAME
function POST_P_NAME(query) {  
    // 生成10位随机数 (Generate 10-digit random numbers)
    const generateRandomUserId = (length) => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    };

    const randomUserId = generateRandomUserId(10); // 生成10位随机数 (Generate 10-digit random numbers0)

    return axios.post(apiUrl, {  
        bot_id: botId,  
        user: randomUserId, // 使用生成的随机数 (Use the generated random number)
        query: query,  
        stream: false  
    }, { headers: headers })  
    .then(response => {  
        // 使用正则表达式提取最后一行内容 (Use a regular expression to extract the last line of content)
        const answerContent = response.data.messages
            .filter(message => message.type === "answer")
            .map(message => message.content)
            .join('\n'); // 将多行内容连接成一个字符串 (Concatenate multiple lines into a single string)
        const lastLineRegex = /\{([^}]*)\}$/; // 匹配最后一行内容被大括号包裹的情况 (Matches the case where the last line is wrapped in curly braces0)
        const match = lastLineRegex.exec(answerContent);
        const lastLine = match ? match[1] : answerContent; // 如果找到匹配项，则获取匹配内容，否则使用原始内容 (If a match is found, the match is obtained, otherwise the original content is used)
        console.log(lastLine);  
        return lastLine;  
    })
    .catch(error => {  
        console.error('Error:', error);  
        throw error; // 重新抛出错误以便调用者可以处理它  (Re-throw the error so that the caller can handle it  )
    });  
}


module.exports.POST_P_NAME = POST_P_NAME;


