/** 
 * @author: shwbubbly 
 * @since: 2019-05-28 16:26:55 
 * @desc: 检测输入内容，获取需要筛选的Unicode表 
 */

const fse = require('fs-extra');
module.exports = async function(path) {
    const fileContent = await fse.readFile(path);
    return fileContent
}

