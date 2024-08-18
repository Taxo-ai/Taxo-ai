function FORMATRESPONSE(str) {  
    const regex = /(\w+)=('[^']*')/g;  
    const matches = str.matchAll(regex);  
    const result = {};  
    for (const match of matches) {  
        result[match[1]] = match[2].slice(1, -1); // 去掉单引号  
    }  
    return result;  
}  

module.exports.FORMATRESPONSE = FORMATRESPONSE;